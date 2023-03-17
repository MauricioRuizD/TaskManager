import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LoginView from '@/components/login-view/loginView.vue'
import TaskView from '@/components/task-list-view/taskView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: LoginView
  },
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/task',
    name: 'task',
    component: TaskView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router