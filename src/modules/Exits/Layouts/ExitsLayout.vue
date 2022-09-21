<template>
  <div>
    <NavBar />
    <v-container>
      <v-row>
        <v-col>
          <v-tabs fixed-tabs>
            <v-tab :to="{ name: 'exits' }">Vale +</v-tab>
            <v-tab :to="{ name: 'seguimiento' }">Seguimiento</v-tab>
          </v-tabs>
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    NavBar: defineAsyncComponent(() => import("@/components/NavBar.vue")),

  },
};
</script>

<style>

</style>
