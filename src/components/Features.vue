<template>
    <div class="feature_container theme_section">
        <div class="feature_section featuresOne">
            <b-container>
                <b-row v-for="item in featuresOne" :key="item.title">
                    <b-col sm="12" md="7" lg="7" class="col-sm">
                        <div class="image">
                            <!--img :src="item.image" height="160px" /-->
                            <img src="../assets/img/widget_img01.png" alt="Logo">
                        </div>
                    </b-col>
                    <b-col sm="12" md="5" lg="5" class="col-sm">
                        <div class="content">
                            <h3>{{item.title}}</h3>
                            <p>{{item.text}}</p>
                            <b-button size="lg" variant="success">
                                {{item.learnMore}}
                            </b-button>
                        </div>
                    </b-col>

                </b-row>
            </b-container>
        </div>

        <div class="feature_section featuresTwo">
            <b-container>
                <b-row v-for="item in featuresTwo" :key="item.title">
                    <b-col sm="12" md="5" lg="5" class="col-sm">
                        <div class="content">
                            <h3>{{item.title}}</h3>
                            <p>{{item.text}}</p>
                            <b-button size="lg" variant="success">
                                {{item.learnMore}}
                            </b-button>
                        </div>
                    </b-col>
                    <b-col sm="12" md="7" lg="7" class="col-sm">
                        <div class="image">
                            <!--img :src="item.image" height="160px" /-->
                            <img src="../assets/img/widget_img02.png" alt="Logo">
                        </div>
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
      featuresOne: [
        {
          title: "Everyone Can Be Involved With Visual Direction.",
          image: "../assets/img/widget_img01.png",
          learnMore: "Learn more",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
        }
      ],
      featuresTwo: [
        {
          title: "User research & Feedback In One Place.",
          image: "../assets/img/widget_img02.png",
          learnMore: "Learn more",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.feature_section {
  .image {
    img {
    }
  }
  .content {
    text-align: left;
    h3 {
      margin-top: 40px;
      margin-bottom: 55px;
      line-height: 1.5;
    }
  }
  &.featuresOne {
    margin-top: 10px;
    background: url(../assets/img/bg_featureOne.png);
    background-repeat: no-repeat;
    background-position: top left;
    background-size: contain;
  }
  &.featuresTwo {
    margin-top: 70px;
    background: url(../assets/img/bg_featureTwo.png);
    background-repeat: no-repeat;
    background-position: top right;
    background-size: contain;
  }
}
</style>

