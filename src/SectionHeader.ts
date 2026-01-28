import { css, l, type ClassComponent } from "./lib";

export class SectionHeader implements ClassComponent<HTMLDivElement> {

    constructor(readonly text: string) { }

    mount(): HTMLDivElement {
        return l('h2', _ => {
            css`
                text-align: right;
                font-family: Cormorant Garamond;
                font-size: clamp(24px, 5vw, 60px);
                font-weight: 300;
            `.apply(_)
            css`
                @media (max-width: 550px) {
                    .this-class {
                        text-align: center;
                    }
                }
            `.apply(_)
            _.innerText = this.text
        })
    }
}