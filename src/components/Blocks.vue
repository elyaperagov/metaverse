<template>
  <div class="sales__block-wrapper">
    <div class="sales__block" v-for="(block, i) in blocks" :key="i">
      <p class="sales__block-title" v-if="block.title">
        <span v-html="block.title"> </span>
      </p>
      <div class="sales__items">
        <div class="sales__item" v-for="(item, j) in block.items" :key="j">
          <div class="sales__item-top">
            <h3 class="sales__item-title" v-html="item.title"></h3>
            <div class="sales__social-links">
              <a
                v-for="(social, k) in item.socials"
                :key="k"
                class="sales__social-link"
                :href="social.href"
                target="_blank"
              >
                <svg
                  :width="social.icon.width"
                  :height="social.icon.height"
                  aria-hidden="true"
                >
                  <use :xlink:href="social.icon.link"></use>
                </svg>
                <span v-html="social.text"></span>
              </a>
            </div>
          </div>
          <div class="sales__item-content">
            <div
              class="sales__item-info sales__item-info--schedule"
              v-if="item.type !== 'TBA'"
            >
              <div class="sales__schedule-cell" v-if="item.presale">
                <p class="sales__schedule-title">Presale</p>
                <p class="sales__schedule-date" v-html="item.presale"></p>
              </div>
              <div class="sales__schedule-cell" v-if="item.sale">
                <p class="sales__schedule-title">Sale</p>
                <p class="sales__schedule-date" v-html="item.sale"></p>
              </div>
            </div>
            <div class="sales__item-info">
              <p
                class="sales__collection-info"
                v-html="item.collection.title"
              ></p>
              <div class="sales__collection-images">
                <div
                  class="sales__collection-image"
                  v-for="(image, i) in item.collection.images"
                  :key="i"
                >
                  <img :src="image.src" :alt="image.alt" />
                </div>
              </div>
            </div>

            <div
              class="sales__item-info sales__item-info--prices"
              v-if="item.type !== 'TBA'"
            >
              <div class="sales__item-quantity-wrapper">
                <p
                  v-if="item.presale_price"
                  class="sales__item-quantity"
                  v-html="'Presale: &nbsp;' + item.presale_price + ' ETH'"
                ></p>
                <p
                  v-if="item.sale_price"
                  class="sales__item-quantity"
                  v-html="'Sale: &nbsp;' + item.sale_price + ' ETH'"
                ></p>
                <p
                  v-if="item.price"
                  class="sales__item-quantity"
                  v-html="item.price"
                ></p>
              </div>
              <p
                v-if="item.total_amount"
                class="sales__item-amount"
                v-html="item.total_amount + ' Total'"
              ></p>
            </div>
            <div
              class="sales__item-info sales__item-info--prices"
              v-if="item.type === 'TBA'"
            >
              <div class="sales__item-quantity-wrapper">
                <p class="sales__item-quantity" v-html="item.price"></p>
              </div>

              <p
                class="sales__item-amount"
                v-html="item.total_amount + ' Total'"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLink from '@/components/AppLink'

export default {
  name: 'Block',
  components: {
    AppLink,
  },
  props: {
    blocks: {
      type: Array,
    },
  },
  data() {
    return {}
  },
}
</script>

<style></style>
