<template>
  <div class="ab-skill">
    <h3 class="ab-skill__hdg">#02 Skill.</h3>
    <div class="cards">
      <ul class="cards__list">
        <li v-for="card in cards" :key="card.id" class="cards__list__item">
          <div class="list-img"><img :src="card.imgs" :alt="card.alt" /></div>
          <div class="list-name">{{ card.alt }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          imgs: require('@/assets/imgs/top/about-html.png'),
          alt: 'HTML',
        },
        { id: 2, imgs: require('@/assets/imgs/top/about-css.png'), alt: 'CSS' },
        {
          id: 3,
          imgs: require('@/assets/imgs/top/about-javascript.png'),
          alt: 'Javascript\n(Vue.js/Nuxt.js)',
        },
        {
          id: 4,
          imgs: require('@/assets/imgs/top/about-sass.png'),
          alt: 'Sass',
        },
        {
          id: 5,
          imgs: require('@/assets/imgs/top/about-pug.png'),
          alt: 'Pug',
        },
        {
          id: 6,
          imgs: require('@/assets/imgs/top/about-github.png'),
          alt: 'Git/Github',
        },
        {
          id: 7,
          imgs: require('@/assets/imgs/top/about-photoshop.png'),
          alt: 'Photoshop',
        },
        {
          id: 8,
          imgs: require('@/assets/imgs/top/about-ai.png'),
          alt: 'Illustrator',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.ab-skill {
  font-family: 'Oswald', sans-serif;

  .ab-skill__hdg {
    font-size: 2.4rem;
    padding: 30px 0 20px;
    text-align: center;
  }
}

.cards {
  font-size: 2.4rem;

  .cards__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .cards__list__item {
    width: calc(25% - 40px);
    margin: 0 0 50px;
    padding: 50px 0 130px;
    box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.2);
    border-radius: 8px;
    position: relative;
  }

  .list-img {
    padding: 0 24%;
  }

  .list-name {
    white-space: pre;
    text-align: center;
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
  }
}

@media screen and (max-width: 768px) {
  .ab-skill {
    padding: 0 16px;
  }

  .cards {
    font-size: 1.6rem;

    .cards__list::after {
      content: '';
      display: block;
      width: 33%;
    }

    .cards__list__item {
      width: calc(33% - 5px);
      padding: 30px 0 80px;
      margin: 0 0 30px;
    }

    .list-name {
      bottom: 24px;
    }
  }
}
</style>
