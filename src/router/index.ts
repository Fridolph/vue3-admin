import { createRouter, createWebHashHistory } from 'vue-router'

// 公开路由表
import publicRoutes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes,
})

export default router
