<template>
  <b-carousel
    controls
    background="#ffffff"
    background-opacity="0.5"
    img-width="600"
    style="max-height: 880px;"
  >
    <!-- Primeiro slide (História) -->
    <b-carousel-slide>
      <template v-slot:img>
        <div class="d-flex w-100 h-100 align-items-center history-slide">
          <div class="col-md-6">
            <h1><b>História</b></h1>
            <h3>A holding W&J foi fundada em 1980 pelos empresários William e John. Inicialmente, era uma pequena empresa de consultoria, mas com o tempo expandiu suas atividades e adquiriu participações em várias empresas de diferentes setores.</h3>
          </div>
          <div class="col-md-6">
            <img src="../assets/imgs/ImagensCaro/Direita.png" alt="Imagem1" class="imagem-historia">
          </div>
        </div>
      </template>
    </b-carousel-slide>

    <!-- Segundo slide (Valores) -->
    <b-carousel-slide>
      <template v-slot:img>
        <div class="d-flex w-100 h-100 align-items-center values-slide">
          <div class="col-md-6">
            <img src="../assets/imgs/ImagensCaro/Esquerda.png" alt="Imagem2" class="imagem-valores">
          </div>
          <div class="col-md-6 mx-3 mb-5">
            <h1 class="write-text text-white"><b>Valores</b></h1>
            <h3 class="white-text">Os valores da holding W&J incluem integridade, excelência, inovação, colaboração, responsabilidade social e ambiental, foco no cliente e aprendizado contínuo.</h3>
          </div>
        </div>
      </template>
    </b-carousel-slide>

    <!-- Terceiro slide (Futuro) -->
    <b-carousel-slide>
      <template v-slot:img>
        <div class="d-flex w-100 h-100 align-items-center">
          <div class="col-md-6 ">
            <img src="../assets/imgs/Terceira_Parte_Carrossel.jpeg" alt="Imagem3" class="imagem-futuro">
          </div>
          <div class="col-md-6 mx-3">
            <h1><b>Futuro</b></h1>
            <h5 class="tam-text">Com base no histórico de sucesso é possível esperar que a empresa continue a crescer e se expandir, tanto em termos de investimentos quanto em sua presença global. Buscamos oportunidades de investimento em setores emergentes e tecnológicos, bem como explorar mercados internacionais em busca de expansão.</h5>
          </div>
        </div>
      </template>
    </b-carousel-slide>

  </b-carousel>
</template>

<script>
export default {
  name: 'SobreNosCarrossel',
}
</script>

<style scoped>
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-image: none;
}

.carousel-control-prev::before {
  content: '‹';
  font-size: 2rem;
}

.carousel-control-prev {
  content: '‹';
  font-size: 2rem;
}

.carousel-control-next::before {
  content: '›';
  font-size: 2rem;
}

.history-slide {
  background-color: rgb(255, 255, 255);
}

.values-slide {
  background-color: rgb(6, 21, 84);
}

.white-text {
  color: white;
}

.tam-text {
  font-size: 1.76rem;
}
.imagem-historia,
.imagem-valores,
.imagem-futuro {
  /* Defina o tamanho máximo das imagens */
  max-width: 100%;
  height: auto;
}

.imagem-container {
  /* Adicione um espaço entre a imagem e o texto */
  margin-right: 2rem;
}

.text-container {
  /* Ocupar o restante do container (50%) */
  flex: 1;
}

/* Media query para dispositivos com largura menor ou igual a 768 pixels (por exemplo, dispositivos móveis) */
@media screen and (max-width: 768px) {
  .imagem-container,
  .text-container {
    /* Redefinir o layout para ficar um abaixo do outro em dispositivos móveis */
    flex: none;
    max-width: 100%;
  }
}
</style>
