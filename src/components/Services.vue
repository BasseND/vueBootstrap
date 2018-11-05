<template>
    <div class="service_container theme_section">
        <b-container>
            <b-row>
                <b-col class="col-sm header_title">
                    <h2>{{mainTitle}}</h2>
                    <p>{{headerText}}</p>
                </b-col>
            </b-row>

            <b-row>
                <b-col class="col-sm" v-for="item in servicesItems" :key="item.title">
                    <div class="srItem">
                        <div class="image">
                            <!--img :src="item.iconService" height="160px" /-->
                            <img src="../assets/img/srIcon02.png" alt="Logo">
                        </div>

                        <h2>{{item.pourcent}}</h2>
                        <h3>{{item.title}}</h3>
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
      mainTitle: "Services",
      headerText: "All their equipment and instruments are alive.",
      servicesItems: [
        {
          title: "Creativity",
          iconService: "../assets/img/srIcon01.png",
          pourcent: "84%"
        },
        {
          title: "Development",
          iconService: "../assets/img/srIcon02.png",
          pourcent: "92%"
        },
        {
          title: "Marketing",
          iconService: "../assets/img/srIcon02.png",
          pourcent: "67%"
        },
        {
          title: "Success",
          iconService: "../assets/img/srIcon02.png",
          pourcent: "98%"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.service_container {
  .srItem {
    text-align: center;
    .image {
      background: url(/dist/srv_mask_icon.png?0ef39f3…);
      background-repeat: no-repeat;
      width: 135px;
      height: 135px;
      line-height: 124px;
      margin: 0 auto;
      margin-bottom: 30px;
      img {
      }
    }
  }
}
</style>