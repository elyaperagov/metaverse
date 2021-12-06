<template>
  <div id="__app">
    <notifications group="app-notifications" />
    <Sprite />
    <div class="default-layout">
      <div class="wrapper">
        <Header />

        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Sprite from '@/components/Sprite.vue'

export default {
  name: 'App',
  components: {
    Header,
    Sprite,
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
