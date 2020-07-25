<template>
  <div class="header__inner">
    <nav>
      <ul class="hdg-list">
        <li class="hdg-list__item">
          <a v-scroll-to="'#anc-ab'" href="#anc-ab">About</a>
        </li>
        <li class="hdg-list__item">
          <a v-scroll-to="'#anc-stp'" href="#anc-stp">Study&Product</a>
        </li>
        <li class="hdg-list__item">
          <a
            href="https://github.com/wd30gsrc/portfolio_born-in-1997"
            target="_blank"
            >Github<img
              class="icon-blank"
              src="~/static/out.svg"
              alt="新しいタブで開く"
          /></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  duration: 500,
  easing: 'ease',
  offset: 0,
})

export default {
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
.header__inner {
  max-width: 1000px;
  widows: 100%;
  margin: 0 auto;
}

.hdg-list {
  display: flex;
  justify-content: flex-end;
  font-family: 'Oswald', sans-serif;
  padding: 28px 0px 32px;

  .hdg-list__item {
    padding: 0 30px;
  }

  .hdg-list__item:first-child {
    padding-left: 0;
  }

  .hdg-list__item:last-child {
    padding-right: 0;
  }

  .hdg-list__item > a {
    position: relative;
    text-decoration: none;
    color: #545454;
  }

  .icon-blank {
    display: inline-block;
    width: 14px;
    height: 14px;
    padding-left: 4px;
    box-sizing: content-box;
  }
}

@media screen and (max-width: 768px) {
  .hdg-list {
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    max-width: 375px;

    .hdg-list__item {
      padding: 0;
    }
  }
}
</style>
