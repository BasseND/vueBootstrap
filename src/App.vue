<template>
  <div id="app">
    <!--img src="./assets/logo.png"-->

    <div class="components_wrapper">
      <Toolbar />
      <h1>{{ msg }}</h1>
      <Welcome />
      <Home />
      <Services />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  </div>
</template>

<script>
import Toolbar from "./components/Toolbar.vue";
import Welcome from "./components/Welcome.vue";
import Home from "./components/Home.vue";
import Services from "./components/Services.vue";
import Testimonials from "./components/Testimonials.vue";
import Blog from "./components/Blog.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Toolbar,
    Welcome,
    Home,
    Services,
    Testimonials,
    Blog,
    Footer
  },
  name: "app",
  data() {
    return {
      msg: "Bootstrap Vue Project"
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
