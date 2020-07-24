<template>
  <div class="ab-profile">
    <h3 class="ab-profile__hdg">#01 Profile.</h3>
    <p class="ab-profile__description">
      1997年5月25日、千葉県出身。<br />
      現在コーダーとしてWebサイト改修、LP制作などを担当。<br />
      堅牢なコーディングと多様な表現に対応できるデベロッパーを目指し日々学習中です。
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.ab-profile {
  .ab-profile__hdg {
    font-size: 2.4rem;
    font-family: 'Oswald', sans-serif;
    padding: 30px 0 0;
  }
  .ab-profile__description {
    padding: 15px 0 40px;
  }
}

@media screen and (max-width: 768px) {
  .ab-profile {
    padding: 0 16px;
  }
}
</style>
