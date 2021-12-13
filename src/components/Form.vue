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
          :placeholder="form.name.placeholder"
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
          :placeholder="form.email.placeholder"
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
          :placeholder="form.site.placeholder"
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
          :placeholder="form.discord.placeholder"
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
        <p class="form__field-subtitle" v-html="form.twitter.subtitle"></p>
        <input
          :name="form.twitter.id"
          :id="form.twitter.id"
          :type="form.twitter.type"
          v-model="form.twitter.value"
          :placeholder="form.twitter.placeholder"
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
        <p class="form__field-subtitle" v-html="form.opensea.subtitle"></p>
        <input
          :name="form.opensea.id"
          :id="form.opensea.id"
          :type="form.opensea.type"
          v-model="form.opensea.value"
          :placeholder="form.opensea.placeholder"
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
        <p class="form__field-subtitle" v-html="form.number.subtitle"></p>
        <input
          :name="form.number.id"
          :id="form.number.id"
          :type="form.number.type"
          v-model="form.number.value"
          :placeholder="form.number.placeholder"
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

      <div class="form__field">
        <label
          :for="form.price.id"
          class="form__label"
          v-html="form.price.label"
        ></label>
        <p class="form__field-subtitle" v-html="form.price.subtitle"></p>
        <input
          :name="form.price.id"
          :id="form.price.id"
          :type="form.price.type"
          v-model="form.price.value"
          :placeholder="form.price.placeholder"
          class="form__input"
          :class="{
            'form__input--error': form.price.error,
            'form__input--filled': form.price.value.length > 0,
          }"
        />
        <template v-if="form.price.error">
          <span class="form__error" v-html="form.price.error"></span>
        </template>
      </div>

      <div class="form__field form__field--calendar">
        <label
          :for="form.date.id"
          class="form__label"
          v-html="form.date.label"
        ></label>
        <div class="form__field-inner">
          <input
            class="form__input form__input--date"
            :id="form.date.id"
            type="text"
            placeholder="dd,mm,yy"
            v-mask="'##.##.####'"
            v-model="form.date.value"
            :class="{
              'form__input--error': form.date.error,
              'form__input--filled': form.date.value.length > 0,
            }"
          />
          <!-- <input
            :name="form.date.id"
            :id="form.date.id"
            :type="form.date.type"
            v-model="form.date.value"
            :placeholder="form.date.placeholder"
            class="form__input"
            :class="{
              'form__input--error': form.date.error,
              'form__input--filled': form.date.value.length > 0,
            }"
          /> -->
          <template v-if="form.date.error">
            <span class="form__error" v-html="form.date.error"></span>
          </template>

          <input
            type="text"
            class="form__input form__input--hours"
            v-mask="'##'"
            v-model="form.date.hoursVal"
            :placeholder="form.date.hoursPlaceholder"
          />

          <input
            type="text"
            class="form__input form__input--minutes"
            v-mask="'##'"
            v-model="form.date.minutesVal"
            :placeholder="form.date.minutesPlaceholder"
          />
        </div>
      </div>

      <div class="form__field">
        <label
          :for="form.info.id"
          class="form__label"
          v-html="form.info.label"
        ></label>
        <textarea
          :name="form.info.id"
          :id="form.info.id"
          :type="form.info.type"
          v-model="form.info.value"
          :placeholder="form.info.placeholder"
          class="form__input"
          required="required"
          max="160"
          :class="{
            'form__input--error': form.info.error,
            'form__input--filled': form.info.value.length > 0,
          }"
        />
        <template v-if="form.info.error">
          <span class="form__error" v-html="form.info.error"></span>
        </template>
      </div>

      <div class="form__field">
        <label
          :for="form.roadmap.id"
          class="form__label"
          v-html="form.roadmap.label"
        ></label>
        <input
          :name="form.roadmap.id"
          :id="form.roadmap.id"
          :type="form.roadmap.type"
          v-model="form.roadmap.value"
          :placeholder="form.roadmap.placeholder"
          class="form__input"
          required="required"
          max="160"
          :class="{
            'form__input--error': form.roadmap.error,
            'form__input--filled': form.roadmap.value.length > 0,
          }"
        />
        <template v-if="form.roadmap.error">
          <span class="form__error" v-html="form.roadmap.error"></span>
        </template>
      </div>

      <div class="form__field">
        <label
          :for="form.links.id"
          class="form__label"
          v-html="form.links.label"
        ></label>
        <input
          :name="form.links.id"
          :id="form.links.id"
          :type="form.links.type"
          v-model="form.links.value"
          :placeholder="form.links.placeholder"
          class="form__input"
          required="required"
          max="160"
          :class="{
            'form__input--error': form.links.error,
            'form__input--filled': form.links.value.length > 0,
          }"
        />
        <template v-if="form.links.error">
          <span class="form__error" v-html="form.links.error"></span>
        </template>
      </div>

      <div class="form__field">
        <span v-html="form.tokens.label" class="form__label"></span>
        <fieldset class="form__fieldset">
          <div class="form__field-wrapper">
            <input
              :name="form.tokens.etherium.id"
              :id="form.tokens.etherium.id"
              type="radio"
              :value="form.tokens.etherium.label"
              v-model="form.tokens.value"
              class="form__radio"
              checked
            />
            <label
              :for="form.tokens.etherium.id"
              v-html="form.tokens.etherium.label"
            ></label>
          </div>
          <div class="form__field-wrapper">
            <input
              :name="form.tokens.solana.id"
              :id="form.tokens.solana.id"
              type="radio"
              :value="form.tokens.solana.label"
              v-model="form.tokens.value"
              class="form__radio"
            />
            <label
              :for="form.tokens.solana.id"
              v-html="form.tokens.solana.label"
            ></label>
          </div>
          <div class="form__field-wrapper">
            <input
              :name="form.tokens.matic.id"
              :id="form.tokens.matic.id"
              type="radio"
              :value="form.tokens.matic.label"
              v-model="form.tokens.value"
              class="form__radio"
            />
            <label
              :for="form.tokens.matic.id"
              v-html="form.tokens.matic.label"
            ></label>
          </div>
          <div class="form__field-wrapper">
            <input
              :name="form.tokens.binance.id"
              :id="form.tokens.binance.id"
              type="radio"
              :value="form.tokens.binance.label"
              v-model="form.tokens.value"
              class="form__radio"
            />
            <label
              :for="form.tokens.binance.id"
              v-html="form.tokens.binance.label"
            ></label>
          </div>
          <div class="form__field-wrapper">
            <input
              :name="form.tokens.cardano.id"
              :id="form.tokens.cardano.id"
              type="radio"
              :value="form.tokens.cardano.label"
              v-model="form.tokens.value"
              class="form__radio"
            />
            <label
              :for="form.tokens.cardano.id"
              v-html="form.tokens.cardano.label"
            ></label>
          </div>
          <div class="form__field-wrapper">
            <input
              :name="form.tokens.wax.id"
              :id="form.tokens.wax.id"
              type="radio"
              :value="form.tokens.wax.label"
              v-model="form.tokens.value"
              class="form__radio"
            />
            <label
              :for="form.tokens.wax.id"
              v-html="form.tokens.wax.label"
            ></label>
          </div>
          <div class="form__field-wrapper">
            <input
              :name="form.tokens.other.id"
              :id="form.tokens.other.id"
              type="radio"
              :value="form.tokens.other.label"
              v-model="form.tokens.value"
              class="form__radio"
            />
            <label
              :for="form.tokens.other.id"
              v-html="form.tokens.other.label"
            ></label>
          </div>
          <template v-if="form.tokens.error">
            <span class="form__error" v-html="form.tokens.error"></span>
          </template>
        </fieldset>
      </div>

      <div class="form__field">
        <label
          :for="form.contract.id"
          class="form__label"
          v-html="form.contract.label"
        ></label>
        <input
          :name="form.contract.id"
          :id="form.contract.id"
          :type="form.contract.type"
          v-model="form.contract.value"
          :placeholder="form.contract.placeholder"
          class="form__input"
          required="required"
          max="160"
          :class="{
            'form__input--error': form.contract.error,
            'form__input--filled': form.contract.value.length > 0,
          }"
        />
        <template v-if="form.contract.error">
          <span class="form__error" v-html="form.contract.error"></span>
        </template>
      </div>

      <div class="form__field">
        <label
          :for="form.derivative.id"
          class="form__label"
          v-html="form.derivative.label"
        ></label>
        <input
          :name="form.derivative.id"
          :id="form.derivative.id"
          :type="form.derivative.type"
          v-model="form.derivative.value"
          :placeholder="form.derivative.placeholder"
          class="form__input"
          required="required"
          max="160"
          :class="{
            'form__input--error': form.derivative.error,
            'form__input--filled': form.derivative.value.length > 0,
          }"
        />
        <template v-if="form.derivative.error">
          <span class="form__error" v-html="form.derivative.error"></span>
        </template>
      </div>

      <button
        type="submit"
        name="submit"
        class="button button--submit"
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
          id: 'name',
          value: '',
          placeholder: 'Your answer',
          label: 'Your NFT Project`s Name*',
          type: 'text',
          error: '',
        },
        email: {
          id: 'email',
          value: '',
          placeholder: 'Your answer',
          error: '',
          label: 'Enter your email*',
          type: 'email',
        },
        site: {
          id: 'site',
          value: '',
          label:
            'Website URL (if not available, please give the approx date of launch)',
          type: 'text',
          error: '',
          placeholder: 'Your answer',
        },
        discord: {
          id: 'discord',
          value: '',
          label:
            'Your Project`s Official Discord Invite Link (MAKE SURE THE INVITE LINK WON’T EXPIRE!)*',
          type: 'text',
          error: '',
          placeholder: 'Your answer',
        },
        twitter: {
          id: 'twitter',
          value: '',
          label: 'Your Project`s Official Twitter*',
          subtitle:
            'Enter as <a href="https://twitter.com/yourtwitter">https://twitter.com/yourtwitter</a>',
          type: 'text',
          error: '',
          placeholder: 'Your answer',
        },

        opensea: {
          id: 'opensea',
          value: '',
          label: 'OpenSea Link (if available)',
          subtitle:
            'Enter as <a href="https://opensea.io/collection/yourcollectionname">https://opensea.io/collection/yourcollectionname</a>',
          type: 'text',
          error: '',
          placeholder: 'Your answer',
        },

        number: {
          id: 'number',
          value: '',
          label: 'What is the maximum number of tokens in your collection? *',
          type: 'text',
          error: '',
          placeholder: 'Your answer',
        },

        price: {
          id: 'price',
          value: '',
          label: 'Unit Price (ETH or other cryptocurrency per 1 token) *',
          type: 'text',
          error: '',
          placeholder: 'Your answer',
        },
        date: {
          id: 'date',
          label: 'Your Project`s Sale Start Date (in UTC only*)',

          hoursPlaceholder: 'hh',
          minutesPlaceholder: 'mm',
          value: '',
          hoursVal: '',
          minutesVal: '',
          type: 'date',
          name: 'calendar',
        },

        info: {
          id: 'info',
          value: '',
          placeholder: 'Your answer',
          subtitle:
            'Please enter a short description of your project (max 160 characters) that you would like to get published on the page',
          label: 'Tell us about your project *',
          type: 'text',
          error: '',
        },

        roadmap: {
          id: 'roadmap',
          value: '',
          placeholder: 'Your answer',
          label: 'Project`s Roadmap (If available)',
          type: 'text',
          error: '',
        },

        links: {
          id: 'links',
          value: '',
          placeholder: 'Your answer',
          label:
            'Please provide links to some token images from your collection (max 4) that will be added to the upcoming page (no gifs!)*',
          type: 'text',
          error: '',
        },
        tokens: {
          value: '',
          error: '',
          label: 'What is your collection`s blockchain? *',
          etherium: {
            label: 'Etherium',
            id: 'etherium',
          },
          solana: {
            label: 'Solana',
            id: 'solana',
          },
          matic: {
            label: 'Matic',
            id: 'matic',
          },
          binance: {
            label: 'Binance Smart Chain',
            id: 'binance',
          },
          cardano: {
            label: 'Cardano',
            id: 'cardano',
          },
          wax: {
            label: 'Wax',
            id: 'wax',
          },
          other: {
            label: 'Other',
            id: 'other',
          },
        },

        contract: {
          id: 'contract',
          value: '',
          placeholder: 'Your answer',
          label:
            'What is your project’s smart contract address (if available)?',
          type: 'text',
          error: '',
        },

        derivative: {
          id: 'derivative',
          value: '',
          placeholder: 'Your answer',
          label:
            'Is your project a derivative of any existing one? If so, please specify.',
          type: 'text',
          error: '',
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
