import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Cart from '../views/Cart.vue'
import Tabs from '../layouts/TabsLayout.vue'
import Dashboard from '../views/Dashboard.vue'
import Forms from '../views/Forms.vue'
import Tables from '../views/Tables.vue'
import UIElements from '../views/UIElements.vue'
import Login from '../views/Login.vue'
import Modal from '../views/Modal.vue'
import Card from '../views/CardView.vue'
import Blank from '../views/BlankView.vue'
import NotFound from '../views/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { layout: 'Empty' },
  },
  {
    path: '/tabs/',
    component: Tabs,
    meta: { layout: 'Tabs' },
    children: [
      {
        path: '',
        redirect: '/tabs/home',
      },
      {
        path: 'home',
        component: Home,
      },
      {
        path: 'about',
        component: About,
      },
      {
        path: 'cart',
        component: Cart,
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { layout: 'Dashboard' },
    // children: [
  },
  {
    path: '/forms',
    name: 'Forms',
    component: Forms,
    meta: { layout: 'Dashboard' },
  },
  {
    path: '/cards',
    name: 'Cards',
    component: Card,
    meta: { layout: 'Dashboard' },
  },
  {
    path: '/tables',
    name: 'Tables',
    component: Tables,
    meta: { layout: 'Dashboard' },
  },
  {
    path: '/ui-elements',
    name: 'UIElements',
    component: UIElements,
    meta: { layout: 'Dashboard' },
  },
  {
    path: '/modal',
    name: 'Modal',
    component: Modal,
    meta: { layout: 'Dashboard' },
  },
  {
    path: '/blank',
    name: 'Blank',
    component: Blank,
    meta: { layout: 'Dashboard' },
  },
  // ],
  // },
  { path: '/:pathMatch(.*)*', component: NotFound, meta: { layout: 'Dashboard' } },
]

// https://vitejs.dev/guide/env-and-mode.html
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL ?? process.env.BASE_URL),
  routes,
})

export default router
