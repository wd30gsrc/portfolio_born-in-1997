<template>
  <div class="ab-cando">
    <h3 class="ab-cando__hdg">#03 What I can do.</h3>
    <dl class="dlist">
      <dt class="dlist__title">私ができること</dt>
      <dd class="dlist__title__item icon-check">HTMLやCSSの基本的な記述。</dd>
      <dd class="dlist__title__item icon-check">
        セマンティックを意識したマークアップ。
      </dd>
      <dd class="dlist__title__item icon-check">CSSを用いたデザインの再現。</dd>
      <dd class="dlist__title__item icon-check">
        CSSプリプロセッサ(Sass)を理解し使うことができます。
      </dd>
      <dd class="dlist__title__item icon-check">
        テンプレートエンジン(Pug)を理解し使うことができます。
      </dd>
      <dd class="dlist__title__item icon-check">
        Git/Githubを用いたチームでの開発経験があります。
      </dd>
      <dd class="dlist__title__item icon-check">
        CSS設計ルールに対する理解があり、BEMを用いたCSS設計の経験があります。
      </dd>
      <dd class="dlist__title__item icon-check">
        Photoshop/Illustratorなどデザインソフトの基本的な操作ができます。
      </dd>
    </dl>
    <dl class="dlist">
      <dt class="dlist__title">学習中のスキル/気になっている技術</dt>
      <dd class="dlist__title__item icon-pen">
        Vue.js(Nuxt.js)を使用したWeb制作。
      </dd>
      <dd class="dlist__title__item icon-pen">効果的なCSSアニメーション。</dd>
      <dd class="dlist__title__item icon-pen">Reactを使用したWeb制作。</dd>
      <dd class="dlist__title__item icon-pen">
        WebGL(Three.js)等のCanvasを使った表現。
      </dd>
      <dd class="dlist__title__item icon-pen">Atomic Designの設計思想。</dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.ab-cando {
  .ab-cando__hdg {
    font-family: 'Oswald', sans-serif;
    font-size: 2.4rem;
    padding: 30px 0 20px;
    text-align: center;
  }
}

.dlist {
  padding: 0 180px 74px;

  &__title {
    padding: 0 0 24px;
    font-weight: bold;
  }

  &__title__item {
    position: relative;
    padding: 0 0 20px 26px;
  }

  .icon-check::before {
    content: '';
    display: block;
    background: url('~static/tick.svg') no-repeat;
    background-size: contain;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 2px;
    left: 0;
  }
  .icon-pen::before {
    content: '';
    display: block;
    background: url('~static/pen.svg') no-repeat;
    background-size: contain;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 2px;
    left: 0;
  }
}

@media screen and (max-width: 768px) {
  .ab-cando {
    padding: 0 16px;
  }

  .dlist {
    padding: 10px 0 20px;

    &__title {
      text-align: center;
      padding: 0 0 20px;
    }
  }
}
</style>
