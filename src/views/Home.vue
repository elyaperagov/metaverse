<template>
  <div class="home">
    <Sales />
    <Footer />
  </div>
</template>

<script>
import Sales from '@/components/Sales.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Sales,
    Footer,
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
