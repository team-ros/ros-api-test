import firebase from '../../connection'

export default () => {
    return new Promise( data => {
        firebase.auth().signOut()
        .then( () => {
            data({
                status: true
            })
        })
        .catch( error => {
            data({
                status: false,
                error
            })
        });
    })
}