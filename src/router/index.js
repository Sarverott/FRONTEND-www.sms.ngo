import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

import HelloWorld from '@/views/subdisplays/HelloWorld.vue'
import Callendarium from '@/views/subdisplays/Callendarium.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld,
    },
    {
      path: '/kalendarz',
      name: 'kalendarz',
      component: Callendarium,
    }
  ],
})

export default router
