import { defineConfig } from 'vite'
import path from 'node:path';
import fs from 'node:fs';

const fileRegex = /\.(ts)$/
const cssExprRegex = /css`([^`]*)`/gs
const cssPropertiesEntryRegex = /^\s*[A-Za-z-_0-9]+\s*:/
const cssPropertiesEntryRegex2 = /^\s*&/

function formatImportPath(importPath) {
    return importPath.replaceAll(path.sep, path.posix.sep)
}

function myPlugin() {
    console.log('init')
    let counter = 0

    return {
        name: 'transform-file',

        transform(src, id) {
            if (fileRegex.test(id)) {
                // FIXME: починить this-class

                const xxx = path.join(process.cwd(), '.css', path.relative(path.join(process.cwd(), 'src'), path.join(path.dirname(id), path.basename(id, '.ts') + '.css')))

                const yyy = formatImportPath(path.join(path.relative(path.dirname(id), path.dirname(xxx)), path.basename(id, '.ts') + '.css'))
                
                console.log(xxx)
                console.log(id)
                console.log(yyy)

                const dirName = path.dirname(id);
                const baseName = path.basename(id, '.ts');

                const imports = []
                const cssBlocks = []

                const newCode = (src).replace(cssExprRegex, (_, cssCode) => {
                    const classId = counter++;
                    const className = '.g' + classId;

                    const processed =
                        (
                            cssPropertiesEntryRegex.test(cssCode) ||
                            cssPropertiesEntryRegex2.test(cssCode)
                        )
                            ? `${className} {\n${cssCode}\n}`
                            : cssCode.replace('.this-class', className);


                    cssBlocks.push(processed)
                    return `new Css(${classId})`
                })

                if (cssBlocks.length != 0)
                    imports.push(yyy)

                fs.mkdirSync(path.dirname(xxx), { recursive: true })
                fs.writeFileSync(
                    xxx, cssBlocks.join('\n')
                )
                let libImport = formatImportPath(path.relative(dirName, path.join(process.cwd(), 'src', 'lib.ts')))
                if (!libImport.startsWith('..')) libImport = './' + libImport

                const withImports =
                    (cssBlocks.length == 0 ? '' : `import { Css } from "${libImport}";\n`) +
                    imports.map(i => `import "./${i}";`).join('\n') + '\n'
                    + newCode

                return {
                    code: withImports, map: null
                }
            }
        },
    }
}

export default defineConfig({
    build: { sourcemap: true },
    plugins: [myPlugin()],
    server: {
        proxy: {
            '/api': 'http://localhost:9966',
            '/images': 'http://localhost:9966',
        },
        watch: {
            usePolling: true
          }
    }
})