export type RouteProp = {
    path: string,
    fullPath?: string
    name: string,
    hideHeader?: boolean // 是否隐藏页头
    hideNavigation?: boolean // 是否隐藏底部导航
    children?: RouteProp[]
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
        children: [
            {
                path: '/good',
                name: '商品',
                fullPath: '/storage/good'
            }
        ]
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
