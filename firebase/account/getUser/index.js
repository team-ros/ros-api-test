import firebase from '../../connection'

export default () => {
    return new Promise( data => {
        data({
            status: true,
            data: firebase.auth().currentUser
        })
    })
}