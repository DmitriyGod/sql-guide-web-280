
import { css, l, type ClassComponent } from ".././lib";


export class Query implements ClassComponent<HTMLDivElement> {
    constructor (
        readonly text: string
    ) {}
    mount(): HTMLDivElement {
        let keyWords = ['select', 'as', 'asc', 'from', 'order by', 'limit', 'offset', 'group by',
        'sum', 'over', 'order by', 'range', 'between', 'preceding', 'and', 'current', 'row',
        'create', 'not null', 'primary key']
        keyWords = keyWords.concat(keyWords.map(v => v.toUpperCase()))

        let dTypes = ['timestamptz', 'interval', 'bigint', 'double precision']
        dTypes = dTypes.concat(dTypes.map(v => v.toUpperCase()))

        return l('div', _ => {
            css`
                padding: 10px;
                font-family: "JetBrains Mono", normal;
                font-size: 21px;
                word-break: break-all;
                border: #CACACA solid 1px;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                gap: 6px;
                `.apply(_)

                let text = this.text.trim().replaceAll(' ', '&nbsp;')
                let i = 1

                text.split('\n').forEach(v => {
                    let row = v
                    l(_, 'div', _ => {
                        css`
                            display: flex;
                            gap: 8px;
                            `.apply(_)

                        l(_, 'div', _ => {
                            css`
                                margin-top: 4px;
                                margin-bottom: auto;
                                text-align: center;
                                width: 20px;
                                font-size: 16px;
                                height: 16px;
                                // background: #D9D9D9;
                                border-radius: 6px;
                                color: rgba(0, 31, 25, 0.5);;
                                `.apply(_)
                            _.innerText = i.toString()
                            i++
                        })
                        l(_, 'div', _ => {
                            css`
                            display: flex;
                            flex-wrap: wrap;
                            color: var(--base-color-black);

                            &> .charConst {
                                color: #ac1718;
                            }
                            &> .numberConst {
                                color: #9a6645;
                                font-family: "JetBrains Mono Bold", bold;
                            }
                            &> .keyWord {
                                color: #990088;
                                font-family: "JetBrains Mono Bold", bold;
                            }
                            &> .dType {
                                color: #7e0000;
                            }
                            `.apply(_)
                            
                            keyWords.forEach(kw => {
                                kw = kw.replaceAll(' ', '&nbsp;')
                                row = row.replaceAll(new RegExp(`\\b(${kw})\\b`, 'g'), `<p class="keyWord">${kw}</p>`)
                            })

                            dTypes.forEach(dt => {
                                dt = dt.replaceAll(' ', '&nbsp;')
                                row = row.replaceAll(new RegExp(`\\b(${dt})\\b`, 'g'), `<p class="dType">${dt}</p>`)
                            })

                            row = row.replaceAll(new RegExp(`&nbsp;[+-]?[0-9]+(\.[0-9]+)?&nbsp;`, 'g'), 
                                    (ss, _) => {
                                        return '&nbsp;<p class="numberConst">'+ ss.replaceAll('&nbsp;', '') + '</p>&nbsp'}
                                )
                            row = row.replaceAll(new RegExp(`'([^']*)'`, 'g'), 
                                (ss, _) => {
                                    return '<p class="charConst">' + ss +  '<p/>'
                                })
                            _.innerHTML = row
                        }) 
                        _.innerHTML += '<br>'
                    })
                })
        })
    }
}