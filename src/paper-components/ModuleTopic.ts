import { css, l, lz, Zone, type ClassComponent } from "../lib";
import type { Page } from "./Page";


export class ModuleTopic implements ClassComponent<HTMLDivElement> {
    public selfZone: Zone | null = null
    public moduleTopicNav: HTMLDivElement | null = null

    constructor (
        readonly page: () => Page
    ) {}

    mount(): HTMLDivElement {
        return lz('div', (_, z) => {
            this.selfZone = z
            css`
                max-width: 1283px;
                margin-right: auto;
                margin-left: auto;
                display: flex;
                gap: 103px;`.apply(_)

            if (this.moduleTopicNav != null) {
                css`
                    position: sticky;
                    top: 86px;
                    max-width: 350px;`.apply(this.moduleTopicNav)
                l(_, this.moduleTopicNav)
            }
            l(_, this.page())
    })
}
}