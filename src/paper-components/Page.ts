
import { css, l, type ClassComponent } from "../lib";


export class Page implements ClassComponent<HTMLDivElement> {
    constructor (
        readonly header: string,
        readonly content: (_: HTMLDivElement) => void
    ) {}
    mount(): HTMLDivElement {
        return l('div', _ => {
            css`
                max-width: 800px;

                padding-bottom: 50px;
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                gap: 60px;
                `.apply(_)

            l(_, 'p', _ => {
                css`
                    font-family: "Cormorant Garamond", regular;
                    font-size: 60px;
                    font-weight: 300;
                    line-height: 1.2;
                    color: var(--base-color-black);

                    `.apply(_)
                _.innerText = this.header.toUpperCase()
            })

            this.content(_)
    })
    }
}