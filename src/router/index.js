import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

import HelloWorld from '@/views/subdisplays/HelloWorld.vue'
import Callendarium from '@/views/subdisplays/Callendarium.vue'
import SocmedTest from '@/views/subdisplays/SocmedTest.vue'
// import LogoTest from '@/views/subdisplays/LogoTest.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld,
    },
    {
      path: '/contact',
      name: 'contact',
      component: SocmedTest,
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Callendarium,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: LogoTest,
    // }
  ],
})

export default router
