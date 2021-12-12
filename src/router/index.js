import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import TopCollections from '@/views/TopCollections'
import News from '@/views/News'
import Form from '@/views/Form'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Metaverse',
        description: '',
      },
    },
    {
      path: '/news',
      name: 'NFT news',
      component: News,
      meta: {
        title: 'NFT news',
        description: '',
      },
    },
    {
      path: '/topcollections',
      name: 'TopCollections',
      component: TopCollections,
      meta: {
        title: 'Top collections',
        description: '',
      },
    },
    {
      path: '/form',
      name: 'Form',
      component: Form,
      meta: {
        title: 'Form',
        description: '',
      },
    },
  ],
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    }
  },
})
