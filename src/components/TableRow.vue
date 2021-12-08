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
          <img :src="table_item.src" :alt="table_item.title" />
          <svg
            class="table__item-verified"
            v-if="table_item.verified"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <use xlink:href="#verified"></use>
          </svg>
          <div v-if="table_item.new" class="table__item-new"></div>
        </div>

        <p v-html="table_item.title"></p>
      </td>
      <td class="table__item">
        <div class="table__item-number">
          <span> {{ currency }}</span>
          <template
            v-if="
              typeof table_item.volume.number === 'number' || table_item.volume.number === 0
            "
            ><p v-html="`${nFormatter(table_item.volume.number)}`"></p>
          </template>
          <template v-else>
            <p v-html="'-'"></p>
          </template>
        </div>
        <div class="table__item-percent">
          <span
            :class="table_item.volume.percent > 0 ? 'green' : 'red'"
            v-html="table_item.volume.percent + '%'"
          ></span>
        </div>
      </td>
      <td class="table__item">
        <div class="table__item-number">
          <template
            v-if="
              typeof table_item.traders.number === 'number' || table_item.traders.number === 0
            "
            ><p v-html="table_item.traders.number"></p>
          </template>
          <template v-else>
            <p v-html="'-'"></p>
          </template>
        </div>
        <div class="table__item-percent">
          <span
            :class="table_item.traders.percent > 0 ? 'green' : 'red'"
            v-html="table_item.traders.percent + '%'"
          ></span>
        </div>
      </td>
      <td class="table__item">
        <div class="table__item-number">
          <template
            v-if="
              typeof table_item.sales.number === 'number' || table_item.sales.number === 0
            "
            ><p v-html="table_item.sales.number"></p>
          </template>
          <template v-else>
            <p v-html="'-'"></p>
          </template>
        </div>
        <div class="table__item-percent">
          <span
            :class="table_item.sales.percent > 0 ? 'green' : 'red'"
            v-html="table_item.sales.percent + '%'"
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
