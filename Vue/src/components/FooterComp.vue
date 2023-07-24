<template>
  <footer class="footer py-3 " style="background-color: #1D2547; color: #D6A248" >
    <hr style="background-color: #d6a248" />
    <b-container>
      <b-row> 
        <b-col cols="12" sm="6" class="text-center text-sm-left mb-3 mb-sm-0">
          <p class="mb-0">Desenvolvido por:   <strong>Equipe 4 Treinee Visao Jr </strong></p> 
        </b-col>
        <b-col class="d-flex justify-content-end">
          <div class="d-flex align-items-center">
            <div class="mr-5">
              <b-row>
                <b-col><font-awesome-icon :icon="['fas', 'fa-envelope']"/> ola@wej.com.br</b-col>
                <b-col><font-awesome-icon :icon="['fas', 'fa-phone']"/>(123) 456-7890</b-col>
              </b-row>
              <div><font-awesome-icon :icon="['fas', 'fa-location-dot']"/> Endereço: Rua Hidelbrando Fontana, 67, João Monlevade-MG</div>
            </div>
            <img src="../assets/imgs/LogoWjOri.png" alt="LogoWj" class="footer-logo zoom-image"/>  
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import { BContainer, BRow, BCol } from 'bootstrap-vue'

export default {
  name: 'MyFooter',
  components: {
    BContainer,
    BRow,
    BCol
  }
}
</script>

<style scoped>
 .footer-logo {
    width: 4rem;
    height: auto;
    margin-top: 15px;
    margin-right: 10px;
    padding-left: 15px;
  }
  
  .zoom-image {
    transition: transform 0.3s ease-in-out;
    transform: scale(5);
  }
  
.footer {
  width: 100%;
  height: 16rem;
}
</style>