import Vuex from 'vuex';
import Vue from 'vue';
import modules from './modules/index';

Vue.use(Vuex);
const strictMode = process.env.NODE_ENV !== 'production';
const store = new Vuex.Store({
  strict: strictMode,
  modules: {
    ...modules
  }
});

export default store;
