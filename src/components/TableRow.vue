<template>
  <div>
    <tr
      class="table__row"
      v-for="(table_item, index) in table_items"
      :key="index"
    >
      <td class="table__item">
        <span v-html="index + 1"> </span>
        <div class="table__item-avatar">
          <img :src="table_item.logo" :alt="table_item.title" />
          <svg
            class="table__item-verified"
            v-if="table_item.verified"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <use xlink:href="#verified"></use>
          </svg>
        </div>
        <div class="table__item-title">
          <p v-if="table_item.isNew" class="table__item-new">new</p>
          <p class="table__item-namw" v-html="table_item.name"></p>
        </div>
      </td>
      <td class="table__item">
        <div class="table__item-number">
          <span> {{ currency }}</span>
          <template
            v-if="
              typeof table_item.volumeInFiat === 'number' ||
                table_item.volumeInFiat === 0
            "
            ><p v-html="`${nFormatter(table_item.volumeInFiat)}`"></p>
          </template>
          <template v-else>
            <p v-html="'-'"></p>
          </template>
        </div>
        <div class="table__item-percent">
          <span
            :class="table_item.volumeChange > 0 ? 'green' : 'red'"
            v-html="table_item.volumeChange + '%'"
          ></span>
        </div>
      </td>
      <td class="table__item">
        <div class="table__item-number">
          <template
            v-if="
              typeof table_item.tradersCount === 'number' ||
                table_item.tradersCount === 0
            "
            ><p v-html="table_item.tradersCount"></p>
          </template>
          <template v-else>
            <p v-html="'-'"></p>
          </template>
        </div>
        <div class="table__item-percent">
          <span
            :class="table_item.tradersCountChange > 0 ? 'green' : 'red'"
            v-html="table_item.tradersCountChange + '%'"
          ></span>
        </div>
      </td>
      <td class="table__item">
        <div class="table__item-number">
          <template
            v-if="
              typeof table_item.salesCount === 'number' ||
                table_item.salesCount === 0
            "
            ><p v-html="table_item.salesCount"></p>
          </template>
          <template v-else>
            <p v-html="'-'"></p>
          </template>
        </div>
        <div class="table__item-percent">
          <span
            :class="table_item.salesCountChange > 0 ? 'green' : 'red'"
            v-html="table_item.salesCountChange + '%'"
          ></span>
        </div>
      </td>
    </tr>
  </div>
</template>

<script>
export default {
  name: 'ApprovalRow',
  data() {
    return {
      currency: '$',
    }
  },
  computed: {},
  methods: {
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

  props: {
    table_items: {
      type: Array,
    },
  },
}
</script>

<style></style>
