import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import ContactForm from '../components/ContactForm.vue'
import Portfolio from '../components/Portfolio.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: ContactForm },
  { path: '/contact', component: Portfolio }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
