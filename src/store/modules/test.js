import apiService from "@/services/apiServices.js";

export default {
  namespaced: true,
  state: {
    tests: [],
    test: {},
    perPage: 3,
  },
  getters: {
    getTestById: (state) => (id) => {
      return state.tests.find((test) => test.id === id);
    },
  },
  mutations: {
    ADD_TEST(state, test) {
      state.tests.push(test);
    },
    SET_TESTS(state, tests) {
      state.tests = tests;
    },
    SET_TEST(state, test) {
      state.test = test;
    },
  },
  actions: {
    fetchTests({ commit, state }, { page }) {
      return apiService
        .getTests(state.perPage, page)
        .then((response) => {
          commit("SET_TESTS", response.data);
        })
        .catch((error) => console.log(error.message));
    },
    fetchTest({ commit, getters, state }, id) {
      if (id == state.test.id) {
        return state.test;
      }

      const test = getters.getTestById(id);

      if (test) {
        commit("SET_TEST", test);
        return test;
      } else {
        return apiService.getTest(id).then((response) => {
          commit("SET_TEST", response.data);
          return response.data;
        });
      }
    },
  },
};
