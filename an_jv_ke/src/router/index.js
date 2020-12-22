import Vue from 'vue'
import VueRouter from 'vue-router'
import QuanBu from '../views/QuanBu'
import ReMen from '../views/ReMen'
import KanFang from '../views/KanFang'
import login from '../views/login'
import 注册 from '../views/注册'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'QuanBu',
    component: QuanBu
  },
  {
    path: '/001',
    name: 'ReMen',
    component: ReMen
  },
  {
    path: '/002',
    name: 'KanFang',
    component: KanFang
  },
  {
    path: '/003',
    name: 'login',
    component: login
  },
  {
    path: '/004',
    name: '注册',
    component: 注册
  }
]

const router = new VueRouter({
  routes
})

export default router
