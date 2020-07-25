<template>
  <div class="header__inner">
    <nav>
      <ul class="hdg-list">
        <li class="hdg-list__item"><a href="#anc-ab">About</a></li>
        <li class="hdg-list__item"><a href="#anc-stp">Study&Product</a></li>
        <li class="hdg-list__item">
          <a
            href="https://github.com/wd30gsrc/portfolio_born-in-1997"
            target="_blank"
            >Github</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
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

  .hdg-list__item > a {
    position: relative;
  }

  .hdg-list__item > a[target='_blank']::after {
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    background: url('~static/out.svg');
    background-size: contain;
    position: absolute;
    top: 50%;
    right: -15px;
    transform: translateY(-50%);
  }

  .hdg-list__item > a {
    text-decoration: none;
    color: #545454;
  }
}

@media screen and (max-width: 768px) {
  .hdg-list {
    justify-content: center;
  }
}
</style>
