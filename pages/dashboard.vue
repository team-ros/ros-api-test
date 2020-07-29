<template>
    <div>
        <h1> Dashboard </h1>
        <p>Token:</p> <textarea type="text" v-model="userdata" />
    </div>
</template>

<script>
    import firebase from '../firebase/account/getUser'

    export default {
        data() {
            return {
                userdata: ""
            }
        },
        mounted() {
            firebase()
            .then( data => {
                if( data.status ) {
                    this.userdata = data.data.i 
                }
            })
            .catch( err => {
                console.log( err )
            })
        }
    }
</script>

<style>

</style>
