import type { Router } from 'vue-router'

/**
 * 通用守卫配置
 * @param router
 */
function setupCommonGuard(router: Router) {
  router.beforeEach(async (_to) => {
    return true
  })

  router.afterEach((_to) => {

  })
}

/**
 * 权限访问守卫配置
 * @param router
 */
function setupAccessGuard(router: Router) {
  router.beforeEach(async (_to, _from) => {
  })
}

/**
 * 项目守卫配置
 * @param router
 */
function createRouterGuard(router: Router) {
  /** 通用 */
  setupCommonGuard(router)
  /** 权限访问 */
  setupAccessGuard(router)
}

export { createRouterGuard }
