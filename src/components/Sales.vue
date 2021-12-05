<template>
  <section class="sales" id="sales">
    <div class="container">
      <div class="sales__wrapper">
        <h1 class="sales__title" v-html="title"></h1>
        <div class="sales__body">
          <div class="sales__list">
            <h2 v-html="month"></h2>
            <div class="sales__block" v-for="(block, i) in blocks" :key="i">
              <p class="sales__block-title" v-html="block.title"></p>
              <div class="sales__items">
                <div
                  class="sales__item"
                  v-for="(item, j) in block.items"
                  :key="j"
                >
                  <div class="sales__item-top">
                    <h3 class="sales__item-title" v-html="item.title"></h3>
                    <div class="sales__social-links">
                      <app-link
                        v-for="(social, k) in item.socials"
                        :key="k"
                        class="sales__social-link"
                        :href="social.href"
                        target="_blank"
                      >
                        <svg
                          :width="social.icon.width"
                          :height="social.icon.height"
                          aria-hidden="true"
                        >
                          <use :xlink:href="social.icon.link"></use>
                        </svg>
                        {{ social.text }}
                      </app-link>
                    </div>
                  </div>
                  <div class="sales__item-content">
                    <div class="sales__item-info">
                      <div class="sales__schedule-cell">
                        <p class="sales__schedule-title">Presale</p>
                        <p
                          class="sales__schedule-date"
                          v-html="item.presale"
                        ></p>
                      </div>
                      <div class="sales__schedule-cell">
                        <p class="sales__schedule-title">Sale</p>
                        <p class="sales__schedule-date" v-html="item.sale"></p>
                      </div>
                    </div>
                    <div class="sales__item-info">
                      <p v-html="item.collection.title"></p>
                      <div class="sales__collection-images">
                        <div
                          class="sales__collection-image"
                          v-for="(image, i) in item.collection.images"
                          :key="i"
                        >
                          <img :src="image.src" :alt="image.alt" />
                        </div>
                      </div>
                    </div>
                    <div class="sales__item-info"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sales__sidebar"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppLink from '@/components/AppLink'

export default {
  name: 'Countdown',
  components: { AppLink },
  props: {
    showCounter: Boolean,
    currentWallet: {
      type: String,
      default: null,
    },
    isWalletConnected: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      title: 'Upcoming NFT Sales',
      month: 'November',
      blocks: [
        {
          title: "Yesterday's Sales",
          items: [
            {
              title: 'Fat Cat Mafia',
              presale: '11:00 pm (EU/Kiev) Yesterday',
              sale: '11:00 pm (EU/Kiev) Yesterday',
              collection: {
                title: 'Fat cat mafia themed NFT collection on Solana',
                images: [
                  {
                    src: require('@/assets/images/cat1.jpg'),
                    alt: 'Cat card',
                  },
                  {
                    src: require('@/assets/images/cat2.jpg'),
                    alt: 'Cat card',
                  },
                  {
                    src: require('@/assets/images/cat3.jpg'),
                    alt: 'Cat card',
                  },
                ],
              },

              socials: [
                {
                  href: '#',
                  text: 'fatcatmafia.io',
                  icon: {
                    link: '#home',
                    width: '12',
                    height: '14',
                  },
                },
                {
                  href: '#',
                  text: 'Discord',
                  icon: {
                    link: '#discord',
                    width: '20',
                    height: '14',
                  },
                },
                {
                  href: '#',
                  text: 'FatCatMafia',
                  icon: {
                    link: '#twitter',
                    width: '18',
                    height: '15',
                  },
                },
              ],
            },
          ],
        },
        {
          title: "Today's Sales",
        },
      ],
    }
  },
  methods: {
    changeCounter() {
      this.$emit('changeCounter')
    },

    formatCountdown(number, index) {
      let strNumber = number.toString()
      if (strNumber.length == 2) {
        return strNumber[index]
      }
      if (index === 0) {
        return 0
      }
      if (index === 1) {
        return strNumber[0]
      }
    },
    runCountDown() {
      // Set the date we're counting down to
      let countDownDate = new Date('Oct 29 2021 00:00:00').getTime()

      // Update the count down every 1 second
      let x = setInterval(() => {
        // Get today's date and time
        let now = new Date().getTime()

        // Find the distance between now and the count down date
        let distance = countDownDate - now

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24))
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((distance % (1000 * 60)) / 1000)

        // Display the result in the element with id="demo"
        /*
        document.getElementById("demo").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
         */

        this.d_1 = this.formatCountdown(days, 0)
        this.d_2 = this.formatCountdown(days, 1)

        this.h_1 = this.formatCountdown(hours, 0)
        this.h_2 = this.formatCountdown(hours, 1)

        this.m_1 = this.formatCountdown(minutes, 0)
        this.m_2 = this.formatCountdown(minutes, 1)

        this.s_1 = this.formatCountdown(seconds, 0)
        this.s_2 = this.formatCountdown(seconds, 1)

        // If the count down is finished
        if (distance <= 0) {
          clearInterval(x)
          this.changeCounter()
        }
      }, 1000)
    },
    connectMetaMask() {
      this.$emit('connectMetaMask')
    },
  },
  created() {
    this.runCountDown()
  },
}
</script>
