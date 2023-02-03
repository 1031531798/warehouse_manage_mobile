export type RouteProp = {
    path: string,
    name: string,
    hideHeader?: boolean
    hideNavigation?: boolean
}

export const routePage: RouteProp[] = [
    {
        path: '/home',
        name: '首页',
    },
    {
        path: '/task',
        name: '任务',
    },
    {
        path: '/user',
        name: '我的',
    },
    {
        path: '/login',
        name: '登录',
        hideHeader: true,
        hideNavigation: true
    }
]
