<template>
  <div>
    <NavBar />
    <v-container>
      <v-row>
        <v-col cols="12">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </div>




</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  data() {

    return {


    }

  },
  components: {
    NavBar: defineAsyncComponent(() => import("@/components/NavBar.vue")),

  },
};
</script>
  


<style>

</style>