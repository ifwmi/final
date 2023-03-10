import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Examination from '../components/Examination.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Examination',
      name: 'Examination',
      component: Examination
    },
  ]
})

export default router
