<template>
    <div class="welcome_container ">
        <b-container>
            <b-row class="welcome_content" align-v="center">
                <b-col cols="12" md="6" class="col-sm">
                    <div class="content">
                        <h1>{{mainTitle}}</h1>

                        <p>{{headerText}}</p>

                        <b-button class="btn-getStarted" size="lg" variant="success">
                            {{getStartedText}}
                        </b-button>
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
      mainTitle: "Investment to the Future Business Technology",
      headerText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      getStartedText: "Get Started"
    };
  }
};
</script>
<style lang="scss">
.welcome_container {
  .welcome_content {
    min-height: 500px;
    display: flex;
    justify-content: start;
    align-items: center;
    .content {
      h1 {
        font-size: 50px;
        margin-top: 20px;
        margin-bottom: 50px;
      }
      p {
        margin-bottom: 30px;
      }
      .btn-getStarted {
      }
    }
  }
}
</style>