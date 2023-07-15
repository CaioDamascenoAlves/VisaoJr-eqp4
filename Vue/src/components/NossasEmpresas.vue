<template>
    <div>
      <div v-for="(empresa, index) in empresas" :key="empresa.name" :class="getEmpresaClass(index)" class="empresa">
        <h2>{{ empresa.name }}</h2>
        <p>{{ empresa.description }}</p>
        <b-button @click="selectEmpresa(index)">Ver mais</b-button>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        empresas: [
          {
            name: 'VisionMedia',
            description: 'Descrição da VisionMedia',
            variant: 'dark',
          },
          {
            name: 'HappyHour',
            description: 'Descrição do HappyHour',
            variant: 'primary',
          },
          {
            name: 'NexusHouse',
            description: 'Descrição da NexusHouse',
            variant: 'success',
          },
          {
            name: 'Mach1ne',
            description: 'Descrição da Mach1ne',
            variant: 'warning',
          },
          {
            name: 'SkyWings',
            description: 'Descrição da SkyWings',
            variant: 'info',
          },
        ],
        selectedEmpresa: null,
      };
    },
    methods: {
      selectEmpresa(index) {
        this.selectedEmpresa = index;
        this.$emit('change-color', this.empresas[index].variant);
      },
      getEmpresaClass(index) {
        return {
          'empresa-selected': this.selectedEmpresa === index,
        };
      },
    }
  };
  </script>
  
  <style scoped>
  .empresa {
    margin-bottom: 20px;
  }
  
  /* Estilos para a empresa selecionada */
  .empresa-selected {
    background-color: var(--empresa-selected-bg-color);
    color: var(--empresa-selected-text-color);
  }
  </style>
  