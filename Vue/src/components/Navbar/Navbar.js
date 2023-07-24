import { mapState } from "vuex";

export default {
  data() {
    return {
      empresas: [
        { name: "NexusHouse" },
        { name: "HappyHour" },
        { name: "VisionMedia" },
        { name: "Mach1ne" },
        { name: "SkyWings" },
      ],
      selectedEmpresa: null,
      navbarColorsInitialized: false,
      interacted: false, // Adiciona novo estado 'interacted'
      isPageScrlled: false, // Adiciona novo estado 'isPageScrolled'
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
    logoSrc() {
      return this.showAltImage
        ? "../assets/imgs/LogoAlt.png"
        : "../assets/imgs/LogoWjOri.png";
    },
  },
  methods: {
    updateNavbarColor({ navbarColor, textColor }) {
      this.$store.commit("updateNavbarColor", navbarColor);
      this.$store.commit("updateTextColor", textColor);
    },
    toggleImage() {
      this.showAltImage = !this.showAltImage; // Toggle the value of showAltImage
    },
    scrollToEmpresa(index) {
      // Get the ID of the empresa section to scroll to
      const sectionId = `empresa-${index}`;
      // Get the DOM element of the empresa section
      const targetElement = document.getElementById(sectionId);

      if (targetElement) {
        // Calculate the scroll position (top offset) of the empresa section
        const scrollOptions = {
          top: targetElement.offsetTop,
          behavior: "smooth",
        };
        // Perform the scroll to the empresa section
        window.scrollTo(scrollOptions);
      }
    },
  },
  created() {
    this.$root.$on("updateNavbarColor", this.updateNavbarColor);
  },
  destroyed() {
    this.$root.$off("updateNavbarColor", this.updateNavbarColor);
  },
  mounted() {
    if (!this.navbarColorsInitialized) {
      this.updateNavbarColor({
        navbarColor: this.empresas[0].navbarColor,
        textColor: this.empresas[0].textColor,
      });
      this.navbarColorsInitialized = true;
    }
  },
};
