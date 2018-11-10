<template>
  <div class="blog_container theme_section">
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col md="8" class="col-sm header_title">
          <h2>{{mainTitle}}</h2>
          <p>{{headerText}}</p>
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="12" md="4" lg="4" class="col-sm" v-for="item in blogItems" :key="item.title">
          <div class="blogItem">

            <div class="image">
              <b-img fluid-grow :src="item.blogImg" height="160px" />
            </div>

            <div class="content">

              <h4>{{item.title}}</h4>
              <div class="content_info">
                <span><i class="flaticon-user"></i> John Dao</span>
                <span><i class="flaticon-user"></i> 0 comment</span>
                <span><i class="flaticon-user"></i> Like</span>
              </div>

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
        "We are doing a little mile of this and of continued that support.",
      headerText:
        "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.",
      blogItems: [
        {
          title: "Labore et dolore magna aliqua",
          blogImg: "./src/assets/img/blog01.png ",
          teaserText:
            "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
        },
        {
          title: "Enim ad minim veniam",
          blogImg: "./src/assets/img/blog02.png",
          teaserText:
            "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
        },
        {
          title: "Ut enim ad minim veniam",
          blogImg: "./src/assets/img/blog03.png",
          teaserText:
            "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
        },
        {
          title: "Enim ad minim veniam",
          blogImg: "./src/assets/img/blog04.png",
          teaserText:
            "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
        },
        {
          title: "Ut enim ad minim veniam",
          blogImg: "./src/assets/img/blog05.png",
          teaserText:
            "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
        },
        {
          title: "Enim ad minim veniam",
          blogImg: "./src/assets/img/blog06.png",
          teaserText:
            "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.blog_container {
  .blogItem {
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 10px 0px #e8eeff;
    box-shadow: 0px 0px 10px 0px #e8eeff;
    text-align: left;
    margin-bottom: 30px;
    .image {
      img {
        border-radius: 5px 5px 0 0;
      }
    }
    h4 {
      margin-bottom: 10px;
    }
    .content {
      padding: 30px;
      .content_info {
      }
    }
  }
}
</style>
