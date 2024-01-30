import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/landing-page.vue';
import AppVue from '@/App.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppVue,
      children: [
        {
          path: '',
          name: 'login',
          component: {
            render: () => null, // Render nothing for the parent route
          },
        },
        {
          path: 'landing',
          name: 'landing',
          component: LandingPage,
        },
      ],
    },
  ],
});

export default router;
