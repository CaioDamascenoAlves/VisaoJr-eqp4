<template>
  <b-navbar
    sticky
    toggleable="lg"
    :variant="currentVariant"
    class="mb-5"
    :style="navbarStyle"
  >
    <b-navbar-brand>Visão</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/">Início</b-nav-item>
        <b-nav-item to="/sobre-nos">Sobre Nós</b-nav-item>
        <b-nav-item-dropdown text="Nossas Empresas" right>
          <b-dropdown-item
            v-for="(empresa, index) in empresas"
            :key="index"
            :to="empresa.to"
          >
            {{ empresa.name }}
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item to="/contato">Contato</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      currentVariant: (state) => state.currentVariant,
      navbarColor: (state) => state.navbarColor,
      textColor: (state) => state.textColor,
    }),
    navbarStyle() {
      return {
        backgroundColor: this.navbarColor,
        color: this.textColor,
      };
    },
  },
  data() {
    return {
      empresas: [
        { name: "VisionMedia" },
        { name: "HappyHour" },
        { name: "NexusHouse" },
        { name: "Mach1ne" },
        { name: "SkyWings" },
      ],
    };
  },
  methods: {
    updateNavbarColor({ navbarColor, textColor }) {
      this.$store.commit("updateNavbarColor", navbarColor);
      this.$store.commit("updateTextColor", textColor);
    },
  },
  created() {
    this.$root.$on("updateNavbarColor", this.updateNavbarColor);
  },
  destroyed() {
    this.$root.$off("updateNavbarColor", this.updateNavbarColor);
  },
};
</script>

<style scoped>
/* Adicione essa regra para sobrescrever a cor do texto dos links na navbar */
.navbar-nav a {
  color: inherit;
}
</style>
