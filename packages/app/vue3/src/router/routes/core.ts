import type { RouteRecordRaw } from 'vue-router'

/** 全局404页面 */
// const fallbackNotFoundRoute: RouteRecordRaw = {
//   component: () => import('@/views/_core/fallback/not-found.vue'),
//   meta: {
//     hideInBreadcrumb: true,
//     hideInMenu: true,
//     hideInTab: true,
//     title: '404',
//   },
//   name: 'FallbackNotFound',
//   path: '/:path(.*)*',
// }

/** 基本路由，这些路由是必须存在的 */
const coreRoutes: RouteRecordRaw[] = [
  {
    meta: {
      title: 'Root',
    },
    name: 'Root',
    path: '/',
    redirect: '/analytics',
  },
]

export { coreRoutes }
