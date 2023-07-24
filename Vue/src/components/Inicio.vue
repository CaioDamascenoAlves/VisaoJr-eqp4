<template>
  <div class="container-fluid p-5">
    <div class="row h-100">
      <!-- Coluna para o texto -->
      <div class="col-md-6 d-flex align-items-center">
        <div>
          <h1  class="mb-3 text-center espaco title  app-margin "> O MAIOR GRUPO EMPRESARIAL</h1>
          <h1  class="mb-3 text-center espaco subtitle  app-margin "> <b>DA AMERICA DO SUL</b></h1>
          <div class="des-margin"></div>
          <p class="desc-font">
            A w&j é reconhecida como a maior holding da América do Sul, com uma presença sólida e influente na região. Sua trajetória de sucesso, visão estratégica e investimentos bem-sucedidos estabeleceram a empresa como líder no mundo dos negócios sul-americano.
          </p>
          <div class="d-flex justify-content-center">
          <b-button  ref="botaoContent"  squared id="botao-content" >CONHEÇA NOSSOS NEGOCIOS</b-button>
        </div>
      </div>
      </div>
      <!-- Coluna para a foto -->
      <div class="col-md-6 d-flex align-items-center">
        <img  style="box-shadow: 0 20px 10px rgba(0, 0, 0, 0.1);" src="../assets/imgs/MesaPessoas.jpeg" alt="Foto da empresa" class="img-fluid">
      </div>
    </div>
  </div>
</template>
<style scoped>
#botao-content
{
  font-size: 17px;
  margin-top: 0px;
  background-color: #1d2547;
  color: #ffffff;
  border-color: #ffffff;
  align-content: center;
  
}
.desc-font {
font-size: 17px; /* Ajuste o tamanho da fonte conforme desejado */
}
.des-margin {
margin-top: 50px;
}
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

.subtitle{
font-size: 45px;
}
.title {
font-size: 25px;

}

.espaco{
line-height: 0.5;
}




</style>