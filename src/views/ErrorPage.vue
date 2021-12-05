<template>
  <main>
    <section class="error-page">
      <div class="container">
        <div class="error-page__body">
          <div class="error-page__inner">
            <div class="error-page__image">
              <img :src="aboutImage.src" :alt="aboutImage.alt" />
            </div>
            <div class="error-page__texts">
              <h2 class="error-page__title">404</h2>
              <router-link class="button button--primary button--error" to="/">
                Go to home page
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "ErrorPage",
  data() {
    return {
      aboutImage: {
        src: require("@/assets/images/bg-about.svg"),
        alt: "card",
      },
    };
  },
  components: {},
  metaInfo() {
    return {
      title: this.$route.meta.title,
    };
  },
};
</script>
