<template>
    <div class="toolbar_container">
        <b-container>
            <b-row class="" align-v="center">
                <b-navbar toggleable="md" type="light">
                    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

                    <b-navbar-brand href="#"><img src="../assets/logo.png" alt="Logo"></b-navbar-brand>

                    <b-collapse is-nav id="nav_collapse">

                        <b-navbar-nav right>
                            <b-nav-item active href="#">Home</b-nav-item>
                            <b-nav-item href="#">Services</b-nav-item>
                            <b-nav-item href="#">Testimonials</b-nav-item>
                            <b-nav-item href="#">Contact</b-nav-item>
                            <b-nav-item href="#">Sign Up</b-nav-item>
                        </b-navbar-nav>

                    </b-collapse>
                </b-navbar>

                <!-- navbar-1.vue -->
            </b-row>
        </b-container>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
</style>

