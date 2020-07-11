<template>

    <b-navbar>
        <b-collapse id="nav-collapse" is-nav>

            <b-navbar-brand href="#">ROS Cloud</b-navbar-brand>


            <b-navbar-nav class="ml-auto">

                <div v-if="isLoggedIn">
                    <b-nav-item href="login">Login</b-nav-item>
                </div>

                <div v-else>
                    <div @click="signOutFromAccount">Sign Out</div>
                </div>
            </b-navbar-nav>

        </b-collapse>

        
    </b-navbar>

</template>

<script>

import getUser from '../../firebase/account/getUser'
import signOut from '../../firebase/account/signOut'

export default {
    data() {
        return {
            isLoggedIn: false
        }
    },
    methods: {
        signOutFromAccount() {
            signOut()
            .then( result => {
                if( result.staus ) {
                    this.$router.push({ path: "/" })
                }
            })
            .catch( err => {
                console.log( err )
            })
        }
    },
    created() {

        getUser()
        .then( data => {
            if( data.staus ) {
                this.isLoggedIn = true
            }
        })
        .catch( err => {

        })
    }
}
</script>

<style>

</style>