<template>
  <div class="fv__inner__caption">
    <div class="key-title-wrap">
      <h1 class="key-title">BORN in 1997.</h1>
    </div>
    <p class="key-profile">
      <span class="key-profile__item">Web Devloper</span>
      <span class="key-profile__item--large">HIKARU<br />TATENO.</span>
      <span class="key-profile__item">Welcome to my Portfolio.</span>
    </p>
  </div>
</template>

<style lang="scss">
// Left area
.fv__inner__caption {
  width: 50%;
  position: relative;

  .key-title {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -55%);
    font-size: 3rem;
    font-weight: 700;
  }

  .key-profile {
    position: absolute;
    left: 0;
    bottom: 0;

    &__item {
      display: block;
      line-height: 1.5rem;
    }

    &__item--large {
      font-size: 5rem;
      line-height: 4.5rem;
    }
  }
}
</style>
