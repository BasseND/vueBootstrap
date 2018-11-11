<template>
  <div class="service_container theme_section">
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col md="8" class="col-sm header_title">
          <h2>{{mainTitle}}</h2>
          <p>{{headerText}}</p>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" sm="12" md="6" lg="3" class="col-sm" v-for="item in servicesItems" :key="item.title">
          <div class="srItem">
            <div class="image">
              <b-img :src="item.iconService" height="160px" />

              <!--img src="../assets/img/srIcon02.png" alt="Logo"-->
            </div>

            <h2>{{item.pourcent}}</h2>
            <h4>{{item.title}}</h4>
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
        "We are doing a little mile of this and of continued that support.",
      headerText:
        "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.",
      servicesItems: [
        {
          title: "Creativity",
          iconService: "./src/assets/img/srIcon01.png ",
          pourcent: "84%"
        },
        {
          title: "Development",
          iconService: "./src/assets/img/srIcon02.png",
          pourcent: "92%"
        },
        {
          title: "Marketing",
          iconService: "./src/assets/img/srIcon03.png",
          pourcent: "67%"
        },
        {
          title: "Success",
          iconService: "./src/assets/img/srIcon04.png",
          pourcent: "98%"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.service_container {
  background: url(../assets/img/bg_services.png);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  padding: 300px 0;
  .srItem {
    text-align: center;
    .image {
      background: url(../assets/img/srv_mask_icon.png);
      background-repeat: no-repeat;
      width: 135px;
      height: 135px;
      line-height: 124px;
      margin: 0 auto;
      margin-bottom: 30px;
      img {
        height: 50px;
      }
    }
    h2 {
      font-size: 50px;
      margin-bottom: 20px;
    }
  }
}
</style>