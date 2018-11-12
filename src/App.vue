<template>
  <div id="app">
    <Toolbar />
    <router-view />

  </div>
</template>

<script>
import Toolbar from "./components/Toolbar.vue";
export default {
  components: { Toolbar },
  name: "app",
  data() {
    return {
      msg: "Bootstrap Vue Project"
    };
  }
};
</script>

<style lang="scss">
@import url("./assets/css/flaticon.css");
@import url("./assets/sass/style.css");
</style>
