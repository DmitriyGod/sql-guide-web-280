
import { l, type ClassComponent } from "./lib";


export class Page implements ClassComponent<HTMLDivElement> {
    constructor (
        readonly header: string,
        readonly content: HTMLDivElement
    ) {}
    mount(): HTMLDivElement {
        return l('div', _ => {
            l(_, 'h2', _ => {
                _.innerText = this.header
            })

            l(_, this.content)
    })
    }
}