<template>
    <b-carousel
      controls
      no-indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide>
        <template v-slot:img="">
          <div class="d-flex w-100 h-100 align-items-center justify-content-center p-5"
            style="background-color: lightblue;" 
          >
            <h1>História</h1>
          </div>
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img="">
          <div class="d-flex w-100 h-100 align-items-center justify-content-center p-5"
            style="background-color: lightcoral;" 
          >
            <h1>Valores</h1>
          </div>
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img="">
          <div class="d-flex w-100 h-100 align-items-center justify-content-center p-5"
            style="background-color: lightgreen;" 
          >
            <h1>Futuro</h1>
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
  
  .carousel-control-next::before {
    content: '›';
    font-size: 2rem;
  }
  </style>
  