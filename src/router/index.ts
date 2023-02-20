import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LoginView from '@/components/login-view/loginView.vue'
import LoginLayout from '@/components/login-layout/loginLayout.vue'
import TaskView from '@/components/task-list-view/taskView.vue'
import SidebarView from '@/components/side-bar/sidebarView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: LoginLayout,
    children: [
      { path: '', component: LoginView }
    ]
  },
  {
    path: '/app',
    component: SidebarView,
    children: [
      { path: '', component: TaskView },
      { path: 'task', component: TaskView }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
