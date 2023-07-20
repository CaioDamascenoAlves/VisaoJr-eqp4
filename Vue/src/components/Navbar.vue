<template>
  <b-navbar
    sticky
    toggleable="lg"
    :variant="currentVariant"
    class="mb-5"
    :style="navbarStyle"
  >
    <b-navbar-brand :style="navTextStyle">Visão</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse">
      <template #default="{ expanded }">
        <b-icon
          v-if="expanded"
          icon="chevron-bar-up"
          :style="toggleStyle"
        ></b-icon>
        <b-icon v-else icon="chevron-bar-down" :style="toggleStyle"></b-icon>
      </template>
    </b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item :style="navTextStyle" to="/">Início</b-nav-item>
        <b-nav-item :style="navTextStyle" to="/sobre-nos">Sobre Nós</b-nav-item>
        <b-nav-item-dropdown :style="navTextStyle">
          <template #button-content>
            <span :style="navTextStyle">Nossas Empresas</span>
          </template>
          <b-dropdown-item
            v-for="(empresa, index) in empresas"
            :key="index"
            :to="empresa.to"
            :style="navTextStyle"
            @click="scrollToEmpresa(index)"
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
  data() {
    return {
      empresas: [
        { name: "VisionMedia", to: "/vision" },
        { name: "HappyHour", to: "/happy-hour" },
        { name: "NexusHouse", to: "/nexus-house" },
        { name: "Mach1ne", to: "/mach1ne" },
        { name: "SkyWings", to: "/sky-wings" },
      ],
    };
  },
  computed: {
    ...mapState(["currentVariant", "navbarColor", "textColor"]),
    navbarStyle() {
      return {
        backgroundColor: this.navbarColor,
        color: this.textColor,
      };
    },
    navTextStyle() {
      return {
        color: this.textColor,
      };
    },
    toggleStyle() {
      return {
        color: this.textColor,
      };
    },
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

/* Mudando a cor da seta do dropdown */
.dropdown-toggle::after {
  border-top-color: #d6a248;
}

/* Mudando a cor do ícone do menu hambúrguer */
.custom-icon-color {
  color: #ff0000; /* Substitua #ff0000 pela cor desejada */
}

@media (max-width: 992px) {
  .navbar-nav .dropdown-menu {
    position: relative;
    float: none;
    background-color: transparent;
    border: none;
    box-shadow: none;
    width: 100%;
  }
}
</style>
