<template>
    <div class="contactUsBlock_container">
        <b-container class="bv-example-row bv-example-row-flex-cols">
            <div class="contactUsBlock ">
                <div class="let_work_bloc">
                    <b-row align-v="center">
                        <b-col sm="12" md="9" lg="9">
                            <p>So, What's next ?</p>
                            <h2>Are you ready ? Let's work ?</h2>
                        </b-col>
                        <b-col sm="12" md="3" lg="3">
                            <b-button v-b-modal.modal-center class="btn-getStarted" size="lg">
                                Contact Us
                            </b-button>
                        </b-col>

                    </b-row>
                </div>
            </div>

        </b-container>

        <div>

            <!-- Modal Component -->
            <b-modal id="modal-center" size="lg" centered title="Contact Us">
                <p class="my-4">Vertically centered modal!</p>
            </b-modal>
        </div>
    </div>
</template>
<script>
export default {
  contactUs: "Contact Us"
};
</script>
<style lang="scss">
</style>