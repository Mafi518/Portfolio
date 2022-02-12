<template>
  <button class="cta-btn">
    <slot></slot>
    <img class="cta-btn__image" src="@/assets/media/svg/arrow.svg" alt="" />
  </button>
</template>
<script>
export default {
  name: "v-button",
};
</script>
<style lang="scss">
.cta-btn {
  min-width: 300px;
  // width: 100%;
  font-size: 18px;
  background-color: #171717;
  height: 70px;
  border: none;
  border-radius: 100px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  font-family: "Raleway", sans-serif;
  cursor: pointer;
  &__image {
    padding: 15px 8px;
    border-radius: 50%;
    background-color: #fff;
  }
}
</style>
