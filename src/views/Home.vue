<template>
  <section class="home">
    <div class="home__container">
      <svg
        width="1238"
        height="563"
        class="home__circle"
        viewBox="0 0 1238 563"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_df_806_308)">
          <rect
            x="236"
            y="250"
            width="752"
            height="752"
            rx="376"
            fill="url(#paint0_linear_806_308)"
          />
        </g>
        <defs>
          <filter
            id="filter0_df_806_308"
            x="-14"
            y="0"
            width="1252"
            height="1252"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="125" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.952941 0 0 0 0 0.537255 0 0 0 0 0.188235 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_806_308"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_806_308"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="9"
              result="effect2_foregroundBlur_806_308"
            />
          </filter>
          <linearGradient
            id="paint0_linear_806_308"
            x1="612"
            y1="139"
            x2="612"
            y2="1002"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.017673" stop-color="#B27483" />
            <stop offset="0.198735" stop-color="#F7C958" />
            <stop offset="0.487913" stop-color="#F48A2F" />
            <stop offset="1" stop-color="#CF7155" />
          </linearGradient>
        </defs>
      </svg>

      <div class="home__info">
        <h3 class="home__info-suptitle">Frontend & UI|UX Designer</h3>
        <h1 class="home__info-title">Андрей Холлуэй</h1>
        <p class="home__info-subtitle">
          Занимаюсь веб-разработкой более 3.5 лет, всегда изучаю новые
          технологии и иду в ногу со временем. Работая со мной, Вы получаете
          полностью готовый проект, будь то верстка или сайт под ключ. Всегда
          довожу проект до конца и поддерживаю в работе.
        </p>
        <v-button class="home__info-hire">Нанять меня</v-button>
      </div>
      <div class="home__portfolio">
        <h2 class="home__portfolio-title">
          Последние проекты
          <router-link to="/portfolio" class="home__portfolio-link"
            >Все проекты
          </router-link>
        </h2>
        <ul class="home__portfolio-list">
          <li
            class="home__portfolio-item"
            @click="test"
            v-for="work in PORTFOLIO"
            :key="work.id"
            :style="{
              backgroundImage:
                'url(' +
                require('@/assets/media/img/' + work.background_image) +
                ')',
            }"
          >
            <div class="home__portfolio-info">
              <h3 class="home__portfolio-name">
                {{ work.name }}
              </h3>
              <p class="home__portfolio-description">
                {{ work.description }}
              </p>
              <p class="home__portfolio-label">
                {{ work.labels }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {},
  methods: {
    ...mapActions(["GET_PORTFOLIO"]),
  },
  computed: {
    ...mapGetters(["PORTFOLIO"]),
  },
  mounted() {
    this.GET_PORTFOLIO();
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
  display: flex;
  color: $white;
  padding-top: 20vh;
  &__container {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
  &__circle {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
  &__info {
    padding: 0 40px;
    max-width: 748px;
    &-suptitle {
      @include h3;
      text-transform: uppercase;
    }
    &-title {
      @include h1;
      margin: 28px 0 22px 0;
      line-height: 90%;
    }
    &-subtitle {
      margin-bottom: 40px;
      line-height: 140%;
      font-family: "Montserrat", sans-serif;
    }
    &-hire {
    }
  }
  &__portfolio {
    padding: 0 20px;
    padding-bottom: 70px;
    &-title {
      @include h3;
      margin-bottom: 45px;
      display: flex;
      justify-content: space-between;
      text-transform: uppercase;
      align-items: flex-end;
    }
    &-link {
      text-transform: none;
      font-size: 18px;
      letter-spacing: 0;
      font-weight: 400;
    }
    &-list {
      height: 100%;
      overflow: auto;
      border-radius: 25px;
      &::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
      }
    }
    &-item {
      cursor: pointer;
      max-width: 552px;
      width: 100%;
      min-height: 497px;
      border-radius: 25px;
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      align-items: flex-end;
      padding: 10px;
      margin-bottom: 20px;
    }
    &-info {
      background-color: $dark;
      width: 100%;
      padding: 20px;
      border-radius: 25px;
    }
    &-name {
      @include h3;
      letter-spacing: 0;
    }
    &-description {
      margin: 14px 0;
    }
    &-label {
    }
  }
}
</style>
