import Vue from 'vue'
import VueRouter from 'vue-router'
import QuanBu from '../views/QuanBu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'QuanBu',
    component: QuanBu
  },
]

const router = new VueRouter({
  routes
})

export default router
