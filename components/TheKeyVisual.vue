<template>
  <section class="fv">
    <div class="fv__inner">
      <TheKeyVisualCaption />
      <TheKeyVisualPicture />
    </div>
    <AnimationScroll />
  </section>
</template>

<script>
import TheKeyVisualCaption from '~/components/TheKeyVisualCaption.vue'
import TheKeyVisualPicture from '~/components/TheKeyVisualPicture.vue'
import AnimationScroll from '~/components/AnimationScroll.vue'

export default {
  components: {
    TheKeyVisualCaption,
    TheKeyVisualPicture,
    AnimationScroll,
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
  padding: 0 0 60px;
  font-family: 'Oswald', sans-serif;
  position: relative;
}

@media screen and (max-width: 768px) {
  .fv__inner {
    flex-direction: column-reverse;
    padding: 0 0 30px;
  }
}
</style>
