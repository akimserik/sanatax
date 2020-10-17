import Vue from "vue";
import Vuex from "vuex";
import test from "@/store/modules/test.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    test,
  },
});
