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
      showCounter: true,
      topSlider: [
        {
          src: require('@/assets/images/slider-1/1.jpg'),
          alt: 'Creep card',
          class: 'bmb-nft-gallery__item--top',
        },
        {
          src: require('@/assets/images/slider-1/2.jpg'),
          alt: 'Creep card',
          class: 'bmb-nft-gallery__item--bottom',
        },
        {
          src: require('@/assets/images/slider-1/3.jpg'),
          alt: 'Creep card',
          class: 'bmb-nft-gallery__item--middle-top',
        },
        {
          src: require('@/assets/images/slider-1/4.jpg'),
          alt: 'Creep card',
          class: 'bmb-nft-gallery__item--middle',
        },
        {
          src: require('@/assets/images/slider-1/5.jpg'),
          alt: 'Creep card',
          class: 'bmb-nft-gallery__item--middle-bottom',
        },
        {
          src: require('@/assets/images/slider-1/6.jpg'),
          alt: 'Creep card',
          class: 'bmb-nft-gallery__item--top',
        },
        {
          src: require('@/assets/images/slider-1/7.jpg'),
          alt: 'Creep card',
          class: 'bmb-nft-gallery__item--bottom',
        },
        {
          src: require('@/assets/images/slider-1/8.jpg'),
          alt: 'Creep card',
          class: 'bmb-nft-gallery__item--middle-top',
        },
      ],
      bottomSlider: [
        {
          src: require('@/assets/images/slider-2/1.jpg'),
          alt: 'Creep card',
          class: 'bmb-nft-gallery__item--top',
        },
        {
          src: require('@/assets/images/slider-2/2.jpg'),
          alt: 'Creep card',
          class: 'bmb-nft-gallery__item--bottom',
        },
        {
          src: require('@/assets/images/slider-2/3.jpg'),
          alt: 'Creep card',
          class: 'bmb-nft-gallery__item--middle-top',
        },
        {
          src: require('@/assets/images/slider-2/4.jpg'),
          alt: 'Creep card',
          class: 'bmb-nft-gallery__item--middle',
        },
        {
          src: require('@/assets/images/slider-2/5.jpg'),
          alt: 'Creep card',
          class: 'bmb-nft-gallery__item--middle-bottom',
        },
        {
          src: require('@/assets/images/slider-1/6.jpg'),
          alt: 'Creep card',
          class: 'bmb-nft-gallery__item--top',
        },

        {
          src: require('@/assets/images/slider-1/7.jpg'),
          alt: 'Creep card',
          class: 'bmb-nft-gallery__item--bottom',
        },
        {
          src: require('@/assets/images/slider-1/8.jpg'),
          alt: 'Creep card',
          class: 'bmb-nft-gallery__item--middle-top',
        },
      ],
    }
  },
  computed: {},
  metaInfo() {
    return {
      title: this.$route.meta.title,
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted() {
    if (this.$route.name === 'Presale') {
      this.showCounter = false
    }
  },
  watch: {
    $route(to, from) {
      if (to.name === 'Presale') {
        this.showCounter = false
      }
      if (from.name === 'Presale') {
        this.showCounter = true
      }
    },
  },
  methods: {
    connectMetaMask() {
      this.$emit('connectMetaMask')
    },
    changeCounter() {
      this.showCounter = false
    },
    getImage(path) {
      return require('@/assets/images/' + path)
    },
  },
}
</script>
