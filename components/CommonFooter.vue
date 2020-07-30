<template>
  <div class="footer__inner">
    <span>&copy; {{ nowYear }} Hikaru Tateno</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowYear: null,
    }
  },
  created() {
    const date = new Date()
    this.nowYear = date.getFullYear()
  },
}
</script>

<style lang="scss" scoped>
.footer__inner {
  text-align: center;
  padding: 20px 0;
  background: antiquewhite;
}
</style>
