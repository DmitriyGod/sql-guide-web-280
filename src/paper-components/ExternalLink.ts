
import { css, l, type ClassComponent } from ".././lib";


export class ExternalLink implements ClassComponent<HTMLAnchorElement> {
    constructor (
        readonly text: string,
        readonly href: string
    ) {}
    mount(): HTMLAnchorElement {
        return l('a', _ => {
            css`
                text-decoration: none;
                `.apply(_)
            
            _.href = this.href
            _.target = '_blank'

            l(_, 'div', _ => {
                css`
                    display: flex;
                    gap: 4px;`.apply(_)
                l(_, 'div', _ => {
                    css`
                        height: 24px;
                        width: 24px;
                        background-image:  url('data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6H18M18 6V18M18 6L6.85714 17.1429" stroke="%232ACBB0" stroke-width="2"/></svg>');
                        `.apply(_)
                })

                l(_, 'p', _ => {
                    css`
                        font-family: "Golos Text", regular;
                        font-size: 21px;
                        font-weight: 450;
                        line-height: 1.5;
                        color: var(--base-color-ligth-green);`.apply(_)

                    _.innerText = this.text
                })
            })

        })
    }
}