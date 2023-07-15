<template>
  <footer class="footer py-3 bg-dark text-white">
    <b-container>
      <b-row>
        <b-col class="d-flex justify-content-start ">
          Desenvolvido por: Equipe 4
        </b-col>
        <b-col class="d-flex justify-content-end">
          <div class="d-flex align-items-center">
            <div class="mr-5">
              <b-row>
                <b-col>info@empresa.com</b-col>
                <b-col>(123) 456-7890</b-col>
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
