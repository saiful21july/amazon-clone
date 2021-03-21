import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDggo7CFHJXHWzW6tgQn8cSMOyvj_Jy140",
    authDomain: "clone-8a484.firebaseapp.com",
    projectId: "clone-8a484",
    storageBucket: "clone-8a484.appspot.com",
    messagingSenderId: "702079685513",
    appId: "1:702079685513:web:cfa2be8c8695504a8b0758",
    measurementId: "G-ZV5B0Y2WPR"
  }
// now we are going to setup two things.We first initialized the app and then we initialize the database and create an authentication object ....

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
export {db, auth }

