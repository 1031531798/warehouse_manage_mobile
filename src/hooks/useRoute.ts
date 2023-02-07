import {routePage, RouteProp} from "../router";
import {isString} from "@/utils/is";
import {useRouter} from "next/router";

/**
 * @description 获取当前route对象
 * @param path
 */
export function getRoutePage (path: string): RouteProp {
    const defaultRoute: RouteProp = {
        path: '404',
        name: '路由不存在'
    }
    let route: RouteProp = defaultRoute
    let routeList: RouteProp[] = routePage
    if (isString(path)) {
        const pathList = path.split('/').slice(1)
        for (const element of pathList) {
            route = routeList.find(r => r.path === '/' + element) || defaultRoute
            route.children && (routeList = route.children)
        }
    }
    return route
}

export function useRouterBack () {
    const router = useRouter()
    const back = () => {
        router.back()
    }
    return {
        back
    }
}
