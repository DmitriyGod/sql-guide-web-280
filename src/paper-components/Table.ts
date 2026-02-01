import { css, l, type ClassComponent, type Component } from ".././lib";


export class Table implements ClassComponent<HTMLTableElement> {
    constructor (
        readonly content: (string | number | HTMLParagraphElement | null)[][]
    ) {}
    mount(): HTMLTableElement {
        return l('table', _ => {
            css`
                margin-bottom: auto;

                border-collapse: collapse;
                border: none;
                `.apply(_)

        l(_, 'thead', _ => {
            l(_, 'tr', _ => {
                
                this.content.forEach(col => {
                    l(_, 'th', _ => {
                        l(_, 'div', _ => {
                            css`
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                white-space: pre;
                                
                                width: 113px;
                                height: 62px;

                                color: var(--base-color-black);
                                &>p {
                                    color: var(--base-color-black);
                                }
                                &> .green {
                                    color: var(--base-color-dark-green);
                                }
                                font-family: "Golos Text", regular;
                                font-size: 18px;
                                font-weight: 450;
                                line-height: 1.24;
                                letter-spacing: 0.01em;
                                text-align: center;
                                `.apply(_)

                        let v = col[0]
                        if (v != null) {
                            if (v instanceof HTMLParagraphElement) {
                                l(_, v)
                            } else {
                                _.innerHTML = v.toString()
                            }
                        }
                        })
                    })
                });
            })
        })

        l(_, 'tbody', _ => {
            for(let i = 1; i < this.content[0].length; i++) {
                l(_, 'tr', _ => {
                    for (let j = 0; j < this.content.length; j++) {
                        l(_, 'td', _ => {
                            css`
                                border: 1px solid #CACACA;
                                border-spacing: 0px;`.apply(_)

                            l(_, 'div', _ => {
                                css`
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    white-space: pre;
                                    
                                    width: 113px;
                                    height: 62px;
        
                                    color: var(--base-color-black);
                                    &>p {
                                        color: var(--base-color-black);
                                    }
                                    &> .green {
                                        color: var(--base-color-dark-green);
                                    }
                                    font-family: "Golos Text", regular;
                                    font-size: 24px;
                                    font-weight: 450;
                                    line-height: 1.24;
                                    letter-spacing: 0.01em;
                                    text-align: center;
                                    `.apply(_)
                            let v = this.content[j][i]
                            if (v != null) {
                                if (v instanceof HTMLParagraphElement) {
                                    l(_, v)
                                } else {
                                    _.innerHTML = v.toString()
                                }
                            }
                            })
                        })
                        }
                })
            }
        })

    })
}
}