import { css, l, type ClassComponent, type Component } from ".././lib";


export class SimpleText implements ClassComponent<HTMLParagraphElement> {
    constructor (
        readonly text: string
    ) {}
    mount(): HTMLParagraphElement {
        return l('p', _ => {
            css`
                font-family: "Golos Text", regular;
                font-weight: 200;
                line-height: 1.4;
                font-size: 21px;
                color: var(--base-color-text);
                `.apply(_)
            _.innerText = this.text
    })
}
}