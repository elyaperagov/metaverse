<template>
  <div class="news">
    <div class="container">
      <h1 v-html="title"></h1>
      <div class="news__items" v-if="!$root.isMobile">
        <template v-for="(item, i) in newsToShow">
          <div class="news__item" v-if="i < itemsToShow" :key="i">
            <div class="news__item-picture">
              <img :src="item.src" :alt="item.alt" />
              <div class="news__item-details">
                <p
                  v-html="
                    $dayjs(item.date)
                      .format(`D MMM YYYYY`)
                      .split('+')[0]
                  "
                ></p>
                <p v-html="item.price + ' ETH'"></p>
              </div>
            </div>
            <div class="news__item-info">
              <div class="news__item-counter">
                <div class="news__item-counter-icon">
                  <img :src="item.counter.icon" alt="counter icon" />
                </div>
                <p v-html="item.counter.number"></p>
              </div>
              <h4 class="news__item-title" v-html="item.title"></h4>
              <p class="news__item-text" v-html="item.text"></p>
              <router-link
                class="news__item-link"
                :to="item.link"
                v-html="read_more"
              >
              </router-link>
            </div>
          </div>
        </template>
      </div>

      <swiper class="news__items" v-else :options="swiperOptions">
        <template v-for="(item, i) in newsToShow">
          <swiper-slide class="news__item" v-if="i < itemsToShow" :key="i">
            <div class="news__item-picture">
              <img :src="item.src" :alt="item.alt" />
              <div class="news__item-details">
                <p
                  v-html="
                    $dayjs(item.date)
                      .format(`D MMM YYYYY`)
                      .split('+')[0]
                  "
                ></p>
                <p v-html="item.price + ' ETH'"></p>
              </div>
            </div>
            <div class="news__item-info">
              <div class="news__item-counter">
                <div class="news__item-counter-icon">
                  <img :src="item.counter.icon" alt="counter icon" />
                </div>
                <p v-html="item.counter.number"></p>
              </div>
              <h4 class="news__item-title" v-html="item.title"></h4>
              <p class="news__item-text" v-html="item.text"></p>
              <router-link
                class="news__item-link"
                :to="item.link"
                v-html="read_more"
              >
              </router-link>
            </div>
          </swiper-slide>
        </template>
      </swiper>
      <button
        class="button button--load-more"
        v-if="this.itemsToShow <= this.newsToShow.length"
        @click.prevent="loadMore()"
        v-html="more_news"
      ></button>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'NewsList',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          0: {
            slidesPerView: 'auto',
            spaceBetween: 0,
          },
        },
      },
      title: 'We know all about NFT Metaverse',
      read_more: 'Read more',
      more_news: 'More news',
      itemsToShow: 12,
      newsToShow: [],
      news: [
        {
          title: 'We know all about NFT Metaverse',
          text:
            'Eu, arcu nisl elementum sit. Tempus tempor aliquam quis amet bibendum netus est, hac. At ipsum interdum amet, ultrices varius lectus sit. At ipsum interdum amet, ultrices varius lectus sit.At ipsum interdum amet, ultrices varius lectus sit.At ipsum interdum amet, ultrices varius lectus sit.At ipsum interdum amet, ultrices varius lectus sit.At ipsum interdum amet, ultrices varius lectus sit.',
          src: require('@/assets/images/news-pic1.jpg'),
          alt: 'NFT news item picture',
          link: '/news-details',
          date: '01.01.1990',
          price: '445.19',
          counter: {
            icon: require('@/assets/images/counter-icon.jpg'),
            number: 3024,
          },
        },
        {
          title: 'We know all about NFT Metaverse',
          text:
            'Eu, arcu nisl elementum sit. Tempus tempor aliquam quis amet bibendum netus est, hac. At ipsu.',
          src: require('@/assets/images/news-pic2.jpg'),
          alt: 'NFT news item picture',
          link: '/news-details',
          date: '01.01.1990',
          price: '445.19',
          counter: {
            icon: require('@/assets/images/vibehead1.jpg'),
            number: 3024,
          },
        },
        {
          title: 'We know all about NFT Metaverse',
          text:
            'Eu, arcu nisl elementum sit. Tempus tempor aliquam quis amet bibendum netus est, hac. At ipsum interdum amet, ultrices varius lectus sit.',
          src: require('@/assets/images/news-pic3.jpg'),
          alt: 'NFT news item picture',
          link: '/news-details',
          date: '01.01.1990',
          price: '445.19',
          counter: {
            icon: require('@/assets/images/counter-icon.jpg'),
            number: 3024,
          },
        },
        {
          title: 'We know all about NFT Metaverse',
          text:
            'Eu, arcu nisl elementum sit. Tempus tempor aliquam quis amet bibendum netus est, hac. At ipsum interdum amet, ultrices varius lectus sit.',
          src: require('@/assets/images/news-pic4.jpg'),
          alt: 'NFT news item picture',
          link: '/news-details',
          date: '10.29.2021',
          price: '445.19',
          counter: {
            icon: require('@/assets/images/counter-icon.jpg'),
            number: 3024,
          },
        },
        {
          title: 'We know all about NFT Metaverse',
          text:
            'Eu, arcu nisl elementum sit. Tempus tempor aliquam quis amet bibendum netus est, hac. At ipsum interdum amet, ultrices varius lectus sit.',
          src: require('@/assets/images/news-pic1.jpg'),
          alt: 'NFT news item picture',
          link: '/news-details',
          date: '01.01.1990',
          price: '445.19',
          counter: {
            icon: require('@/assets/images/counter-icon.jpg'),
            number: 3024,
          },
        },
        {
          title: 'We know all about NFT Metaverse',
          text:
            'Eu, arcu nisl elementum sit. Tempus tempor aliquam quis amet bibendum netus est, hac. At ipsu.',
          src: require('@/assets/images/news-pic2.jpg'),
          alt: 'NFT news item picture',
          link: '/news-details',
          date: '01.01.1990',
          price: '445.19',
          counter: {
            icon: require('@/assets/images/vibehead1.jpg'),
            number: 3024,
          },
        },
        {
          title: 'We know all about NFT Metaverse',
          text:
            'Eu, arcu nisl elementum sit. Tempus tempor aliquam quis amet bibendum netus est, hac. At ipsum interdum amet, ultrices varius lectus sit.',
          src: require('@/assets/images/news-pic3.jpg'),
          alt: 'NFT news item picture',
          link: '/news-details',
          date: '01.01.1990',
          price: '445.19',
          counter: {
            icon: require('@/assets/images/counter-icon.jpg'),
            number: 3024,
          },
        },
        {
          title: 'We know all about NFT Metaverse',
          text:
            'Eu, arcu nisl elementum sit. Tempus tempor aliquam quis amet bibendum netus est, hac. At ipsum interdum amet, ultrices varius lectus sit.',
          src: require('@/assets/images/news-pic4.jpg'),
          alt: 'NFT news item picture',
          link: '/news-details',
          date: '10.29.2021',
          price: '445.19',
          counter: {
            icon: require('@/assets/images/counter-icon.jpg'),
            number: 3024,
          },
        },
        {
          title: 'We know all about NFT Metaverse',
          text:
            'Eu, arcu nisl elementum sit. Tempus tempor aliquam quis amet bibendum netus est, hac. At ipsum interdum amet, ultrices varius lectus sit.',
          src: require('@/assets/images/news-pic1.jpg'),
          alt: 'NFT news item picture',
          link: '/news-details',
          date: '01.01.1990',
          price: '445.19',
          counter: {
            icon: require('@/assets/images/counter-icon.jpg'),
            number: 3024,
          },
        },
        {
          title: 'We know all about NFT Metaverse',
          text:
            'Eu, arcu nisl elementum sit. Tempus tempor aliquam quis amet bibendum netus est, hac. At ipsu.',
          src: require('@/assets/images/news-pic2.jpg'),
          alt: 'NFT news item picture',
          link: '/news-details',
          date: '01.01.1990',
          price: '445.19',
          counter: {
            icon: require('@/assets/images/vibehead1.jpg'),
            number: 3024,
          },
        },
        {
          title: 'We know all about NFT Metaverse',
          text:
            'Eu, arcu nisl elementum sit. Tempus tempor aliquam quis amet bibendum netus est, hac. At ipsum interdum amet, ultrices varius lectus sit.',
          src: require('@/assets/images/news-pic3.jpg'),
          alt: 'NFT news item picture',
          link: '/news-details',
          date: '01.01.1990',
          price: '445.19',
          counter: {
            icon: require('@/assets/images/counter-icon.jpg'),
            number: 3024,
          },
        },
        {
          title: 'We know all about NFT Metaverse',
          text:
            'Eu, arcu nisl elementum sit. Tempus tempor aliquam quis amet bibendum netus est, hac. At ipsum interdum amet, ultrices varius lectus sit.',
          src: require('@/assets/images/news-pic4.jpg'),
          alt: 'NFT news item picture',
          link: '/news-details',
          date: '10.29.2021',
          price: '445.19',
          counter: {
            icon: require('@/assets/images/counter-icon.jpg'),
            number: 3024,
          },
        },
        {
          title: 'We know all about NFT Metaverse',
          text:
            'Eu, arcu nisl elementum sit. Tempus tempor aliquam quis amet bibendum netus est, hac. At ipsum interdum amet, ultrices varius lectus sit.',
          src: require('@/assets/images/news-pic4.jpg'),
          alt: 'NFT news item picture',
          link: '/news-details',
          date: '10.29.2021',
          price: '445.19',
          counter: {
            icon: require('@/assets/images/counter-icon.jpg'),
            number: 3024,
          },
        },
        {
          title: 'We know all about NFT Metaverse',
          text:
            'Eu, arcu nisl elementum sit. Tempus tempor aliquam quis amet bibendum netus est, hac. At ipsum interdum amet, ultrices varius lectus sit.',
          src: require('@/assets/images/news-pic4.jpg'),
          alt: 'NFT news item picture',
          link: '/news-details',
          date: '10.29.2021',
          price: '445.19',
          counter: {
            icon: require('@/assets/images/counter-icon.jpg'),
            number: 3024,
          },
        },
        {
          title: 'We know all about NFT Metaverse',
          text:
            'Eu, arcu nisl elementum sit. Tempus tempor aliquam quis amet bibendum netus est, hac. At ipsum interdum amet, ultrices varius lectus sit.',
          src: require('@/assets/images/news-pic4.jpg'),
          alt: 'NFT news item picture',
          link: '/news-details',
          date: '10.29.2021',
          price: '445.19',
          counter: {
            icon: require('@/assets/images/counter-icon.jpg'),
            number: 3024,
          },
        },
      ],
    }
  },
  methods: {
    async loadMore() {
      if (this.itemsToShow > this.newsToShow.length) {
        return
      }

      await this.addItems()
    },
    addItems() {
      this.itemsToShow += 4
    },
  },
  mounted() {
    this.newsToShow = this.news
  },
}
</script>

<style></style>
