<template>
    <div class="home_container theme_section">
        <div class="header_title">
            <h2>{{mainTitle}}</h2>
            <p>{{headerText}}</p>
        </div>

        <b-container>
            <b-row>
                <b-col class="col-sm" v-for="item in servicesItems" :key="item.title">
                    <div class="srItem">
                        <div class="image">
                            <img :src="item.iconService" height="160px" />
                        </div>
                        <h3>{{item.title}}</h3>
                        <p>{{item.description}}</p>
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
          title: "Almost before we knew it, we had left the ground",
          iconService:
            "https://image.freepik.com/vecteurs-libre/fond-d-39-ecran-religieux-eid-mubarak_1055-2500.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
        },
        {
          title: "A shining crescent far beneath the flying vessel",
          iconService:
            "https://image.freepik.com/vecteurs-libre/fond-d-39-ecran-religieux-eid-mubarak_1055-2500.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
        },
        {
          title: "She stared through the window at the stars",
          iconService:
            "https://image.freepik.com/vecteurs-libre/fond-d-39-ecran-religieux-eid-mubarak_1055-2500.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
        }
      ]
    };
  }
};
</script>
<style lang="scss">
</style>