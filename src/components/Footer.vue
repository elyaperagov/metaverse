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
            <div class="footer__subscribe">
              <label class="footer__subscribe-label visually-hidden" for="email"
                >Email</label
              >
              <input
                id="email"
                type="email"
                class="footer__subscribe-email"
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
                class="button button--subscribe"
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
          placeholder: 'Enter your email',
          error: '',
          success: '',
        },
      },
      subscribe: {
        text: 'Subscribe to our newsletters',
        label: 'Email',
        value: '',
        icon: 'img/email.svg',
        buttonText: 'Subscribe now',
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
      event.preventDefault()
      const self = this
      if (!this.validate(this.form)) {
        return
      }
    },
    validate(form) {
      let valid = true
      for (let key in form) {
        if (typeof form[key].error === 'undefined') {
          continue
        }
        if (typeof form[key].value === 'string') {
          form[key].value = form[key].value.trim()
        }
        let error = ''
        let success = ''
        switch (key) {
          case 'email':
            if (form[key].value.length < 4) {
              error = 'Please enter correct address'
            } else if (
              !form[key].value.includes('@') ||
              !form[key].value.includes('.')
            ) {
              error = 'Please enter correct address'
            }
            break
        }
        if (error !== '') {
          valid = false
        }
        form[key].error = error
        form[key].success = 'Thanks for subscribing!'
      }
      setTimeout(() => {
        for (let key in this.form) {
          if (typeof this.form[key].error !== 'undefined') {
            this.form[key].error = ''
          }
          if (typeof this.form[key].success !== 'undefined') {
            this.form[key].success = ''
          }
        }
      }, 4000)
      return valid
    },
  },
}
</script>
