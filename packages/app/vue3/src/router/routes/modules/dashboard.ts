import type { RouteRecordRaw } from 'vue-router'
import BasicLayout from '@/layouts/index.vue'

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      order: -1,
      title: 'dashboard',
    },
    name: 'Dashboard',
    path: '/',
    children: [
      {
        name: 'Analytics',
        path: '/analytics',
        component: () => import('@/views/dashboard/analytics/index.vue'),
        meta: {
          title: 'analytics',
        },
      },
    ],
  },
]

export default routes
