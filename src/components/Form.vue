<template>
  <form class="form" action="#" method="post" @submit.prevent="formSend()">
    <div class="form__inputs">
      <div class="form__field">
        <label
          :for="form.name.id"
          class="form__label"
          v-html="form.name.label"
        ></label>
        <input
          :name="form.name.id"
          :id="form.name.id"
          :type="form.name.type"
          v-model="form.name.value"
          class="form__input"
          required="required"
          :class="{
            'form__input--error': form.name.error,
            'form__input--filled': form.name.value.length > 0,
          }"
        />
        <template v-if="form.name.error">
          <span class="form__error" v-html="form.name.error"></span>
        </template>
      </div>

      <div class="form__field">
        <label
          :for="form.email.id"
          class="form__label"
          v-html="form.email.label"
        ></label>
        <input
          :name="form.email.id"
          :id="form.email.id"
          :type="form.email.type"
          v-model="form.email.value"
          class="form__input"
          required="required"
          :class="{
            'form__input--error': form.email.error,
            'form__input--filled': form.email.value.length > 0,
          }"
        />
        <template v-if="form.email.error">
          <span class="form__error" v-html="form.email.error"></span>
        </template>
      </div>

      <div class="form__field">
        <label
          :for="form.site.id"
          class="form__label"
          v-html="form.site.label"
        ></label>
        <input
          :name="form.site.id"
          :id="form.site.id"
          :type="form.site.type"
          v-model="form.site.value"
          class="form__input"
          :class="{
            'form__input--error': form.site.error,
            'form__input--filled': form.site.value.length > 0,
          }"
        />
        <template v-if="form.site.error">
          <span class="form__error" v-html="form.site.error"></span>
        </template>
      </div>

      <div class="form__field">
        <label
          :for="form.discord.id"
          class="form__label"
          v-html="form.discord.label"
        ></label>
        <input
          :name="form.discord.id"
          :id="form.discord.id"
          :type="form.discord.type"
          v-model="form.discord.value"
          class="form__input"
          required="required"
          :class="{
            'form__input--error': form.discord.error,
            'form__input--filled': form.discord.value.length > 0,
          }"
        />
        <template v-if="form.discord.error">
          <span class="form__error" v-html="form.discord.error"></span>
        </template>
      </div>

      <div class="form__field">
        <label
          :for="form.twitter.id"
          class="form__label"
          v-html="form.twitter.label"
        ></label>
        <p v-html="form.twitter.subtitle"></p>
        <input
          :name="form.twitter.id"
          :id="form.twitter.id"
          :type="form.twitter.type"
          v-model="form.twitter.value"
          class="form__input"
          required="required"
          :class="{
            'form__input--error': form.twitter.error,
            'form__input--filled': form.twitter.value.length > 0,
          }"
        />
        <template v-if="form.twitter.error">
          <span class="form__error" v-html="form.twitter.error"></span>
        </template>
      </div>

      <div class="form__field">
        <label
          :for="form.opensea.id"
          class="form__label"
          v-html="form.opensea.label"
        ></label>
        <p v-html="form.opensea.subtitle"></p>
        <input
          :name="form.opensea.id"
          :id="form.opensea.id"
          :type="form.opensea.type"
          v-model="form.opensea.value"
          class="form__input"
          :class="{
            'form__input--error': form.opensea.error,
            'form__input--filled': form.opensea.value.length > 0,
          }"
        />
        <template v-if="form.opensea.error">
          <span class="form__error" v-html="form.opensea.error"></span>
        </template>
      </div>

      <div class="form__field">
        <label
          :for="form.number.id"
          class="form__label"
          v-html="form.number.label"
        ></label>
        <p v-html="form.number.subtitle"></p>
        <input
          :name="form.number.id"
          :id="form.number.id"
          :type="form.number.type"
          v-model="form.number.value"
          class="form__input"
          :class="{
            'form__input--error': form.number.error,
            'form__input--filled': form.number.value.length > 0,
          }"
        />
        <template v-if="form.number.error">
          <span class="form__error" v-html="form.number.error"></span>
        </template>
      </div>

      <button
        type="submit"
        name="submit"
        class="button button--red"
        @click.prevent="formSend()"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      form_success: false,
      form: {
        name: {
          value: '',
          placeholder: 'Your answer',
          label: 'Your NFT Project`s Name*',
          type: 'text',
          error: '',
        },
        email: {
          value: '',
          placeholder: 'Your answer',
          error: '',
          label: 'Enter your email*',
          type: 'email',
        },
        site: {
          value: '',
          label:
            'Website URL (if not available, please give the approx date of launch)',
          type: 'text',
          error: '',
          placeholder: 'Your answer',
        },
        discord: {
          value: '',
          label:
            'Your Project`s Official Discord Invite Link (MAKE SURE THE INVITE LINK WON’T EXPIRE!)*',
          type: 'text',
          error: '',
          placeholder: 'Your answer',
        },
        twitter: {
          value: '',
          label: 'Your Project`s Official Twitter*',
          subtitle:
            'Enter as <a href="https://twitter.com/yourtwitter">https://twitter.com/yourtwitter</a>',
          type: 'text',
          error: '',
          placeholder: 'Your answer',
        },

        opensea: {
          value: '',
          label: 'OpenSea Link (if available)',
          subtitle:
            'Enter as <a href="https://opensea.io/collection/yourcollectionname">https://opensea.io/collection/yourcollectionname</a>',
          type: 'text',
          error: '',
          placeholder: 'Your answer',
        },

        number: {
          value: '',
          label: 'What is the maximum number of tokens in your collection? *',
          type: 'text',
          error: '',
          placeholder: 'Your answer',
        },
      },
    }
  },
  methods: {
    async formSend() {
      if (!this.$validate(this.form)) {
        return
      }

      // const data = new FormData()
      // for (let key in this.form) {
      //   if (typeof this.form[key].value !== 'undefined') {
      //     data.append(key, this.form[key].value)
      //   }
      // }

      // const token = await this.$root.getRecaptchaToken("form");
      // data.append("recaptcha_response", token);

      // const response = await axios
      //   .post('/api/request', data)
      //   .catch((error) => {})

      // if (response.data.success) {
      //   this.showMessage()
      //   setTimeout(() => {
      //     for (let key in this.form) {
      //       if (typeof this.form[key].value !== 'undefined') {
      //         this.form[key].value = ''
      //       }
      //     }
      //     this.hideMessage()
      //   }, 3000)

      //   if (this.goal) {
      //     this.$root.reachGoal(this.goal)
      //   }
      // }
    },
  },
}
</script>

<style></style>
