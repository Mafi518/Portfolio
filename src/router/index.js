import { createRouter, createWebHistory } from "vue-router";
import { TimelineMax, Power3 } from "gsap";

import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      let tl = new TimelineMax({});
      tl.to(".case-loader__animate", 1.4, {
        ease: Power3.easeInOut,
        scale: 5000,
      });

      tl.play().then(() => {
        next();
        tl.reverse();
      });
    },
  },
  {
    path: "/about",
    name: "About",
    beforeEnter: (to, from, next) => {
      let tl = new TimelineMax({});
      tl.to(".case-loader__animate", 1.4, {
        ease: Power3.easeInOut,
        scale: 5000,
      });

      tl.play().then(() => {
        next();
        tl.reverse();
      });
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    params: {},
    beforeEnter: (to, from, next) => {
      let tl = new TimelineMax({});
      tl.to(".case-loader__animate", 1.4, {
        ease: Power3.easeInOut,
        scale: 5000,
      });

      tl.play().then(() => {
        next();
        tl.reverse();
      });
    },
    // route level code-splitting
    // this generates a separate chunk (portfolio.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "portfolio" */ "../views/Portfolio.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    beforeEnter: (to, from, next) => {
      let tl = new TimelineMax({});
      tl.to(".case-loader__animate", 1.4, {
        ease: Power3.easeInOut,
        scale: 5000,
      });

      tl.play().then(() => {
        next();
        tl.reverse();
      });
    },
    // route level code-splitting
    // this generates a separate chunk (portfolio.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "contacts" */ "../views/Contacts.vue"),
  },
  {
    path: "/case",
    name: "Case",
    // beforeEnter: (to, from, next) => {
    //   let tl = new TimelineMax({});
    //   tl.to(".case-loader__animate", 1.4, {
    //     ease: Power3.easeInOut,
    //     scale: 5000,
    //   });

    //   tl.play().then(() => {
    //     next();
    //     tl.reverse();
    //   });
    // },
    // route level code-splitting
    // this generates a separate chunk (portfolio.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "case" */ "../views/Case.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
