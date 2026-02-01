import { css, l, lz, type ClassComponent } from "./lib"


export class MenuButton implements ClassComponent<HTMLDivElement> {
    constructor(
        readonly expand: HTMLDivElement
    ) {}

    mount(): HTMLDivElement {
        return l('div', _ => {

            l(_, 'a', _ => {
                css`
                    box-shadow:inset 0px 1px 0px 0px var(--base-color-backgound-gray);
                    background:linear-gradient(to bottom, var(--base-color-backgound-gray) 5%, #f6f6f6 100%);
                    background-color:var(--base-color-backgound-gray);
                    border-radius:6px;
                    border:1px solid #dcdcdc;
                    display:inline-block;
                    cursor:pointer;
                    color:var(--base-color-black);
                    font-family:Arial;
                    font-size:18px;
                    padding:14px 14px;
                    text-decoration:none;
                    text-shadow:0px 1px 0px var(--base-color-backgound-gray);
                    
                    &>:hover {
                        background:linear-gradient(to bottom, #f6f6f6 5%, var(--base-color-backgound-gray) 100%);
                        background-color:#f6f6f6;
                    }
                    &>:active {
                        position:relative;
                        top:1px;
                    }
                    `.apply(_)

            _.innerText = 'Menu'

            _.onclick = () => {
                if (this.expand.style.display == 'none' || this.expand.style.display == '') {
                    this.expand.style.display = 'flex'
                } else {
                    this.expand.style.display = 'none'
                }
            }
            })
        })
}
}