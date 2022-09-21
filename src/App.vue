<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { defineAsyncComponent } from "vue";
import useAuth from '@/modules/auth/composables/useAuth'
export default {
  name: 'App',

  data() {
    const { authStatus, checkAuthStatus } = useAuth()
    checkAuthStatus()
    return {
      authStatus

    }

  },
  components: {
    Footer: defineAsyncComponent(() => import("@/components/Footer.vue")),

  },
};
</script>
