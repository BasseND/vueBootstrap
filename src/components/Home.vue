<template>
  <div class="home_container theme_section">
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col md="8" class="col-sm header_title">
          <h2>{{mainTitle}}</h2>
          <p>{{headerText}}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-sm" v-for="item in servicesItems" :key="item.title">
          <div class="sItem">
            <div class="sContent">
              <div class="image">
                <img :src="item.iconService" height="160px" />

              </div>
              <h3>{{item.title}}</h3>
              <p>{{item.description}}</p>
            </div>
          </div>
        </b-col>

      </b-row>
    </b-container>
  </div>

</template>
<script>
export default {
  data() {
    return {
      mainTitle:
        "The thing motiviates us is a very common form of motivation and that is with other folk counting on me, it's so easy to be motivated",
      headerText: "All their equipment and instruments are alive.",
      servicesItems: [
        {
          title: "Almost before we knew it, we had left the ground",
          iconService: "./src/assets/img/icon01.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
        },
        {
          title: "A shining crescent far beneath the flying vessel",
          iconService: "./src/assets/img/icon02.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
        },
        {
          title: "She stared through the window at the stars",
          iconService: "./src/assets/img/icon03.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.home_container {
  .sItem {
    padding: 65px 40px;
    margin-bottom: 30px;
    background-color: #fff;
    background-image: url(../assets/img/bg_deco.png);
    background-size: cover;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 10px 0px #e8eeff;
    box-shadow: 0px 0px 10px 0px #e8eeff;
    text-align: left;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.92);
      top: 0;
      left: 0;
      z-index: 1;
    }
    .sContent {
      position: relative;
      z-index: 10;
      .image {
        margin-bottom: 10px;
        img {
          height: 90px;
        }
      }
      h3 {
        margin-bottom: 30px;
      }
    }
  }
}
</style>