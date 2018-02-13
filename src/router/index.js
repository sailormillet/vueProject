import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    //{
    //  path: '/',
    //  name: 'HelloWorld',
    //  component: HelloWorld
    //
    //},
    {
      path: '/',
      name: 'HelloWorld',
      component:  (resolve) => { require(['@/components/HelloWorld'], resolve) }

    },
    {
      path: '/toast',
      name: 'toast',
      component: resolve => require(['@/components/toast'], resolve)
    },
    {
      path: '/loading',
      name: 'loading',
      component: resolve => require(['@/componentsUI/loading'], resolve)
    }
  ]
})
