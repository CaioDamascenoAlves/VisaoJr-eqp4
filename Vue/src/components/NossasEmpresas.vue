<template>
  <div>
    <div
      v-for="(empresa, index) in empresas"
      :key="empresa.name"
      ref="empresaSections"
      class="empresa"
    >
      <div class="empresa-content">
        <div class="empresa-info h-5">
          <h2>{{ empresa.name }} </h2>
          <h1>{{ empresa.name2 }}</h1>
          <p>{{ empresa.description }}</p> 
          <b-button @click="selectEmpresa(index)">Ver mais</b-button>
        </div>
        <div class="empresa-logo">
          <img
            :src="require(`../assets/${empresa.logo}`)"
            alt="Logo da Empresa"
          />
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
          name: "ATUAMOS EM MAIS",
          name2: "DE 100 PAÍSES",
          description: "A empresa oferece uma ampla gama de serviços, incluindo compra, venda e aluguel de propriedades residenciais e comerciais. Com uma equipe de corretores altamente capacitados, a Nexus House auxilia os clientes em todas as etapas do processo imobiliário",
          navbarColor: "#C5282F",
          textColor: "#ffffff",
          logo: "NexusHouse.jpg",
        },
        {
          name: "HappyHour",
          description: "Descrição do HappyHour",
          navbarColor: "#FFAD00",
          textColor: "#ffffff",
          logo: "logo.png",
        },
        {
          name: "OS MELHORES",
          name2: "CONTEÚDOS",
          description: "A VisonMedia é uma empresa de streaming que oferece uma ampla seleção de conteúdos audiovisuais, proporcionando uma experiência de entretenimento personalizada aos assinantes. Com qualidade de streaming excepcional e uma variedade de opções de assinatura, a VisonMedia é uma escolha popular para os amantes de filmes e séries.",
          navbarColor: "#00DB59",
          textColor: "#ffffff",
          logo: "VisionMedia.jpg",
        },
        {
          name: "Mach1ne",
          description: "Descrição da Mach1ne",
          navbarColor: "#58C2EC",
          textColor: "#ffffff",
          logo: "logo.png",
        },
        {
          name: "SUA SEGURANÇA",
          name2: "EM 1ºLUGAR",
          description: "A Sky Wings Airlines é uma empresa líder no setor da aviação, oferecendo voos de alta qualidade e confiabilidade. Com uma frota moderna e uma equipe altamente capacitada, eles se destacam por garantir voos seguros, confortáveis e pontuais para os passageiros, proporcionando uma experiência de viagem excepcional. ",
          navbarColor: "#B91AA8",
          textColor: "#ffffff",
          logo: "SkyWings.jpg",
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
      rootMargin: "1%", // Altere esta linha
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
      const halfHeight = window.innerHeight * 0.1;
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
.empresa {
  margin-bottom: 0px;
  min-height: 100vh; /* Para cada empresa ocupar uma página inteira */
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
}

.empresa-info {
  flex: 1;
  text-align: center;
  font-size: 30px;
}

.empresa-logo {
  flex: 1;
  text-align: center;
}

.empresa-logo img {
  max-width: 100%;
  height: auto;
}
h2 {
  font-size: 70px; /* Defina o tamanho da fonte em pixels */
}
h1 {
  font-size: 90px; /* Defina o tamanho da fonte em pixels */
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
