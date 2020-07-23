<template>
  <div class="fv__inner__picture">
    <div class="key-img">
      <img src="~/assets/imgs/top/slide-02.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // props: {
      //   slideImg: {
      //     type: String,
      //   },
      // },
    }
  },
}
</script>

<style lang="scss">
// Right area
.fv__inner__picture {
  width: 50%;

  .key-img {
    font-size: 0;
  }
  .key-img > img {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .fv__inner__picture {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
