import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/landing-page.vue';
import mainmenuVue from '@/components/pages/mainmenu.vue';

import profileVue from '@/components/pages/profile/profile.vue';
import pbbdashboardVue from '@/components/pages/profile/pbbdashboard.vue';

import dashboardVue from '@/components/pages/dashboard/dashboard.vue';
import overviewVue from '@/components/pages/dashboard/overview.vue';

import qsStarsVue from '@/components/pages/dashboard/qsStars.vue';
import theVue from '@/components/pages/dashboard/the.vue';
import scopusVue from '@/components/pages/dashboard/scopus.vue';
import altmetricVue from '@/components/pages/dashboard/altmetric.vue';
import misfactbookVue from '@/components/pages/dashboard/misFactbook.vue';
import studentfactbookVue from '@/components/pages/dashboard/studentFactbook.vue';

import datasetVue from '@/components/pages/dataset/dataset.vue';
import databaseVue from '@/components/pages/dataset/database.vue';

import officesVue from '@/components/pages/offices/offices.vue';
import kistParkvue from '@/components/pages/offices/kistPark.vue';

import pbb from '@/components/pages/pbb/pbb.vue';
import statusDashboardVue from '@/components/pages/pbb/statusDashboard.vue';
import submissionsVue from '@/components/pages/pbb/submissions.vue';
import adminVue from '@/components/pages/pbb/admin.vue';

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
                  component: overviewVue,
                },
                {
                  path: '/landing/dashboard/qsstars',
                  name: 'qsstars',
                  component: qsStarsVue
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
              ]
            },
            {
              path: '/landing/students',
              name: 'students',
              component: studentfactbookVue
            },
            {
              path: '/landing/dataset',
              name: 'dataset',
              component: datasetVue
            },
            {
              path: '/landing/database',
              name: 'database',
              component: databaseVue
            },
            {
              path: '/landing/pbb',
              name: 'pbb',
              component: pbb,
              children: [
                {
                  path: '/landing/pbb/status-dashboard',
                  name: 'status-dashboard',
                  component: statusDashboardVue
                },
                {
                  path: '/landing/pbb/submissions',
                  name: 'submissions',
                  component: submissionsVue
                },
                {
                  path: '/landing/pbb/admin',
                  name: 'admin',
                  component: adminVue
                },
              ]
            },
            {
              path: '/landing/offices',
              name: 'offices',
              component:  officesVue,
            },
            {
              path: '/landing/ksit-park-development-office',
              name: 'ksitPark',
              component: kistParkvue
            },
            {
              path: '/landing/mainmenu',
              name: 'mainmenu',
              component:  mainmenuVue
            },
          ]
        },
      ],
    },
  ],
});

export default router;
