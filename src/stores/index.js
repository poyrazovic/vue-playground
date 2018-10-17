import Vue from 'vue';
import Vuex from 'vuex';

import { login } from './login-store';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    login,
  },
});
