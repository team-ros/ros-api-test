import firebase from '../../connection'
import 'firebase/auth'

export default ( email, password ) => {
    return new Promise( data => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
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
        });
    })
}
