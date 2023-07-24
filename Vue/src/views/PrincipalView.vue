<template>
  <div>
    <Navbar />
    <section id="inicio">
      <Inicio/>
    </section>
    <section id="sobre-nos">
      <SobreNosCarrossel />
    </section>
    <section id="nossas-empresas">
      <NossasEmpresas />
    </section>
    
    <section id="fale-conosco">
      <FaleConoscoVue />
    </section>
    
    <section id="sociais-icons">
      <SociaisIconsFooter />
    </section>

    <section id="footer">
      <Footer></Footer>
    </section>

  </div>
</template>

<script>
import Navbar from "../components/Navbar/Navbar.vue";
import SobreNosCarrossel from "../components/SobreNosCarrossel.vue";
import NossasEmpresas from "../components/NossasEmpresas.vue";
import Footer from "../components/FooterComp.vue";
import FaleConoscoVue from "../components/FaleConosco.vue";
import Inicio from "../components/Inicio.vue";
import SociaisIconsFooter from "../components/SociaisIconsFooter.vue";

export default {
  components: {
    Navbar,
    SobreNosCarrossel,
    NossasEmpresas,
    Footer,
    FaleConoscoVue,
    Inicio,
    SociaisIconsFooter,
  },
};
</script>
