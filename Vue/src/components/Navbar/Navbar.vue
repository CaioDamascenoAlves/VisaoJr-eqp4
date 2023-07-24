<template>
  <b-navbar
    ref="navbar"
    sticky
    toggleable="lg"
    :variant="currentVariant"
    class="mb-5"
    :style="navbarStyle"
    style="box-shadow: 0px 2px 4px rgb(0,0,0,0.1);"
  >
    <b-navbar-brand>
      <img
        src="../../assets/imgs/LogoWjOri.png"
        alt="Logo"
        class="navbar-logo zoom-image"
      />
    </b-navbar-brand>
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
      <b-navbar-nav class="ml-auto navbar-items">
        <b-nav-item :style="navTextStyle" to="/">Início</b-nav-item>
        <b-nav-item :style="navTextStyle" to="/sobre-nos">Sobre Nós</b-nav-item>
        <b-nav-item-dropdown :style="navTextStyle">
          <template #button-content>
            <span :style="navTextStyle">Nossas Empresas</span>
          </template>
          <b-dropdown-item
            v-for="(empresa, index) in empresas"
            :key="index"
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

<script src="./Navbar.js"></script>
<style src="./Navbar.css" scoped></style>
