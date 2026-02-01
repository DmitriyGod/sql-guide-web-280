
import { linkToModules } from "../guide/structure";
import { css, l, lz, sync, type ClassComponent } from "../lib";

export type ModuleTopic = {name: string, link: string}

export class ModuleTopicNav implements ClassComponent<HTMLDivElement> {
    constructor (
        readonly moduleName: string,
        readonly selectedTopicName: string,
        readonly subTopics: ModuleTopic[]
    ) {}
    
    mount(): HTMLDivElement {
        return l('div', _ => {
            css`
                align-self: flex-start;
                display: flex;
                flex-direction: column;
                gap: 20px;
            `.apply(_)

            l(_, 'a', _ => {
                css`
                    text-decoration: none;
                    `.apply(_)
                _.href = linkToModules
                l(_, 'div', _ => {
                    css`
                        border-radius: 10px;
                        background: #ECFBF9;
                        `.apply(_)

                    l(_, 'div', _ => {
                        css`
                            display: flex;
                            gap: 20px;

                            padding-top: 16px;
                            padding-bottom: 16px;
                            padding-left: 30px;
                            padding-right: 30px;
                            `.apply(_)
                        
                        l(_, 'div', _ => {
                            css`
                                background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="%23005143" d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z"/></svg>');
                                width: 24px;
                                height: 24px;
                                `.apply(_)
                        })
    
                        l(_, 'p', _ => {
                            css`
                                background: #ECFBF9;
                                font-family: "Golos Text", regular;
                                font-size: 18px;
                                font-weight: 600;
                                color: var(--base-color-dark-green);
                                line-height: 1.24;
                                `.apply(_)
                                
                            _.innerText = 'Назад к списку модулей'
                        })
                    })
                })
            })

            l(_, 'div', _ => {
                css`
                    background: var(--base-color-backgound-gray);
                    border-radius: 10px;`.apply(_)
                    
                l(_, 'div', _ => {
                    css`
                        display: flex;
                        flex-direction: column;
                        gap: 20px;

                        padding-top: 24px;
                        padding-bottom: 30px;
                        padding-left: 30px;
                        padding-right: 30px;`.apply(_)


                    l(_, 'div', _ => {
                        l(_, 'p', _ => {
                            css`
                                font-family: "Golos Text", regular;
                                font-size: 18px;
                                font-weight: 500;
                                color: var(--base-color-dark-green);
                                line-height: 1.24;
                                `.apply(_)
                            _.innerText = this.moduleName
                        })
                    })

                    // console.log('xxx', this.subModules)
                    
                    lz(_, 'div', (_, z) => {
                        css`
                            display: flex;
                            flex-direction: column;
                            gap: 6px;`.apply(_)

                        this.subTopics.forEach(sm => {
                            l(_, 'a', _ => {
                                _.href = sm.link

                                css`
                                    text-decoration: none;
                                    `.apply(_)

                                l(_, 'div', _ => {
                                    css`
                                        border-radius: 13px;
                                        
                                        padding-top: 10px;
                                        padding-bottom: 10px;
                                        padding-left: 12px;
                                        padding-right: 12px;
                                        `.apply(_)
                                    
                                    if (this.selectedTopicName == sm.name) {
                                        css`
                                            background: #ECFBF9;
                                            border: solid var(--base-color-dark-green) 1px;
                                            &>p {
                                                color: var(--base-color-dark-green);
                                            }`.apply(_)
                                    } else {
                                        css`
                                            background: #ECECEC;
                                            &>p {
                                                color: var(--base-color-black);
                                            }`
                                            .apply(_)
                                    }
                                    l(_, 'p', _ => {
                                        css`
                                            font-family: "Golos Text", regular;
                                            font-size: 18px;
                                            font-weight: 300;
                                            line-height: 1.3;
                                            `.apply(_)

                                        _.innerText = sm.name
                                    })
                                })
                            })
                        })  
                    })
                })
            })
            
        })
    }
}