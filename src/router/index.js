import { createRouter, createWebHistory } from 'vue-router'

import baseRoutes from './base'

//HOME / NASZA WIZJA / PRACOWNIE / OFERTA / KALENDARZ / REGULAMIN / KONTAKT

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [].concat(baseRoutes),
})

export default router
