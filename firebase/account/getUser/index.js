import firebase from '../../connection'
import 'firebase/auth'

export default () => {
    return new Promise( data => {
        data({
            status: true,
            data: firebase.auth().currentUser.getIdToken()
        })
    })
}