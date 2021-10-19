import firebase from 'firebase/app'
// import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCJ59DQue5MLP5anas_ZlPUsbuxo5PAH3g',
  authDomain: 'juma-stevens.firebaseapp.com',
  databaseURL: 'https://juma-stevens.firebaseio.com',
  projectId: 'juma-stevens',
  storageBucket: 'juma-stevens.appspot.com',
  messagingSenderId: '195736207278',
  appId: '1:195736207278:web:fd217cf2b4f8766736523f'
}

if (!firebase.apps.length) firebase.initializeApp(config)

// const storage = firebase.storage()
const firestore = firebase.firestore()
const auth = firebase.auth

export { firestore, auth }
