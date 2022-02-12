<template>
  <section class="contacts">
    <h1>contacts</h1>
    <transition
      appear
      name="fade"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <img src="@/assets/media/img/1.jpg" alt="" />
    </transition>
  </section>
</template>
<script>
import gsap from "gsap";

export default {
  setup() {
    const beforeEnter = (el) => {
      console.log("beforeEnter");
      console.log(el);
      gsap.to(el, { transform: "translateX(-20px)", duration: 1 });
    };
    const enter = (el) => {
      console.log(el);
      console.log("enter");
    };
    const afterEnter = (el) => {
      console.log("afterEnter");
      el;
    };

    return { beforeEnter, enter, afterEnter };
  },
};
</script>
<style lang="scss">
img {
  max-width: 100%;
  max-height: 700px;
}
</style>
