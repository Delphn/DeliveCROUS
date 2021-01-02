import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'

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
<<<<<<< HEAD
    path: '/cart',
    name: 'Cart',
    component: Cart
=======
    path: '/dishes/:id',
    name: 'DishDetails',
    component: () => import('../views/DishDetails.vue'),
    props: true
>>>>>>> be9d1b902548d8127ada87f63ee0c3a24a1f4b6d
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
