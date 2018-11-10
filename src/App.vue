<template>
  <div id="app">

    <div class="components_wrapper">
      <Toolbar />
      <Welcome />
      <Home />
      <Services />
      <Features />
      <Testimonials />
      <Blog />
      <ContactUsBlock />
      <Footer />
    </div>

  </div>
</template>

<script>
import Toolbar from "./components/Toolbar.vue";
import Welcome from "./components/Welcome.vue";
import Home from "./components/Home.vue";
import Services from "./components/Services.vue";
import Features from "./components/Features.vue";
import Testimonials from "./components/Testimonials.vue";
import Blog from "./components/Blog.vue";
import ContactUsBlock from "./components/ContactUsBlock.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Toolbar,
    Welcome,
    Home,
    Services,
    Features,
    Testimonials,
    Blog,
    ContactUsBlock,
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
@import url("./assets/css/flaticon.css");
@import url("./assets/sass/style.css");
</style>
