<template>
    <div>
        <!-- Navigation Bar -->
        <Navbar />

        <!-- Content Container -->
        <div class="contentContainer">

            <!-- Inner Content Container -->
            <div class="innerContentContainer">
                <!-- Sign In -->
                <b-form @submit.prevent >
                    <b-form-group label="Email address:" >
                        <b-form-input type="email" required placeholder="Enter email" v-model="email"/>
                    </b-form-group>

                    <b-form-group label="Password" >
                        <b-form-input type="password" required placeholder="Enter password" v-model="password" />
                    </b-form-group>

                    <b-button class="buttons" type="submit" variant="primary" @click="loginWithPassword">Sign In</b-button>
                </b-form>

                <hr class="or" data-content="OR">

                <!-- Sign in with Google -->
                <b-button class="buttons" @click="loginWithGoogle"> Sign in with Google </b-button>
            </div>

        </div>
    </div>
</template>

<script>
// import components
import Navbar from '../components/navbar'

// import authentication methods
import Google from '../firebase/auth/google'
import Password from '../firebase/auth/password'

export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },
    components: {
        Navbar
    },
    methods: {

        loginWithPassword(){
            
            Password( this.email, this.password )
            .then( data => {
                if( data.status ) {
                    this.$router.push({ path: "dashboard" })
                }
            })
            .catch( err => {
                console.log( err )
            })

        },
        loginWithGoogle(){
            Google()
            .then( data => {
                if( data.status ) {
                    this.$router.push({ path: "dashboard" })
                }
            })
            .catch( err => {
                console.log( err )
            })
        }

    }
}
</script>

<style scoped>

    .contentContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .innerContentContainer {
        width: 30%;
    }

    .buttons {
        width: 100%;
    }

    .or {
        line-height: 1em;
        position: relative;
        outline: 0;
        border: 0;
        color: black;
        text-align: center;
        height: 1.5em;
        opacity: .5;
    }

    .or:before {
        content: '';
        background: grey;
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        height: 1px;
    }
    .or:after {
        content: attr(data-content);
        position: relative;
        display: inline-block;
        color: black;
        padding: 0 .5em;
        line-height: 1.5em;
        color: #818078;
        background-color: #fcfcfa;
    
    }

</style>