import Vue from 'vue';
import Vuex from 'vuex';

import { login } from './login-store';
import { users } from './users-store';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    login,
    users,
  },
});
