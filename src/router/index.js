import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/landing-page.vue';
import profileVue from '@/components/pages/profile.vue';
import dashboardVue from '@/components/pages/dashboard.vue';
import datasetVue from '@/components/pages/dataset.vue';
import officesVue from '@/components/pages/offices.vue';
import pbbVue from '@/components/pages/pbb.vue';
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
          path: '/landing',
          name: 'landing',
          component: LandingPage,
          children: [
            {
              path: '/landing/profile',
              name: 'profile',
              component: profileVue
            },
            {
              path: '/landing/dashboard',
              name: 'dashboard',
              component: dashboardVue
            },
            {
              path: '/landing/dataset',
              name: 'dataset',
              component: datasetVue
            },
            {
              path: '/landing/pbb',
              name: 'pbb',
              component: pbbVue
            },
            {
              path: '/landing/offices'
              name: 'offices',
              component:  officesVue
            }
          ]
        },
      ],
    },
  ],
});

export default router;
