import { createStore } from "vuex";

export default createStore({
  state: {
    portfolio: [],
    case: {},
  },
  mutations: {
    SET_PORTFOLIO(state) {
      state.portfolio = [
        {
          id: 0,
          name: "Blue Water Diamond",
          background_image: "bluewater-diamond-bg.png",
          description: "Блювота даймонд",
          labels: "Дизайн",
          technologies: "Дизайн",
          tasks:
            "Разработать современный, стильный и информативный дизайн интерфейса CRM-системы",
          mockups: {
            desktop: "mockup-desktop-blue-water-diamond-admin-dashboard",
            mobile: "mockup-mobile-blue-water-diamond-admin-dashboard",
          },
          links: [
            "https://www.figma.com/file/QdqBrY1uKSo2yBoaacW10G/Client-Admin-Panel-BlueWater?node-id=0%3A1",
          ],
          fonts: ["montserrat-regular", "montserrat-bold"],
        },
        {
          id: 1,
          name: "Insta Prize",
          background_image: "insta-prize-bg.png",
          description:
            "Профессиональный инструмент для проведения розыгрышей в Instagram и выбора победителей",
          labels: "Дизайн/Разработка",
          tasks: "",
        },
        {
          id: 2,
          name: "DECBASE",
          background_image: "decbase-bg.png",
          description:
            "Сайт-визитка для команды дизайнеров, разрабатывающих индивидуальные интерьеры",
          labels: "Разработка",
          tasks: "",
        },
        {
          id: 3,
          name: "dasdas",
          background_image: "decbase-bg.png",
          description: "",
        },
        {
          id: 4,
          name: "dasdasdasdasd",
          background_image: "decbase-bg.png",
        },
      ];
    },
    SET_CASE_DATA(state, data) {
      localStorage.setItem("case", JSON.stringify(data));
      state.case = data;
    },
  },
  actions: {
    GET_PORTFOLIO({ commit }) {
      commit("SET_PORTFOLIO");
    },
    GET_CASE_DATA({ commit }, data) {
      commit("SET_CASE_DATA", data);
    },
  },
  getters: {
    PORTFOLIO(state) {
      return state.portfolio;
    },
    CASE_DATA(state) {
      return state.case;
    },
  },
  modules: {},
});
