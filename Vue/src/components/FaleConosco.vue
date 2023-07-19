<template>
  <div id="my-container">
    <div id="my-row">
      <div id="my-col">
        <b-container>
          <b-row>
            <b-col>
              <h2>Fale Conosco</h2>
              <b-form @submit="onSubmit">
                <b-form-group
                  id="input-group-1"
                  label="Nome"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.name"
                    required
                    placeholder="Digite seu nome"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-2"
                  label="Telefone"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.phone"
                    type="tel"
                    required
                    placeholder="(XX) XXXXX-XXXX"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-3"
                  label="Email"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-3"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Digite seu e-mail"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-4"
                  label="Mensagem"
                  label-for="input-4"
                >
                  <b-form-textarea
                    id="input-4"
                    v-model="form.message"
                    required
                    placeholder="Digite sua mensagem"
                  ></b-form-textarea>
                </b-form-group>

                <b-button type="submit" style="background-color: #D6A248;" class="my-2 col-12"
                  >Enviar</b-button
                >
              </b-form>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        message: "",
      },
    };
  },
  validations: {
    form: {
      name: { required },
      phone: { required },
      email: { required },
    },
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$swal("Por favor, preencha todos os campos corretamente.");
      } else {
        this.$swal({
          title: "Sucesso!",
          text: "Formulário enviado com sucesso!",
          icon: "success",
          confirmButtonText: "OK",
        });
        this.form = {
          name: "",
          phone: "",
          email: "",
        };
        this.$v.$reset();
      }
    },
  },
};
</script>

<style scoped>
#my-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #D6A248;
  background-color: #1D2547;
}

#my-row, #my-col, .b-form, .b-form-group, .b-form-input, .b-form-textarea, .b-button {
  color: #D6A248;
  background-color: #1D2547;
}
</style>