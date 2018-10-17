import Vue from 'vue';
import Router from 'vue-router';

import Login from '../components/Login.vue';
import Dashboard from '../container/Dashboard.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Login },
    { path: '/dashboard', component: Dashboard },

    // otherwise redirect to home
    { path: '*', redirect: '/dashboard' },
  ],
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (authRequired && !loggedIn) {
    return next('/');
  }

  next();
});
