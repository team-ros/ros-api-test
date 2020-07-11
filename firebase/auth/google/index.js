import firebase from '../../connection'
import 'firebase/auth'

const GoogleProvider = new firebase.auth.GoogleAuthProvider()
GoogleProvider.addScope( 'profile' )
GoogleProvider.addScope( 'email' )

firebase.auth().useDeviceLanguage()

export default () => {
    return new Promise( data => {
        firebase.auth().signInWithPopup( GoogleProvider )
        .then( () => {
            data({
                status: true,
            })
        })
        .catch( error => {
            throw {
                status: false,
                error
            }
        })
    })
}




