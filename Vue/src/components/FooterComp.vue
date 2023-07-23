<template>
  <footer class="footer py-3 " style="background-color: #1D2547; color: #D6A248" >
    <b-container>
      <b-row>
        <b-col class="d-flex justify-content-start ">
          Desenvolvido por : <strong>Equipe 4 Treinee Visao Jr </strong> 
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
    width: 5rem;
    height: auto;
    margin-top: 15px;
    margin-right: 12px;
    padding-left: 17px;
  }
  
  .zoom-image {
    transition: transform 0.3s ease-in-out;
    transform: scale(5);
  }
  
.footer {
  width: 100%;
}
</style>
