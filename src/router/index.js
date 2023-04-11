import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/views/layouts/main/MainLayout.vue'

const HomePage = () => import('@/views/pages/home/HomePage.vue')
const ServicePage = () => import('@/views/pages/service/ServicePage.vue')
const ContactPage = () => import('@/views/pages/contact/ContactPage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage
        },
        {
          path: '/service',
          name: 'service',
          component: ServicePage
        },
        {
          path: '/contact',
          name: 'contact',
          component: ContactPage
        },
      ]
    },
  ]
})

export default router
