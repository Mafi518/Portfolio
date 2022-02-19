<template>
  <div class="case-loader">
    <div class="case-loader__animate">
      <div class="case-loader__animate-item--helper">
        <div class="case-loader__animate-item"></div>
      </div>
      <div class="case-loader__animate-item--helper">
        <div class="case-loader__animate-item"></div>
      </div>
      <div class="case-loader__animate-item--helper">
        <div class="case-loader__animate-item"></div>
      </div>
    </div>
    <div class="case-loader__wrapper">
      <h2 class="case-loader__title">{{ case_data.name }}</h2>
      <p class="case-loader__tasks">{{ case_data.tasks }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "v-case-loader",
  props: {
    case_data: {
      Type: Object,
      default() {},
    },
  },
};
</script>
<style lang="scss">
.case-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
  opacity: 0;
  &__wrapper {
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 80vw;
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: -1;
  }
  &__animate {
    display: flex;
    height: 100%;
    &-item--helper {
      max-width: 100%;
      width: 100%;
      overflow: hidden;
      &:nth-child(1) div {
        background-color: #202020;
      }
      &:nth-child(2) div {
        background-color: #333333;
      }
      &:nth-child(3) div {
        background-color: #4d4d4d;
      }
      div {
        height: 100%;
      }
    }
  }
  &__title {
    @include h2;
    position: absolute;
    left: 0;
    bottom: 75px;
    color: $white;
    height: 0px;
    overflow: hidden;
  }
  &__tasks {
    color: $white;
    left: 0;
    bottom: 25px;
    height: 0px;
    overflow: hidden;
  }
}

@media (max-width: 767px) {
  .case-loader {
    &__animate {
      flex-direction: column;
      &-item--helper {
        height: 100%;
      }
    }
  }
}

@media (max-width: 640px) {
  .case-loader {
    &__wrapper {
      left: 20px;
      transform: translate(0);
    }
    &__title {
      font-size: 60px;
    }
  }
}
</style>
