import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyARPmOetjLf_FCbCL0HbLaW77k3EXuxeUk',
  authDomain: 'portfolio-freelance.firebaseapp.com',
  databaseURL: 'https://portfolio-freelance.firebaseio.com',
  projectId: 'portfolio-freelance',
  storageBucket: '',
  messagingSenderId: '1053927660422'
}

!firebase.apps.length ? firebase.initializeApp(config) : null

firebase.firestore().settings({ timestampsInSnapshots: true })

const storage = firebase.storage()
const firestore = firebase.firestore()
const auth = firebase.auth

export { storage, firestore, auth }
