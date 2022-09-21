<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <v-btn class="primary" @click="gotoDatbook">
          {{ count }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  computed: mapState(["count"]),
  methods: {
    gotoDatbook() {
      this.$router.push({ name: "login" });
    },
  },
 
};
</script>
