<template>
  <section class="studyproduct">
    <div class="stp__inner">
      <h2 id="anc-stp" class="stp__inner__hdg">
        Study&<br class="mediaSp" />Product
      </h2>
      <div class="stp__img caption">
        <span class="caption__text">Comming soon</span>
        <img src="~/assets/imgs/top/study-product.png" alt="Study&Product" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.mediaSp {
  display: none;
}

.studyproduct {
  .stp__inner {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding: 0 0 100px;
  }

  .stp__inner__hdg {
    font-family: 'Oswald', sans-serif;
    font-size: 10rem;
    color: #d1d1d1;
    padding: 0 0 30px;
  }

  .caption {
    position: relative;
    font-size: 0;
  }

  .caption__text {
    font-family: 'Oswald', sans-serif;
    position: absolute;
    bottom: 20px;
    right: 50px;
    color: #ffffff;
    font-size: 7rem;
  }
}

@media screen and (max-width: 768px) {
  .mediaSp {
    display: block;
  }

  .studyproduct {
    .stp__inner {
      padding: 0 0 100px;
    }

    .stp__inner__hdg {
      line-height: 10rem;
    }

    .caption {
      padding: 0 16px 0;
    }

    .caption__text {
      font-size: 3rem;
      bottom: 10px;
      right: 30px;
    }
  }
}
</style>
