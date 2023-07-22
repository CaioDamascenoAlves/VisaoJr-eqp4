<template>
  <div>
    <div
      v-for="(empresa, index) in empresas"
      :key="empresa.name"
      ref="empresaSections"
      class="empresa"
      >
      <div class="empresa-content" :class="{ 'empresa-content-reverse': index % 2 === 0 }">
        <div class="empresa-logo">
          <img
            :src="require(`../assets/${empresa.logo}`)"
            alt="Logo da Empresa"
          />
        </div>
        <div class="empresa-info">
          <div class="text-center app-margin ">
           <h2 class="title">{{ empresa.title }}</h2>
            <h2 class="subtitle">{{ empresa.subtitle}}</h2>
            
          </div>
          <div class=" text-center app-font-size">
            <p class=" app-justify app-limit-width">{{ empresa.description }}</p>
          </div>
          
          <div class="text-center">
            <b-button ref="botaoContent"  squared id="botao-content" @click="selectEmpresa(index)" :style="{ backgroundColor: empresa.botaoBgColor, color: empresa.botaoTextColor, boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)'}">
            {{ empresa.buttonContent }}
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      empresas: [
        {
          name: "NexusHouse",
          title: "ATUAMOS EM MAIS",	
          subtitle: "DE 100 PAÍSES",
          description: "A empresa oferece uma ampla gama de serviços, incluindo compra, venda e aluguel de propriedades residenciais e comerciais. Com uma equipe de corretores altamente capacitados, a Nexus House auxilia os clientes em todas as etapas do processo imobiliário, desde a busca e seleção de propriedades até a negociação e fechamento do negócio.",
          navbarColor: "#C5282F",
          textColor: "#ffffff",
          logo: "LogoNexus.png",
          buttonContent: "ALUGUE AGORA",
          botaoTextColor: "#c5282f",
        },
        {
          name: "HappyHour",
          title:"O MAIS PEDIDO, O",
          subtitle:"MAIS SABOROSO",
          description: "O Happy Hour é um fast food popular, conhecido por oferecer refeições rápidas e saborosas a preços acessíveis. Com um menu diversificado, que inclui hambúrgueres, batatas fritas, sanduíches, saladas e sobremesas, o Happy Hour atende às preferências de diferentes paladares.",
          navbarColor: "#FFAD00",
          textColor: "#ffffff",
          logo:"Teste.png",
          buttonContent: "PEÇA AGORA",
          botaoTextColor: "#ffad00",
        },
        {
          name: "VisionMedia",
          title: "OS MELHORES",
          subtitle: "CONTEUDOS",
          description:"A VisonMedia é uma empresa de streaming que oferece uma ampla seleção de conteúdos audiovisuais, proporcionando uma experiência de entretenimento personalizada aos assinantes. Com qualidade de streaming excepcional e uma variedade de opções de assinatura, a VisonMedia é uma escolha popular para os amantes de filmes e séries.",
          navbarColor: "#00DB59",
          textColor: "#ffffff",
          logo: "LogoVision.png",
          buttonContent: "ASSISTA AGORA",
          botaoTextColor: "#00DB59",
        },
        {
          name: "Mach1ne",
          title: "SOMOS A LÍDER",
          subtitle: "DO MERCADO",
          description: "A Mach1ne é uma empresa líder no setor de locação de carros, conhecida por sua excelência em serviços e compromisso em oferecer aos clientes uma experiência de locação de veículos de alta qualidade. Com uma ampla frota de carros, que inclui desde modelos econômicos até veículos de luxo, a Mach1ne atende às necessidades de diversos tipos de clientes. ",
          navbarColor: "#58C2EC",
          textColor: "#ffffff",
          logo: "LogoMach.png",
          buttonContent: "SOLICITE AGORA",
          botaoTextColor: "#58c2ec",
        },
        {
          name: "SkyWings",
          title: "SUA SEGURANÇA",
          subtitle: "EM PRIMEIRO LUGAR",
          description: "A Sky Wings Airlines é uma empresa líder no setor da aviação, oferecendo voos de alta qualidade e confiabilidade. Com uma frota moderna e uma equipe altamente capacitada, eles se destacam por garantir voos seguros, confortáveis e pontuais para os passageiros, proporcionando uma experiência de viagem excepcional. ",
          navbarColor: "#B91AA8",
          textColor: "#ffffff",
          logo: "LogoSky.png",
          buttonContent: "COMPRE AGORA",
          botaoTextColor: "#B91AA8",
        },
      ],
      selectedEmpresa: null,
      navbarColorsInitialized: false,
      interacted: false, // Adiciona novo estado 'interacted'
      isPageScrlled: false, // Adiciona novo estado 'isPageScrolled'
    };
  },
  methods: {
    ...mapActions(["setCurrentVariant", "setNavbarColor", "setTextColor"]), // Adicione as actions aqui
    selectEmpresa(index) {
      this.selectedEmpresa = index;
      this.navbarColorsInitialized = true;
      this.setNavbarColor(this.empresas[index].navbarColor);
      this.setTextColor(this.empresas[index].textColor);
    },
    // Adicione o método updateNavbarColor
    updateNavbarColor(index) {
      if (this.isPageScrolled) {
        this.setNavbarColor(this.empresas[index].navbarColor);
        this.setTextColor(this.empresas[index].textColor);
      }
    },

    
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: "10%", // Altere esta linha
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && this.isPageScrolled) {
          const index = this.$refs.empresaSections.indexOf(entry.target);
          this.updateNavbarColor(index);
        }

        const lastSectionIndex = this.$refs.empresaSections.length - 1;
        if (
          !entry.isIntersecting &&
          entry.target === this.$refs.empresaSections[lastSectionIndex]
        ) {
          // A última seção saiu da viewport, defina a cor da barra de navegação para os valores padrão
          this.setNavbarColor("#1D2547");
          this.setTextColor("#D6A248");
        }
      });
    }, options);

    this.$refs.empresaSections.forEach((section) => {
      observer.observe(section);
    });

    // Código novo para lidar com o scroll
    window.addEventListener("scroll", () => {
      const halfHeight = window.innerHeight / 2;
      if (window.scrollY >= halfHeight) {
        this.isPageScrolled = true;
        const index = this.$refs.empresaSections.findIndex(
          (section) => section.getBoundingClientRect().bottom > halfHeight
        );
        if (index !== -1) {
          this.updateNavbarColor(index);
        }
      } else {
        // Redefina a cor da barra de navegação para os valores padrão quando o usuário rola de volta para o topo da página
        this.setNavbarColor("#1D2547");
        this.setTextColor("#D6A248");
      }
    });
  },
};
</script>

<style scoped>

.app-limit-width {
  max-width: 650px;
  margin: 0 auto;
}
.app-justify {
  text-align: left;
}

.app-margin {
  margin-bottom: 50px;
}


.app-font-size {
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 20px;
}
.title
{
  line-height: 0.8;
  font-size: 35px;
}

.subtitle
{
  line-height: 0.8;
  font-size: 55px;
  margin-top: 0;
}


#botao-content
  {
    font-size: 24px;
    margin-top: 0px;
    background-color: #ffffff;
    color: #D6A248;
    border-color: #ffffff;
    align-content: center;
    
  }
.empresa {
  margin-bottom: 0px;
  min-height: 100vh; /* Para cada empresa ocupar uma página inteira */
  position: relative;
}
.empresa {
  color: var(--empresa-text-color);
}
.empresa:nth-child(1) {
  background-color: #c5282f;
  --empresa-text-color: #ffffff;
}

.empresa:nth-child(2) {
  background-color: #ffad00;
  --empresa-text-color: #ffffff;
}

.empresa:nth-child(3) {
  background-color: #00db59;
  --empresa-text-color: #ffffff;
}

.empresa:nth-child(4) {
  background-color: #58c2ec;
  --empresa-text-color: #ffffff;
}

.empresa:nth-child(5) {
  background-color: #b91aa8;
  --empresa-text-color: #ffffff;
}

.empresa-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.empresa-content-reverse {
    flex-direction: row-reverse;
  }

.empresa-info {
  flex: 1;
  margin-top: 100px;
  margin-bottom: auto;
}


.empresa-logo {
  flex: 1;
  text-align: center;
}

.empresa-logo img {
  max-width: 100%;
  height: auto;
}

/* Estilos para a empresa selecionada */
.empresa-selected {
  background-color: var(--empresa-selected-bg-color);
  color: var(--empresa-selected-text-color);
}

@media screen and (max-width: 768px) {
  .empresa-content {
    flex-direction: column;
  }

  .empresa-logo {
    margin-top: 20px;
  }
}
</style>
