import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import TopCollections from '@/views/TopCollections'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Creeps | NFT Collection of 6,666 wicked pumpkins',
        description: 'The Creeps is a NFT Collection of 6,666 unique PFP Halloween characters that are taking over Ethereum Blockchain',
      },
    },
    {
      path: '/presale',
      name: 'Presale',
      component: Home,
      meta: {
        title: 'Creeps | NFT Collection of 6,666 wicked pumpkins',
        description: 'The Creeps is a NFT Collection of 6,666 unique PFP Halloween characters that are taking over Ethereum Blockchain',
      },
    },
    {
      path: '/topcollections',
      name: 'TopCollections',
      component: TopCollections,
      meta: {
        title: 'Top collections',
        description: ''
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