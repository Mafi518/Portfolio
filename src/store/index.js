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
          name: "Gurmanikzn",
          background_image: "gurmanikzn-bg.png",
          description: {
            project_description:
              "Веб-сайт компании, занимающейся приготовлением и доставкой еды в Респ. Татарстан",
            color: "#fff",
          },
          labels: ["Дизайн", "Разработка"],
          technologies:
            "Figma, Vue, Vuex, Vue-router, GSAP, HTML5, SCSS, БЭМ, Node js, Express, firebase, в качестве api выступал сервис joinposter",
          tasks: "Сделать редизайн и разработать веб-сайт с 0",
          mockups: {
            desktop: "mockup-desktop-gurmani",
            mobile: "mockup-mobile-gurmani",
          },
          links: [
            "https://www.figma.com/file/JI08GtP9ouwQloGHjPHnmt/Gurmani?node-id=0%3A1",
            "https://gurmanikzn.ru/",
          ],
          fonts: ["roboto-regular", "roboto-bold", "roboto-medium"],
          colors: {
            color_description:
              "Акцетный оранжевый цвет был предопределён ещё до сотрудничества и был использован в основном для элементов, выполняющих целевое действие на сайте. Основная цветовая палитра - белый, тёмно чёрный и светло серый, в совокупности эти оттенки позволили создать высокий контраст между элементами, что позволяет пользователю проще ориентироваться в пространстве, тем самым улучшая пользовательский опыт",
            color_list: [
              {
                color_name: "blue water diamond",
                color_position: "секция – белый",
                color_hex: "#FFFFFF",
                block_text_color: "#000",
              },
              {
                color_name: "blue water diamond",
                color_position: "фон – серый",
                color_hex: "#F5F5F7",
                block_text_color: "#000",
              },
              {
                color_name: "blue water diamond",
                color_position: "кнопки/целевое действие – акцетный оранжевый",
                color_hex: "#FF6800",
                block_text_color: "#fff",
              },
              {
                color_name: "blue water diamond",
                color_position: "текст – тёмно чёрный",
                color_hex: "#2C2C2C",
                block_text_color: "#fff",
              },
              {
                color_name: "blue water diamond",
                color_position: "текст – акцетный белый",
                color_hex: "#FFFFFF",
                block_text_color: "#000",
              },
            ],
          },
        },
        {
          id: 1,
          name: "CRM Blue Water Diamond",
          background_image: "bluewater-diamond-bg.png",
          description: {
            project_description:
              "CRM-система компании, занимающейся оптово-розничной торговлей дистиллированной водой",
            color: "#fff",
          },
          labels: ["Дизайн"],
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
          colors: {
            color_description:
              "Объединив основные цвета с цифровыми цветами, я согласовал визуальную идентичность с основными ценностями Blue water diamond. Основная цветовая палитра - темный и белый - создает высокий контраст для чёткого понимания что есть что. Акцетный пурпурный цвет был определён как акцетный цвет. Желтые, зеленые и пурпурные цвета добавляют макету более дружелюбный оттенок",
            color_list: [
              {
                color_name: "blue water diamond",
                color_position: "кнопки – акцетный пурпурный",
                color_hex: "#6D6AFF",
                block_text_color: "#fff",
              },
              {
                color_name: "blue water diamond",
                color_position: "фон – тёмный",
                color_hex: "#363740",
                block_text_color: "#fff",
              },
              {
                color_name: "blue water diamond",
                color_position: "вспомогательный – жёлтый",
                color_hex: "#F7D154",
                block_text_color: "#000",
              },
              {
                color_name: "blue water diamond",
                color_position: "вспомогательный – зелёный",
                color_hex: "#47B881",
                block_text_color: "#fff",
              },
              {
                color_name: "blue water diamond",
                color_position: "вспомогательный – красный",
                color_hex: "#FF7F7F",
                block_text_color: "#000",
              },
              {
                color_name: "blue water diamond",
                color_position: "секция – акцетный тёмный",
                color_hex: "#363740",
                block_text_color: "#fff",
              },
              {
                color_name: "blue water diamond",
                color_position: "текст – тёмный",
                color_hex: "#34241B",
                block_text_color: "#fff",
              },
              {
                color_name: "blue water diamond",
                color_position: "текст – тёмный",
                color_hex: "#34241B",
                block_text_color: "#fff",
              },
            ],
          },
        },
        {
          id: 2,
          name: "Blue Water Diamond",
          background_image: "bluewater-diamond-bg.png",
          description: {
            project_description:
              "Веб-сайт компании, занимающейся оптово-розничной торговлей дистиллированной водой",
            color: "#fff",
          },
          labels: ["Дизайн"],
          technologies: "Дизайн",
          tasks: "Сделать редизайн в стилистике проекта",
          mockups: {
            desktop: "mockup-desktop-blue-water-diamond",
            mobile: "mockup-mobile-blue-water-diamond",
          },
          links: [
            "https://www.figma.com/file/QdqBrY1uKSo2yBoaacW10G/Client-Admin-Panel-BlueWater?node-id=0%3A1",
          ],
          fonts: ["montserrat-regular", "montserrat-bold"],
          colors: {
            color_description:
              "Объединив основные цвета с цифровыми цветами, я согласовал визуальную идентичность с основными ценностями Blue water diamond. Основная цветовая палитра - темный и белый - создает высокий контраст для чёткого понимания что есть что. Акцетный пурпурный цвет был определён как акцетный цвет. Желтые, зеленые и пурпурные цвета добавляют макету более дружелюбный оттенок",
            color_list: [
              {
                color_name: "blue water diamond",
                color_position: "кнопки – акцетный пурпурный",
                color_hex: "#6D6AFF",
                block_text_color: "#fff",
              },
              {
                color_name: "blue water diamond",
                color_position: "фон – тёмный",
                color_hex: "#363740",
                block_text_color: "#fff",
              },
              {
                color_name: "blue water diamond",
                color_position: "вспомогательный – жёлтый",
                color_hex: "#F7D154",
                block_text_color: "#000",
              },
              {
                color_name: "blue water diamond",
                color_position: "вспомогательный – зелёный",
                color_hex: "#47B881",
                block_text_color: "#fff",
              },
              {
                color_name: "blue water diamond",
                color_position: "вспомогательный – красный",
                color_hex: "#FF7F7F",
                block_text_color: "#000",
              },
              {
                color_name: "blue water diamond",
                color_position: "секция – акцетный тёмный",
                color_hex: "#363740",
                block_text_color: "#fff",
              },
              {
                color_name: "blue water diamond",
                color_position: "текст – тёмный",
                color_hex: "#34241B",
                block_text_color: "#fff",
              },
              {
                color_name: "blue water diamond",
                color_position: "текст – тёмный",
                color_hex: "#34241B",
                block_text_color: "#fff",
              },
            ],
          },
        },
        {
          id: 3,
          name: "Insta Prize",
          background_image: "insta-prize-bg.png",
          description: {
            project_description:
              "Профессиональный инструмент для проведения розыгрышей в Instagram и выбора победителей",
            color: "#000",
          },
          labels: ["Дизайн", "Вёрстка"],
          tasks: "Разработать современный, броский дизайн и сверстать макет",
        },
        {
          id: 4,
          name: "DECBASE",
          background_image: "decbase-bg.png",
          description: {
            project_description:
              "Сайт-визитка для команды дизайнеров, разрабатывающих индивидуальные интерьеры",
            color: "#fff",
          },
          labels: ["Разработка"],

          tasks: "",
        },
        {
          id: 5,
          name: "dasdas",
          description: {
            project_description: "",
            color: "#000",
          },
          labels: ["Дизайн"],
          background_image: "decbase-bg.png",
        },
        {
          id: 6,
          name: "dasdasdasdasd",
          description: {
            project_description: "",
            color: "#000",
          },
          labels: ["Дизайн"],
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
