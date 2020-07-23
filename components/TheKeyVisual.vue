<template>
  <div class="fv__inner">
    <TheKeyVisualCaption />
    <TheKeyVisualPicture />
  </div>
</template>

<script>
import TheKeyVisualCaption from '~/components/TheKeyVisualCaption.vue'
import TheKeyVisualPicture from '~/components/TheKeyVisualPicture.vue'

export default {
  components: {
    TheKeyVisualCaption,
    TheKeyVisualPicture,
  },
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
.fv__inner {
  display: flex;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  font-family: 'Oswald', sans-serif;
  color: #787878;
}
</style>
