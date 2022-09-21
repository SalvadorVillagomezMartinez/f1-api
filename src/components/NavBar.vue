<template>
  <div>
    <v-toolbar flat dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Entradas y salidas de almacen</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="onLogout">
        <v-icon>mdi-export</v-icon>
      </v-btn>

    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{username}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link :to="{ name: item.path }" >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import useAuth from "@/modules/auth/composables/useAuth";
import router from "@/router";
export default {
  data() {
    const { username, logout } = useAuth();
    return {
      drawer: null,
      items: [
        { title: 'Articles', icon: 'mdi-view-dashboard' , path : 'list-article'},
        { title: 'Vales', icon: 'mdi-view-dashboard' , path : 'exits'},
      
      ],
      username,
      onLogout: () => {
        console.log("Hola");
        router.push({ name: "login" });
        logout();
      },
    };
  },
};
</script>