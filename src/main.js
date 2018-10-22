import Vue from 'vue';
import { router } from './routes/router';
import { store } from './stores';
import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
});
