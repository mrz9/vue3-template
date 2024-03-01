import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import Demo from '@/views/demo/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:locale',
    name: 'root',
    component: Layout,
    redirect: { name: 'Demo' },
    children: [
      {
        path: 'demo',
        name: 'Demo',
        component: Demo,
        meta: {
          title: 'home',
        },
      },
      {
        path: 'tools',
        name: 'Tools',
        component: () => import('@/views/tools/index.vue'),
        meta: {
          title: 'Tools',
        },
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/about/index.vue'),
        meta: {
          title: 'About',
          noCache: true,
        },
      },
    ],
  },
]

export default routes
