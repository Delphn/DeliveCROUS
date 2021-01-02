import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/dishes/:id',
    name: 'DishDetails',
    component: () => import('../views/DishDetails.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
