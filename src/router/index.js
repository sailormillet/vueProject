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
      path: '/alertMessage',
      name: 'alertMessage',
      component: resolve => require(['@/components/alertMessage/index'], resolve)
    }
  ]
})
