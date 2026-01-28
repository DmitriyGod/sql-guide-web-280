import { css, l, type ClassComponent } from "./lib";
import { SectionHeader } from "./SectionHeader";

class ServicePanel implements ClassComponent<HTMLDivElement>{
    constructor(
        readonly title: string,
        readonly price: string,
        readonly description: string,
        readonly tags: string[][],
        readonly flexBasis: string,
        readonly grayTag: boolean,
    ) {}
    mount(): HTMLDivElement {
        return l('div', _ => {
            css`
                display: flex;
                flex-direction: column;
                gap: clamp(40px, 6.94vw, 100px);
                flex-grow: 1;
                justify-content: space-between;
                padding-top: clamp(20px, 2.08vw, 30px);
                padding-right: clamp(20px, 2.08vw, 30px);
                padding-bottom: clamp(30px, 2.78vw, 40px);
                padding-left: clamp(20px, 2.08vw, 30px);
                border-radius: 10px;
                background-color: #F7F7F7;
                font-family: Golos Text, sans-serif;
            `.apply(_)
            css`
                @media(max-width: 800px){
                    .this-class{
                        flex-basis: 100%;
                    }
                }
            `.apply(_)
            _.style.flexBasis = this.flexBasis
            l(_, 'div', _ =>{
                css`
                    display: flex;
                    flex-direction: column;
                    gap: clamp(10px, 2.08vw, 30px);
                `.apply(_)
                l(_, 'div', _ =>{
                    css`
                        display: flex;
                        justify-content: space-between;
                        line-height: 1.3;
                    `.apply(_)
                    css`
                        @media(max-width: 800px){
                            .this-class{
                                flex-direction: column-reverse;
                            }
                        }
                    `.apply(_)
                    l(_, 'p', _ =>{
                        css`
                            color: #005143;    
                            font-weight: 600;
                            font-size: clamp(18px, 1.67vw, 24px);            
                            text-transform: uppercase;
                        `.apply(_)
                        _.innerText = this.title
                    })
                    l(_, 'p', _ =>{
                        css`
                            color: #001F19;    
                            font-weight: 400;
                            font-size: clamp(12px, 1.25vw, 18px);
                        `.apply(_)
                        _.innerText = this.price
                    })
                })
                l(_, 'p', _ =>{
                    css`
                        color: #48514F;    
                        font-weight: 400;
                        font-size: clamp(14px, 1.25vw, 18px);
                        line-height: 1.3;
                    `.apply(_)
                    _.innerText = this.description
                })
            })
            l(_, 'div', _ =>{
                css`
                    display: flex;
                    flex-direction: column;
                    gap: clamp(6px, 0.69vw, 10px);
                `.apply(_)
                this.tags.forEach(element => {
                    l(_, 'div', _ =>{
                        css`
                            display: flex;
                            flex-wrap: wrap;
                            gap: clamp(6px, 0.69vw, 10px);    
                        `.apply(_)
                        element.forEach(element => {
                            l(_, 'div', _ =>{
                                css`
                                    padding: clamp(8px, 0.69vw, 10px) clamp(10px, 1.39vw, 20px);
                                    background-color: #D6F1ED;
                                    border-radius: 6px;
                                    color: #001F19;    
                                    font-weight: 500;
                                    font-size: clamp(14px, 1.25vw, 18px);
                                `.apply(_)
                                if(this.grayTag) _.style.backgroundColor = "#ECECEC"
                                l(_, 'p', _ =>{
                                    _.innerText = element
                                })
                            })
                        })
                    })
                })
            })
        })
    }
}

export class Services implements ClassComponent<HTMLDivElement>{
    mount(): HTMLDivElement {
        return l('div', _ => {
            css`    
                display: flex;
                flex-direction: column;
                row-gap: clamp(40px, 6.67vw, 60px);
            `.apply(_)
            _.id = "offer"
            l(_, new SectionHeader('УСЛУГИ'))
            l(_, 'div', _ =>{
                css`
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                `.apply(_)
                css`
                    @media(max-width: 800px){
                        .this-class{
                            flex-direction: column;
                            flex-wrap: nowrap;
                        }
                    }
                `.apply(_)
                l(_, new ServicePanel(
                    "MVP, системы автоматизации\n и цифровые продукты",
                    "От 800 тысяч рублей",
                    "Возможно решение действительно сложных задач без шаблонных решений. Задачи решаюся на стыке computer scince, подбора подходящих технологий, алгоритмов и структур данных.",
                    [
                        ["Java", "API", "Concurrency", "High Load", "WEB-технологии"],
                        ["Протоколы передачи данных", "Парсеры", "Компиляторы", "Алгоритмы"]
                    ],
                    "calc(clamp(0px, 58vw, 842px) - 10px)",
                    false
                ))
                l(_, new ServicePanel(
                    "Веб-разработка",
                    "От 300 тысяч рублей",
                    "Разработка frontend и backend частей web сервисов. Проектирование UX.",
                    [
                        ["Java", "Kotlin", "Spring", "Node.js", "Python"],
                        ["HTML", "CSS", "Typescript", "Javascript"]
                    ],
                    "calc(clamp(0px, 41vw, 596px) - 10px)",
                    false
                ))
                l(_, new ServicePanel(
                    "Аудит архитектуры и кода",
                    "",
                    "Анализ кодовой базы, инфраструктуры разработки, оценка правильности применения технологий. Разработка плана устранения узких мест в процессе разработки.",
                    [
                        ["От 3 дней"]
                    ],
                    "calc(clamp(0px, 32.84vw, 473px) - 6.67px)",
                    true
                ))
                l(_, new ServicePanel(
                    "Инфраструктура и DevOps",
                    "",
                    "Организация CI/CD, развертывание проектов в продакшн.",
                    [
                        ["Linux", "Docker", "Ansible"],
                        ["Kafka", "Redis", "Gitlab"]
                    ],
                    "calc(clamp(0px, 40vw, 576px) - 6.67px)",
                    false
                ))
                l(_, new ServicePanel(
                    "БАЗЫ ДАННЫХ",
                    "",
                    "Проектирование и разработка схем баз данных, алгоритмов обработки и анализа данных.",
                    [
                        ["PostgreSQL", "ClickHouse"],
                        ["TimescaleDB", "MSSQL"]
                    ],
                    "calc(clamp(0px, 23.95vw, 345px) - 6.67px)",
                    false
                ))
            })
        })
    }
}
