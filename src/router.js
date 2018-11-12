import Vue from "vue";
import Router from "vue-router";
import HomePage from "./views/HomePage.vue";
import ContactPage from "./views/ContactPage.vue";
import ServicesPage from "./views/ServicesPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/contactpage",
      name: "contactpage",
      component: ContactPage
    },
    {
      path: "/servicespage",
      name: "servicespage",
      component: ServicesPage
    }
  ]
});
