<template>
  <div class="collections">
    <div class="container">
      <h1 v-html="title"></h1>
      <div class="collections__inner">
        <div class="sales__lists"></div>
        <Sidebar :sidebar="sidebar"></Sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import Blocks from '@/components/Blocks'
import Sidebar from '@/components/Sidebar'
export default {
  name: 'Collections',
  components: { Blocks, Sidebar },
  data() {
    return {
      title: 'Top Collections',
      sidebar: {
        title: 'Exchange tokens at ',
        ads: [
          {
            class: 'sidebar__ad--big',
            src: require('@/assets/images/ad1.jpg'),
            alt: 'ad',
          },
          {
            class: 'sidebar__ad--small',
            src: require('@/assets/images/ad2.jpg'),
            alt: 'ad',
          },
        ],
        tokens: [
          {
            src: require('@/assets/images/bc.png'),
            alt: 'token price',
            price: '59.079.00',
            class: 'sidebar__token--bc',
          },
          {
            src: require('@/assets/images/eth.png'),
            alt: 'token price',
            price: '4,379.00',
            class: 'sidebar__token--eth',
          },
        ],
      },
    }
  },
}
</script>

<style></style>
