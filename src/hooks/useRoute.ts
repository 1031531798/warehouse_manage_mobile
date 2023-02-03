import {routePage, RouteProp} from "../../router";
import {isString} from "@/utils/is";

/**
 * @description 获取当前route对象
 * @param path
 */
export function getRoutePage (path: string): RouteProp {
    let notFindPage = {
        path: '404',
        name: '路由不存在'
    }
    if (isString(path)) {
         return routePage.find(item => item.path === path) || notFindPage
    }
    return notFindPage
}
