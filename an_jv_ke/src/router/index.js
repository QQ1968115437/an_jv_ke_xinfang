import Vue from 'vue'
import VueRouter from 'vue-router'
import QuanBu from '../views/QuanBu'
import ReMen from '../views/ReMen'
import KanFang from '../views/KanFang'
import FangYuan from '../views/FangYuan'

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
    name: 'FangYuan',
    component: FangYuan
  }
]

const router = new VueRouter({
  routes
})

export default router
