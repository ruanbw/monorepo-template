import { createRouter, createWebHistory } from 'vue-router'
import { coreRoutes, dynamicRoutes } from '@/router/routes'
import { createRouterGuard } from '@/router/guard'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...coreRoutes,
    ...dynamicRoutes,
  ],
})

// 创建路由守卫
createRouterGuard(router)

export default router
