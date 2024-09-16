import BasicLayout from '@/layouts/index.vue'
import type { RouteRecordRaw } from 'vue-router'

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
