import { linkToPresentation } from "./constants";
import { css, l, type ClassComponent } from "./lib";

export class Footer implements ClassComponent<HTMLDivElement> {
    mount(): HTMLDivElement {
        return l('div', _ => {
            css`
                margin-top: clamp(90px, 16.66vw, 200px);
                margin-bottom: clamp(45px, 8.33vw, 100px);
                padding-top: 20px;
                border-top: 1px solid #eee;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                justify-content: space-around;
                &>* {
                    padding-left: 12px;
                    padding-right: 12px;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    flex-shrink: 0;
                }
            `.apply(_)

            l(_, 'div', _ => {
                css`
                    display: flex;
                    align-items: center;
                `.apply(_)
                l(_, 'div', _ => {
                    css`
                        width: clamp(24px, 2.66vw, 32px);
                        height: clamp(24px, 2.66vw, 32px);
                        background-size: contain;
                        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M18.6693 28.668H13.3359C8.95327 28.668 6.76127 28.668 5.28527 27.4573C5.01547 27.2358 4.76806 26.9884 4.5466 26.7186C3.33594 25.2413 3.33594 23.052 3.33594 18.668C3.33594 14.2853 3.33594 12.0933 4.5466 10.6173C4.76806 10.3475 5.01547 10.1001 5.28527 9.87864C6.7626 8.66797 8.95194 8.66797 13.3359 8.66797H18.6693C23.0533 8.66797 25.2439 8.66797 26.7199 9.87864C26.9897 10.1001 27.2371 10.3475 27.4586 10.6173C28.6693 12.0933 28.6693 14.284 28.6693 18.668C28.6693 23.052 28.6693 25.2426 27.4586 26.7186C27.2371 26.9884 26.9897 27.2358 26.7199 27.4573C25.2439 28.668 23.0533 28.668 18.6693 28.668Z" stroke="%232ACBB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.33594 19.334V14.0007C3.33594 8.97265 3.33594 6.45798 4.8986 4.89665C6.46127 3.33532 8.9746 3.33398 14.0026 3.33398H18.0026C23.0306 3.33398 25.5453 3.33398 27.1066 4.89665C28.6679 6.45932 28.6693 8.97265 28.6693 14.0007V19.334M20.0026 19.334C20.0026 19.334 17.0559 23.334 16.0026 23.334C14.9493 23.334 12.0026 19.334 12.0026 19.334M16.0026 22.6673V14.0007" stroke="%232ACBB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
                    `.apply(_)
                })
                l(_, 'a', _ => {
                    css`
                        margin-left: clamp(6px, 1.33vw, 16px);
                        font-size: clamp(18px, 2vw, 24px);
                        color: var(--base-color-ligth-green);
                        text-decoration: none;
                    `.apply(_)

                    _.innerText = 'Скачать презентацию команды'
                    _.href = linkToPresentation
                    _.download = "Web 2.80 Презентация"
                })
            })

            l(_, 'span', _ => {
                css`
                    font-size: clamp(14px, 1.5vw, 18px);
                `.apply(_)
                _.innerText = 'WEB 2.80, 2025'
            })

            l(_, 'div', _ => {
                css`
                    display: flex;
                    gap: 20px;
                    font-size: clamp(14px, 4vw, 24px);
                    color: #001F19;
                `.apply(_)
                l(_, 'span', _ => { _.innerText = 'welcome@web280.ru' })
                l(_, 'span', _ => { _.innerText = '+7 913 610 67 42' })
            })
        })
    }
}