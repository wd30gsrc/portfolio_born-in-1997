<template>
  <swiper
    ref="mySwiper"
    :options="swiperOption"
    class="fv__inner__picture swiper"
  >
    <swiper-slide v-for="slideImage in slideImages" :key="slideImage.id">
      <div class="key-img">
        <img :src="slideImage.img" width="500" height="500" alt="" />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slideImages: [
        { id: 1, img: require('~/assets/imgs/top/slide-02.png') },
        { id: 2, img: require('~/assets/imgs/top/slide-01.png') },
        { id: 3, img: require('~/assets/imgs/top/slide-03.png') },
        { id: 4, img: require('~/assets/imgs/top/slide-04.png') },
        { id: 5, img: require('~/assets/imgs/top/slide-05.png') },
        { id: 6, img: require('~/assets/imgs/top/slide-06.png') },
      ],
      swiperOption: {
        spaceBetween: 30,
        loop: true,
        effect: 'fade',
        autoplay: {
          delay: 6500,
          disableOnInteraction: false,
        },
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
}
</script>

<style scoped lang="scss">
// Right area
.fv__inner__picture {
  width: 50%;
  overflow: hidden;
}

.key-img {
  font-size: 0;
}
.key-img > img {
  width: 100%;
  background: #ffffff;
  border: 1px solid #ffffff;
}

@media screen and (max-width: 768px) {
  .fv__inner__picture {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
