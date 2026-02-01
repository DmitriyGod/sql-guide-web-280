
import { css, l, type ClassComponent } from ".././lib";


export class Reminder implements ClassComponent<HTMLDivElement> {
    constructor (
        readonly text: string
    ) {}
    mount(): HTMLDivElement {
        return l('div', _ => {
            css`
                background: var(--base-color-backgound-gray);
                border-radius: 10px;
                padding-top: 20px;
                padding-bottom: 20px;

                padding-left: 30px;
                padding-right: 30px;

                position: relative
                `.apply(_)
            
            l(_, 'div', _ => {
                css`
                    position: absolute;
                    top: -9px;
                    left: -9px;
                    width: 19px;
                    height: 19px;
                    background-image: url('data:image/svg+xml,<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.60719 17.5764L7.28426 11.4688L1.17499 13.5931L0.00315695 10.0681L6.31144 8.51452L1.24784 4.44416L3.79771 1.74276L8.44003 6.24662L9.49682 0.00172154L13.2185 0.825408L11.5415 6.93303L17.6507 4.80871L18.8226 8.33378L12.5143 9.88733L17.5779 13.9577L15.028 16.6591L10.3857 12.1552L9.3289 18.4001L5.60719 17.5764Z" fill="%2300B799"/></svg>');
                    `.apply(_)
            })

            l(_, 'p', _ => {
                css`
                    font-family: "Golos Text", regular;
                    font-size: 24px;
                    font-weight: 300;
                    line-height: 1.24;
                    color: var(--base-color-black);
                    `.apply(_)

                _.innerHTML = this.text.trim()
            })

        })
    }
}