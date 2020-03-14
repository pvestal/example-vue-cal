<template>
  <div>
    <v-navigation-drawer app v-model="drawer">
    <v-list>
      <v-subheader>Menu</v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{appTitle}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>SIGN IN</v-btn>
      <v-btn href="https://github.com/pvestal/example-vue-cal" target="_blank" text>
        <span class="mr-2">Github Repo</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppNavigation",
  data: () => ({
    appTitle: "Appt App",
    drawer: false,
    item: 1,
    items: [{ title: "Menu", icon: "mdi-home-outline" }, { title: "Sign In", icon: "mdi-account-outline" }, { title: "Join", icon: "mdi-account-plus-outline" }]
  })
};
</script>

<style scoped>
</style>

