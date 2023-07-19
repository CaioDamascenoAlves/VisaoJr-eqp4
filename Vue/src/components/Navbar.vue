<template>
  <b-navbar
    sticky
    toggleable="lg"
    :variant="currentVariant"
    class="mb-5"
    :style="navbarStyle"
  >
    <b-navbar-brand :style="navTextStyle">Visão</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item :style="navTextStyle" to="/">Início</b-nav-item>
        <b-nav-item :style="navTextStyle" to="/sobre-nos">Sobre Nós</b-nav-item>
        <b-nav-item-dropdown text="Nossas Empresas" right>
          <b-dropdown-item
            v-for="(empresa, index) in empresas"
            :key="index"
            :to="empresa.to"
            :style="navTextStyle"
          >
            {{ empresa.name }}
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item :style="navTextStyle" to="/contato">Contato</b-nav-item>
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
        '--navbar-color': this.textColor,

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
.navbar-nav a {
  color: inherit;
}

/* Corrigindo o alinhamento */
.navbar-nav {
  align-items: center;
}

/* Mudando a cor da seta do dropdown */
.dropdown-toggle::after {
  border-top-color: #D6A248; 
}

/* Mudando a cor do ícone do menu hambúrguer */
.navbar-toggler-icon {
  filter: invert(58%) sepia(64%) saturate(2777%) hue-rotate(359deg) brightness(98%) contrast(102%);
}

@media (max-width: 992px) {
  .navbar-nav .dropdown-menu {
    position: relative;
    float: none;
    background-color: transparent;
    border: none;
    box-shadow: none;
    color: var(--text-color);
  }
}
</style>
