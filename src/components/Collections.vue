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
              @click="getInterval(j)"
            ></button>
          </div>
          <div v-if="$root.isMobile">
            <v-select
              :options="columns"
              label="title"
              @input="getOptions(columns)"
            >
            </v-select>

            <!-- <select :options="columns" v-model="title">

              <div v-for="(option, d) in options" :key="d">
                {{ item }}
              </div>
            </select> -->
          </div>
          <table>
            <template v-if="preloader">
              <loader
                object="#ff9633"
                color1="#ffffff"
                color2="#17fd3d"
                size="5"
                speed="2"
                bg="#343a40"
                objectbg="#999793"
                opacity="80"
                name="circular"
              ></loader>
            </template>
            <thead>
              <tr class="table__header">
                <th class="table__header-item">
                  <p v-html="table_title"></p>
                </th>
                <th
                  v-for="(item, index) in columns"
                  :class="[
                    'table__header-item',
                    item.active ? 'table__header-item--active' : '',
                  ]"
                  :key="index"
                >
                  <p @click="sort(index)">
                    {{ item.title }}
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
                  </p>
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
      this.preloader = true
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
      this.preloader = false
    },
    getColumnActive(index) {
      debugger
      var currentColumns = document
        .querySelector('.table__items')
        .querySelectorAll(`tr`)
      currentColumns.forEach((element) => {
        let previousElements = element.querySelectorAll('td')
        previousElements.forEach((elem) => {
          if (elem.classList.contains('table__item--active')) {
            elem.classList.remove('table__item--active')
          }
        })
        let currentElements = element.querySelectorAll(
          `td:nth-child(${index + 2}`
        )
        currentElements.forEach((elem) => {
          elem.classList.add('table__item--active')
          // console.log(elem)
        })
      })
    },

    sort(index) {
      this.$switchActive(index, this.columns)
      if (this.columns[index].order === 'desc') {
        this.columns[index].order = 'asc'
      } else {
        this.columns[index].order = 'desc'
      }
      this.getColumnActive(index)

      this.getData()
    },
    getOptions(items) {
      items.forEach((element, i) => {
        this.getColumnActive(i)
      })
    },

    makeColumnActive() {
      setTimeout(() => {
        var currentColumns = document
          .querySelector('.table__items')
          .querySelectorAll(`tr`)

        currentColumns.forEach((element) => {
          let previousElements = element.querySelectorAll('td:nth-of-type(2)')
          previousElements.forEach((elem) => {
            elem.classList.add('table__item--active')
          })
        })
      }, 2000)
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
    this.makeColumnActive()
  },
  watch: {
    columns: function(newVal) {
      this.sort(newVal)
    },
  },
  mounted() {},
}
</script>

<style></style>
