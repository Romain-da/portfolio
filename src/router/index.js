import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
//import Portfolio from '../components/Portfolio.vue';
import ContactForm from '../components/ContactForm.vue';

const routes = [
  { path: '/', component: Home },
  //{ path: '/portfolio', component: Portfolio },
  { path: '/contact', component: ContactForm }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
