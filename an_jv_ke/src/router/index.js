import Vue from 'vue'
import VueRouter from 'vue-router'
import QuanBu from '../views/QuanBu.vue'
import ReMen from '../views/ReMen.vue'
import KanFang from '../views/KanFang.vue'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
