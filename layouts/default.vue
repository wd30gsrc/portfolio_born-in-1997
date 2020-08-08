<template>
  <div>
    <header>
      <CommonHeader />
    </header>
    <Nuxt />
    <footer>
      <CommonFooter />
    </footer>
  </div>
</template>

<script>
import CommonHeader from '~/components/CommonHeader.vue'
import CommonFooter from '~/components/CommonFooter.vue'

export default {
  components: {
    CommonHeader,
    CommonFooter,
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  },
}
</script>

<style>
html {
  font-family: 'Montserrat', '游ゴシック', YuGothic, 'ヒラギノ角ゴ ProN W3',
    'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, sans-serif;
  font-size: 62.5%;
  color: #545454;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  font-size: 1.6rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
