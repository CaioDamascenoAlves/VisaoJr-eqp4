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

    <section id="redesociais">
      <RedesSociais/>
    </section>

    <section id="footer">
      <Footer/>
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
import RedesSociais from "../components/RedesSociais.vue";

export default {
  components: {
    Navbar,
    SobreNosCarrossel,
    NossasEmpresas,
    Footer,
    FaleConoscoVue,
    RedesSociais,
  },
};
</script>
