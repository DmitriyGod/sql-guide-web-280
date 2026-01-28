import { css, l, type ClassComponent } from "./lib";
import { SectionHeader } from "./SectionHeader";

class Stage implements ClassComponent<HTMLDivElement> {

    constructor(
        readonly n: string,
        readonly text: string
    ) { }

    mount(): HTMLDivElement {
        return l('div', _ => {
            css`
                border-radius: 12px;
                background-color: var(--base-color-backgound-gray);
                height: clamp(252px, 38.1vw, 467px);
                max-width: 360px;
                min-width: max(265px, min(332px, calc(100vw - 20px - 30px - 30px)));
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: clamp(20px, 2.66vw, 32px);
                &>p { margin: 0; }
            `.apply(_)

            l(_, 'p', _ => {
                css`
                    color: var(--base-color-dark-green);
                    font-family: Golos Text;
                    font-weight: 600;
                    font-size: clamp(18px, 2vw, 24px);;
                `.apply(_)
                _.innerText = this.text
            })
            l(_, 'p', _ => {
                css`
                    font-size: 36px;
                    font-family: Cormorant Garamond;
                `.apply(_)
                _.innerText = this.n
            })
        })
    }
}

export class WorkStages implements ClassComponent<HTMLDivElement> {
    mount(): HTMLDivElement {
        return l('div', _ => {
            // FIXME: use gap instead of margin-top
            css`
                display: flex;
                flex-direction: column;
                gap: clamp(32px, 5.33vw, 64px);
            `.apply(_)
            _.id = "project_stages"
            l(_, new SectionHeader('ЭТАПЫ РАБОТЫ'))
            l(_, 'div', _ => {
                css`
                    display: flex;
                    gap: 20px;
                    overflow-x: auto;
                    scrollbar-width: thin;
                `.apply(_)

                l(_, new Stage('I', 'ОПРЕДЕЛИМ ЦЕЛИ И МЕТРИКИ ПРОЕКТА, СОГЛАСУЕМ ФОРМАТ РАБОТЫ'))
                l(_, new Stage('II', 'ПОДГОТОВИМ АРХИТЕКТУРНЫЙ ПРОЕКТ И ОЦЕНКУ ТРУДОЗАТРАТ'))
                l(_, new Stage('III', 'РЕШИМ ВАШУ ЗАДАЧУ ТОЧНО В СРОК И БЮДЖЕТ'))
                l(_, new Stage('IV', 'ОРГАНИЗУЕМ ВВОД В ЭКСПЛУАТАЦИЮ И СОПРОВОЖДЕНИЕ ПРОДУКТА'))
            })
        })
    }
}