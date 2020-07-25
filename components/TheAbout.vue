<template>
  <section class="about">
    <div class="about__inner">
      <h2 id="anc-ab" class="about__inner__hdg">About</h2>
      <TheAboutProfile />
      <TheAboutSkill />
      <TheAboutCando />
    </div>
  </section>
</template>

<script>
import TheAboutProfile from '@/components/TheAboutProfile.vue'
import TheAboutSkill from '@/components/TheAboutSkill.vue'
import TheAboutCando from '@/components/TheAboutCando.vue'

export default {
  components: {
    TheAboutProfile,
    TheAboutSkill,
    TheAboutCando,
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
    font-size: 10rem;
    color: #d1d1d1;
  }
}
</style>
