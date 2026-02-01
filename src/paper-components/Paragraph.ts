import { css, l, type ClassComponent, type Component } from "../lib";


export class Paragraph implements ClassComponent<HTMLDivElement> {
    constructor (
        readonly header: string,
        readonly args: Component<HTMLElement>[]
    ) {}
    mount(): HTMLDivElement {
        return l('div', _ => {
            css`
                display: flex;
                flex-direction: column;
                gap: 20px;
                `.apply(_)
            
            l(_, 'p', _ => {
                css`
                    font-family: "Golos Text", regular;
                    font-weight: 450;
                    line-height: 1.2;
                    letter-spacing: 0.01em;
                    font-size: 36px;
                    color: var(--base-color-dark-green);`.apply(_)
                _.innerText = this.header
            })

            this.args.forEach(a => l(_, a))
    })
}
}