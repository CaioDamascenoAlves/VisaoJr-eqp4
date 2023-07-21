<template>
  <div>
    <div
      v-for="(empresa, index) in empresas"
      :key="empresa.name"
      ref="empresaSections"
      class="empresa"
    >
      <div class="empresa-content">
        <div class="empresa-info">
          <h2>{{ empresa.name }}</h2>
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
          name: "NexusHouse",
          description: "Descrição da NexusHouse",
          navbarColor: "#C5282F",
          textColor: "#ffffff",
          logo: "logo.png",
        },
        {
          name: "HappyHour",
          description: "Descrição do HappyHour",
          navbarColor: "#FFAD00",
          textColor: "#ffffff",
          logo: "logo.png",
        },
        {
          name: "VisionMedia",
          description: "Descrição da VisionMedia",
          navbarColor: "#00DB59",
          textColor: "#ffffff",
          logo: "visionMedia.jpg",
        },
        {
          name: "Mach1ne",
          description: "Descrição da Mach1ne",
          navbarColor: "#58C2EC",
          textColor: "#ffffff",
          logo: "logo.png",
        },
        {
          name: "SkyWings",
          description: "Descrição da SkyWings",
          navbarColor: "#B91AA8",
          textColor: "#ffffff",
          logo: "logo.png",
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
