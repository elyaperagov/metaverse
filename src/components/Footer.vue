<template>
  <div class="footer" :class="{ 'footer--error': $route.name === '404' }">
    <!-- footer info -->
    <section class="footer__info" v-if="!$root.isMobile">
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
            <div class="footer__subscribe-wrapper">
              <span
                class="footer__subscribe-now"
                v-html="subscribe.buttonText"
              ></span>
              <form class="footer__subscribe" action="" method="get">
                <label
                  class="footer__subscribe-label visually-hidden"
                  for="email"
                  >Email</label
                >
                <input
                  :id="form.email.id"
                  type="email"
                  class="footer__subscribe-email"
                  v-model="form.email.value"
                  :placeholder="form.email.placeholder"
                />
                <template v-if="this.form.email.error">
                  <span
                    :class="{ 'footer__subscribe-error': form.email.error }"
                    >{{ form.email.error }}</span
                  >
                </template>
                <template v-else>
                  <span
                    :class="{ 'footer__subscribe-success': form.email.success }"
                  >
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
              </form>
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

    <section class="footer__info" v-else>
      <div class="footer__body">
        <div class="footer__inner">
          <div class="footer__copyrights container">
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
          <div class="footer__subscribe-wrapper">
            <div class="container">
              <span
                class="footer__subscribe-now"
                v-html="subscribe.buttonText"
              ></span>
              <form class="footer__subscribe" action="" method="get">
                <label
                  class="footer__subscribe-label visually-hidden"
                  for="email"
                  >Email</label
                >
                <input
                  :id="form.email.id"
                  type="email"
                  class="footer__subscribe-email"
                  v-model="form.email.value"
                  :placeholder="
                    !$root.isMobile ? 'Enter you email' : 'Your email'
                  "
                />
                <template v-if="this.form.email.error">
                  <span
                    :class="{ 'footer__subscribe-error': form.email.error }"
                    >{{ form.email.error }}</span
                  >
                </template>
                <template v-else>
                  <span
                    :class="{ 'footer__subscribe-success': form.email.success }"
                  >
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
              </form>
            </div>
          </div>

          <div class="footer__socials container">
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
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Footer',
  components: {},
  data() {
    return {
      form: {
        email: {
          id: 'email',
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
      if (!this.$validate(this.form)) {
        return
      }

      const data = new FormData()
      for (let key in this.form) {
        if (typeof this.form[key].value !== 'undefined') {
          data.append(key, this.form[key].value)
        }
      }

      const token = await this.$root.getRecaptchaToken('form')
      data.append('recaptcha_response', token)

      const response = await axios
        .post('https://m101.az-studio.net/api/request', data, {
          headers: {
            'Cache-Control': null,
            'X-Requested-With': null,
          },
        })

        .catch((error) => {})

      if (response.data.success) {
        // this.showMessage()
        console.log(response)
        setTimeout(() => {
          for (let key in this.form) {
            if (typeof this.form[key].value !== 'undefined') {
              this.form[key].value = ''
            }
          }
          // this.hideMessage()
        }, 3000)

        if (this.goal) {
          this.$root.reachGoal(this.goal)
        }
      }
    },
  },
}
</script>
