import * as firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBTEaBrtxi329vwEvYUlAl4pKEk9XJ9PjY",
    authDomain: "ros-cloud-cc711.firebaseapp.com",
    databaseURL: "https://ros-cloud-cc711.firebaseio.com",
    projectId: "ros-cloud-cc711",
    storageBucket: "ros-cloud-cc711.appspot.com",
    messagingSenderId: "175713596436",
    appId: "1:175713596436:web:72844d2b29a01ebaa76301",
    measurementId: "G-ZZXD7PLMCP"
}

firebase.initializeApp( firebaseConfig )

export default firebase

