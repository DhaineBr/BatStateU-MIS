import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/landing-page.vue';
import mainmenuVue from '@/components/pages/mainmenu.vue';

import profileVue from '@/components/pages/profile/profile.vue';
import pbbdashboardVue from '@/components/pages/profile/pbbdashboard.vue';

import dashboardVue from '@/components/pages/dashboard/dashboard.vue';
import overviewVue from '@/components/pages/dashboard/overview.vue';
import qsstarsVue from '@/components/pages/dashboard/qsstars.vue';
import theVue from '@/components/pages/dashboard/the.vue';
import scopusVue from '@/components/pages/dashboard/scopus.vue';
import altmetricVue from '@/components/pages/dashboard/altmetric.vue';
import misfactbookVue from '@/components/pages/dashboard/misfactbook.vue';
import studentfactbookVue from '@/components/pages/dashboard/studentfactbook.vue';

import datasetVue from '@/components/pages/dataset/dataset.vue';

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
            render: () => null, 
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
              component: profileVue,
            },
            {
              path: 'landing/pbbdashboard',
              name: 'pbbdashboard',
              component: pbbdashboardVue
            },
            {
              path: '/landing/dashboard',
              name: 'dashboard',
              component: dashboardVue,
              children: [
                {
                  path: '/landing/dashboard/overview',
                  name: 'overview',
                  component: overviewVue
                },
                {
                  path: '/landing/dashboard/qsstars',
                  name: 'qsstars',
                  component: qsstarsVue
                },
                {
                  path: '/landing/dashboard/the',
                  name: 'the',
                  component: theVue
                },
                {
                  path: '/landing/dashboard/scopus',
                  name: 'scopus',
                  component: scopusVue
                },
                {
                  path: '/landing/dashboard/altmetric',
                  name: 'altmetric',
                  component: altmetricVue
                },
                {
                  path: '/landing/dashboard/misfactbook',
                  name: 'misfactbook',
                  component: misfactbookVue
                },
                {
                  path: '/landing/dashboard/studentfactbook',
                  name: 'studentfactbook',
                  component: studentfactbookVue
                }
              ]
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
              path: '/landing/offices',
              name: 'offices',
              component:  officesVue
            },
            {
              path: '/landing/mainmenu',
              name: 'mainmenu',
              component:  mainmenuVue
            }
          ]
        },
      ],
    },
  ],
});

export default router;
