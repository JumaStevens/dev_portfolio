import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCJ59DQue5MLP5anas_ZlPUsbuxo5PAH3g',
  authDomain: 'juma-stevens.firebaseapp.com',
  databaseURL: 'https://juma-stevens.firebaseio.com',
  projectId: 'juma-stevens',
  storageBucket: 'juma-stevens.appspot.com',
  messagingSenderId: '195736207278'
}

!firebase.apps.length ? firebase.initializeApp(config) : null

const storage = firebase.storage()
const firestore = firebase.firestore()
const auth = firebase.auth

export { storage, firestore, auth }
