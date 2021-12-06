<template>
  <section class="sales" id="sales">
    <div class="container">
      <div class="sales__wrapper">
        <h1 class="sales__title" v-html="title"></h1>
        <div class="sales__body">
          <div class="sales__lists">
            <div class="sales__list">
              <h2 v-html="month"></h2>
              <Blocks :blocks="yesterdays_blocks"></Blocks>
            </div>
            <div class="sales__list">
              <Blocks :blocks="todays_blocks"></Blocks>
            </div>
            <div class="sales__list">
              <h2 v-html="TBA"></h2>
              <Blocks
                class="sales__block-wrapper--TBA"
                :blocks="TBA_blocks"
              ></Blocks>
            </div>
          </div>
          <Sidebar :sidebar="sidebar"></Sidebar>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Blocks from '@/components/Blocks'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'Countdown',
  components: { Blocks, Sidebar },
  props: {
    showCounter: Boolean,
    currentWallet: {
      type: String,
      default: null,
    },
    // isWalletConnected: {
    //   type: Boolean,
    //   required: true,
    // },
  },
  data() {
    return {
      title: 'Upcoming NFT Sales',
      month: 'November 2021',
      TBA: 'To Be Announced',
      sidebar: {
        title: 'Exchange tokens at ',
        ads: [
          {
            class: 'sidebar__ad--big',
            src: require('@/assets/images/ad1.jpg'),
            alt: 'ad',
          },
          {
            class: 'sidebar__ad--small',
            src: require('@/assets/images/ad2.jpg'),
            alt: 'ad',
          },
        ],
        tokens: [
          {
            src: require('@/assets/images/bc.png'),
            alt: 'token price',
            price: '59.079.00',
            class: 'sidebar__token--bc',
          },
          {
            src: require('@/assets/images/eth.png'),
            alt: 'token price',
            price: '4,379.00',
            class: 'sidebar__token--eth',
          },
        ],
      },
      yesterdays_blocks: [
        {
          title: "Yesterday's Sales",
          items: [
            {
              title: 'Fat Cat Mafia',
              presale: '11:00 pm (EU/Kiev) Yesterday',
              sale: '2:00 pm (EU/Kiev) Today',
              total_quantity: 1.5,
              type: 'yesterday',
              total_amount: 8.888,
              collection: {
                title: 'Fat cat mafia themed NFT collection on &nbsp;Solana',
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
                  href: 'https://fatcatmafia.io/',
                  text: 'fatcatmafia.io',
                  icon: {
                    link: '#home',
                    width: '12',
                    height: '14',
                  },
                },
                {
                  href: 'https://discord.com/invite/fatcatmafia',
                  text: 'Discord',
                  icon: {
                    link: '#discord',
                    width: '20',
                    height: '14',
                  },
                },
                {
                  href: 'https://twitter.com/fatcatmafia',
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
      ],
      todays_blocks: [
        {
          title: "Today's Sales",
          items: [
            {
              title: 'BullTangClan',
              presale: '2:00 am (EU/Kiev) Today',
              sale: '12:00 pm (Europe/Kiev) Today',
              type: 'today',
              total_quantity: 1.5,
              total_amount: 8.888,
              collection: {
                title: 'Bull and cow avatar NFTs',
                images: [
                  {
                    src: require('@/assets/images/bull1.jpg'),
                    alt: 'Bull card',
                  },
                  {
                    src: require('@/assets/images/bull2.jpg'),
                    alt: 'Bull card',
                  },
                  {
                    src: require('@/assets/images/bull3.jpg'),
                    alt: 'Bull card',
                  },
                ],
              },
              socials: [
                {
                  href: 'https://www.bulltangclan.com/',
                  text: 'bulltangclan.com',
                  icon: {
                    link: '#home',
                    width: '12',
                    height: '14',
                  },
                },
                {
                  href: 'https://discord.com/invite/6wHjSY7rQ5',
                  text: 'Discord',
                  icon: {
                    link: '#discord',
                    width: '20',
                    height: '14',
                  },
                },
                {
                  href: 'https://twitter.com/bulltangclan',
                  text: 'bulltangclan',
                  icon: {
                    link: '#twitter',
                    width: '18',
                    height: '15',
                  },
                },
              ],
            },
            {
              title: 'BullTangClan',
              presale: '2:00 am (EU/Kiev) Today',
              sale: '12:00 pm (Europe/Kiev) Today',
              type: 'today',
              total_quantity: 1.5,
              total_amount: 8.888,
              collection: {
                title: 'Bull and cow avatar NFTs',
                images: [
                  {
                    src: require('@/assets/images/bull1.jpg'),
                    alt: 'Bull card',
                  },
                  {
                    src: require('@/assets/images/bull2.jpg'),
                    alt: 'Bull card',
                  },
                  {
                    src: require('@/assets/images/bull3.jpg'),
                    alt: 'Bull card',
                  },
                ],
              },
              socials: [
                {
                  href: 'https://www.bulltangclan.com/',
                  text: 'bulltangclan.com',
                  icon: {
                    link: '#home',
                    width: '12',
                    height: '14',
                  },
                },
                {
                  href: 'https://discord.com/invite/6wHjSY7rQ5',
                  text: 'Discord',
                  icon: {
                    link: '#discord',
                    width: '20',
                    height: '14',
                  },
                },
                {
                  href: 'https://twitter.com/bulltangclan',
                  text: 'bulltangclan',
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
      ],
      TBA_blocks: [
        {
          items: [
            {
              title: 'Vibeheads',
              presale: '11:00 pm (EU/Kiev) Yesterday',
              sale: '2:00 pm (EU/Kiev) Today',
              total_quantity: 1.5,
              type: 'TBA',
              total_amount: 8.888,
              collection: {
                title: 'Vibeheads',
                images: [
                  {
                    src: require('@/assets/images/vibehead1.jpg'),
                    alt: 'vibehead card',
                  },
                  {
                    src: require('@/assets/images/vibehead2.jpg'),
                    alt: 'vibehead card',
                  },
                  {
                    src: require('@/assets/images/vibehead3.jpg'),
                    alt: 'vibehead card',
                  },
                ],
              },
              socials: [
                {
                  href: 'https://www.vibeheads.club/',
                  text: 'vibeheads.club',
                  icon: {
                    link: '#home',
                    width: '12',
                    height: '14',
                  },
                },
                {
                  href: 'https://discord.com/invite/TCgBE8DCUP',
                  text: 'Discord',
                  icon: {
                    link: '#discord',
                    width: '20',
                    height: '14',
                  },
                },
                {
                  href: 'https://twitter.com/vibeheads',
                  text: '@vibeheads',
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
      ],
    }
  },
  methods: {},
  created() {
  },
}
</script>
