<template>
  <section class="sales" id="sales">
    <div class="container">
      <div class="sales__wrapper">
        <h1 v-html="title"></h1>
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
              <Blocks :blocks="tomorrow_blocks"></Blocks>
            </div>
            <div class="sales__list">
              <h2 v-html="TBA"></h2>
              <Blocks
                class="sales__block-wrapper--TBA"
                :blocks="TBA_blocks"
              ></Blocks>
            </div>
          </div>
          <!-- <Sidebar :sidebar="sidebar"></Sidebar> -->
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
  props: {},
  data() {
    return {
      title: 'Upcoming NFT Sales',
      month: 'December 2021',
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
              title: 'Loafz',
              presale: '4:00 pm (Europe/Kiev), Yesterday',
              sale: '4:00 pm (Europe/Kiev), Sunday, December 12th 2021',
              price: '0.6 SOL',
              type: 'yesterday',
              total_amount: 5.888,
              collection: {
                // title: 'Fat cat mafia themed NFT collection on &nbsp;Solana',
                images: [
                  {
                    src: require('@/assets/images/loafz_1.webp'),
                    alt: 'NFT card',
                  },
                  {
                    src: require('@/assets/images/loafz_2.webp'),
                    alt: 'NFT card',
                  },
                  {
                    src: require('@/assets/images/loafz_3.webp'),
                    alt: 'NFT card',
                  },
                ],
              },
              socials: [
                {
                  href: 'https://www.loafz.co/',
                  text: 'Loafz',
                  icon: {
                    link: '#home',
                    width: '12',
                    height: '14',
                  },
                },
                {
                  href: 'https://discord.com/invite/8wRJn4YQKv',
                  text: 'Discord',
                  icon: {
                    link: '#discord',
                    width: '20',
                    height: '14',
                  },
                },
                {
                  href: 'https://twitter.com/loafzNFT',
                  text: 'Twitter',
                  icon: {
                    link: '#twitter',
                    width: '18',
                    height: '15',
                  },
                },
              ],
            },
            {
              title: 'Mr. Uncommon NFT',
              presale: '8:00 pm (Europe/Kiev), Yesterday',
              sale: '8:00 pm (Europe/Kiev), Today',
              presale_price: 0.03,
              sale_price: 0.05,
              type: 'yesterday',
              total_amount: 10000,
              collection: {
                // title: 'Fat cat mafia themed NFT collection on &nbsp;Solana',
                images: [
                  {
                    src: require('@/assets/images/mruncommon_1.webp'),
                    alt: 'NFT card',
                  },
                  {
                    src: require('@/assets/images/mruncommon_2.webp'),
                    alt: 'NFT card',
                  },
                  {
                    src: require('@/assets/images/mruncommon_3.webp'),
                    alt: 'NFT card',
                  },
                ],
              },
              socials: [
                {
                  href: 'https://mruncommon.io/',
                  text: 'Mr. Uncommon NFT',
                  icon: {
                    link: '#home',
                    width: '12',
                    height: '14',
                  },
                },
                {
                  href: 'https://discord.com/invite/cKR3xrD92W',
                  text: 'Discord',
                  icon: {
                    link: '#discord',
                    width: '20',
                    height: '14',
                  },
                },
                {
                  href: 'https://twitter.com/mr_uncommon_nft/',
                  text: 'Twitter',
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
              title: 'Long Ween Club',
              presale: '12:00 am (Europe/Kiev), Today',
              sale: '1:00 am (Europe/Kiev) Today',
              type: 'today',
              price: '0.75 SOL',
              total_amount: 5.555,
              collection: {
                // title: 'Bull and cow avatar NFTs',
                images: [
                  {
                    src: require('@/assets/images/longweenclub_1.webp'),
                    alt: 'NFT card',
                  },
                  {
                    src: require('@/assets/images/longweenclub_2.webp'),
                    alt: 'NFT card',
                  },
                  {
                    src: require('@/assets/images/longweenclub_3.webp'),
                    alt: 'NFT card',
                  },
                ],
              },
              socials: [
                {
                  href: 'https://longweenclub.com/',
                  text: 'Long Ween Club',
                  icon: {
                    link: '#home',
                    width: '12',
                    height: '14',
                  },
                },
                {
                  href: 'https://discord.com/invite/longweenclub',
                  text: 'Discord',
                  icon: {
                    link: '#discord',
                    width: '20',
                    height: '14',
                  },
                },
                {
                  href: 'https://twitter.com/longweenclub',
                  text: 'Twitter',
                  icon: {
                    link: '#twitter',
                    width: '18',
                    height: '15',
                  },
                },
              ],
            },
            {
              title: 'Obscure Octopus Club',
              presale: '2:00 am (EU/Kiev) Today',
              sale: '4:00 am (Europe/Kiev) Today',
              type: 'today',
              price: '0.08 ETH',

              total_amount: 10000,
              collection: {
                // title: 'Bull and cow avatar NFTs',
                images: [
                  {
                    src: require('@/assets/images/obscureoctopusclub_1.webp'),
                    alt: 'Bull card',
                  },
                  {
                    src: require('@/assets/images/obscureoctopusclub_2.webp'),
                    alt: 'Bull card',
                  },
                  {
                    src: require('@/assets/images/obscureoctopusclub_3.webp'),
                    alt: 'Bull card',
                  },
                ],
              },
              socials: [
                {
                  href: 'https://www.obscureoctopusclub.com/',
                  text: 'Obscure Octopus Club',
                  icon: {
                    link: '#home',
                    width: '12',
                    height: '14',
                  },
                },
                {
                  href: 'https://discord.com/invite/sK3BKXF5eE',
                  text: 'Discord',
                  icon: {
                    link: '#discord',
                    width: '20',
                    height: '14',
                  },
                },
                {
                  href: 'https://twitter.com/ObscureOctopusC',
                  text: 'Twitter',
                  icon: {
                    link: '#twitter',
                    width: '18',
                    height: '15',
                  },
                },
              ],
            },
            {
              title: 'Chimp Club',
              presale: '5:00 pm (Europe/Kiev) Today',
              sale: '5:00 pm (Europe/Kiev) Today',
              type: 'today',
              price: '0.05 ETH',
              total_amount: 10000,
              collection: {
                // title: 'Bull and cow avatar NFTs',
                images: [
                  {
                    src: require('@/assets/images/ChimpClub_1.webp'),
                    alt: 'NFT card',
                  },
                  {
                    src: require('@/assets/images/ChimpClub_2.webp'),
                    alt: 'NFT card',
                  },
                  {
                    src: require('@/assets/images/ChimpClub_3.webp'),
                    alt: 'NFT card',
                  },
                ],
              },
              socials: [
                {
                  href: 'https://chimp.club/',
                  text: 'Chimp Club',
                  icon: {
                    link: '#home',
                    width: '12',
                    height: '14',
                  },
                },
                {
                  href: 'https://discord.com/invite/chimp',
                  text: 'Discord',
                  icon: {
                    link: '#discord',
                    width: '20',
                    height: '14',
                  },
                },
                {
                  href: 'https://twitter.com/Chimp_Club',
                  text: 'Twitter',
                  icon: {
                    link: '#twitter',
                    width: '18',
                    height: '15',
                  },
                },
              ],
            },
            {
              title: 'Master9eyes',
              // presale: '5:00 pm (Europe/Kiev) Today',
              // sale: '5:00 pm (Europe/Kiev) Today',
              type: 'today',
              presale_price: 0.09,
              sale_price: 0.19,
              // price: '0.05 ETH',
              total_amount: 999,
              collection: {
                // title: 'Bull and cow avatar NFTs',
                images: [
                  {
                    src: require('@/assets/images/master9eyes2_1.webp'),
                    alt: 'NFT card',
                  },
                  {
                    src: require('@/assets/images/master9eyes2_2.webp'),
                    alt: 'NFT card',
                  },
                  {
                    src: require('@/assets/images/master9eyes2_3.webp'),
                    alt: 'NFT card',
                  },
                ],
              },
              socials: [
                {
                  href: 'https://master9eyes.com/',
                  text: 'Master9eyes',
                  icon: {
                    link: '#home',
                    width: '12',
                    height: '14',
                  },
                },
                {
                  href: 'https://discord.com/invite/m9e',
                  text: 'Discord',
                  icon: {
                    link: '#discord',
                    width: '20',
                    height: '14',
                  },
                },
                {
                  href: 'https://twitter.com/Master9Eyes',
                  text: 'Twitter',
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
      tomorrow_blocks: [
        {
          title: "Tomorrow's Sales",
          items: [
            {
              title: 'Fat Cat Mafia',
              presale: '11:00 pm (Europe/Kiev), Tomorrow',
              sale: '11:00 pm (Europe/Kiev), Saturday, December 11th 2021',
              type: 'today',
              price: '1.5 SOL',
              total_amount: 8.888,
              collection: {
                // title: 'Bull and cow avatar NFTs',
                images: [
                  {
                    src: require('@/assets/images/fatcatmafia_1.webp'),
                    alt: 'NFT card',
                  },
                  {
                    src: require('@/assets/images/fatcatmafia_2.webp'),
                    alt: 'NFT card',
                  },
                  {
                    src: require('@/assets/images/fatcatmafia_3.webp'),
                    alt: 'NFT card',
                  },
                ],
              },
              socials: [
                {
                  href: 'https://fatcatmafia.io/',
                  text: 'Fat Cat Mafia',
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
                  href: 'https://twitter.com/FatCatMafia',
                  text: 'Twitter',
                  icon: {
                    link: '#twitter',
                    width: '18',
                    height: '15',
                  },
                },
              ],
            },
            {
              title: 'Future Punkz Dao',
              presale: 'December 10th',
              sale: 'TBA',
              type: 'today',
              price: '0.03 SOL',
              total_amount: 4.444,
              collection: {
                // title: 'Bull and cow avatar NFTs',
                images: [
                  {
                    src: require('@/assets/images/futurepunkzdao_1.webp'),
                    alt: 'NFT card',
                  },
                  {
                    src: require('@/assets/images/futurepunkzdao_2.webp'),
                    alt: 'NFT card',
                  },
                  {
                    src: require('@/assets/images/futurepunkzdao_3.webp'),
                    alt: 'NFT card',
                  },
                ],
              },
              socials: [
                {
                  href: 'https://www.futurepunkz-dao.com/',
                  text: 'Future Punkz Dao',
                  icon: {
                    link: '#home',
                    width: '12',
                    height: '14',
                  },
                },
                {
                  href: 'https://discord.com/invite/RUeFWbcryz',
                  text: 'Discord',
                  icon: {
                    link: '#discord',
                    width: '20',
                    height: '14',
                  },
                },
                {
                  href: 'https://twitter.com/FuturePunkzDao/',
                  text: 'Twitter',
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
              title: 'Splatters',
              // presale: '11:00 pm (EU/Kiev) Yesterday',
              // sale: '2:00 pm (EU/Kiev) Today',
              price: '0.03 ETH',
              type: 'TBA',
              total_amount: 10000,
              collection: {
                title: 'Splatters',
                images: [
                  {
                    src: require('@/assets/images/splatters_1.webp'),
                    alt: 'NFT card',
                  },
                  {
                    src: require('@/assets/images/splatters_2.webp'),
                    alt: 'NFT card',
                  },
                  {
                    src: require('@/assets/images/splatters_3.webp'),
                    alt: 'NFT card',
                  },
                ],
              },
              socials: [
                {
                  href: 'https://splatterbattleroyale.com/',
                  text: 'Splatters',
                  icon: {
                    link: '#home',
                    width: '12',
                    height: '14',
                  },
                },
                {
                  href: 'https://discord.com/invite/splattersbr',
                  text: 'Discord',
                  icon: {
                    link: '#discord',
                    width: '20',
                    height: '14',
                  },
                },
                {
                  href: 'https://twitter.com/SplattersBR',
                  text: 'Twitter',
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
  created() {},
}
</script>
