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
        path: '/market',
        name: '销售',
    },
    {
        path: '/storage',
        name: '入库',
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
