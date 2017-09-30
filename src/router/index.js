import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/contents/Home'
import About from '@/components/contents/About'
import Shopping from '@/components/contents/Shopping/Shopping'

import Item1 from '@/components/headers/Item1'
import Item2 from '@/components/headers/Item2'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home/:item',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'item1/:id',
          name: 'item1',
          components: {
            default: Item1,
            a: Item2
          }
        },
        {
          path: 'item2',
          name: 'item2',
          component: Item2
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      // redirect: {name: 'shopping'},
      component: About
    },
    {
      path: '/shopping',
      name: 'shopping',
      alias: '/about',
      component: Shopping
    }
  ]
})
