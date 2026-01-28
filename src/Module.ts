import { css, l, type ClassComponent } from "./lib";
import { ModuleNav, type ModuleTopicNav } from "./ModuleNav";
import type { Page } from "./Page";


export class Module implements ClassComponent<HTMLDivElement> {
    constructor (
        readonly moduleName: string,
        readonly subModules: ModuleTopicNav[],
        readonly page: () => Promise<Page>,
    ) {}
    mount(): HTMLDivElement {
        return l('div', _ => {
            css`
                display: flex;
                gap: 143px;`.apply(_)
            
            l(_, new ModuleNav(this.moduleName, this.subModules))
            
            this.page().then(p => l(_, p))
    })
}
}