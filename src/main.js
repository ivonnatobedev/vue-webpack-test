// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import vSelect from 'vue-select';
import Main from './components/main';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;
Vue.component('v-select', vSelect);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(Main)
  /*template: '<Main/>',
  components: { Main },*/
});
