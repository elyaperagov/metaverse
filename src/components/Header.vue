<template>
  <header class="header" :class="{ 'header--error': $route.name === '404' }">
    <div class="container container--wide">
      <div class="header__inner">
        <router-link to="/" class="header__logo">
          <img src="@/assets/images/logo.png" />
        </router-link>
        <nav class="nav" v-if="!$root.isMobile">
          <router-link class="nav__item" to="/">NFT News</router-link>
          <router-link class="nav__item" to="/">
            Upcoming
          </router-link>
          <router-link class="nav__item" to="/">
            Top collections
          </router-link>
          <router-link class="nav__item" to="/">About</router-link>
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

      <transition name="slide-fade">
        <nav class="nav" v-if="$root.isMobile && menuOpened">
          <a class="nav__item" href="#" @click.prevent="goTo('#about')">
            About
          </a>
          <a class="nav__item" href="#" @click.prevent="goTo('#roadmap')">
            Roadmap
          </a>
          <a class="nav__item" href="#" @click.prevent="goTo('#rarity')">
            Rarity
          </a>
          <a class="nav__item" href="#" @click.prevent="goTo('#faq')">FAQ</a>
          <a class="nav__item" href="#" @click.prevent="goTo('#team')">Team</a>
          <a
            class="nav__item nav__item--active"
            href="#"
            @click.prevent="goTo('#raffle')"
          >
            Halloween Raffle
          </a>

          <div class="logo-with-social__buttons">
            <a
              class="logo-with-social__button"
              :href="item.link"
              v-for="(item, j) in socials"
              :key="j"
              target="_blank"
            >
              <svg width="35" height="35" aria-hidden="true">
                <use :xlink:href="item.icon"></use>
              </svg>
            </a>
          </div>
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
  props: {
    isWalletConnected: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    connectButtonText() {
      return this.isWalletConnected ? 'Connected' : 'Connect'
    },
  },
  methods: {
    connectMetaMask() {
      this.$emit('connectMetaMask')
    },
    menuToggle() {
      this.menuOpened = !this.menuOpened
    },
    menuClose() {
      this.menuOpened = false
    },
    async goTo(link) {
      if (!this.$scrollTo(link)) {
        await this.$router.push({ path: '/' })
        setTimeout(() => {
          this.$scrollTo(link)
        }, 500)
      }
    },
  },
  created() {
    const that = this
    document.addEventListener('keyup', function(evt) {
      if (evt.key === 27) {
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
