<template>
  <navbar />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
@import "./components/app.css";
</style>
