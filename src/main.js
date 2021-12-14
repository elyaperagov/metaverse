import Vue from 'vue'
import App from './App.vue'
import Notifications from 'vue-notification'
import Helpers from './lib/Helpers.js'
import router from '@/router'
import VueMeta from 'vue-meta'
import Bowser from 'bowser'
import VueMask from 'v-mask'
import 'swiper/css/swiper.css'
import '@/assets/scss/main.scss'
import 'swiper/css/swiper.css'
import SlideUpDown from 'vue-slide-up-down'
import loader from 'vue-ui-preloader'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import Dayjs from 'vue-dayjs'

Vue.use(loader)

Vue.component('v-select', vSelect)
Vue.config.productionTip = false
Vue.use(Helpers)
Vue.use(Dayjs)
Vue.use(VueMask)
Vue.use(Notifications)
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
})
Vue.component('slide-up-down', SlideUpDown)

new Vue({
  data() {
    return {
      window_top: 0,
      width: null,
      height: null,
      tabletBreakpoint: 1024,
      mobileBreakpoint: 767,
      bowser: null,
    }
  },
  computed: {
    isDesktop() {
      return this.width > this.tabletBreakpoint
    },
    isTablet() {
      return this.width <= this.tabletBreakpoint
    },
    isMobile() {
      return this.width <= this.mobileBreakpoint
    },
  },
  async created() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.bowser = Bowser.parse(window.navigator.userAgent)
  },
  mounted() {
    this.addListeners()
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    addListeners() {
      window.addEventListener('scroll', this.onScroll)
      window.addEventListener('resize', this.onResize)
    },
    onScroll(e) {
      this.window_top = window.pageYOffset
    },
    onResize(state) {
      this.width = window.innerWidth
      this.height = window.innerHeight
      document.body.classList.remove('scroll-off')
    },
  },
  router,
  render: (h) => h(App),
}).$mount('#app')
