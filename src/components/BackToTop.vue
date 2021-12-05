<template>
  <div class="toTop" :class="{ sticky: stickyTop }">
    <div class="toTop__wrapper" @click="this.$root.scrollToTop"></div>
  </div>
</template>

<script>
export default {
  name: "BackToTop",
  data() {
    return {
    };
  },

  computed: {
    stickyTop() {
      if (this.$root.window_top > 200) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {},
  destroyed() {},
  methods: {
  },
  created() {},
  beforeDestroy() {},
};
</script>

<style>
</style>
