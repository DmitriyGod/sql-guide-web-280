import imgAlexey from './images/Alexei.jpg';
import imgDmitry from './images/Dmitry.jpg';
import { css, l, type ClassComponent } from "./lib";
import { SectionHeader } from "./SectionHeader";

//TODO: add url to Hyperlink
class PersonPanel implements ClassComponent<HTMLDivElement> {
    constructor(
        readonly position: string,
        readonly name: string,
        readonly tags: string[][],
        readonly description: string[],
        readonly photoUrl: string,
        readonly cvUrl: string,
        readonly cvFileName: string
    ) { }
    mount(): HTMLDivElement {
        return l('div', _ => {
            css`    
                display: flex;
                flex-direction: column;
                row-gap: clamp(20px, 3.67vw, 44px);
                min-width: max(265px, min(449px, calc(100vw - 20px - 30px - 30px)));
                max-width: 710px;
                flex: 1 0 50%;
                font-family: Golos Text;
                p + p {
                    margin-top: clamp(8px, 0.83vw, 10px);
                }
            `.apply(_)
            l(_, 'div', _ => {
                css`
                    width: 100%;
                    border-radius: clamp(10px, 1.67vw, 20px);
                `.apply(_)
                l(_, 'img', _ => {
                    css`
                        max-width: 100%;
                        object-fit: cover;
                        border-radius: clamp(10px, 1.67vw, 20px);
                    `.apply(_)
                    _.alt = this.name
                    _.src = this.photoUrl
                })
            })
            l(_, 'div', _ => {
                css`    
                    display: flex;
                    flex-direction: column;
                    row-gap: clamp(16px, 3.33vw, 40px);
                `.apply(_)
                l(_, 'div', _ => {
                    css`
                        display: flex;
                        flex-direction: column;
                        row-gap: 20px;
                    `.apply(_)
                    l(_, 'div', _ => {
                        css`
                            display: flex;
                            flex-direction: column;
                            row-gap: 8px;
                        `.apply(_)
                        l(_, 'p', _ => {
                            css`
                                color: #48514F;
                                font-weight: 400;
                                font-size: clamp(12px, 1.5vw, 14px);
                                line-height: 1.3;
                            `.apply(_)
                            _.innerText = this.position
                        })
                        l(_, 'p', _ => {
                            css`
                                color: #005143;
                                font-weight: 700;
                                font-size: clamp(18px, 3.5vw, 42px);
                                line-height: 1.2;
                                text-transform: uppercase;
                            `.apply(_)
                            _.innerText = this.name
                        })
                    })
                    l(_, 'div', _ => {
                        css`
                            display: flex;
                            flex-direction: column;
                            gap: clamp(4px, 0.83vw, 10px);
                        `.apply(_)
                        this.tags.forEach(element => {
                            l(_, 'div', _ => {
                                css`
                                    display: flex;
                                    flex-wrap: wrap;
                                    gap: clamp(4px, 0.83vw, 10px);
                                `.apply(_)
                                element.forEach(element => {
                                    l(_, 'div', _ => {
                                        css`
                                            padding: clamp(8px, 0.83vw, 10px) clamp(10px, 1.67vw, 20px);
                                            background-color: #F7F7F7;
                                            border-radius: 6px;
                                        `.apply(_)
                                        l(_, 'p', _ => {
                                            css`
                                                color: #48514F;    
                                                font-weight: 500;
                                                font-size: clamp(14px, 1.5vw, 18px);
                                                line-height: 1.3;
                                            `.apply(_)
                                            _.innerText = element
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
                l(_, 'div', _ => {
                    css`
                        display: flex;
                        flex-direction: column;
                        row-gap: 40px;
                    `.apply(_)
                    l(_, 'div', _ => {
                        this.description.forEach(element => {
                            l(_, 'p', _ => {
                                css`
                                    color: #48514F;
                                    font-weight: 400;
                                    font-size: clamp(14px, 1.5vw, 18px);
                                    line-height: 1.3;
                                `.apply(_)
                                _.innerText = element
                            })
                        })
                    })

                    l(_, 'div', _ => {
                        css`
                            display: flex;
                            column-gap: 6px;
                            align-items: center;
                            padding-bottom: 20px;
                        `.apply(_)
                        css`
                            @media (max-width: 800px){
                                .this-class {
                                    display: none;
                                }
                            }
                        `.apply(_)
                        l(_, 'div', _ => {
                            css`
                                width: 24px;
                                height: 24px;
                                background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 6H18M18 6V18M18 6L6.85714 17.1429" stroke="%232ACBB0" stroke-width="2"/></svg>');
                            `.apply(_)
                        })
                        l(_, 'a', _ => {
                            css`
                                color: #2ACBB0;
                                font-weight: 500;
                                font-size: 18px;
                                text-decoration: none;
                            `.apply(_)
                            _.innerText = 'Смотреть CV'
                            _.href = this.cvUrl
                            _.download = this.cvFileName
                        })
                    })
                })
            })
        })
    }

}

export class KeyPeople implements ClassComponent<HTMLDivElement> {
    mount(): HTMLDivElement {
        return l('div', _ => {
            css`    
                display: flex;
                flex-direction: column;
                row-gap: clamp(40px, 6.67vw, 80px);
            `.apply(_)
            _.id = "mains"
            l(_, new SectionHeader('КЛЮЧЕВЫЕ ЛИЦА'))
            l(_, 'div', _ => {
                css`
                        display: flex;
                        column-gap: 20px;
                        overflow-x: auto;
                        scrollbar-width: thin;
                    `.apply(_)
                l(_, new PersonPanel(
                    "Лидер команды, технический директор",
                    "Алексей Городецкий",
                    [
                        ["Руководство командой", "Анализ требований"],
                        ["Проектирование ПО", "Подготовка ТЗ"]
                    ],
                    [
                        "Эксперт в JVM-стеке, WEB-технологиях и языках программирования, реализовывал коммерческие компиляторы и интерпретаторы.",
                        "14+ лет опыта разработки, проектирования систем и решения бизнес-задач с помощью технологий. Умеет принимать оптимальные по затратам технологические решения."
                    ],
                    imgAlexey,
                    new URL('../public/pdf/CV_Городецкий_Алексей.pdf', import.meta.url).href,
                    'CV_Городецкий_Алексей.pdf'
                ))
                l(_, new PersonPanel(
                    "Глава менеджеров и HR",
                    "Дмитрий Городецкий",
                    [
                        ["Сопровождение проектов", "Выстраивание процессов"],
                        ["Проектирование баз данных", "Анализ требований"]
                    ],
                    [
                        "Больше 4 лет совмещает менеджмент и разработку, аспирант математического факультета.",
                        "Отвечает за реализацию бэкенд и фронтенд решений. Эксперт в алгоритмах и БД, выстраивает процессы в команде, ведёт переговоры, занимается ассесментом и рекрутингом разработчиков."
                    ],
                    imgDmitry,
                    new URL('../public/pdf/CV_Городецкий_Дмитрий.pdf', import.meta.url).href,
                    'CV_Городецкий_Дмитрий.pdf'
                ))
            })
        })
    }
}