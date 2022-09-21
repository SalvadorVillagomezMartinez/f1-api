<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" md="3">
                <v-text-field label="Fecha" outlined required></v-text-field>
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="username"
                  label="Usuario"
                  required
                  outlined
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="3">
                <v-text-field
                  v-model="costo"
                  label="Centro de costo"
                  required
                  outlined
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="3">
                <v-text-field
                  v-model="id"
                  label="ID"
                  outlined
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-autocomplete
                  :items="getArticles"
                  item-text="name"
                  item-value="name"
                  background-color="white"
                  label="Material"
                  outlined
                  placeholder="Descripción del material"
                  prepend-icon="mdi-magnify"
                  v-model="value"
                  @change="Update(value)"
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-data-table
                  :headers="headers"
                  :items="getArticles"
                  :items-per-page="5"
                  class="elevation-1"
                >
                <template v-slot:top>
              
                    <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                      <v-card-title class="text-h5"
                        >Are you sure you want to delete this
                        item?</v-card-title
                      >
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDelete"
                          >Cancel</v-btn
                        >
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="deleteItemConfirm"
                          >OK</v-btn
                        >
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  </template>
                  
                  <template v-slot:item.actions="{ item }">
                    <v-icon small class="mr-2" @click="editItem(item)">
                      mdi-pencil
                    </v-icon>
                    <v-icon small @click="deleteItem(item)">
                      mdi-delete
                    </v-icon>
                  </template>
                  <template v-slot:no-data>
                    <v-btn color="primary"> Reset </v-btn>
                  </template>
                </v-data-table>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import useAuth from "@/modules/auth/composables/useAuth";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    const { username } = useAuth();
    return {
      editedIndex: -1,
      dialogDelete: false,
      pokemonItem: {
        PokemonID: "21",
        name: "",
        url: "",
      },
      defaultItem: {
        PokemonID: "",
        name: '',
        url: '',
    
    },
      value: null,
      username,
      costo: "Sistemas",
      id: "0000001",
      headers: [
        {
          text: "PokemonID",
          align: "start",
          sortable: false,
          value: "PokemonID",
        },
        { text: "name", value: "name" },
        { text: "url", value: "url" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    closeDelete() {
       this.dialogDelete = false;
       this.$nextTick(() => {
       this.pokemonItem = Object.assign({}, this.defaultItem);
       this.pokemonItem = -1;
      });
    },
    deleteItem(item) {
      
      this.editedIndex = this.getArticles.indexOf(item);
      this.pokemonItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.getArticles.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    Update(value) {
      this.pokemonItem.name = value;
      this.getArticles.push(this.pokemonItem);
      console.log(value);
    },
    ...mapActions("articles", ["loadArticles"]),
  },
  computed: {
    ...mapGetters("articles", ["getArticles"]),
  },
  created() {
    this.loadArticles();
  },
};
</script>

<style>
</style>