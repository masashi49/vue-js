import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello'
import vuesan from '@/components/vue-san'
import vueyon from '@/components/vue-yon'
import vueyontwo from '@/components/vue-yon2'
import vueyonthree from '@/components/vue-yon3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/vuesan',
      name: 'vuesan',
      component: vuesan
    },
    {
      path: '/vueyon',
      name: 'vueyon',
      component: vueyon
    },
    {
      path: '/vueyontwo',
      name: 'vueyontwo',
      component: vueyontwo
    },
    {
      path: '/vueyonthree',
      name: 'vueyonthree',
      component: vueyonthree
    }
  ]
})
