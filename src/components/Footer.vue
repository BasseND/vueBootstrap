<template>
  <div class="footer_container theme_section">
    <div class="footer_overlay"></div>
    <div class="footer_wrap">
      <b-container class="bv-example-row bv-example-row-flex-cols">

        <b-row align-v="top">
          <b-col sm="12" md="6" lg="4" class="footer_box">
            <div class="footer_logo">
              <img src="../assets/img/logo_white.png" alt="Logo">
            </div>
            <div class="footer_info">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              <div class="contact_info">
                <ul>
                  <li><i class="fi flaticon-telephone"></i> (+61) 879 815 125</li>
                  <li><i class="fi flaticon-envelope"></i> translang@gmail.com</li>
                  <li><i class="fi flaticon-map-marker"></i> 01, Central Park, NYK</li>
                </ul>
              </div>
            </div>

          </b-col>

          <b-col cols="12" sm="12" md="6" lg="2" class="footer_box">
            <h4>Support</h4>
            <ul>
              <li v-for="supportLink in supportLinks" :key="supportLink.title">
                <b-link :href="supportLink.link">{{supportLink.title}}</b-link>
              </li>
            </ul>

          </b-col>

          <b-col cols="12" sm="12" md="6" lg="2" class="footer_box">
            <h4>Services</h4>
            <ul>
              <li v-for="servicesLink in servicesLinks" :key="servicesLink.title">
                <b-link :href="servicesLink.link">{{servicesLink.title}}</b-link>
              </li>
            </ul>

          </b-col>

          <b-col cols="12" sm="12" md="6" lg="2" class="footer_box">
            <h4>Links</h4>
            <ul>
              <li v-for="mainLink in mainLinks" :key="mainLink.title">
                <b-link :href="mainLink.link">{{mainLink.title}}</b-link>
              </li>
            </ul>

          </b-col>

          <b-col cols="12" sm="12" md="6" lg="2" class="footer_box">
            <h4>Follow Us</h4>
            <ul>
              <li v-for="followUsLink in followUsLinks" :key="followUsLink.title">
                <b-link :href="followUsLink.link">{{followUsLink.title}}</b-link>
              </li>
            </ul>

          </b-col>

        </b-row>

      </b-container>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      supportLinks: [
        {
          title: "User dasboard",
          link: "google.com"
        },
        {
          title: "Contact Us",
          link: "google.com"
        },
        {
          title: "FAQ",
          link: "google.com"
        },
        {
          title: "Course Offer",
          link: "google.com"
        },
        {
          title: "Evens",
          link: "google.com"
        }
      ],
      servicesLinks: [
        {
          title: "Master Mind",
          link: "google.com"
        },
        {
          title: "Junior Lambs",
          link: "google.com"
        },
        {
          title: "Happy Kiddo",
          link: "google.com"
        },
        {
          title: "Master Mind",
          link: "google.com"
        },
        {
          title: "Junior Lambs",
          link: "google.com"
        }
      ],
      mainLinks: [
        {
          title: "About",
          link: "google.com"
        },
        {
          title: "Blog",
          link: "google.com"
        },
        {
          title: "Team",
          link: "google.com"
        },
        {
          title: "Portfolio",
          link: "google.com"
        },
        {
          title: "Sign Up",
          link: "google.com"
        }
      ],
      followUsLinks: [
        {
          title: "Facebook",
          link: "google.com"
        },
        {
          title: "Twitter",
          link: "google.com"
        },
        {
          title: "Instagram",
          link: "google.com"
        },
        {
          title: "Youtube",
          link: "google.com"
        },
        {
          title: "TripAvisor",
          link: "google.com"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
</style>