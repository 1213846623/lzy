import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/首页',
      name: 'shouye',
      component: ()=>import("@/components/children/shouYe")
    }
  ]
})
