<template>
  <section class="sidebar">
    <!-- <div class="sidebar__block">
      <p class="sidebar__title" v-html="sidebar.title"></p>
      <div
        :class="['sidebar__token', token.class]"
        v-for="(token, j) in sidebar.tokens"
        :key="j"
      >
        <div class="sidebar__token-img">
          <img :src="token.src" :alt="token.alt" />
        </div>
        <p class="sidebar__token-price" v-html="'$' + token.price"></p>
      </div>
    </div> -->


    <!-- <div
      :class="['sidebar__ad', ad.class]"
      v-for="(ad, i) in sidebar.ads"
      :key="i"
    >
      <img :src="ad.src" :alt="ad.alt" />
    </div> -->
  </section>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    sidebar: {
      type: Object,
    },
  },
}
</script>

<style></style>
