<template>
  <section class="subscribe">
    <div class="subscribe__inner">
      <p v-html="text"></p>
      <form class="subscribe__form" action="" method="get">
        <label class="subscribe__form-label visually-hidden" for="email"
          >Email</label
        >
        <input
          :id="form.email.id"
          type="email"
          class="subscribe__form-email"
          v-model="form.email.value"
          :placeholder="!$root.isMobile ? 'Enter you email' : 'Your email'"
        />
        <template v-if="this.form.email.error">
          <span :class="{ 'subscribe__form-error': form.email.error }">{{
            form.email.error
          }}</span>
        </template>
        <template v-else>
          <span :class="{ 'subscribe__form-success': form.email.success }">
            {{ form.email.success }}
          </span>
        </template>
        <button
          class="button button--subscribe button--news"
          type="submit"
          aria-label="Subscribe"
          v-on:click="sendForm()"
        >
          {{ subscribe.buttonText }}
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Subscribe',
  data() {
    return {
      text:
        'Did you like this market update?<br>This is all you need not to miss any price action in the raging crypto markets. Start receiving this recap, for free, every day:',
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
    }
  },
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

<style></style>
