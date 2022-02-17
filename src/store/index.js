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
          background_image: "crm-bluewater-diamond-bg.png",
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
          tasks: "Редизайн лендинга в стилистике проекта",
          mockups: {
            desktop: "mockup-desktop-blue-water-diamond-redesign",
            mobile: "mockup-mobile-blue-water-diamond-redesign",
          },
          links: [
            "https://www.figma.com/file/u0kVYmTCtL12Qer4j1BLgm/BlueWater-ReDesign?node-id=0%3A1",
          ],
          fonts: ["spectral-semibold", "spectral-regular", "spectral-bold"],
          colors: {
            color_description:
              "Объединив основные цвета с цифровыми цветами, я согласовал визуальную идентичность с основными ценностями Blue water diamond. Основная цветовая палитра - темный и белый - создает высокий контраст для чёткого понимания что есть что. Акцетный пурпурный цвет был определён как акцетный цвет. Желтые, зеленые и пурпурные цвета добавляют макету более дружелюбный оттенок",
            color_list: [
              {
                color_name: "blue water diamond",
                color_position: "фон – серый",
                color_hex: "#F7F8FC",
                block_text_color: "#000",
              },
              {
                color_name: "blue water diamond",
                color_position: "секция – акцетный синий",
                color_hex: "#42AAFF",
                block_text_color: "#fff",
              },
              {
                color_name: "blue water diamond",
                color_position: "вспомогательный – голубой",
                color_hex: "#ABEAFF",
                block_text_color: "#000",
              },
              {
                color_name: "blue water diamond",
                color_position: "текст – коричневый",
                color_hex: "#34241B",
                block_text_color: "#fff",
              },
              {
                color_name: "blue water diamond",
                color_position: "текст – белый",
                color_hex: "#FFFFFF",
                block_text_color: "#000",
              },
              {
                color_name: "blue water diamond",
                color_position: "текст – коричневый",
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
            color: "#fff",
          },
          labels: ["Разработка", "Дизайн"],
          technologies: "Дизайн, HTML5, SCSS, gulp, pug, jade, БЭМ, js, babel",
          tasks:
            "Разработать дружелюбный и броский дизайн, после чего сверстать его",
          mockups: {
            desktop: "mockup-desktop-insta-prize",
            mobile: "mockup-mobile-insta-prize",
          },
          links: [
            "https://www.figma.com/file/nqyGXcdHc0BJJuzVVxrsEu/InstaPrize?node-id=0%3A1",
            "https://insta-prize.ru/",
          ],
          fonts: ["roboto-bold", "roboto-regular"],
          colors: {
            color_description: "",
            color_list: [
              {
                color_name: "",
                color_position:
                  "вспомогательный градиент 1 цвет – тёмно красный",
                color_hex: "#C42156",
                block_text_color: "#fff",
              },
              {
                color_name: "",
                color_position:
                  "вспомогательный градиент 2 цвет – светло оранжевый",
                color_hex: "#FF8967",
                block_text_color: "#fff",
              },
              {
                color_name: "",
                color_position: "фон – серый",
                color_hex: "#F2F2F2",
                block_text_color: "#000",
              },
              {
                color_name: "",
                color_position: "текст – тёмно красный",
                color_hex: "#C42156",
                block_text_color: "#fff",
              },
              {
                color_name: "",
                color_position: "текст – чёрный",
                color_hex: "#000000",
                block_text_color: "#fff",
              },
              {
                color_name: "",
                color_position: "текст – ",
                color_hex: "#000000",
                block_text_color: "#fff",
              },
            ],
          },
        },
        {
          id: 4,
          name: "Decbase",
          background_image: "decbase-bg.png",
          description: {
            project_description:
              "Сайт-визитка для команды дизайнеров, разрабатывающих индивидуальные интерьеры",
            color: "#fff",
          },
          labels: ["Разработка"],
          technologies: "HTML5, SCSS, gulp, pug, jade, БЭМ, js, babel",
          tasks: "Адаптивная вёрстка с анимациями",
          mockups: {
            desktop: "mockup-desktop-decbase",
            mobile: "mockup-mobile-decbase",
          },
          links: ["https://mafi518.github.io/decbase/dist/"],
          fonts: ["poppins-semibold", "open-sans-regular"],
        },
        {
          id: 5,
          name: "Donuts",
          background_image: "donuts-bg.png",
          description: {
            project_description:
              "Интернет-магазин пончиков, вкуснейшие, нежнейшие с доставкой на дом",
            color: "#fff",
          },
          labels: ["Разработка"],
          technologies: "HTML5, SCSS, gulp, pug, jade, БЭМ, js, babel",
          tasks: "Адаптивная, семантическая вёрстка",
          mockups: {
            desktop: "mockup-desktop-donuts",
            mobile: "mockup-mobile-donuts",
          },
          links: ["https://mafi518.github.io/donuts/dist/"],
          fonts: ["comfortaa-bold", "comfortaa-regular"],
        },
        {
          id: 6,
          name: "The Garden",
          background_image: "the-garden-bg.png",
          description: {
            project_description:
              "The Garden — это самый живописный коворкинг Киева для людей, которые по-настоящему увлечены работой",
            color: "#fff",
          },
          labels: ["Разработка"],
          technologies: "HTML5, SCSS, gulp, pug, jade, БЭМ, js, babel",
          tasks: "Адаптивная, семантическая вёрстка",
          mockups: {
            desktop: "mockup-desktop-garden",
            mobile: "mockup-mobile-garden",
          },
          links: ["https://mafi518.github.io/garden/dist/"],
          fonts: ["roboto-bold", "roboto-regular"],
        },
        {
          id: 7,
          name: "Fruitbox",
          background_image: "fruitbox-bg.png",
          description: {
            project_description:
              "Сайт бесконтактной доставки свежих фруктов прямо до вашей двери",
            color: "#fff",
          },
          labels: ["Разработка"],
          technologies: "HTML5, SCSS, gulp, pug, jade, БЭМ, js, babel",
          tasks: "Адаптивная, семантическая вёрстка",
          mockups: {
            desktop: "mockup-desktop-fruitbox",
            mobile: "mockup-mobile-fruitbox",
          },
          links: ["https://mafi518.github.io/fruitbox/dist/"],
          fonts: ["roboto-bold", "roboto-regular", "roboto-medium"],
        },
        {
          id: 8,
          name: "Aleksandras Yoga",
          background_image: "aleksandras-yoga-bg.png",
          description: {
            project_description: "Разработка сайта онлайн-школы йоги",
            color: "#fff",
          },
          labels: ["Разработка"],
          technologies: "HTML5, SCSS, gulp, pug, jade, БЭМ, js, babel",
          tasks: "Адаптивная, семантическая, кроссбраузерная вёрстка",
          mockups: {
            desktop: "mockup-desktop-aleksandras-yoga",
            mobile: "mockup-mobile-aleksandras-yoga",
          },
          links: ["https://mafi518.github.io/aleksandraSYoga/dist/"],
          fonts: ["roboto-bold", "roboto-regular", "roboto-medium"],
        },
        {
          id: 9,
          name: "Dispenco",
          background_image: "dispenco-bg.png",
          description: {
            project_description:
              "Разработка сайта компнаии, занимающейся производством стеклянных сосудов",
            color: "#fff",
          },
          labels: ["Разработка"],
          technologies: "HTML5, SCSS, gulp, pug, jade, БЭМ, js, babel",
          tasks: "Адаптивная, семантическая, кроссбраузерная вёрстка",
          mockups: {
            desktop: "mockup-desktop-dispenco",
            mobile: "mockup-mobile-dispenco",
          },
          links: ["https://mafi518.github.io/DispenCo/dist/"],
          fonts: ["lato-bold", "lato-regular"],
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
