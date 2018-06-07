import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from './theme/Category.vue'
import Login from './themes/Login.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    component: Category
  }]
})

export default router
