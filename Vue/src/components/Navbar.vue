<template>
  <b-navbar toggleable="lg" type="dark" :variant="currentVariant" class="mb-5">
    <b-navbar-brand to="/">Visão</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/">Início</b-nav-item>
        <b-nav-item to="/sobre-nos">Sobre Nós</b-nav-item>
        <b-nav-item-dropdown text="Nossas Empresas" right>
          <b-dropdown-item v-for="(empresa, index) in empresas" :key="index" :to="empresa.to">
            {{ empresa.name }}
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item to="/contato">Contato</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const currentVariant = ref('dark');

    onMounted(() => {
      const handleCompanyChange = (variant) => {
        currentVariant.value = variant;
      };

      // Ouvir evento personalizado 'change-color'
      window.addEventListener('change-color', (event) => {
        const variant = event.detail;
        handleCompanyChange(variant);
      });
    });

    return {
      currentVariant,
      empresas: [
        { name: 'VisionMedia', to: '/vision-media' },
        { name: 'HappyHour', to: '/happy-hour' },
        { name: 'NexusHouse', to: '/nexus-house' },
        { name: 'Mach1ne', to: '/mach1ne' },
        { name: 'SkyWings', to: '/sky-wings' },
      ],
    };
  },
};
</script>
