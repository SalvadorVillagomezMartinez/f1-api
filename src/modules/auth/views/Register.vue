<template>
  <v-main>
    <v-card width="500" class="mx-auto mt-9">
    <v-alert
      dark
      type="error"
      dismissible
      v-model="alert"
    >{{message}}
    </v-alert>
    </v-card>
    <form @submit.prevent="onSubmit">
      <v-card width="500" class="mx-auto mt-9" @submit.prevent="onSubmit">
        <v-card-title>Registrato</v-card-title>
        <v-card-text>
          <v-text-field
            label="Usuario"
            prepend-icon="mdi-account-circle"
            v-model="userForm.name"
          />
          <v-text-field
            label="Email"
            prepend-icon="mdi-gmail"
            v-model="userForm.email"
          />
          <v-text-field
            label="Contraseña"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            v-model="userForm.password"
          />
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn type="submit" color="success">Crear cuenta</v-btn>
        </v-card-actions>
        <v-divider></v-divider>
        <v-card-text align="center">
          <router-link :to="{ name: 'login' }">¿Ya tienes cuenta?</router-link>
        </v-card-text>
      </v-card>
    </form>
  </v-main>
</template>

<script>
import router from "@/router";
import { ref } from "vue";
import useAuth from "@/modules/auth/composables/useAuth";

export default {
  data() {
    const { createUser } = useAuth();
    const userForm = ref({
      email: "salvador.villagomez@hifos.com.mx",
      name: "Salvador",
      password: "ciscot3",
    });
    return {
      message: null,
      alert: false,
      userForm,
      showPassword: false,
      onSubmit: async () => {
        const { ok, message } = await createUser(userForm.value);
        if (!ok) {
 
          this.message = message;
          this.alert = true;
        } else {
          router.push({ name: "exits" });
        }
      },
    };
  },
};
</script>

<style>
</style>