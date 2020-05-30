import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyA8ARq6PZrb9sumkeGxQX7I0SVjvNHOy9E",
  authDomain: "clothing-store-db-720d2.firebaseapp.com",
  databaseURL: "https://clothing-store-db-720d2.firebaseio.com",
  projectId: "clothing-store-db-720d2",
  storageBucket: "clothing-store-db-720d2.appspot.com",
  messagingSenderId: "473993203029",
  appId: "1:473993203029:web:1f5514d4899d2aefeff3dc"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ promt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
