/* eslint-disable no-console */

import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then((registration) => {
        console.log(`Service Worker registered! Scope: ${registration.scope}`);
      })
      .catch((err) => {
        console.log(`Service Worker registration failed: ${err}`);
      });
  });
}
