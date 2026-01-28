import { css, l, type ClassComponent } from "./lib";
import { SectionHeader } from "./SectionHeader";

class BlogPanel implements ClassComponent<HTMLAnchorElement> {

    constructor(
        readonly title: string[],
        readonly text: string,
        readonly views: string,
        readonly imageLink: string,
        readonly articleLink: string,
        readonly specialTitle: boolean
    ) { }

    mount(): HTMLAnchorElement {
        return l('a', _ => {
            css`    
                display: flex;
                flex-direction: column;
                row-gap: clamp(40px, 6.67vw, 60px);
                flex: 1 0 33%;
                min-width: max(265px, min(450px, calc(100vw - 20px - 30px - 30px)));
                max-width: 466px;
                text-decoration: none;
            `.apply(_)
            _.href = this.articleLink
            _.target = "_blank"
            l(_, 'div', _ => {
                css`
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end; 
                    align-items: flex-end;
                    background-color: #D6F1ED;
                    padding: clamp(16px, 2vw, 24px);
                    border-radius: clamp(10px, 1vw, 12px);
                    background-origin: border-box;
                    background-position: center;
                    background-size: cover;
                    aspect-ratio: 1 / 1;
                `.apply(_)
                _.style.backgroundImage = "url(\"" + this.imageLink + "\")"
                l(_, 'div', _ => {
                    css`
                        display: flex;
                        gap: clamp(6px, 0.83vw, 10px);
                        align-items: center;
                        padding: clamp(8px, 0.83vw, 10px) clamp(10px, 1.17vw, 14px);
                        border-radius: 8px;
                        background-color: #FFFFFF;
                    `.apply(_)
                    l(_, 'div', _ => {
                        css`
                            width: 24px;
                            height: 24px;
                            background-image: url('data:image/svg+xml, <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.25C11.0054 8.25 10.0516 8.64509 9.34835 9.34835C8.64509 10.0516 8.25 11.0054 8.25 12C8.25 12.9946 8.64509 13.9484 9.34835 14.6517C10.0516 15.3549 11.0054 15.75 12 15.75C12.9946 15.75 13.9484 15.3549 14.6517 14.6517C15.3549 13.9484 15.75 12.9946 15.75 12C15.75 11.0054 15.3549 10.0516 14.6517 9.34835C13.9484 8.64509 12.9946 8.25 12 8.25ZM9.75 12C9.75 11.4033 9.98705 10.831 10.409 10.409C10.831 9.98705 11.4033 9.75 12 9.75C12.5967 9.75 13.169 9.98705 13.591 10.409C14.0129 10.831 14.25 11.4033 14.25 12C14.25 12.5967 14.0129 13.169 13.591 13.591C13.169 14.0129 12.5967 14.25 12 14.25C11.4033 14.25 10.831 14.0129 10.409 13.591C9.98705 13.169 9.75 12.5967 9.75 12Z" fill="%2348514F" stroke="%2348514F" stroke-width="0.5"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.25C7.486 3.25 4.445 5.954 2.68 8.247L2.649 8.288C2.249 8.807 1.882 9.284 1.633 9.848C1.366 10.453 1.25 11.112 1.25 12C1.25 12.888 1.366 13.547 1.633 14.152C1.883 14.716 2.25 15.194 2.649 15.712L2.681 15.753C4.445 18.046 7.486 20.75 12 20.75C16.514 20.75 19.555 18.046 21.32 15.753L21.351 15.712C21.751 15.194 22.118 14.716 22.367 14.152C22.634 13.547 22.75 12.888 22.75 12C22.75 11.112 22.634 10.453 22.367 9.848C22.117 9.284 21.75 8.807 21.351 8.288L21.319 8.247C19.555 5.954 16.514 3.25 12 3.25ZM3.87 9.162C5.498 7.045 8.15 4.75 12 4.75C15.85 4.75 18.501 7.045 20.13 9.162C20.57 9.732 20.826 10.072 20.995 10.454C21.153 10.812 21.25 11.249 21.25 12C21.25 12.751 21.153 13.188 20.995 13.546C20.826 13.928 20.569 14.268 20.131 14.838C18.5 16.955 15.85 19.25 12 19.25C8.15 19.25 5.499 16.955 3.87 14.838C3.43 14.268 3.174 13.928 3.005 13.546C2.847 13.188 2.75 12.751 2.75 12C2.75 11.249 2.847 10.812 3.005 10.454C3.174 10.072 3.432 9.732 3.87 9.162Z" fill="%2348514F" stroke="%2348514F" stroke-width="0.5"/></svg>');
                        `.apply(_)
                        css`
                            @media (max-width: 1200px){
                                .this-class {
                                    width: 18px;
                                    height: 18px;
                                    background-size: contain;
                                }
                            }
                        `.apply(_)
                    })
                    l(_, 'p', _ => {
                        css`
                            color: #001F19;    
                            font-weight: 500;
                            font-size: clamp(14px, 1.5vw, 18px);
                            line-height: 1.3;
                        `.apply(_)
                        _.innerText = this.views
                    })
                })
            })
            l(_, 'div', _ => {
                css`
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    line-height: 1.3;
                `.apply(_)
                css`
                    @media (max-width: 1200px){
                        .this-class {
                            line-height: 1.2;
                        }
                    }
                `.apply(_);
                (this.specialTitle) ? l(_, new TitleSpecial(this.title)) : l(_, new TitleRegular(this.title[0]))
                l(_, 'p', _ => {
                    css`
                        color: #48514F;    
                        font-weight: 400;
                        font-size: clamp(14px, 1.5vw, 18px);
                    `.apply(_)
                    _.innerText = this.text
                })
            })
        })
    }
}

class TitleRegular implements ClassComponent<HTMLParagraphElement> {
    constructor(readonly title: string) { }

    mount(): HTMLParagraphElement {
        return l('p', _ => {
            css`
                color: #005143;    
                font-weight: 600;
                font-size: clamp(18px, 2vw, 24px);
                text-transform: uppercase;
            `.apply(_)
            _.innerText = this.title
        })
    }
}

class TitleSpecial implements ClassComponent<HTMLParagraphElement> {
    constructor(readonly title: string[]) { }

    mount(): HTMLParagraphElement {
        return l('p', _ => {
            css`
                color: #005143;    
                font-weight: 600;
                font-size: clamp(18px, 2vw, 24px);
                text-transform: uppercase;
            `.apply(_)
            l(_, 'span', _ => {
                _.innerText = this.title[0]
            })
            l(_, 'span', _ => {
                css`   
                    font-weight: 800;
                `.apply(_)
                _.innerText = this.title[1]
            })
            l(_, 'span', _ => {
                _.innerText = this.title[2]
            })
        })
    }
}

export class Blog implements ClassComponent<HTMLDivElement> {
    mount(): HTMLDivElement {
        return l('div', _ => {
            css`    
                display: flex;
                flex-direction: column;
                row-gap: clamp(40px, 6.67vw, 60px);
            `.apply(_)
            _.id = "blog"
            l(_, new SectionHeader('НАШ ТЕХНИЧЕСКИЙ БЛОГ'))
            l(_, 'div', _ => {
                css`
                    display: flex;
                    gap: 20px;
                    overflow-x: auto;
                    scrollbar-width: thin;
                `.apply(_)
                l(_, new BlogPanel(
                    ["Честный взгляд на spring data jpa"],
                    "Spring Data JPA считается швейцарским ножом для работы с БД в Java. Однако Spring Data JPA не заслуживает своего триумфа и вот почему...",
                    "6,3 тыс.",
                    new URL("images/Blog1.png", import.meta.url).href,
                    "https://habr.com/ru/articles/860038/",
                    false
                ))
                l(_, new BlogPanel(
                    ["Доказательство отсутствия необходимости в service-layer на backend С RPC"],
                    "Холодная и беспристрастная как лезвие скальпеля опытного хирурга математика доказывает порой крайне неочевидные вещи... В современных веб-приложениях service-layer не нужен?!",
                    "1,7 тыс.",
                    new URL("images/Blog2.png", import.meta.url).href,
                    "https://habr.com/ru/articles/863932/",
                    false
                ))
                l(_, new BlogPanel(
                    ["Бэкенд s", "CRUD", "ge McDuck’а"],
                    "Остросюжетная история о гонке за большими деньгами в IT. Как заработать в 3 раза больше денег на бэкендах?",
                    "1,1 тыс.",
                    new URL("images/Blog3.png", import.meta.url).href,
                    "https://habr.com/ru/articles/882412/",
                    true
                ))
            })
        })
    }
}