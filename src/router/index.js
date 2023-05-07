import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass:  "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',      
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: () => import('../views/PokemonsView.vue')
    },
    {
      path: '/pokemons/:pokename',
      name: 'pokename',
      component: () => import('../views/PokeView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'pagenotfound',
      component: () => import('../views/NotFoundView.vue')
    },
    
  ]
})

export default router
