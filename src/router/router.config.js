/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [{
        path: '/',
        component: () =>
            import ('@/views/layouts/index'),
        redirect: '/home',
        meta: {
            title: '首页',
            keepAlive: false
        },
        children: [{
                path: '/home',
                name: 'Home',
                component: () =>
                    import ('@/views/home/index'),
                meta: { title: '首页', isNav: true, keepAlive: false }
            },
            {
                path: '/product',
                name: 'Product',
                component: () =>
                    import ('@/views/product/index'),
                meta: { title: '产品列表', keepAlive: false }
            },
            {
                path: '/cart',
                name: 'Cart',
                component: () =>
                    import ('@/views/cart/index'),
                meta: { title: '购物车', keepAlive: false }
            },
            {
                path: '/about',
                name: 'About',
                component: () =>
                    import ('@/views/home/about'),
                meta: { title: '关于我', keepAlive: false }
            },
            {
                path: '/mine',
                name: 'Mine',
                component: () =>
                    import ('@/views/mine/index'),
                meta: { title: '我的', isAuth: false, keepAlive: true }
            },

        ],
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('@/views/login/login'),
        meta: {
            title: '登录',
        },
    },
    {
        path: '*',
        name: '404',
        component: () =>
            import ('@/views/layouts/404'),
    },
]