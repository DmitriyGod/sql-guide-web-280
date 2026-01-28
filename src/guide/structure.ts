import type { ModuleTopicNav } from "../ModuleNav";
import { Page } from "../Page";
import { about } from "./units/about";
import { modules_page } from "./units/modules";
import { char } from "./units/types/char";
import { digits } from "./units/types/digits";
import { enums } from "./units/types/enums";
import { logical } from "./units/types/logical";
import { nulls } from "./units/types/null";
import { time } from "./units/types/time";
import { uuid } from "./units/types/uuid";

export const baseLink = '#/'
export const linkToModules = baseLink +  'modules'
export const linkToAbout = baseLink +  'about'
export const linkToModule = baseLink + 'module/'


export class GuideStructure {
    readonly guideStructure = new Map<string, {page: () => Promise<Page>, name?: string}>()
    readonly modules = new Map<string, string>()
    readonly navModuleMap = new Map<string, ModuleTopicNav[]>();

    constructor() {

    }

    public async init(): Promise<void> {
        this.guideStructure.set(linkToAbout, {page: async () => new Page("О курсе", about)})
        this.guideStructure.set(linkToModules, {page: async () => new Page("Список модулей", modules_page)})
        
        const typesModuleLink = linkToModule + 'types/'
        this.modules.set(typesModuleLink, 'Типы данных & STDLIB')
        
        this.guideStructure.set(typesModuleLink + 'logical', {page: async () => new Page("Логический тип", logical), name: "Логический тип"})
        this.guideStructure.set(typesModuleLink + 'nulls', {page: async () => new Page("NULL-значение", nulls), name: "NULL-значение"})
        this.guideStructure.set(typesModuleLink + 'digits', {page: async () => new Page("Типы чисел", digits), name: "Типы чисел"})
        this.guideStructure.set(typesModuleLink + 'char', {page: async () => new Page("Символьные типы", char), name: "Символьные типы"})
        this.guideStructure.set(typesModuleLink + 'enum', {page: async () => new Page("Перечисления", enums), name: "Перечисления"})
        this.guideStructure.set(typesModuleLink + 'time', {page: async () => new Page("Типы времени", time), name: "Типы времени"})
        this.guideStructure.set(typesModuleLink + 'uuid', {page: async () => new Page("Universally Unique IDentifier", uuid), name: "Universally Unique IDentifier"})
    
        //create navbar map
        this.modules.forEach((k, v) => {
            const topics: ModuleTopicNav[] = []
            console.log(k, v)
            this.guideStructure.forEach((pd, topicRoute) => {
                if (topicRoute.startsWith(k)) {
                    topics.push({name: pd.name!, link: topicRoute})
                }
            })
            this.navModuleMap.set(this.modules.get(k)!, topics)
        })
    }
}

