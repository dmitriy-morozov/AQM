/* eslint-disable */

import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import 'slick-carousel/slick/slick.css'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    consultModal: false
  },
  mutations: {
    toggleModal (state) {
      state.consultModal = !state.consultModal;
    }
  }
});



new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
});



