<template>
  <div class="collections">
    <div class="container">
      <h1 v-html="title"></h1>
      <div class="table__intervals" v-if="!$root.isTablet">
        <button
          class="button button--interval"
          v-for="(interval, j) in intervals"
          :key="j"
          v-html="interval.title"
          :class="{ 'button--active': interval.active }"
          @click="$switchActive(j, intervals)"
        ></button>
      </div>
      <div class="collections__inner">
        <div class="table__wrapper">
          <div class="table__intervals" v-if="$root.isTablet">
            <button
              class="button button--interval"
              v-for="(interval, j) in intervals"
              :key="j"
              v-html="interval.title"
              :class="{ 'button--active': interval.active }"
              @click="$switchActive(j, intervals)"
            ></button>
          </div>
          <table>
            <thead>
              <tr class="table__header">
                <th>
                  <p v-html="table_title"></p>
                </th>
                <th v-for="(item, index) in columns" :key="index">
                  <p v-html="item.title" @click="sort(index)"></p>
                  <svg
                    width="16"
                    height="16"
                    aria-hidden="true"
                    :class="[
                      'table__header-arrow',
                      item.order === 'asc'
                        ? 'table__header-arrow--rotated'
                        : '',
                    ]"
                  >
                    <use xlink:href="#arrow-down"></use>
                  </svg>
                </th>
              </tr>
            </thead>
            <tbody class="table__items">
              <TableRow :table_items="items"></TableRow>
            </tbody>
          </table>
        </div>
        <Sidebar :sidebar="sidebar"></Sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import Blocks from '@/components/Blocks'
import Sidebar from '@/components/Sidebar'
import TableRow from '@/components/TableRow'
export default {
  name: 'Collections',
  components: { Blocks, Sidebar, TableRow },
  data() {
    return {
      title: 'Top Collections',
      preloader: false,
      table_title: 'Collection',
      intervals: [
        {
          title: '1H',
          active: false,
          interval: 'hour',
        },
        {
          title: '24H',
          active: false,
          interval: 'day',
        },
        {
          title: '7D',
          active: false,
          interval: 'week',
        },
        {
          title: '30D',
          active: false,
          interval: 'month',
        },
        {
          title: 'All',
          active: false,
          interval: 'all',
        },
      ],
      columns: [
        {
          title: 'Volume',
          active: false,
          order: 'desc',
          sort: 'volumeInFiat',
        },
        {
          title: 'Traders',
          active: false,
          order: 'desc',
          sort: 'tradersCount',
        },
        {
          title: 'Sales',
          active: false,
          order: 'desc',
          sort: 'salesCount',
        },
      ],
      items: [
        {
          title: 'Axie Infinity',
          src: require('@/assets/images/axieinfinity.png'),
          verified: true,
          new: true,
          volume: {
            number: 1000,
            percent: 50,
          },
          traders: {
            number: 1000,
            percent: 50,
          },
          sales: {
            number: 1000,
            percent: 50,
          },
        },
        {
          title: 'CryptoPunks',
          src: require('@/assets/images/cryptopunks.png'),
          verified: true,
          new: false,
          volume: {
            number: 1000,
            percent: 50,
          },
          traders: {
            number: 1000,
            percent: 50,
          },
          sales: {
            number: 1000,
            percent: 50,
          },
        },
        {
          title: 'Apes In Space NFT',
          src: require('@/assets/images/apes.jpg'),
          verified: true,
          new: false,
          volume: {
            number: 1000,
            percent: 50,
          },
          traders: {
            number: 1000,
            percent: 50,
          },
          sales: {
            number: 1000,
            percent: -50,
          },
        },
        {
          title: 'The Sandbox',
          src: require('@/assets/images/thesandbox.png'),
          verified: true,
          new: false,
          volume: {
            number: 42672,
            percent: -50,
          },
          traders: {
            number: 4672,
            percent: 50,
          },
          sales: {
            number: 467,
            percent: -50,
          },
        },
        {
          title: 'Art Blocks',
          src: require('@/assets/images/artblocks.png'),
          verified: true,
          new: false,
          volume: {
            number: 246,
            percent: 50,
          },
          traders: {
            number: 24626,
            percent: 50,
          },
          sales: {
            number: 2462,
            percent: 0,
          },
        },
        {
          title: 'Bored Ape Yacht Club',
          src: require('@/assets/images/bored-ape-yacht-club.png'),
          verified: true,
          new: false,
          volume: {
            number: 24525,
            percent: 50,
          },
          traders: {
            number: 246,
            percent: 50,
          },
          sales: {
            number: 24256,
            percent: 50,
          },
        },
        {
          title: 'Neo Tokyo Identities',
          src: require('@/assets/images/neo.jpg'),
          verified: true,
          new: true,
          volume: {
            number: 245,
            percent: 50,
          },
          traders: {
            number: 62,
            percent: 50,
          },
          sales: {
            number: 245,
            percent: -20,
          },
        },
        {
          title: 'Crypto Bull Society',
          src: require('@/assets/images/bull.jpg'),
          verified: true,
          new: true,
          volume: {
            number: 15145,
            percent: 50,
          },
          traders: {
            number: '1000',
            percent: 50,
          },
          sales: {
            number: 1000,
            percent: -10,
          },
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
  methods: {
    sort(index) {
      this.columns[index].active = !this.columns[index].active
      if (this.columns[index].order === 'desc') {
        this.columns[index].order = 'asc'
      } else {
        this.columns[index].order = 'desc'
      }
    },
    nFormatter(num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G'
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
      }
      return num
    },
  },
  computed: {},
  mounted() {
    console.log(this.items)
  },
}
</script>

<style></style>
