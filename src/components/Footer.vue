<template>
  <div class="footer" :class="{ 'footer--error': $route.name === '404' }">
    <!-- footer info -->
    <section class="footer__info">
      <div class="footer__cloud-bg">
        <img src="@/assets/images/luck-bg.png" alt="" />
      </div>
      <div class="container">
        <div class="footer__body">
          <div class="footer__inner">
            <div class="copyrights">
              <span>Creeps © 2021</span>
            </div>
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
          </div>
        </div>
      </div>
    </section>
    <div class="footer__main-bg">
      <img
        v-if="this.$root.isMobile"
        src="@/assets/images/footer-bg-mob.png"
        alt=""
      />
      <img v-else src="@/assets/images/footer-bg.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {
      socials: [
        {
          link: "http://discord.gg/uCZAApb4TJ",
          icon: "#discord",
        },
        {
          link: "https://opensea.io/collection/creepy-club",
          icon: "#opensea",
        },
        {
          link: "https://twitter.com/CreepsNFT",
          icon: "#twitter",
        },
      ],
    };
  },
  props: {},
  computed: {},
  mounted() {},
  methods: {},
};
</script>
