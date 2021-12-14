import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import TopCollections from '@/views/TopCollections'
import NewsPage from '@/views/NewsPage'
import NewsDetails from '@/views/NewsDetails'
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
      component: NewsPage,
      meta: {
        title: 'NFT news',
        description: '',
      },
    },
    {
      path: '/news-details',
      name: 'News details',
      component: NewsDetails,
      meta: {
        title: 'News details',
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
