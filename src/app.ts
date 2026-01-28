import './app.css'

import { css, l, lz, sync, Zone, type ClassComponent } from "./lib";
import { modules_page } from './guide/units/modules';
import { about } from './guide/units/about';
import { Module } from './Module';
import { GuideStructure, linkToAbout, linkToModule, linkToModules } from './guide/structure';

// function MenuCloser(tag: HTMLAnchorElement) {
//     if (tag.parentElement?.parentElement?.parentElement != null && tag.parentElement.parentElement.parentElement.classList.contains("show")) {
//         tag.parentElement.parentElement.parentElement.classList.toggle('show')
//         document.body.classList.toggle('no-scroll')
//         document.body.parentElement!.classList.toggle('no-scroll')
//     }
// }


class NavbarLinks implements ClassComponent<HTMLDivElement> {
    mount(): HTMLDivElement {
        return l('div', _ => {
            css`
                display: flex;
                justify-content: flex-start;
                
                &>a {
                    text-decoration: none;
                    font-family: "Golos Text", regular;
                    color: #48514F;
                }
                &>a:hover, &>a:active {
                    color: var(--base-color-dark-green);
                }    
            `.apply(_)

            l(_, 'a', _ => {
                _.href = '#/about'
                _.innerText = 'О курсе!!'
                // _.onclick = () => {
                //     MenuCloser(_)
                // }
            })
            l(_, 'a', _ => {
                _.href = '#/modules'
                _.innerText = 'Список модулей!!'
                // _.onclick = () => {
                //     MenuCloser(_)
                // }
            })
        })
    }
}
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

    l(_, 'div', _ => {

        l(_, 'div', _ => {
            css`
                display: flex;

                &>div:nth-child(2) {
                    align-items: center;
                    gap: 37px;
                    &>a {
                        font-size: 16px;
                    }
                }
            `.apply(_)

            l(_, 'div', _ => {
                css`
                    padding-right: 75px;
                    text-decoration: none;
                    font-family: "Cormorant Garamond", light;
                    font-size: 39px;
                    color: #001F19;
                `.apply(_)
                _.innerHTML = 'SQL Guide'
            })

            l(_, new NavbarLinks())
        })
    })

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
            console.log('here')
            if (current == linkToAbout) {
                l(_, about)
            } else if (current == linkToModules) {
                l(_, modules_page)
            } else if (current.startsWith(linkToModule)) {
                console.log(current.slice(0, current.lastIndexOf('/')))
                const subModule = GS.guideStructure.get(current)
                console.log(GS.navModuleMap)
                console.log('submodule:', subModule)
                GS.modules.forEach(v => console.log(v))
                const moduleName = GS.modules.get(current.slice(0, current.lastIndexOf('/')))

                

                if (subModule) {
                    console.log('aaa', GS.guideStructure)
                    console.log('bbb', GS.navModuleMap)
                    console.log('zzz', subModule.name!)
                    console.log('yyy', GS.navModuleMap.get(subModule.name!)!)
                    l(_, new Module(
                        moduleName!, 
                        GS.navModuleMap.get(subModule.name!)!,
                        subModule.page
                    ))
                } else {
                    window.location.href = linkToAbout
                }
            } else {
                window.location.href = linkToAbout
            }
    })


    l(_, 'div', _ => {
        css`
            margin-top: auto;

            padding-top: 50px;
            padding-bottom: 50px;
            padding-left: 25px;
            padding-right: 25px;
            display: flex;
            justify-content: space-between;
            border-top: solid #48514F 1px;`.apply(_)
    
        l(_, 'div', _ => {
            css`
                display: flex
                `.apply(_)
            l(_, 'p', _ => {
                css`
                    font-family: "Golos Text", regular;
                    font-size: 16px;
                    font-weight: 300;
                    line-height: 1.4;
                    color: #48514F;
                    vertical-align: top;
                    padding-right: 5px;
                    `.apply(_)
                _.innerText = 'by'
            })
            l(_, 'div', _ => {
                css`
                    width: 157px;
                    height: 30px;
                    background-image: url('data:image/svg+xml,<svg width="157" height="30" viewBox="0 0 157 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 29.3349V2.73218H9.03765C11.7088 2.73218 13.7391 3.23547 15.1286 4.24206C16.5301 5.24865 17.2308 6.7166 17.2308 8.6459C17.2308 11.8454 15.1047 14.1102 10.8524 15.4404C15.8234 16.6507 18.3089 19.0893 18.3089 22.7561C18.3089 24.8772 17.5782 26.5069 16.1168 27.6453C14.6675 28.7717 12.5832 29.3349 9.86416 29.3349H0ZM5.21057 13.8047H6.5222C8.07938 13.8047 9.31315 13.4212 10.2235 12.6543C11.1458 11.8874 11.607 10.8448 11.607 9.52666C11.607 8.30437 11.2357 7.47753 10.493 7.04614C9.76234 6.60276 8.37285 6.38107 6.32456 6.38107H5.21057V13.8047ZM5.21057 25.5602H6.39643C8.72023 25.5602 10.3193 25.3146 11.1938 24.8232C12.0801 24.32 12.5233 23.4092 12.5233 22.0911C12.5233 20.737 11.9304 19.6105 10.7446 18.7118C9.57069 17.8131 8.08537 17.3637 6.28862 17.3637H5.21057V25.5602Z" fill="%23005143"/><path d="M39.241 28.6699C36.7136 29.4128 34.3179 29.7843 32.054 29.7843C28.76 29.7843 26.1607 28.8496 24.2561 26.9802C22.3516 25.1108 21.3993 22.5584 21.3993 19.3229C21.3993 16.2672 22.2677 13.8107 24.0046 11.9533C25.7534 10.0839 28.0592 9.14919 30.9221 9.14919C33.8088 9.14919 35.917 10.0599 37.2466 11.8814C38.5762 13.7028 39.241 16.5848 39.241 20.5273H27.0051C27.3645 24.29 29.4308 26.1714 33.2039 26.1714C34.9887 26.1714 37.0011 25.7579 39.241 24.9311V28.6699ZM26.9333 17.5255H34.0125C34.0125 14.1582 32.9284 12.4745 30.7604 12.4745C28.5563 12.4745 27.2807 14.1582 26.9333 17.5255Z" fill="%23005143"/><path d="M48.638 13.607C50.291 11.0785 52.543 9.81426 55.3938 9.81426C57.7895 9.81426 59.676 10.6771 61.0536 12.4026C62.443 14.1282 63.1378 16.4709 63.1378 19.4308C63.1378 22.6902 62.2574 25.2307 60.4966 27.0521C58.7358 28.8736 56.2862 29.7843 53.1479 29.7843C49.746 29.7843 47.2545 28.7478 45.6734 26.6747C44.0922 24.5896 43.3017 21.3182 43.3017 16.8604C43.3017 11.408 44.218 7.39365 46.0507 4.81726C47.8954 2.24086 50.7642 0.952666 54.6571 0.952666H55.3938C57.1666 0.952666 58.7537 0.635111 60.1552 0V3.41522C59.0652 3.99041 57.6218 4.27801 55.825 4.27801H55.3938C53.1179 4.27801 51.4649 4.99101 50.4348 6.41702C49.4046 7.84302 48.8057 10.2397 48.638 13.607ZM48.638 16.9143L48.6201 17.5255C48.6201 20.3056 49.0333 22.4925 49.8598 24.0863C50.6983 25.6681 51.8422 26.459 53.2916 26.459C54.6452 26.459 55.6992 25.8478 56.4539 24.6255C57.2205 23.3913 57.6038 21.6956 57.6038 19.5386C57.6038 17.5974 57.2804 16.1414 56.6336 15.1708C55.9987 14.1881 55.0404 13.6968 53.7588 13.6968C51.95 13.6968 50.2431 14.7693 48.638 16.9143Z" fill="%23005143"/><path d="M79.5241 29.3349V25.1288L79.8116 24.7334C81.2371 22.828 82.6984 21.2223 84.1957 19.9161L86.3698 17.9928C89.9513 14.8292 91.742 12.0551 91.742 9.67046C91.742 6.89035 90.1609 5.5003 86.9986 5.5003C85.0462 5.5003 82.7823 6.15938 80.2069 7.47753V3.57699C82.914 2.5704 85.5313 2.06711 88.0587 2.06711C90.8856 2.06711 93.1495 2.73817 94.8504 4.08029C96.5513 5.41043 97.4018 7.19593 97.4018 9.43679C97.4018 10.9826 96.9886 12.3907 96.162 13.6609C95.3355 14.9311 93.8802 16.405 91.7959 18.0827L89.9992 19.5207C87.4957 21.5339 86.0104 23.4032 85.5433 25.1288H97.294V29.3349H79.5241Z" fill="%23005143"/><path d="M102.846 29.3349V23.565H108.614V29.3349H102.846Z" fill="%23005143"/><path d="M118.136 15.0809C115.573 13.3913 114.291 11.3541 114.291 8.96944C114.291 6.90833 115.1 5.24266 116.717 3.97244C118.334 2.69023 120.454 2.04913 123.077 2.04913C125.545 2.04913 127.515 2.59437 128.989 3.68484C130.474 4.77531 131.217 6.23128 131.217 8.05273C131.217 10.4014 129.719 12.6243 126.725 14.7214C130.51 16.6986 132.402 19.1851 132.402 22.1809C132.402 24.5177 131.48 26.405 129.635 27.843C127.791 29.281 125.371 30 122.377 30C119.514 30 117.202 29.3409 115.441 28.0228C113.692 26.7046 112.818 24.967 112.818 22.8101C112.818 19.6824 114.591 17.1061 118.136 15.0809ZM123.958 13.2115C125.731 11.8334 126.617 10.3595 126.617 8.78969C126.617 7.75914 126.252 6.93829 125.521 6.32714C124.79 5.70401 123.826 5.39245 122.628 5.39245C121.514 5.39245 120.61 5.66207 119.915 6.20132C119.232 6.74056 118.891 7.44757 118.891 8.32235C118.891 9.18514 119.232 9.94608 119.915 10.6052C120.598 11.2522 121.945 12.121 123.958 13.2115ZM120.76 16.8604C118.831 18.4661 117.867 20.1618 117.867 21.9473C117.867 23.3373 118.346 24.4817 119.304 25.3805C120.274 26.2792 121.502 26.7286 122.988 26.7286C124.293 26.7286 125.383 26.3751 126.258 25.6681C127.144 24.9611 127.587 24.0803 127.587 23.0258C127.587 22.115 127.288 21.3361 126.689 20.689C126.102 20.0419 124.952 19.2331 123.239 18.2624L120.76 16.8604Z" fill="%23005143"/><path d="M146.579 30C143.56 30 141.105 28.7058 139.212 26.1174C137.332 23.5291 136.391 20.1678 136.391 16.0336C136.391 11.8514 137.338 8.47813 139.23 5.91372C141.123 3.34931 143.614 2.06711 146.705 2.06711C149.771 2.06711 152.251 3.34931 154.143 5.91372C156.048 8.46615 157 11.8155 157 15.9617C157 20.2157 156.048 23.6189 154.143 26.1714C152.251 28.7238 149.729 30 146.579 30ZM146.633 26.6747C149.783 26.6747 151.358 23.1276 151.358 16.0336C151.358 8.93949 149.807 5.39245 146.705 5.39245C143.602 5.39245 142.051 8.93349 142.051 16.0156C142.051 23.1216 143.578 26.6747 146.633 26.6747Z" fill="%23005143"/></svg>');
                `.apply(_)
            })
        })
    
        l(_, 'div', _ => {
            l(_, 'p', _ => {
                css`
                    font-family: "Golos Text", regular;
                    font-size: 18px;
                    font-weight: 300;
                    line-height: 1.3;
                    color: #48514F;
                    `.apply(_)
                _.innerText = 'для обратной связи'
            })
    
            l(_, 'p', _ => {
                css`
                    font-family: "Golos Text", regular;
                    font-size: 24px;
                    font-weight: 300;
                    line-height: 1.3;
                    color: #001F19;
                    `.apply(_)
                _.innerText = 'tg: @TrueSql'
            })
    
            l(_, 'p', _ => {
                css`
                    font-family: "Golos Text", regular;
                    font-size: 24px;
                    font-weight: 300;
                    line-height: 1.3;
                    color: #001F19;
                    `.apply(_)
                _.innerText = 'welcome@web280.ru'
            })
    })

    })
    
})

document.body.appendChild(ui)
