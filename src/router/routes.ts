import { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomePage/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home-page',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login-page',
    meta: {
      title: '登录',
    },
    component: () =>
      import(/* webpackChunkName: "Login" */ '../views/LoginPage/index.vue'),
  },
  {
    path: '/vueuse',
    name: 'vue-use',
    meta: {
      title: 'VueUse',
    },
    component: () =>
      import(/* webpackChunkName: "Login" */ '../views/VueusePage/index.vue'),
  },
  {
    path: '/about',
    name: 'about-page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutPage/index.vue'),
  },
]

export default routes
