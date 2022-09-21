<template>
    <v-container>
    <v-row>
      <v-col v-for="article in getArticles" :key="article.PokemonID" cols="12">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="100%"
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${article.PokemonID}.svg`"
          >
          
          </v-img>  
          <v-card-title dark>{{ article.name }}</v-card-title>
          <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text> Share </v-btn>

            <v-btn color="orange" text> Explore </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import { mapActions, mapGetters, mapState } from "vuex";
    export default {
      computed: {
        ...mapGetters("articles", ["getArticles"]),
        // imgSrc() {
        // return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pokemonId }.svg`
      },
      methods: {
        //Para utilizar la accion
        ...mapActions("articles", ["loadArticles"]),
      },
      created() {
        this.loadArticles();
      },
    };
    </script>

<style>

</style>