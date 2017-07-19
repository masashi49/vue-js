import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello'
import vuesan from '@/components/vue-san'
import vueyon from '@/components/vue-yon'

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
    }
  ]
})
