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
      <div class="about__description">
        {{ CASE_DATA.description.project_description }}
      </div>
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
            <h3 class="about__details-title">
              {{
                CASE_DATA.links.length > 1
                  ? "Ссылки на работу"
                  : "Ссылка на работу"
              }}
            </h3>

            <a
              class="about__details-link"
              :href="`${link}`"
              v-for="link in CASE_DATA.links"
              :key="link"
              target="_blank"
            >
              {{ link }}
            </a>
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
    <div
      class="palette"
      v-if="CASE_DATA.labels.filter((item) => item == 'Дизайн').length"
    >
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
      slider_counter: 0,
    };
  },
  methods: {
    ...mapActions(["GET_CASE_DATA"]),
    moveSlider(e) {
      // if (e.target.getAttribute("data-action") == "next") {
      //   if (this.slider_counter >= this.$refs.color_item.length - 1) {
      //     e;
      //   } else {
      //     this.offset = this.offset + 320;
      //     this.slider_counter++;
      //     gsap.to(".palette__slider-line", 1, {
      //       transform: `translateX(-${this.offset}px)`,
      //     });
      //   }
      // } else {
      //   this.offset = Math.abs(this.offset) - 320;
      //   this.slider_counter--;
      //   if (this.offset <= 0) {
      //     this.offset = 0;
      //   }

      //   gsap.to(".palette__slider-line", 1, {
      //     transform: `translateX(-${this.offset}px)`,
      //   });
      // }

      if (e.target.getAttribute("data-action") == "next") {
        this.slider_counter++;

        if (this.slider_counter >= this.$refs.color_item.length - 1) {
          this.offset =
            this.$refs.color_item[0].getBoundingClientRect().width *
            (this.$refs.color_item.length - 1);
        } else {
          this.offset =
            this.$refs.color_item[0].getBoundingClientRect().width *
            this.slider_counter;
        }

        gsap.to(".palette__slider-line", 1, {
          transform: `translateX(-${this.offset}px)`,
        });
      } else {
        this.slider_counter--;

        if (this.slider_counter <= 0) {
          this.slider_counter = 0;
          this.offset = 0;
        } else {
          console.log("dasdas");
          console.log(this.offset);

          this.offset =
            this.$refs.color_item[0].getBoundingClientRect().width *
            this.slider_counter;
          console.log(this.offset);
        }

        gsap.to(".palette__slider-line", 1, {
          transform: `translateX(-${this.offset}px)`,
        });
      }
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
  overflow: auto;
  > div {
    padding: 60px;
  }
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
}

.mockups {
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    max-width: 100%;
    max-height: 100vh;
  }
}

.about {
  padding: 0 !important;
  display: flex;
  justify-content: space-between;
  min-height: 70vh;
  &__description {
    background-color: $white;
    padding: 30px;
    font-size: 72px;
    width: 70vw;
  }
  &__details {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    background-color: $gray;
    color: $dark;
    width: 30vw;
    &-wrapper {
      max-width: 416px;
    }
    &-info {
      word-break: break-all;
      margin-bottom: 50px;
    }
    &-link {
      color: $dark;
      display: block;
      margin-bottom: 7px;
      text-decoration: underline;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &-title {
      margin-bottom: 7px;
    }
  }
}

.font {
  display: flex;
  flex-wrap: wrap;
  &__image {
    padding: 15px;
  }
}

.palette {
  padding-right: 0 !important;
  display: flex;
  justify-content: space-between;
  background-color: #f4f4f2;
  min-height: 80vh !important;
  &__info {
    max-width: 440px;
    padding-right: 15px;
  }
  &__subtitle {
    margin: 30px 0;
    line-height: 130%;
  }
  &__controls {
    display: flex;
    justify-content: space-between;
    max-width: 110px;
  }
  &__control {
    background-color: $dark;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    outline: none;
    border: none;
    cursor: pointer;
    svg {
      width: 32px;
      pointer-events: none;
    }
  }
  &__slider {
    max-width: 50vw;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
    }
    &-line {
      display: flex;
      height: 100%;
    }
    &-item {
      padding: 15px;
      min-width: 320px;
      max-width: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding-bottom: 5%;
    }
    &-title {
    }
    &-subtitle {
      margin: 13px 0;
    }
    &-color {
      font-family: "Montserrat", sans-serif;
    }
  }
}

@media (max-width: 1440px) {
  .mockups {
    img {
      padding: 15px;
      max-width: 100%;
      max-height: 90vh;
    }
  }
}

@media (max-width: 1366px) {
  .mockups {
  }
  .about {
    &__description {
      font-size: 56px;
    }
    &__details {
      &-info {
        font-size: 16px;
      }
    }
  }
}

@media (max-width: 1365px) {
  .mockups {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 1024px) {
  .about {
    &__description,
    &__details {
      width: 100%;
    }
  }
}

@media (max-width: 1023px) {
  .about {
    flex-wrap: wrap;
  }
}

@media (max-width: 768px) {
  .palette {
    flex-direction: column;
    &__slider {
      margin-top: 30px;
      max-width: initial;
      &-line {
        width: 100%;
      }
      &-item {
        min-height: 50vh;
      }
    }
  }
  .case > div {
    padding: 30px 15px;
  }
  .font {
    &__image {
      padding: 15px 0;
    }
  }
}

@media (max-width: 640px) {
  .case > div {
    padding: 30px 10px;
  }
  .mockups {
    img {
      &:first-child {
        display: none;
      }
    }
  }
  .about {
    &__description {
      font-size: 36px;
    }
    &__description,
    &__details {
      padding: 30px 10px;
    }
  }
  .font {
    &__image {
      max-width: 100%;
      height: auto;
    }
  }
}

// @media (max-width: 1366px) {
//   .mockups {
//   }
//   .about {
//     &__description {
//       font-size: 36px;
//       padding: 30px;
//       min-width: 500px;
//     }
//     &__details {
//       max-width: 420px;
//       padding: 0 25px;
//       &-wrapper {
//       }
//       &-title,
//       &-subtitle {
//         font-size: 18px;
//       }
//     }
//   }
//   .palette {
//     padding: 30px;
//     padding-right: 0;
//     &__info {
//       margin-left: 0;
//       margin-right: 20px;
//     }
//   }
// }

// @media (max-width: 970px) {
//   .about {
//     flex-direction: column;
//     &__description {
//       // word-break: ;
//       padding: 30px 10px;
//       min-width: initial;
//     }
//     &__details {
//       max-width: initial;
//       padding: 25px;
//       &-wrapper {
//         display: flex;
//         flex-wrap: wrap;
//       }
//     }
//   }
//   .font {
//   }
// }

// @media (max-width: 767px) {
//   .palette {
//     flex-direction: column;
//     padding: 30px 0;
//     align-items: flex-start;
//     min-height: initial;
//     &__info {
//       margin-left: 30px;
//       margin-right: 30px;
//       margin-bottom: 30px;
//     }
//     &__subtitle {
//       max-width: initial;
//     }
//     &__slider {
//       &-item {
//         padding-bottom: 40px;
//       }
//     }
//   }
// }

// @media (max-width: 640px) {
//   .mockups {
//     img {
//       &:first-child {
//         display: none;
//       }
//     }
//   }
//   .palette {
//     &__slider {
//       &-item {
//         min-height: 300px;
//       }
//     }
//   }
// }

// //tablet

// @media (max-height: 1024px) and (max-width: 768px) {
// }

//reverse tablet
</style>
