<template>
    <div class="testimonials_container theme_section">
        <b-container>
            <b-row class="justify-content-md-center">
                <b-col md="5">
                    <div class="title_ct">
                        <h5>{{mainTitle}}</h5>
                        <h2>{{headerText}}</h2>
                        <b-button class="btn-getStarted" size="lg">
                            Learn more
                        </b-button>
                    </div>
                </b-col>

                <b-col md="7">
                    <b-row class="justify-content-md-center">
                        <b-col md="6" v-for="item in testiItems" :key="item.title" :class="item.testiClass">
                            <div class="testiItem">
                                <p>{{item.message}}</p>
                                <div class="image">
                                    <b-img :src="item.testiImg" height="160px" />
                                    <h4>{{item.testiName}}</h4>
                                </div>

                            </div>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>

        </b-container>
    </div>
</template>

<script>
export default {
  data() {
    return {
      mainTitle: "Testmonials",
      headerText:
        "We are doing a little mile of this and of continued that support.",
      testiItems: [
        {
          testiName: "Paul Dinar",
          testiImg: "./src/assets/img/temoin.png ",
          testiClass: "recta testiOne",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
        },
        {
          testiName: "Emmat Shield",
          testiImg: "./src/assets/img/temoin.png",
          testiClass: "carre testiTwo",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
        },
        {
          testiName: "Bannet Alardis",
          testiImg: "./src/assets/img/temoin.png",
          testiClass: "carre testiTree",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
        },
        {
          testiName: "Marcus Lawson",
          testiImg: "./src/assets/img/temoin.png",
          testiClass: "recta  testiFour",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
        }
      ]
    };
  }
};
</script>
<style lang="scss">
</style>