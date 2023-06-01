import Vue from 'vue';
import App from '@/App.vue';
import { m1 } from '@/mixin';

Vue.config.productionTip = false;
Vue.mixin(m1);

new Vue({
  el: '#app',
  render(createElement) {
    return createElement(App);
  }
});