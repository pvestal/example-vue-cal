<template>
  <v-app>
    <NavBar />
    <v-content>
      <Calendar />
    </v-content>
  </v-app>
</template>

<script>
import Calendar from "./components/Calendar";
import NavBar from "./components/AppNavBar";

export default {
  name: "App",

  components: {
    NavBar, Calendar
  },

  data: () => ({
    //
  })
};
</script>
