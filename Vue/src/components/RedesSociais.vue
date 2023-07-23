<template>
    <div class="social-icons">
      <div v-for="(icon, index) in socialMediaIcons" :key="index" class="social-icon-container">
        <div class="social-icon-ball">
          <img :src="icon.url" :alt="icon.alt" class="social-icon">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { faLinkedin, faYoutube, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
  export default {
    props: {
      icons: {
        type: Array,
        required: true
      }
    },
    }
    computed: {
      socialMediaIcons() {
        // Aqui, assumimos que os ícones são fornecidos como um array de objetos { url: 'caminho-da-imagem', alt: 'texto-alt' }
        // A biblioteca própria deve passar os ícones para o componente via prop 'icons'
        return this.icons;
      }
    }
  };
  </script>
  
  <style>
  .social-icons {
    display: flex;
    justify-content: flex-end;
  }
  
  .social-icon-container {
    margin-left: 10px; /* Ajuste o espaçamento entre os ícones conforme desejado */
  }
  
  .social-icon-ball {
    background-color: #1a237e; /* Cor de fundo da bolinha - Azul escuro */
    border-radius: 50%;
    width: 40px; /* Ajuste o tamanho da bolinha conforme desejado */
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .social-icon {
    width: 24px; /* Ajuste o tamanho do ícone conforme desejado */
    height: 24px;
    background-color: white; /* Fundo transparente para visualizar a imagem de fundo */
  }
  </style>
<template>
    <div>
      <!-- Conteúdo do seu componente aqui -->
  
      <!-- Componente de ícones sociais -->
      <RedesSociais :icons="iconesRedesSociais" />
    </div>
  </template>
  
  <script>
  import RedesSociais from './RedesSociais.vue';
  // Importe os ícones da biblioteca própria
  import { falinkedin, fayoutube, faInstagram } from "@fortawesome/free-solid-svg-icons";
  
  export default {
    components: {
      RedesSociais
    },
    data() {
      return {
        iconesRedesSociais: [
          { url: falinkedin, alt: 'Ícone do linkedin' },
          { url: fayoutube, alt: 'Ícone do Youtube' },
          { url: faInstagram, alt: 'Ícone do Instragram' },
          // Adicione mais ícones conforme fornecidos pela biblioteca própria
        ]
      };
    }
  };
  </script>
    
