import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentVariant: "#1D2547",
    navbarColor: "#1D2547",
    textColor: "#D6A248",
  },
  mutations: {
    updateVariant(state, variant) {
      state.currentVariant = variant;
    },
    updateNavbarColor(state, navbarColor) {
      state.navbarColor = navbarColor;
    },
    updateTextColor(state, textColor) {
      state.textColor = textColor;
    },
    scrollToEmpresa(index) {
      const targetElement = this.$refs.empresaSections[index];
      if (targetElement) {
        const scrollOptions = {
          top: targetElement.offsetTop,
          behavior: "smooth",
        };
        window.scrollTo(scrollOptions);
      }
    },
  },
  actions: {
    setCurrentVariant({ commit }, variant) {
      commit("updateVariant", variant);
    },
    setNavbarColor({ commit }, color) {
      commit("updateNavbarColor", color);
    },
    setTextColor({ commit }, color) {
      commit("updateTextColor", color);
    },
  },

  modules: {},
});
