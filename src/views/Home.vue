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
          Приветствую! Меня зовут Андрей. Занимаюсь веб-разработкой(fullstack) и
          веб-дизайном (UI/UX). Сайты разрабатываю без конструкторов, как под
          ключ, так и по готовому макету figma/photoshop. Опыт в сфере
          разработки более 3 лет, в дизайне 1,5 года
        </p>
        <v-button class="home__info-hire" @click.prevent="hireMe"
          >Нанять меня</v-button
        >
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
            @click="toCase(work)"
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
                {{ work.description.project_description }}
              </p>
              <p class="home__portfolio-label">
                <span v-for="label in work.labels" :key="label">
                  {{ label }}
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <router-link class="mobile__link-portfolio" to="/portfolio"
      >Перейти в портфолио</router-link
    >
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { TimelineMax, Power3 } from "gsap";

export default {
  name: "Home",
  components: {},
  methods: {
    ...mapActions(["GET_PORTFOLIO", "GET_CASE_DATA"]),
    async toCase(data) {
      await this.GET_CASE_DATA(data);

      let tl = new TimelineMax({});

      tl.set(".case-loader", {
        opacity: 1,
        zIndex: 2,
      });

      tl.fromTo(
        ".case-loader__animate-item",
        1.4,
        {
          stagger: 0.1,
          ease: Power3.easeInOut,
          transform: `translateX(-100%)`,
        },
        {
          stagger: 0.1,
          ease: Power3.easeInOut,
          transform: `translateX(0%)`,
          onComplete: () => {
            this.$router.push("/case");
          },
        }
      );

      tl.set(".case-loader__wrapper", {
        zIndex: 3,
      });

      tl.to(".case-loader__title", 0.8, {
        height: "auto",
        ease: Power3.easeInOut,
      });
      tl.to(
        ".case-loader__tasks",
        0.8,
        {
          height: "auto",
          ease: Power3.easeInOut,
        },
        "-=0.6"
      );

      tl.to(".case-loader__title", 0.8, {
        delay: 1,
        height: "0",
        ease: Power3.easeInOut,
      });
      tl.to(
        ".case-loader__tasks",
        0.8,
        {
          height: "0",
          ease: Power3.easeInOut,
        },
        "-=0.6"
      );

      tl.to(".case-loader__animate-item", 1.4, {
        stagger: 0.1,
        ease: Power3.easeInOut,
        transform: `translateX(100%)`,
      });

      tl.set(".case-loader", {
        opacity: 0,
        zIndex: -2,
      });

      tl.play();
    },
    hireMe() {
      window.open("https://t.me/AndrewDeveloper", "_blank");
    },
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
    position: fixed;
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
    padding-left: 0;
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
      margin-right: 0;
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      align-items: flex-end;
      padding: 10px;
      margin-bottom: 20px;
      &:last-child {
        margin-right: 20px;
      }
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
    &-label span {
      margin-right: 10px;
    }
  }
}
.mobile__link-portfolio {
  display: none;
}
// notebooks

@media screen and (max-width: 1366px) and (min-width: 1024px) {
  .home {
    &__info {
      max-width: 600px;
      padding: 0 20px;
      &-title {
        font-size: 72px;
      }
    }
    &__portfolio {
      max-width: 480px;
      &-item {
        max-width: auto;
      }
      &-link {
        margin-left: 10px;
      }
    }
  }
}

@media (max-width: 1024px) {
  .home {
    overflow: auto;
    &__portfolio {
      &-title,
      &-item,
      &-title a {
        margin-left: 20px;
      }
      &-title a {
        margin-right: 20px;
      }
      &-item {
        margin-right: 0px;
      }
    }
  }
}

// reverse tablets

@media (max-height: 1024px) and (max-width: 768px) {
  .home {
    padding-top: 3vh;

    &__container {
      flex-direction: column;
    }
    &__info {
      max-width: 80%;
      &-title {
        margin: 14px 0 14px 0;
        font-size: 72px;
      }
      &-subtitle {
        margin-bottom: 20px;
      }
    }
    &__portfolio {
      max-width: 100%;
      padding-bottom: 20px;
      padding-right: 140px;
      height: 50%;
      &-label {
        display: none;
      }
      &-title {
        margin-bottom: 10px;
      }
      &-description {
        display: none;
      }
      &-list {
        display: flex;
      }
      &-link {
        padding-right: 10px;
      }
      &-item {
        min-width: 300px;
        min-height: initial;
      }
    }
  }
}

// tablets

@media (max-height: 768px) and (max-width: 1024px) {
  .home {
    padding-top: 5vh;

    &__container {
      flex-direction: column;
    }
    &__info {
      max-width: 80%;
      &-title {
        margin: 14px 0 14px 0;
      }
      &-subtitle {
        margin-bottom: 20px;
      }
    }
    &__portfolio {
      max-width: 100%;
      padding-bottom: 20px;
      height: 50%;
      padding: 0;
      padding-bottom: 20px;
      &-label {
        display: none;
      }
      &-title {
        margin-bottom: 10px;
      }
      &-description {
        display: none;
      }
      &-list {
        display: flex;
      }
      &-link {
        padding-right: 10px;
      }
      &-item {
        min-width: 300px;
        min-height: initial;
      }
    }
  }
}

// mobile

@media (max-width: 767px) and (min-width: 300px) {
  .home {
    &__info {
      padding: 0 10px;
      max-width: initial;
      &-suptitle {
        font-size: 16px;
      }
      &-title {
        font-size: 48px;
      }
      &-subtitle {
        font-size: 16px;
      }
    }
    &__portfolio {
      display: none;
    }
  }
  .mobile__link-portfolio {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 14px;
    background-color: $white;
    color: $dark;
    display: flex;
    justify-content: center;
  }
}

@media (max-width: 768px) and (min-height: 768px) {
  .home {
    height: 100%;
    &__info {
      padding-bottom: 20px;
    }
    &__container {
      height: 100%;
      justify-content: space-between;
    }
    &__portfolio {
      display: initial;
      padding-right: 0;
      height: auto;
      &-title {
        width: 100%;
        font-size: 18px;
      }
      &-list {
        align-items: flex-end;
        height: initial;
      }
      &-item {
        min-width: 250px;
        min-height: 40vh;
        margin-bottom: 0;
      }
      &-name,
      &-link {
        font-size: 16px;
      }
    }
  }
  .mobile__link-portfolio {
    display: none;
  }
}
</style>
