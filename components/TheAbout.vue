<template>
  <section class="about">
    <div class="about__inner">
      <h2 class="about__inner__hdg">About</h2>
      <TheAboutProfile />
    </div>
  </section>
</template>

<script>
import TheAboutProfile from '@/components/TheAboutProfile.vue'

export default {
  components: {
    TheAboutProfile,
  },
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
.about__inner {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 120px 0 0;

  .about__inner__hdg {
    font-family: 'Oswald', sans-serif;
    font-size: 100px;
    color: #d1d1d1;
  }
}
</style>
