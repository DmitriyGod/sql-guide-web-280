import './app.css'

import { css, l, lz, sync, Zone} from "./lib";
import { modules_page } from './guide/units/modules';
import { about } from './guide/units/about';
import { GuideStructure, linkToAbout, linkToModule, linkToModules } from './guide/structure';
import { Footer } from './Footer';
import { NavBar } from './NavBar';
import { ModuleTopicNav } from './paper-components/ModuleTopicNav';
import { ModuleTopic } from './paper-components/ModuleTopic';


const GS = new GuideStructure()

const ui = l('div', _ => {

    css`
        min-height: 100%;
        display: flex;
        flex-direction: column;
        
        max-width: 1440px;
        margin-left: auto;
        margin-right: auto;
    `.apply(_)

    const desktopWidthThreshold = 1000;

    const isDesktop = () => (window.innerWidth > desktopWidthThreshold) 

    let navBar = new NavBar()
    navBar.isDesktop = isDesktop()
    l(_, navBar)

    let moduleTopicNav: ModuleTopicNav | null = null
    let moduleTopic: ModuleTopic | null = null

    const mediaQueryString = `(max-width: ${desktopWidthThreshold}px)`

    const mql: MediaQueryList = window.matchMedia(mediaQueryString)

    function syncDeviceUI() {
        sync([navBar.selfZone], navBar.isDesktop = isDesktop())

        if (moduleTopic != null) {
            if (!isDesktop()) {
                sync([navBar.selfZone, moduleTopic.selfZone],
                    [navBar.moduleTopicNav = moduleTopicNav!.mount(),
                    moduleTopic.moduleTopicNav = null])
            } else {
                sync([navBar.selfZone, moduleTopic.selfZone],
                    [navBar.moduleTopicNav = null,
                    moduleTopic.moduleTopicNav = moduleTopicNav!.mount()])
            }
        } else {
            sync([navBar.selfZone], [navBar.moduleTopicNav = null])
        }
    }

    function handleMediaQueryChange() {
        syncDeviceUI()
    }

    mql.addEventListener("change", handleMediaQueryChange);

    const currentLocation = () => (window.location.hash || '#').replace(/\/+$/, '') 
    let current = currentLocation()

    let zPage: Zone | null = null

    window.addEventListener('hashchange', () => {
        const c = currentLocation()
        sync([zPage], [current = c])
    })

    zPage = lz(_, 'div', async _ => {
        css`
            margin-top: 39px;
            `.apply(_)

            moduleTopic = null
            moduleTopicNav = null

            if (current == linkToAbout) {
                about(_)
            } else if (current == linkToModules) {
                modules_page(_)
            } else if (current.startsWith(linkToModule)) {

                const moduleName = GS.modules.get(current.slice(0, current.lastIndexOf('/')+1))
                const subModules = GS.navModuleMap.get(moduleName!)
                const page = GS.guideStructure.get(current)

                if (page) {
                    moduleTopicNav = new ModuleTopicNav(moduleName!, page!.name!, subModules!)
                    moduleTopic = new ModuleTopic(page!.page!)

                    l(_, moduleTopic)

                } else {
                    window.location.href = linkToAbout
                }
            } else {
                window.location.href = linkToAbout
            }

            syncDeviceUI()
    })

    l(_, new Footer)
})

document.body.appendChild(ui)
