import { TimelineMax, Power3 } from "gsap";

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
  }
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

export default tl;
