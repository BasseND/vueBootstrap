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
            <b-modal id="modal-center" size="md" centered title="Contact Us">
                <div class="form_container">
                    <b-form-input class="mb-3" type="text" placeholder="Enter your name"></b-form-input>
                    <b-form-input class="mb-3" type="email" placeholder="Enter your Email"></b-form-input>
                    <b-form-input class="mb-3" type="text" placeholder="Subject"></b-form-input>
                    <b-form-textarea class="mb-3" id="textarea1" placeholder="Message" :rows="3" :max-rows="6">
                    </b-form-textarea>
                </div>
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