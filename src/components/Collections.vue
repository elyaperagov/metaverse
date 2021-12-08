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
          @click="getInterval(j)"
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
import axios from 'axios'
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
      info: null,
      intervals: [
        {
          title: '1H',
          active: false,
          interval: 'hour',
        },
        {
          title: '24H',
          active: true,
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
          active: true,
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
      items: [],

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
    async getData() {
      const column = this.columns.filter((element) => {
        return element.active
      })[0]
      const interval = this.intervals.filter((element) => {
        return element.active
      })[0]
      const response = await axios.get(
        `https://nft-sales-service.dappradar.com/v2/collection/${interval.interval}?limit=25&page=1&currency=USD&sort=${column.sort}&order=${column.order}`
      )

      if (response.data.results) {
        this.items = response.data.results
      }
    },

    sort(index) {
      this.$switchActive(index, this.columns)
      if (this.columns[index].order === 'desc') {
        this.columns[index].order = 'asc'
      } else {
        this.columns[index].order = 'desc'
      }
      this.getData()
    },
    getInterval(index) {
      this.$switchActive(index, this.intervals)

      this.getData()
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
  created() {
    this.getData()
  },
  mounted() {},
}
</script>

<style></style>
