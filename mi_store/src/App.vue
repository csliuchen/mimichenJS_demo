<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import HOME from "./pages/home";

import storage from "./storage/index";
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  mounted() {
    storage.setItem("a", 1);
  }
};
</script>

<style>
</style>
