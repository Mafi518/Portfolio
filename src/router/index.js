import { createRouter, createWebHistory } from "vue-router";
import { TimelineMax, Power3 } from "gsap";
// import transition from '@/animations/page_transition'

import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter(to, from, next) {
      if (to.path == from.path) {
        let tl = new TimelineMax({});

        tl.set(".case-loader", {
          opacity: 1,
          zIndex: 2,
        });

        tl.to(".case-loader__animate-item", 1.4, {
          delay: 0.8,
          stagger: 0.1,
          ease: Power3.easeInOut,
          transform: `translateX(100%)`,
        });

        tl.set(".case-loader", {
          opacity: 0,
          zIndex: -2,
        });

        tl.play();
        next();
      } else {
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
              next();
            },
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
      }
    },
  },
  {
    path: "/about",
    name: "About",
    beforeEnter(to, from, next) {
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
            next();
          },
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
    beforeEnter(to, from, next) {
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
            next();
          },
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
    beforeEnter(to, from, next) {
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
            next();
          },
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
    beforeEnter(to, from, next) {
      if (to.path == from.path) {
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
              next();
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
      } else {
        next();
      }
    },
    component: () => import(/* webpackChunkName: "case" */ "../views/Case.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
