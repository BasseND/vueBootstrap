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
        <b-col cols="12" sm="12" md="6" lg="4" class="col-sm" v-for="item in blogItems" :key="item.title">
          <div class="blogItem">

            <div class="image">
              <b-img fluid-grow :src="item.blogImg" height="160px" />
            </div>

            <div class="content">

              <h4>{{item.title}}</h4>
              <div class="content_info d-flex align-items-center">
                <span><i class="fi flaticon-user"></i> John Dao</span>
                <span><i class="fi flaticon-comment-black-oval-bubble-shape"></i> 0 comment</span>
                <span><i class="fi flaticon-thumbs-up-hand-symbol"></i> Like</span>
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
      mainTitle: "Read our lastest blog post.",
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
          title: "Enim ads minim veniam",
          blogImg: "./src/assets/img/blog02.png",
          teaserText:
            "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
        },
        {
          title: "Ut enims ad minim veniam",
          blogImg: "./src/assets/img/blog03.png",
          teaserText:
            "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
        },
        {
          title: "Enim ad mianim veniam",
          blogImg: "./src/assets/img/blog04.png",
          teaserText:
            "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
        },
        {
          title: "Ut enim ad minimz veniam",
          blogImg: "./src/assets/img/blog05.png",
          teaserText:
            "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
        },
        {
          title: "Enim ad minim veniamaer",
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
        span {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
