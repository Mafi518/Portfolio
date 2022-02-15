<template>
  <div class="case-loader">
    <div class="case-loader__animate"></div>
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
  &__wrapper {
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 80vw;
    width: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    height: 300px;
    z-index: -1;
  }
  &__animate {
    position: fixed;
    left: 0;
    bottom: 0;
    border-radius: 50%;
    background-color: $dark;
    width: 1px;
    height: 1px;
    transform: scale(1);
    transform-origin: center;
    z-index: 1;
  }
  &__title {
    @include h2;
    position: absolute;
    left: 0;
    bottom: 50px;
    color: $white;
    height: 0px;
    overflow: hidden;
  }
  &__tasks {
    color: $white;
    position: absolute;
    left: 0;
    bottom: 25px;
    height: 0px;
    overflow: hidden;
  }
}
</style>
