import { services } from '../client/services';

const state = {
  loading: false,
  data: {},
  page: 1,
  user: {},
};

const actions = {
  users({ commit }, page) {
    commit('userListRequest', page);
    services.users(page)
      .then((res) => {
        commit('userListSuccess', res);
      })
      .catch((err) => {
        commit('userListFailure', err);
      });
  },
  userDetail({ commit }, userId) {
    commit('userRequest');
    services.getUser(userId)
      .then((res) => {
        commit('userSuccess', res);
      })
      .catch((err) => {
        commit('userFailure', err);
      });
  },
};

const mutations = {
  userListRequest(state) {
    state.data = {};
    state.loading = true;
  },
  userListSuccess(state, data) {
    state.data = data;
    state.loading = false;
  },
  userListFailure(state) {
    state.data = {};
    state.loading = false;
  },
  userRequest(state) {
    state.user = {};
    state.loading = true;
  },
  userSuccess(state, user) {
    state.user = user;
    state.loading = false;
  },
};

export const users = {
  namespaced: true,
  state,
  actions,
  mutations,
};
