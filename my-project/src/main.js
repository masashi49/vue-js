// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

/* eslint-disable no-new */


//グローバルにコンポーネントを定義
Vue.component('my-components', {
  template: `<div class="normalnormalnormal">
    <p>my-componentsのpタグ{{ message }}{{ message }}{{ message }}{{ message }}{{ message }}{{ message }}</p>
  </div><p>a</p><p>b</p>`,
  data: function() {
    return {
      message: 'hello!!!!'
    }
  }
});


Vue.component('child-comp', {
  template: '<p>{{ kuma }}</p>',
  props: ['kuma']
})




//グローバルにコンポーネントを定義
Vue.component('child', {
  template: `<div class="normalnormalnormal">{{ aaa }}{{ message }}だよ</div>`,
  props: ['aaa'],
  data: function() {
    return {
      message: `くまーくまー`
    }
  }
});

Vue.component('child-comp-on', {
  template: '<button @click="$emit(\'childs-event\', message)">click!</button>',
  data: function () {
    return {
      message: 'わんわん！'
    }
  }
})


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },

})
