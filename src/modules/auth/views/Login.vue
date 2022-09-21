<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card width="500" class="mx-auto mt-9">
          <v-alert dark type="error" dismissible v-model="alert">{{ message }}
          </v-alert>
        </v-card>
        <form @submit.prevent="onSubmit">
          <v-card width="500" class="mx-auto mt-9">
            <v-card-title>Inicio de sesión</v-card-title>
            <v-card-text>
              <v-text-field label="Usuario" prepend-icon="mdi-account-circle" v-model="userForm.email" />
              <v-text-field label="Contraseña" :type="showPassword ? 'text' : 'password'" prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" @click:append="showPassword = !showPassword"
                v-model="userForm.password" />
            </v-card-text>

            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="success" @click="$router.push({ name: 'register' })">Registrate</v-btn>
              <v-btn color="info" type="submit">Login</v-btn>
            </v-card-actions>
          </v-card>
        </form>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import { ref } from "vue";
import useAuth from "@/modules/auth/composables/useAuth";
import router from "@/router";
export default {
  data() {
    const { loginUser } = useAuth();
    const userForm = ref({
      email: "salvador.villagomez@hifos.com.mx",
      password: "ciscot3",
    });
    return {
      message: null,
      alert: false,
      userForm,
      showPassword: false,
      onSubmit: async () => {
        console.log("a")
        const { ok, message } = await loginUser(userForm.value);
        if (!ok) {
          this.message = message;
          this.alert = true;
        } else {
          router.push({ name: "exits" });
        }
        //console.log(ok,message)
      },
    };
  },
};
</script>

<style>

</style>