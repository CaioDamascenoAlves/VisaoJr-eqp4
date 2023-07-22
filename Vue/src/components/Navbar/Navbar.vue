<template>
  <b-navbar
    sticky
    toggleable="lg"
    :variant="currentVariant"
    class="mb-5"
    :style="navbarStyle"
    style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);"
  >
    <!-- Logotipo (imagem) à esquerda -->
    <b-navbar-brand>
      <img src="../../assets/imgs/LogoWjOri.png" alt="Logo" class="navbar-logo zoom-image" />
    </b-navbar-brand>

    <!-- Botão de toggle para telas menores -->
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

    <!-- Conteúdo do menu à direita -->
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto m-3">
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

<script src="./Navbar.js"></script>
<style src="./Navbar.css" scoped></style>
