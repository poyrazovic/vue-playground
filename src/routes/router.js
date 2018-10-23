import Vue from 'vue';
import Router from 'vue-router';

import Login from '../components/Login.vue';
import Dashboard from '../container/Dashboard.vue';
import Users from '../container/Users.vue';
import Profile from '../container/Profile.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login,
      meta: {
        title: 'Login - Vue Playground',
      },
    },
    {
      path: '/dashboard',
      component: Dashboard,
      meta: {
        title: 'Dashboard - Vue Playground',
        layout: 'default',
      },
    },
    {
      path: '/users',
      component: Users,
      meta: {
        title: 'Users - Vue Playground',
        layout: 'default',
      },
    },
    {
      path: '/user/:id',
      component: Profile,
      meta: {
        title: 'Profile - Vue Playground',
        layout: 'default',
      },
      children: [

      ]
    },
    { path: '*', redirect: '/dashboard' },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  const publicPages = ['/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (authRequired && !loggedIn) {
    return next('/');
  }

  next();
  return '';
});
