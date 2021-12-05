<template>
  <div class="footer" :class="{ 'footer--error': $route.name === '404' }">
    <!-- footer info -->
    <section class="footer__info">
      <div class="container">
        <div class="footer__body">
          <div class="footer__inner">
            <div class="footer__copyrights">
              <span v-html="copyrights"></span>
              <div class="footer__privacy">
                <a
                  v-for="(item, i) in privacy"
                  :key="i"
                  :href="item.link"
                  v-html="item.text"
                >
                </a>
              </div>
            </div>
            <div class="subscribe__inner">
              <label class="subscribe__label visually-hidden" for="email"
                >Email</label
              >
              <input
                id="email"
                type="email"
                class="subscribe__email"
                v-model="form.email.value"
                :placeholder="form.email.placeholder"
              />
              <template v-if="this.form.email.error">
                <span :class="{ subscribe__error: form.email.error }">{{
                  form.email.error
                }}</span>
              </template>
              <template v-else>
                <span :class="{ subscribe__success: form.email.success }">
                  {{ form.email.success }}
                </span>
              </template>
              <button
                class="subscribe__button"
                type="submit"
                aria-label="Subscribe"
                v-on:click="sendForm()"
              >
                {{ subscribe.buttonText }}
              </button>
            </div>
            <div class="footer__socials">
              <a
                class="footer__social"
                :href="item.link"
                v-for="(item, j) in socials"
                :key="j"
                target="_blank"
              >
                <svg
                  :width="item.icon.width"
                  :height="item.icon.height"
                  aria-hidden="true"
                >
                  <use :xlink:href="item.icon.link"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
  data() {
    return {
      form: {
        email: {
          value: '',
          placeholder: 'Email',
          error: '',
          success: '',
        },
      },
      subscribe: {
        text: 'Subscribe to our newsletters',
        label: 'Email',
        value: '',
        icon: 'img/email.svg',
        buttonText: 'Subscribe',
      },
      copyrights: '© Metaverse 2021. All rights reserved.',
      privacy: [
        {
          text: 'Privacy policy',
          link: '#',
        },
        {
          text: 'Terms of use',
          link: '#',
        },
      ],
      socials: [
        {
          link: '#',
          icon: {
            link: '#facebook',
            width: '8.5',
            height: '18.5',
          },
        },

        {
          link: '#',
          icon: {
            link: '#twitter',
            width: '16.5',
            height: '13.5',
          },
        },
        {
          link: '#',
          icon: {
            link: '#linkedin',
            width: '18',
            height: '18',
          },
        },
        {
          link: '#',
          icon: {
            link: '#instagram',
            width: '20',
            height: '20',
          },
        },
      ],
    }
  },
  props: {},
  computed: {},
  mounted() {},
  methods: {
    async sendForm() {
      if (!this.$validate(this.form)) {
        return
      }

      const data = {}

      for (let key in this.form) {
        if (typeof this.form[key].value !== 'undefined') {
          data[key] = this.form[key].value
        }
      }
      // if (this.image) {
      //   data.photo64 = this.image
      // }

      // const response = await axios
      //   .patch('/api/settings/profile', data)
      //   .catch((error) => {
      //     console.log(error)
      //     return error.response
      //   })

      // if (response.data.errors) {
      //   for (let key in this.form) {
      //     if (response.data.errors[key]) {
      //       this.form[key].error = true
      //     }
      //   }
      // } else {
      //   await this.$store.dispatch('updateUser', response.data)
      // }
    },
  },
}
</script>
