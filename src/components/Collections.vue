<template>
  <div class="collections">
    <div class="container">
      <h1 v-html="title"></h1>
      <div class="collections__inner">
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
              <th v-for="(item, index) in header" :key="index">
                <template v-if="index === 0">
                  <p v-html="item.title"></p>
                </template>
                <template v-else>
                  <p v-html="item.title" @click="sort(index)"></p>
                  <svg
                    width="16"
                    height="16"
                    aria-hidden="true"
                    class="table__header-arrow"
                  >
                    <use xlink:href="#arrow-down"></use>
                  </svg>
                </template>
              </th>
            </tr>
          </thead>
          <tbody class="table__items">
            <TableRow :table_items="items"></TableRow>
          </tbody>
        </table>
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
      title: 'Collection',
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
          volume: 1000,
          traders: 10000,
          sales: 33000,
        },
        {
          title: 'CryptoPunks',
          src: require('@/assets/images/cryptopunks.png'),
          verified: true,
          new: false,
          volume: 20668,
          traders: 20,
          sales: 33000,
        },
        {
          title: 'Apes In Space NFT',
          src: require('@/assets/images/apes.jpg'),
          verified: true,
          new: false,
          volume: 30,
          traders: 350,
          sales: 33000,
        },
        {
          title: 'The Sandbox',
          src: require('@/assets/images/thesandbox.png'),
          verified: true,
          new: false,
          volume: 40,
          traders: 40,
          sales: 246,
        },
        {
          title: 'Art Blocks',
          src: require('@/assets/images/artblocks.png'),
          verified: true,
          new: false,
          volume: 50,
          traders: 50,
          sales: 135652,
        },
        {
          title: 'Bored Ape Yacht Club',
          src: require('@/assets/images/bored-ape-yacht-club.png'),
          verified: true,
          new: false,
          volume: 60,
          traders: 60,
          sales: 513,
        },
        {
          title: 'Neo Tokyo Identities',
          src: require('@/assets/images/neo.jpg'),
          verified: true,
          new: true,
          volume: 70,
          traders: 70,
          sales: 33000,
        },
        {
          title: 'Crypto Bull Society',
          src: require('@/assets/images/bull.jpg'),
          verified: true,
          new: true,
          volume: 80,
          traders: 80,
          sales: 33000,
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
      sorted: true,
    }
  },
  methods: {
    sortUp(itemsArray, parent, index) {
      itemsArray
        .sort(function(nodeA, nodeB) {
          var textA = nodeA.querySelector(`td:nth-child(${index + 1}) p`)
            .textContent
          var textB = nodeB.querySelector(`td:nth-child(${index + 1}) p`)
            .textContent
          var numberA = parseInt(textA)
          var numberB = parseInt(textB)

          if (numberA < numberB) return -1
          if (numberA > numberB) return 1
          return 0
        })

        .forEach(function(node) {
          parent.appendChild(node)
        })
    },
    sortDown(itemsArray, parent, index) {
      itemsArray
        .sort(function(nodeA, nodeB) {
          var textA = nodeA.querySelector(`td:nth-child(${index + 1}) p`)
            .textContent
          var textB = nodeB.querySelector(`td:nth-child(${index + 1}) p`)
            .textContent
          var numberA = parseInt(textA)
          var numberB = parseInt(textB)

          if (numberB < numberA) return -1
          if (numberB > numberA) return 1
          return 0
        })

        .forEach(function(node) {
          parent.appendChild(node)
        })
    },

    sort(index) {
      this.preloader = true
      setTimeout(() => {
        var nodeList = document.querySelectorAll('.table__row')
        var itemsArray = []
        var parent = nodeList[0].parentNode
        console.log(index)
        for (var i = 0; i < nodeList.length; i++) {
          itemsArray.push(parent.removeChild(nodeList[i]))
        }

        if (this.sorted) {
          this.sortUp(itemsArray, parent, index)
          this.sorted = false
          this.preloader = false
          return
        }

        if (!this.sorted) {
          this.sortDown(itemsArray, parent, index)
          this.sorted = true
          this.preloader = false
        }
      }, 1500)
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
  computed: {
    formattedVolume() {
      this.table.table_items.forEach((element) => {
        console.log(this.nFormatter(element.volume))
      })
    },
  },
  mounted() {
    console.log(this.formattedVolume)
  },
}
</script>

<style></style>
