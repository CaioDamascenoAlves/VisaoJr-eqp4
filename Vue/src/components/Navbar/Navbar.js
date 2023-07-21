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
    logoSrc() {
      return this.showAltImage ? "../assets/imgs/LogoAlt.png" : "../assets/imgs/LogoWjOri.png";
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
  },
  created() {
    this.$root.$on("updateNavbarColor", this.updateNavbarColor);
  },
  destroyed() {
    this.$root.$off("updateNavbarColor", this.updateNavbarColor);
  },
};
