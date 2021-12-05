<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <div class="slider__item" v-for="item in items" :key="item.id">
        <img
          class="slider__image select-disable"
          :src="getImage(item.src)"
          :alt="item.alt"
        />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      requried: true,
    },
    settings: {
      type: Object,
      default: () => ({
        dots: true,
        arrows: false,
        slidesToScroll: 1,
      }),
    },
  },
  name: "SliderGallery",
  components: {},
  mounted() {},
  methods: {
    getImage(path) {
      return require("@/assets/images/" + path);
    },
  },
};
</script>

<style lang="scss">
.slick-slider .slick-slide:nth-child(3n) {
  width: 160px !important;
}

.bmb-nft-gallery .owl-item:nth-child(2n) {
  margin-top: 100px;
  img {
    width: 120px;
    display: flex;
    margin: auto;
  }
}

.bmb-nft-gallery {
  margin-bottom: 30px;
  overflow: hidden;
  padding: 100px 0;
}

.slick-list {
  width: 110%;
}

.slick-track {
  margin-left: -80px;
}

.slider__image {
  height: auto;
  width: 100%;
  max-width: 265px;
}

.slick-slide {
  height: 245px !important;
  display: flex !important;
  align-items: flex-start;
  &:nth-child(2n) {
    align-items: flex-end;
  }

  &:nth-child(5) {
    .slider__item {
      margin-top: 25px !important;
    }
  }
}

.slider__item {
  display: flex !important;
  padding-right: 18.5px;
  align-items: flex-start;

  &:nth-child(2n) {
    align-items: flex-end;
  }
}

.slick-dots li button:before {
  border: 1px solid #fff;
  border-radius: 50%;
  content: "";
  width: 23px;
  height: 23px;

  background: #04090f;
  border: 2px solid rgba(255, 255, 255, 0.05);
  box-sizing: border-box;
  box-shadow: -2px -2px 10px rgba(255, 255, 255, 0.05), 2px 2px 10px #000000,
    inset 0px 4px 10px rgba(0, 0, 0, 0.3);
}

.slick-active button:before {
  background: #ffdd00;
  box-shadow: 0px 0px 20px #ffdd00;
}
</style>
