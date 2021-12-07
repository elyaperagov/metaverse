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
        <span> {{ currency }}</span>
        <p v-html="table_item.volume"></p>
      </td>
      <td class="table__item">
        <p v-html="table_item.traders"></p>
      </td>
      <td class="table__item">
        <p v-html="table_item.sales"></p>
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

  props: {
    table_items: {
      type: Array,
    },
  },
}
</script>

<style></style>
