// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

/* eslint-disable no-new */


//グローバルにコンポーネントを定義
Vue.component('my-components', {
  template: `<div class="normal">
    <p>テンプレート</p>
    <p>テンプレート</p>
  </div>`
});


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
})
