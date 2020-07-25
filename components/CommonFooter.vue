<template>
  <div class="footer__inner">
    <span>&copy; {{ nowYear }} Hikaru Tateno</span>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    nowYear() {
      const date = new Date()
      const nowYear = date.getFullYear()
      return nowYear
    },
  },
}
</script>

<style lang="scss" scoped>
.footer__inner {
  text-align: center;
  padding: 10px 0;
  background: antiquewhite;
}
</style>
