
import { css, l, type ClassComponent, type Component } from ".././lib";


export class FlexContainer implements ClassComponent<HTMLDivElement> {
    constructor (
        readonly elements: Component<HTMLElement>[]
    ) {}
    mount(): HTMLDivElement {
        return l('div', _ => {
            css`
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 20px;
                `.apply(_)

            this.elements.forEach(p => {l(_, p)})
    })
    }
}