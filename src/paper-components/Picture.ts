import { css, l, type ClassComponent } from ".././lib";


export class Picture implements ClassComponent<HTMLImageElement> {
    constructor (
        readonly src: string
    ) {}
    mount(): HTMLImageElement {
        return l('img', _ => {
            css`
                
                `.apply(_)

            _.src = this.src
    })
    }
}