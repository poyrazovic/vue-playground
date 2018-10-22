import { services } from '../client/services';
import { router } from '../routes/router';

const user = localStorage.getItem('token');
const state = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null };

const actions = {
  login({ dispatch, commit }, { username, password }) {
    commit('loginRequest', { username });

    services.login(username, password)
      .then(
        (userData) => {
          commit('loginSuccess', userData);
          router.push('/dashboard');
        },
        (error) => {
          commit('loginFailure', error);
          dispatch('alert/error', error, { root: true });
        },
      );
  },
  logout({ commit }) {
    services.logout();
    commit('logout');
  },
};

const mutations = {
  loginRequest(state, userData) {
    state.status = { loggingIn: true };
    state.user = userData;
  },
  loginSuccess(state, userData) {
    state.status = { loggedIn: true };
    state.user = userData;
  },
  loginFailure(state) {
    state.status = {};
    state.user = null;
  },
  logout(state) {
    state.status = {};
    state.user = null;
  },
};

export const login = {
  namespaced: true,
  state,
  actions,
  mutations,
};
