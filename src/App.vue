<template>
  <div id="__app">
    <notifications group="app-notifications" />
    <Sprite />
    <div
      :class="[
        'default-layout',
        $route.path === '/topcollections'
          ? 'default-layout--violet'
          : '' || $route.path === '/form'
          ? 'default-layout--white'
          : '' || $route.path === '/news-details'
          ? 'default-layout--white'
          : '',
      ]"
    >
      <div class="wrapper">
        <Header />

        <router-view />
      </div>
      <Footer
        :class="[
          $route.path === '/topcollections'
            ? 'footer--violet'
            : '' || $route.path === '/form'
            ? 'footer--white'
            : '' || $route.path === '/news-details'
            ? 'footer--white'
            : '',
        ]"
      />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Sprite from '@/components/Sprite.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Sprite,
    Footer
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
