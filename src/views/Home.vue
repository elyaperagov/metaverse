<template>
  <div class="home">
    <Sales />
  </div>
</template>

<script>
import Sales from '@/components/Sales.vue'

export default {
  name: 'Home',
  components: {
    Sales,
  },

  data() {
    return {
      isShowBtnMoveTop: false,
    }
  },
  computed: {},

  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted() {},
  watch: {},
  methods: {},
}
</script>
