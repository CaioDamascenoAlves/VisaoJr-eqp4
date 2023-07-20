<template>
  <footer class="footer py-3 " style="background-color: #1D2547; color: #D6A248" >
    <b-container>
      <b-row>
        <b-col class="d-flex justify-content-start ">
          Desenvolvido por: Equipe 4 treinee Visao Jr
        </b-col>
        <b-col class="d-flex justify-content-end">
          <div class="d-flex align-items-center">
            <div class="mr-5">
              <b-row>
                <b-col> <font-awesome-icon :icon="['fas', 'fa-location-dot']"/> ola@wej.com.br</b-col>
                <b-col><font-awesome-icon :icon="['fas', 'fa-envelope']"/>(123) 456-7890</b-col>
              </b-row>
              <div>Endereço: Rua das Flores, 123, Cidade, Estado</div>
            </div>
            <img src="../assets/logo.png" alt="Logo" height="50px"/>
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
.footer {
  width: 100%;
}
</style>
