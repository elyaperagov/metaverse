<template>
  <header class="header" :class="{ 'header--error': $route.name === '404' }">
    <div class="container container--wide">
      <div class="header__inner">
        <router-link to="/" class="header__logo">
          <img src="@/assets/images/logo.png" />
        </router-link>
        <nav class="nav" v-if="!$root.isMobile">
          <router-link
            v-for="(item, i) in nav_items"
            :key="i"
            class="nav__item"
            :to="item.to"
            v-html="item.text"
          >
          </router-link>
        </nav>
      </div>

      <button
        v-if="$root.isMobile"
        class="button button--toggle"
        :class="{ close: !menuOpened }"
        @click="menuToggle()"
      >
        <img
          class="header__burger"
          :class="{ close: menuOpened }"
          src="@/assets/images/burger.svg"
          alt="burger menu"
        />
      </button>

      <transition name="slide-left">
        <nav class="nav" v-if="$root.isMobile && menuOpened">
          <router-link
            v-for="(item, i) in nav_items"
            :key="i"
            class="nav__item"
            :to="item.to"
            v-html="item.text"
          >
          </router-link>
        </nav>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  data() {
    return {
      menuOpened: false,
      nav_items: [
        {
          text: 'NFT News',
          to: '/',
        },
        {
          text: 'Upcoming',
          to: '/',
        },
        {
          text: 'Top collections',
          to: '/topcollections',
        },
        {
          text: 'About',
          to: '/',
        },
      ],

      socials: [
        {
          link: 'http://discord.gg/uCZAApb4TJ',
          icon: '#discord',
        },
        {
          link: 'https://opensea.io/collection/creepy-club',
          icon: '#opensea',
        },
        {
          link: 'https://twitter.com/CreepsNFT',
          icon: '#twitter',
        },
      ],
    }
  },
  props: {},
  computed: {},
  methods: {
    menuToggle() {
      this.menuOpened = !this.menuOpened
    },
    menuClose() {
      this.menuOpened = false
    },
  },
  created() {
    const that = this
    document.addEventListener('keyup', function(evt) {
      if (evt.keyCode === 27) {
        that.menuClose()
      }
    })
  },
  mounted() {
    window.addEventListener('resize', this.menuClose)
    window.addEventListener('scroll', this.menuClose)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.menuClose)
    window.removeEventListener('scroll', this.menuClose)
  },
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
