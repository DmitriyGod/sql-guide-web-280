
import { linkToModules } from "./guide/structure";
import { css, l, lz, sync, type ClassComponent } from "./lib";

export type ModuleTopicNav = {name: string, link: string}

export class ModuleNav implements ClassComponent<HTMLDivElement> {
    constructor (
        readonly moduleName: string,
        readonly subModules: ModuleTopicNav[]
    ) {}
    
    mount(): HTMLDivElement {
        return l('div', _ => {
            css`
                width: 350px;
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
                                color: #005143;
                                line-height: 1.24;
                                `.apply(_)
                                
                            _.innerText = 'Назад к списку модулей'
                        })
                    })
                })
            })

            l(_, 'div', _ => {
                css`
                    background: #F7F7F7;
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
                                color: #005143;
                                line-height: 1.24;
                                `.apply(_)
                            _.innerText = this.moduleName
                        })
                    })

                    console.log('xxx', this.subModules)
                    let selectedSubModuleName = this.subModules[0].name
                    
                    lz(_, 'div', (_, z) => {
                        css`
                            display: flex;
                            flex-direction: column;
                            gap: 6px;`.apply(_)

                        this.subModules.forEach(sm => {
                            l(_, 'a', _ => {
                                _.href = sm.link
                                _.onclick = () => sync([z], selectedSubModuleName = sm.name)

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
                                    
                                    if (selectedSubModuleName == sm.name) {
                                        css`
                                            background: #ECFBF9;
                                            border: solid #005143 1px;
                                            &>p {
                                                color: #005143;
                                            }`.apply(_)
                                    } else {
                                        css`
                                            background: #ECECEC;
                                            &>p {
                                                color: #001F19;
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