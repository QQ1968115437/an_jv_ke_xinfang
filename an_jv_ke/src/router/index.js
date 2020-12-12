import Vue from 'vue'
import VueRouter from 'vue-router'
import QuanBu from '../views/QuanBu.vue'
import ReMen from '../views/ReMen.vue'
import 测试 from '../views/测试.vue'

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
    name: '测试',
    component: 测试
  }
]

const router = new VueRouter({
  routes
})

export default router
