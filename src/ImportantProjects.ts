import { css, l, type ClassComponent } from "./lib";
import { SectionHeader } from "./SectionHeader";

class ImportantProjectPanel implements ClassComponent<HTMLDivElement> {
    constructor(
        readonly title: string,
        readonly description: string,
        readonly taskDescription: string,
        readonly gap: number,
        readonly tags: string[],
        readonly results: string[],
        readonly metrics: [string, string][],
        readonly whatDone: boolean
    ) { }
    mount(): HTMLDivElement {
        return l('div', _ => {
            css`
                display: flex;
                gap: 20px;
                &>div{
                    min-width: max(265px, min(362px, calc(100vw - 20px - 30px - 30px)));;
                    max-width: 466px;
                }
            `.apply(_)
            css`
                @media (max-width: 1200px)
                {
                    .this-class{
                        flex-direction: column;
                        &>div{
                            flex: 0 0 0;
                        }
                    }         
                }
            `.apply(_)
            l(_, 'div', _ => {
                css`
                    display: flex;
                    flex-direction: column;
                    row-gap: clamp(10px, 1.66vw, 20px); 
                `.apply(_)
                l(_, 'p', _ => {
                    css`
                        color: #005143;    
                        font-weight: 700;
                        font-size: clamp(18px, 3.5vw, 42px);            
                        text-transform: uppercase;
                        line-height: 1.2;
                    `.apply(_)
                    _.innerText = this.title
                })
                l(_, 'p', _ => {
                    css`
                        color: #48514F;    
                        font-weight: 400;
                        font-size: clamp(14px, 1.5vw, 18px);
                        line-height: 1.3;
                    `.apply(_)
                    _.innerText = this.description
                })
            })
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
                        row-gap: clamp(20px, calc(11.66vw - 50px), 90px);
                        justify-content: space-between;
                        background-color: #F7F7F7;
                        padding: 24px 30px 30px 30px;
                        border-radius: 10px;
                    `.apply(_)
                    l(_, 'p', _ => {
                        css`
                            color: #005143;    
                            font-weight: 500;
                            font-size: clamp(12px, 1.16vw, 14px);
                        `.apply(_)
                        _.innerText = 'Проблема/Задача'
                    })
                    l(_, 'p', _ => {
                        css`
                            color: #001F19;    
                            font-weight: 400;
                            font-size: clamp(14px, 1.5vw, 18px);
                            line-height: 1.2;
                        `.apply(_)
                        _.innerText = this.taskDescription
                    })
                })
                l(_, 'div', _ => {
                    css`
                        display: flex;
                        flex-wrap: wrap;
                        gap: 10px;
                    `.apply(_)
                    this.tags.forEach(element => {
                        l(_, 'div', _ => {
                            css`
                                padding: 10px 20px;
                                background-color: #ECFBF9;
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
                    });
                })
            })
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
                        row-gap: clamp(20px, calc(11.66vw - 50px), 90px);
                        justify-content: space-between;
                        background-color: #F7F7F7;
                        padding: 24px clamp(20px, 2.5vw, 30px);
                        border-radius: 10px;
                    `.apply(_)
                    l(_, 'p', _ => {
                        css`
                            color: #005143;    
                            font-weight: 500;
                            font-size: clamp(12px, 1.16vw, 14px);
                        `.apply(_)
                        _.innerText = (this.whatDone) ? "Что сделано" : "Сделано"
                    })
                    l(_, 'div', _ => {
                        css`
                            display: flex;
                            flex-direction: column;
                            row-gap: 10px;
                            color: #001F19;    
                            font-weight: 400;
                            font-size: clamp(14px, 1.5vw, 18px);    
                            line-height: 1.3;
                        `.apply(_)
                        this.results.forEach(element => {
                            l(_, 'div', _ => {
                                css`
                                    padding: 10px 14px;
                                    background-color: #ECECEC;
                                    border-radius: 13px;
                                `.apply(_)
                                l(_, 'p', _ => {
                                    _.innerText = element
                                })
                            })
                        })
                    })
                })
                l(_, 'div', _ => {
                    css`
                        display: flex;
                        flex-direction: column;
                        row-gap: clamp(10px, 1.67vw, 20px);
                        background-color: #ECFBF9;
                        padding: 24px clamp(20px, 2.5vw, 30px);
                        border-radius: 10px;
                    `.apply(_)
                    this.metrics.forEach(element => {
                        l(_, 'div', _ => {
                            css`
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                            `.apply(_)
                            l(_, 'p', _ => {
                                css`
                                    color: #48514F;    
                                    font-weight: 500;
                                    font-size: clamp(14px, 1.5vw, 18px);
                                    line-height: 1.3;
                                `.apply(_)
                                _.innerText = element[0]
                            })
                            l(_, 'p', _ => {
                                css`
                                    color: #005143;    
                                    font-weight: 500;
                                    font-size: clamp(18px, 2vw, 24px);
                                `.apply(_)
                                _.innerText = element[1]
                            })
                        })
                    })
                })
            })
        })
    }
}

export class ImportantProjects implements ClassComponent<HTMLDivElement> {
    mount(): HTMLDivElement {
        return l('div', _ => {
            css`    
                display: flex;
                flex-direction: column;
                row-gap: clamp(40px, 6.67vw, 80px);
            `.apply(_)
            _.id = "projects"
            l(_, new SectionHeader('ВАЖНЫЕ ПРОЕКТЫ'))
            l(_, 'div', _ => {
                css`    
                    display: flex;
                    flex-direction: column;
                    gap: 100px;
                    font-family: Golos Text, sans-serif;
                `.apply(_)
                css`
                    @media (max-width: 1200px) {
                        .this-class{
                            flex-direction: row;
                            overflow-x: auto;
                            scrollbar-width: thin;
                            gap: 20px;
                            } 
                    }
                `.apply(_)
                l(_, new ImportantProjectPanel(
                    "ЦКТ: AXIOMA",
                    "Высоконагруженная платформа предиктивной аналитики для производства: износ, расход, выход, выбросы и т.д.",
                    "Изначальная архитектура MVP не удовлетворяла требованиям к отказоустойчивости, пропускной способности и объёму хранения данных",
                    90,
                    ["Java", "Kotlin", "Kafka", "TimescaleDB", "Binary transfer protocols"],
                    [
                        "Разработана новая кластерная архитектура, оптимизированная для масштабирования",
                        "Проведен рефакторинг и удалены избыточные микросервисы",
                        "Внедрение не блокировало разработку и выпуски новой функциональности",
                        "Новые решения были разработаны с учётом требований ИБ, отделом анализа данных и менеджмента"
                    ],
                    [
                        ["Размер кодовой базы", "↓ 2x"],
                        ["Пропускная способность", "↑ 40x"],
                        ["Объём хранимых данных", "↓ 50x"]
                    ],
                    false
                ))
                l(_, new ImportantProjectPanel(
                    "SPAR: SCAN&GO",
                    "Мобильная касса самообслуживания для федеральной сети магазинов SPAR",
                    "Вывести кассы самообслуживания в новый формат — мобильное приложение.",
                    200,
                    ["Java", "Spring", "PostgreSQL", "REST", "SOAP", "XML"],
                    [
                        "Спроектирован и разработан backend для мобильного приложения SPAR Scan&Go",
                        "Реализованы интеграции с эквайрингом (Сбер, ПСБ, СБП), API других команд SPAR (карты лояльности, 1С и т. д.) и системой лояльности «Мой Клуб»"
                    ],
                    [
                        ["Синхронизация 1 млн SKU", "< 15 c"]
                    ],
                    true
                ))
                l(_, new ImportantProjectPanel(
                    "Дело живёт",
                    "Сообщества волонтеров, решающие актуальные экологические и социальные проблемы, ведут борьбу с атомизацией общества.",
                    "Разработка backoffice-системы управления задачами сообщества волонтеров. Интеграция с Telegram-ботом",
                    200,
                    ["Typescript", "HTML", "CSS", "OpenAPI", "PostGIS", "PostgreSQL", "Java"],
                    [
                        "Спроектирована архитектура решения: бизнес-сущности, схема базы данных с применением PostGIS",
                        "Разработан единый бэкенд для сайта и Telegram-бота с кастомной схемой авторизации",
                        "На основании макетов составлено ТЗ и реализован фронтенд для сайта"
                    ],
                    [
                        ["Срок проекта", "< 1 меcяца"]
                    ],
                    true
                ))
            })
        })
    }
}
