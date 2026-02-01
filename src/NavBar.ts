import { css, l, lz, Zone, type ClassComponent } from "./lib"
import { MenuButton } from "./MenuButton"


export class NavBar implements ClassComponent<HTMLDivElement> {
    public isDesktop: boolean = true;
    public moduleTopicNav: HTMLDivElement | null = null
    public selfZone: Zone | null = null
    
    mount(): HTMLDivElement {
        return lz('div', (container, z) => {
            this.selfZone = z

            css`
                background: white;
                display: flex;
                flex-direction: column;`.apply(container)

            if (!this.isDesktop) {
                css`
                    position: sticky;
                    top: 0;`.apply(container)
            }

            let headerContainer = l('div', _ => {
                css`
                    display: flex;`.apply(_)
            })

            let sqlGuide = l('div', _ => {
                css`
                    padding-right: 75px;
                    font-family: "Cormorant Garamond", light;
                    font-size: 39px;
                    color: var(--base-color-black);
                `.apply(_)
                _.innerHTML = 'SQL Guide'
            })

            let defaultButtons = l('div', _ => {
                css`
                    &>a {
                        font-size: 20px;
                        text-decoration: none;
                        font-family: "Golos Text", regular;
                        color: var(--base-color-text);
                    }
                    &>a:hover, &>a:active {
                        color: var(var(--base-color-dark-green));
                    }
                `.apply(_)

                l(_, 'a', _ => {
                    _.href = '#/about'
                    _.innerText = 'О курсе'
                })
                l(_, 'a', _ => {
                    _.href = '#/modules'
                    _.innerText = 'Список модулей'
                })
            })

            if (this.isDesktop) {
                css`
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 37px;`.apply(defaultButtons)

                l(container, headerContainer)
                l(headerContainer, sqlGuide)                
                l(headerContainer, defaultButtons)
            } else {
                css`
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 15px;
                    gap: 10px;`.apply(defaultButtons)

                let expand = l('div', _ => {
                    css`
                        margin-left: 30px;
                        padding-top: 15px;
                        display: none;
                        flex-direction: column;
                        gap: 10px;`.apply(_)
                })

                l(expand, defaultButtons)

                if (this.moduleTopicNav != null) {
                    l(expand, this.moduleTopicNav)
                }

                let menuButton = new MenuButton(expand).mount()
                css`
                    margin-left: auto;
                    `.apply(menuButton)

                l(headerContainer, sqlGuide)
                l(headerContainer, menuButton)
                l(container, headerContainer)
                l(container, expand)
            }
    })
}
}