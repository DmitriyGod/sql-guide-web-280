import { linkToPresentation } from "./constants";
import { css, l, type ClassComponent } from "./lib";

class DescriptionPanel implements ClassComponent<HTMLDivElement> {
    constructor(readonly number: string, readonly title: string, readonly text: string) { }
    mount(): HTMLDivElement {
        return l('div', _ => {
            css`
                display: flex;
                flex-direction: column;
                row-gap: clamp(40px, 8.34vw, 102px);
                background-color: #F7F7F7;
                padding-top: clamp(16px, 2vw, 24px);
                padding-right: clamp(24px, 2.5vw, 30px);
                padding-bottom: clamp(30px, calc(60px - 2.5vw), 40px);
                padding-left: clamp(24px, 2.5vw, 30px);
                min-width: max(265px, min(465px, calc(100vw - 20px - 30px - 30px)));
                max-width: 465px;
                flex: 1 0 33%;
                border-radius: 10px;
            `.apply(_)
            l(_, 'p', _ => {
                css`
                    font-weight: 300;
                    font-size: 36px;
                    line-height: 1.2;
                    font-family: Cormorant Garamond, sans-serif;
                `.apply(_)
                _.innerText = this.number
            })
            l(_, 'div', _ => {
                css`
                    display: flex;
                    flex-direction: column;
                    row-gap: 16px;
                    font-family: Golos Text, sans-serif;
                `.apply(_)
                l(_, 'p', _ => {
                    css`
                        color: #005143;
                        font-weight: 600;
                        font-size: clamp(18px, 2vw, 24px);
                        line-height: 1.24;
                        text-transform: uppercase;
                    `.apply(_)
                    _.innerText = this.title
                })
                l(_, 'p', _ => {
                    css`
                        color: #48514F;
                        font-size: clamp(14px, 1.5vw, 18px);
                        line-height: 1.30;
                    `.apply(_)
                    _.innerText = this.text
                })
            })
        })
    }

}

//TODO: add URL to Hyperlink
export class TitleAndDescription implements ClassComponent<HTMLDivElement> {
    mount(): HTMLDivElement {
        return l('div', _ => {
            css`
                display: flex;
                flex-direction: column;
                row-gap: clamp(40px, 8.34vw, 102px);
            `.apply(_)
            l(_, 'div', _ => {
                css`
                    display: flex;
                    flex-direction: column;
                    row-gap: 40px;
                `.apply(_)
                l(_, 'h1', _ => {
                    css`
                        color: #001F19;
                        font-weight: 300;
                        font-size: clamp(32px, 7vw, 83px);
                        line-height: 1.2;
                        font-family: Cormorant Garamond, sans-serif;
                        text-transform: uppercase;
                    `.apply(_)
                    _.innerText = 'MVP. ПРОМЫШЛЕННЫЕ СИСТЕМЫ. R&D. ИННОВАЦИОННОЕ ПО.\nWEB-РЕШЕНИЯ.'
                })
                l(_, 'div', _ => {
                    css`
                        display: flex;
                        flex-wrap: wrap;
                        gap: 20px;
                        font-weight: 500;
                        font-size: clamp(14px, 2vw, 24px);
                        font-family: Golos Text, sans-serif;
                    `.apply(_)
                    l(_, 'p', _ => {
                        css`
                            width: 473px;
                            color: #48514F;
                            line-height: 1.4;
                        `.apply(_)
                        _.innerText = 'Проектируем устойчивые системы\nи разрабатываем MVP точно в срок'
                    })
                    l(_, 'div', _ => {
                        css`
                            display: flex;
                            column-gap: 8px;
                            align-items: center;
                        `.apply(_)
                        l(_, 'div', _ => {
                            css`
                                width: 32px;
                                height: 32px;
                                background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M18.6693 28.668H13.3359C8.95327 28.668 6.76127 28.668 5.28527 27.4573C5.01547 27.2358 4.76806 26.9884 4.5466 26.7186C3.33594 25.2413 3.33594 23.052 3.33594 18.668C3.33594 14.2853 3.33594 12.0933 4.5466 10.6173C4.76806 10.3475 5.01547 10.1001 5.28527 9.87864C6.7626 8.66797 8.95194 8.66797 13.3359 8.66797H18.6693C23.0533 8.66797 25.2439 8.66797 26.7199 9.87864C26.9897 10.1001 27.2371 10.3475 27.4586 10.6173C28.6693 12.0933 28.6693 14.284 28.6693 18.668C28.6693 23.052 28.6693 25.2426 27.4586 26.7186C27.2371 26.9884 26.9897 27.2358 26.7199 27.4573C25.2439 28.668 23.0533 28.668 18.6693 28.668Z" stroke="%232ACBB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.33594 19.334V14.0007C3.33594 8.97265 3.33594 6.45798 4.8986 4.89665C6.46127 3.33532 8.9746 3.33398 14.0026 3.33398H18.0026C23.0306 3.33398 25.5453 3.33398 27.1066 4.89665C28.6679 6.45932 28.6693 8.97265 28.6693 14.0007V19.334M20.0026 19.334C20.0026 19.334 17.0559 23.334 16.0026 23.334C14.9493 23.334 12.0026 19.334 12.0026 19.334M16.0026 22.6673V14.0007" stroke="%232ACBB0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
                            `.apply(_)
                            css`
                                @media (max-width: 1200px) {
                                    .this-class {
                                        width: 24px;
                                        height: 24px;
                                        background-size: contain;
                                    }
                                }
                            `.apply(_)
                        })
                        l(_, 'a', _ => {
                            css`
                                color: var(--base-color-ligth-green);
                                line-height: 1.4;
                                text-decoration: none;
                            `.apply(_)
                            _.innerText = 'Скачать презентацию команды'
                            _.href = linkToPresentation
                            _.download = "Web 2.80 Презентация"
                        })
                    })
                })
            })
            l(_, 'div', _ => {
                css`    
                    display: flex;
                    gap: 20px;
                    overflow-x: auto;
                    scrollbar-width: thin;
                `.apply(_)
                l(_, new DescriptionPanel(
                    "I",
                    "Веб-сервисы, сайты, системы автоматизации и микросервисы",
                    "Учёт специфики MVP. Решение задач с соблюдением высоких стандартов проектирования и качества кода"
                ))
                l(_, new DescriptionPanel(
                    "II",
                    "Аудит архитектуры и кода",
                    "Независимая оценка архитектуры системы и кодовой базы позволит принять качественные решения р развитии продукта, определить проблемные точки, стратегию и тактику их устранения"
                ))
                l(_, new DescriptionPanel(
                    "III",
                    "Выделенная команда/ Retainer",
                    "Помощь в закрытии раунда развития проекта или инвестиций в сложных условиях"
                ))
            })
        })
    }
}