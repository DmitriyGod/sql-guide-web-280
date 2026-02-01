
import { css, l, type ClassComponent } from ".././lib";

export enum PlateHeaderColor {
    Black,
    Green
}

export class Plate implements ClassComponent<HTMLDivElement> {
    constructor (
        readonly header: string, 
        readonly headerColor: PlateHeaderColor, 
        readonly info: string
    ) {}
    mount(): HTMLDivElement {
        return l('div', _ => {
                    css`
                        background: var(--base-color-backgound-gray);
                        border-radius: 10px;
                        max-width: 250px;

                        min-heigth: 153px;
                        flex-grow: 1;
                        padding: 20px;

                        display: flex;
                        flex-direction: column;
                        gap: 52px;
                        justify-content: space-between;
                        `.apply(_)

                    l(_, 'p', _ => {
                        css`
                            font-family: "Golos Text", regular;
                            font-size: 24px;
                            font-weight: 450;
                            line-height: 1.24;
                            letter-spacing: 0.01em;
                            `.apply(_)
                        
                        switch (this.headerColor) {
                            case PlateHeaderColor.Black:
                                css`color: var(--base-color-black);`.apply(_)
                                break;
                            case PlateHeaderColor.Green:
                                css`color: var(--base-color-dark-green);`.apply(_)
                                break;
                        }

                        _.innerText = this.header
                    })

                    l(_, 'p', _ => {
                        css`
                            margin-top: auto;
                            
                            font-family: "Golos Text", regular;
                            font-size: 16px;
                            font-weight: 300;
                            line-height: 1.25;
                            color: var(--base-color-text);
                            `.apply(_)

                        _.innerHTML = this.info
                    })
                })
    }
}