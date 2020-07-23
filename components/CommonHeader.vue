<template>
  <div class="header__inner">
    <nav>
      <ul class="hdg-list">
        <li class="hdg-list__item"><a href="#">About</a></li>
        <li class="hdg-list__item"><a href="#">Study&Product</a></li>
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

  .hdg-list__item:last-child {
    padding-right: 0;
  }

  .hdg-list__item > a {
    text-decoration: none;
    color: #545454;
  }
}
</style>
