<template>
  <section class="case">
    <div class="mockups">
      <img
        :src="require(`@/assets/media/img/${CASE_DATA.mockups.desktop}.png`)"
      />
      <img
        :src="require(`@/assets/media/img/${CASE_DATA.mockups.mobile}.png`)"
      />
    </div>
    <div class="about">
      <!-- <h2 class="about__name"> {{ CASE_DATA.name }} </h2> -->
      <div class="about__description">{{ CASE_DATA.description }}</div>
      <div class="about__details">
        <div class="about__details-wrapper">
          <div class="about__details-info">
            <h3 class="about__details-title">Задача</h3>
            <p class="about__details-subtitle">{{ CASE_DATA.tasks }}</p>
          </div>
          <div class="about__details-info">
            <h3 class="about__details-title">Технологии</h3>
            <p class="about__details-subtitle">{{ CASE_DATA.technologies }}</p>
          </div>
          <div class="about__details-info">
            <h3 class="about__details-title">Ссылка на работу</h3>
            <p
              class="about__details-subtitle"
              v-for="link in CASE_DATA.links"
              :key="link"
            >
              <a class="about__details-link" :href="`${link}`" target="_blank">
                {{ link }}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="font">
      <img
        class="font__image"
        v-for="font in CASE_DATA.fonts"
        :key="font"
        :src="require(`@/assets/media/svg/${font}.svg`)"
        alt=""
      />
    </div>
    <div class="palette">
      <div class="palette__info">
        <h2 class="palette__title">Цветовая палитра</h2>
        <p class="palette__subtitle">
          {{ CASE_DATA.colors.color_description }}
        </p>
        <div class="palette__controls">
          <button
            class="palette__control prev"
            data-action="prev"
            @click.prevent="moveSlider"
          >
            <svg
              width="38"
              height="18"
              viewBox="0 0 38 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.19274 0.422704L0.436584 7.9711C0.436139 7.97153 0.435768 7.97204 0.435248 7.97247C-0.146033 8.53991 -0.144178 9.46198 0.435396 10.0275C0.435841 10.028 0.436213 10.0285 0.436732 10.0289L8.19288 17.5773C8.77394 18.1428 9.71385 18.1407 10.2922 17.5724C10.8705 17.0041 10.8682 16.085 10.2872 15.5195L5.07971 10.4516L36.5156 10.4516C37.3354 10.4516 38 9.80173 38 9C38 8.19828 37.3354 7.54839 36.5156 7.54839L5.07971 7.54839L10.287 2.48051C10.8681 1.91496 10.8703 0.995874 10.292 0.42764C9.71363 -0.14074 8.77372 -0.142699 8.19274 0.422704Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            class="palette__control next"
            data-action="next"
            @click.prevent="moveSlider"
          >
            <svg
              width="38"
              height="18"
              viewBox="0 0 38 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.8073 17.5773L37.5634 10.0289C37.5639 10.0285 37.5642 10.028 37.5648 10.0275C38.146 9.46009 38.1442 8.53802 37.5646 7.97248C37.5642 7.97204 37.5638 7.97153 37.5633 7.9711L29.8071 0.422705C29.2261 -0.142771 28.2862 -0.140667 27.7078 0.42764C27.1295 0.995874 27.1318 1.91496 27.7128 2.48051L32.9203 7.54839L1.48437 7.54839C0.664554 7.54839 -3.93591e-07 8.19827 -4.32081e-07 9C-4.70572e-07 9.80173 0.664554 10.4516 1.48437 10.4516L32.9203 10.4516L27.713 15.5195C27.1319 16.085 27.1297 17.0041 27.708 17.5724C28.2864 18.1407 29.2263 18.1427 29.8073 17.5773Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="palette__slider">
        <div class="palette__slider-line">
          <div
            class="palette__slider-item"
            ref="color_item"
            v-for="color_data in CASE_DATA.colors.color_list"
            :key="color_data.color_hex"
            :style="{
              backgroundColor: `${color_data.color_hex}`,
              color: `${color_data.block_text_color}`,
            }"
          >
            <h3 class="palette__slider-title">{{ color_data.color_name }}</h3>
            <p class="palette__slider-subtitle">
              {{ color_data.color_position }}
            </p>
            <p class="palette__slider-color">{{ color_data.color_hex }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { gsap } from "gsap";

export default {
  name: "Case",
  data() {
    return {
      offset: 0,
    };
  },
  methods: {
    ...mapActions(["GET_CASE_DATA"]),
    moveSlider(e) {
      if (e.target.getAttribute("data-action") == "next") {
        this.offset = this.offset + 320;
        if (
          this.offset >=
          this.$refs.color_item[0].clientWidth * this.$refs.color_item.length -
            this.$refs.color_item[0].clientWidth * 3
        ) {
          this.offset =
            this.$refs.color_item[0].clientWidth *
              this.$refs.color_item.length -
            this.$refs.color_item[0].clientWidth * 3;
        }
        console.log(
          this.$refs.color_item[0].clientWidth * this.$refs.color_item.length -
            this.$refs.color_item[0].clientWidth * 3
        );
        gsap.to(".palette__slider-line", 1, {
          transform: `translateX(-${this.offset}px)`,
        });
      } else {
        this.offset = this.offset - 320;
        if (this.offset <= 0) {
          this.offset = 0;
        }

        gsap.to(".palette__slider-line", 1, {
          transform: `translateX(-${this.offset}px)`,
        });
      }

      console.log(this.offset);
    },
  },
  created() {
    if (this.CASE_DATA.id == undefined) {
      this.GET_CASE_DATA(JSON.parse(localStorage.getItem("case")));
    }
  },
  computed: {
    ...mapGetters(["CASE_DATA"]),
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.case {
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
  > div {
    min-height: 100vh;
  }
}
.mockups {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.about {
  display: flex;
  justify-content: space-between;
  background-color: $white;
  &__description {
    font-size: 72px;
    padding: 60px;
    min-width: 760px;
  }
  &__details {
    background-color: $gray;
    max-width: 640px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    word-break: break-word;
    &-wrapper {
    }
    &-info {
      max-width: 416px;
      margin-bottom: 50px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &-link {
      color: $dark;
    }
    &-title {
      @include h3;
      letter-spacing: 0;
      margin-bottom: 7px;
      font-weight: 700;
    }
    &-subtitle {
      font-size: 22px;
      line-height: 130%;
    }
  }
}
.font {
  min-height: 418px !important;
  display: flex;
  flex-wrap: wrap;
  &__image {
    max-width: 100%;
    height: auto;
    margin-left: 100px;
    &:first-child {
      margin-left: 60px;
    }
  }
}
.palette {
  min-height: 860px;
  background-color: $gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__info {
    margin-left: 60px;
  }
  &__title {
    font-size: 22px;
  }
  &__subtitle {
    line-height: 120%;
    max-width: 388px;
    width: 100%;
    margin: 25px 0;
    font-size: 18px;
  }
  &__controls {
    display: flex;
    max-width: 110px;
    width: 100%;
    justify-content: space-between;
  }
  &__control {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: none;
    background-color: $dark;
    cursor: pointer;
    svg {
      width: 30px;
      pointer-events: none;
    }
  }
  &__slider {
    max-height: 580px;
    height: 100%;
    display: flex;
    overflow: auto;
    max-width: 960px;
    width: 100%;
    &-line {
      width: auto;
      height: 100%;
      display: flex;
      position: relative;
      left: 0;
    }
    &::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
    }
    &-item {
      height: inherit;
      padding: 0 15px;
      padding-bottom: 100px;
      min-width: 320px;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      color: $white;
    }
    &-title {
      font-size: 24px;
    }
    &-subtitle {
      margin: 13px 0;
    }
    &-color {
      text-transform: uppercase;
      font-family: "Montserrat", sans-serif;
    }
  }
}

@media (max-width: 1366px) {
  .mockups {
  }
  .about {
    &__description {
      font-size: 36px;
      padding: 30px;
      min-width: 500px;
    }
    &__details {
      max-width: 420px;
      padding: 0 25px;
      &-wrapper {
      }
      &-title,
      &-subtitle {
        font-size: 18px;
      }
    }
  }
  .font {
    min-height: initial !important;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &__image {
      margin-left: 0;
      margin-bottom: 20px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
  .palette {
    padding: 30px;
    padding-right: 0;
    &__info {
      margin-left: 0;
      margin-right: 20px;
    }
  }
}

//tablet

@media (max-height: 1024px) and (max-width: 768px) {
}

//reverse tablet
</style>
