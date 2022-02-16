<template>
  <section class="portfolio">
    <ul class="portfolio__list">
      <li
        class="portfolio__item"
        @mouseenter="details"
        @mouseleave="leaveDetails"
        @click.prevent="toCase(work)"
        :style="{
          backgroundImage:
            'url(' +
            require('@/assets/media/img/' + work.background_image) +
            ')',
        }"
        v-for="work in PORTFOLIO"
        :key="work.id"
      >
        <h2
          class="portfolio__item-name"
          :style="{ color: `${work.description.color}` }"
        >
          {{ work.name }}
        </h2>
        <p
          class="portfolio__item-details"
          :style="{ color: `${work.description.color}` }"
        >
          {{ work.description.project_description }}
        </p>
      </li>
    </ul>
    <div class="portfolio__controls">
      <v-button
        class="portfolio__controls-prev"
        data-action="prev"
        @click.prevent="moveSlider"
        >Предыдущий Кейс</v-button
      >
      <v-button
        class="portfolio__controls-next"
        data-action="next"
        @click.prevent="moveSlider"
        >Следующий Кейс</v-button
      >
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
// import { case_page_transition } from '@/animations/case_animations'
import { gsap, TimelineMax, Power2 } from "gsap";

export default {
  name: "portfolio",
  data() {
    return {
      slider_counter: 0,
      slider_X: 0,
      total_slide_count: 0,
    };
  },
  methods: {
    ...mapActions(["GET_PORTFOLIO", "GET_CASE_DATA"]),
    moveSlider(e) {
      let scrollWidth = document.querySelector(".portfolio__item").clientWidth;
      let workList = document.querySelector(".portfolio__list");
      this.total_slide_count =
        document.querySelectorAll(".portfolio__item").length;

      if (e.target.getAttribute("data-action") == "next") {
        if (this.slider_X < 0) {
          this.slider_counter++;
          this.slider_X = this.slider_X - scrollWidth;

          workList.style.transform = `translateX(${this.slider_X}px)`;
        } else if (
          Math.abs(this.slider_X) >=
          this.total_slide_count * scrollWidth - 3 * scrollWidth
        ) {
          this.slider_counter = 0;
          this.slider_X = 0;

          workList.style.transform = `translateX(${this.slider_X}px)`;
        } else {
          this.slider_counter++;
          this.slider_X = this.slider_X + scrollWidth;

          workList.style.transform = `translateX(${-this.slider_X}px)`;
        }
      } else {
        this.slider_counter--;
        if (this.slider_X == 0) {
          this.slider_X = scrollWidth * (this.total_slide_count - 3);
          workList.style.transform = `translateX(-${this.slider_X}px)`;
        } else {
          if (this.slider_X < 0) {
            this.slider_X = this.slider_X + scrollWidth;
            workList.style.transform = `translateX(${+this.slider_X}px)`;
          } else {
            this.slider_X = this.slider_X - scrollWidth;
            workList.style.transform = `translateX(${-this.slider_X}px)`;
          }
        }
      }
      console.log(this.slider_X);
    },
    details(e) {
      let animateHead = e.target.childNodes[0];
      let animateDetails = e.target.childNodes[1];
      gsap.to(animateDetails, 0.4, {
        opacity: 1,
        height: "auto",
      });
      gsap.to(animateHead, 0.6, {
        transform: "translateY(-8px)",
      });
    },
    leaveDetails(e) {
      let animateHead = e.target.childNodes[0];
      let animateDetails = e.target.childNodes[1];
      gsap.to(animateDetails, 0.4, {
        opacity: 0,
        height: "0%",
      });
      gsap.to(animateHead, 0.6, {
        transform: "translateY(0px)",
      });
    },
    async toCase(data) {
      await this.GET_CASE_DATA(data);

      let tl = new TimelineMax({});

      tl.set(".case-loader__wrapper", {
        zIndex: 2,
      });
      tl.to(".case-loader__animate", 2, {
        ease: Power2.easeInOut,
        scale: 5000,
        onComplete: () => {
          this.$router.push("/case");
        },
      });
      tl.to(".case-loader__title", 0.8, {
        ease: Power2.easeInOut,
        height: "auto",
      });
      tl.to(
        ".case-loader__tasks",
        0.8,
        {
          ease: Power2.easeInOut,
          height: "auto",
        },
        "-=0.5"
      );

      tl.play().then(() => {
        setTimeout(async () => {
          tl.reverse();
        }, 1500);
      });
    },
  },
  mounted() {
    this.GET_PORTFOLIO();
  },
  computed: {
    ...mapGetters(["PORTFOLIO"]),
  },
};
</script>
<style lang="scss" scoped>
.portfolio {
  min-width: 100%;
  overflow: auto;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
    height: 0;
    width: 0;
  }
  &__list {
    display: flex;
    height: 100%;
    list-style: none;
    transition: all ease 1s;
  }
  &__item {
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    cursor: pointer;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    min-width: 30%;
    color: $white;
    &-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    &-name {
      font-size: 54px;
    }
    &-details {
      overflow: hidden;
      height: 0;
    }
  }
  &__controls {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    width: 100%;
    > button {
      min-width: 250px;
      padding: 0 13px;
    }
    &-prev {
      flex-direction: row-reverse;

      img {
        transform: rotate(-180deg);
      }
    }
    &-next {
    }
  }
}

@media (max-width: 1366px) {
}
@media (max-width: 1023px) {
  // .portfolio {

  //   &__controls {
  //     display: none;
  //   }
  //   &__list {
  //     flex-direction: column;
  //     overflow: auto;
  //   }
  //   &__item {
  //     min-width: initial;
  //     min-height: 33%;
  //   }
  // }
}
@media (max-width: 768px) {
  .portfolio {
    height: 100%;
    &__controls {
      display: none;
    }
    &__item {
      min-width: 40%;
      &-name {
        font-size: 36px;
      }
    }
  }
}
@media (max-width: 640px) {
  .portfolio {
    &__list {
      flex-direction: column;
    }
    &__item {
      min-height: 33%;
      &-details {
        height: auto;
      }
    }
  }
}
</style>
