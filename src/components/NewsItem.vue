<template>
  <div class="news-item">
    <div class="container">
      <div class="news-item__wrapper">
        <div class="news-item__inner">
          <h1 v-html="title"></h1>
          <div class="news-item__top">
            <div class="news-item__detail">
              <p v-html="details[0].text + ':&nbsp;'"></p>
              <span v-html="details[0].info"></span>
            </div>
            <div class="news-item__detail">
              <p v-html="details[1].text + '&nbsp;'"></p>
              <span
                v-html="
                  $dayjs(details[1].info)
                    .format(`D MMM YYYYY, HH:mm`)
                    .replace('+0300', '')
                "
              ></span>
            </div>
          </div>
          <div class="news-item__info-block">
            <h4 v-html="infoBlocks[0].title"></h4>
            <div class="news-item__info-texts">
              <p
                v-for="(text, i) in infoBlocks[0].texts"
                :key="i"
                v-html="text.text"
              ></p>
            </div>
          </div>
          <Subscribe />

          <div class="news-item__info-block">
            <h2 v-html="infoBlocks[1].title"></h2>
            <div class="news-item__info-texts">
              <p
                v-for="(text, i) in infoBlocks[1].texts"
                :key="i"
                v-html="text.text"
              ></p>
            </div>
            <template v-if="infoBlocks[1].images">
              <div
                class="news-item__chart"
                v-for="(item, j) in infoBlocks[1].images"
                :key="j"
              >
                <div class="news-item__image">
                  <img :src="item.src" :alt="infoBlocks[1].title" />
                </div>

                <p v-html="item.text"></p>
              </div>
            </template>
          </div>
          <div class="news-item__info-block">
            <h2 v-html="infoBlocks[2].title"></h2>
            <div class="news-item__info-texts">
              <p
                v-for="(text, i) in infoBlocks[2].texts"
                :key="i"
                v-html="text.text"
              ></p>
            </div>
            <template v-if="infoBlocks[2].images">
              <div
                class="news-item__chart"
                v-for="(item, j) in infoBlocks[2].images"
                :key="j"
              >
                <div class="news-item__image">
                  <img :src="item.src" :alt="infoBlocks[1].title" />
                </div>

                <p v-html="item.text"></p>
              </div>
            </template>
          </div>
        </div>

        <!-- <Sidebar :sidebar="sidebar"></Sidebar> -->
      </div>
    </div>
  </div>
</template>

<script>
import Subscribe from '@/components/Subscribe'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'NewsItem',
  components: {
    Sidebar,
    Subscribe,
  },
  data() {
    return {
      title: 'Retail is Here for NFTs as Google Searches See New All-Time High',
      infoBlocks: [
        {
          title:
            'The number of NFT and Buy NFT Google searches have reached new peaks, suggesting that retail investors are present.',
          texts: [
            {
              text:
                'The growth of the non-fungible token sector continues, with the most recent data showing that the number of Google searches has reached a new all-time high.',
            },
            {
              text:
                'At the same time, the trading volume on the leading NFT marketplace – OpenSea – saw a massive uptick following several weeks of decline',
            },
          ],
        },
        {
          title: 'NFT Google Searches Through the Roof',
          images: [
            {
              src: require('@/assets/images/chart1.jpg'),
              text: 'Worldwide NFT Google Searches. Source: Google Trends',
            },
            {
              src: require('@/assets/images/chart2.jpg'),
              text: 'Worldwide Buy NFT Google Searches. Source: Google Trends',
            },
          ],

          texts: [
            {
              text:
                'Aside from the massive price records charted by the likes of BTC, ETH, SOL, BNB, etc., and the enhanced institutional and mainstream adoption, 2021 will go down in history as NFTs’ breakout year.',
            },
            {
              text:
                'Although non-fungible tokens were not invented this year, they managed to garner the attention of people and companies from all types of industries – from musicians and athletes to investors and even politicians.',
            },
            {
              text:
                'The ability to allow famous individuals to strengthen their relationships with fans brought countless new participants to the NFT space, including retail.',
            },
            {
              text:
                'This narrative received further confirmation by Google trends, which is typically a good indicator of retail investors’ behavior.',
            },
            {
              text:
                'The number of “NFT” queries on the world’s largest search engine reached its previous peak in March, which was later duplicated in late August and early September. After a brief decline, the searches started to increase again in October and have seen a new record now.',
            },
          ],
        },
        {
          title: 'OpenSea’s Trading Volume',
          images: [
            {
              src: require('@/assets/images/chart3.jpg'),
              text: 'OpenSea Daily Volume (Ethereum). Source: DuneAnalytics',
            },
          ],

          texts: [
            {
              text:
                'OpenSea is among the leading NFT marketplaces that exemplify the growth of the entire sector quite distinctively. Its total trading volume for the whole of 2020 was just 21 million, while the metric skyrocketed to $1 billion by April this year and reached $10 billion earlier in November.',
            },
            {
              text:
                'Its daily peak came on August 29th with more than $300 million, according to DuneAnalytics. Since then, though, the trading volume was gradually declining aside from a few sudden and brief spikes.',
            },
            {
              text:
                'Such was the case during the weekend when the trading volume went from below $50 million to north of $100 million. This was mainly because of an increase in sales volumes for Bored Ape Yacht Club NFTs, which went up by nearly 1,000% in a day.',
            },
          ],
        },
      ],
      details: [
        {
          text: 'Author',
          info: 'Jordan Lyanchev',
        },
        {
          text: 'Last Updated',
          info: '12.11.2020, 08:50',
        },
      ],
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
    }
  },
}
</script>

<style></style>
