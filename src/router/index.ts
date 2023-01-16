import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/experience',
      name: 'experience',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ExperienceView.vue')
    },
    {
      path: '/education',
      name: 'Education',
      component: () => import('../views/EducationView.vue')
    },
    {
      path: '/skills',
      name: 'Skills',
      component: () => import('../views/SkillsView.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404Page.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
      next({ name: '404' })
  } else {
      next()
  }
})

export default router
