import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDjSCMRN_thrvO7a7tAixD2b2RaO9tjfzE",
    authDomain: "beerhouse-3000.firebaseapp.com",
    projectId: "beerhouse-3000",
    storageBucket: "beerhouse-3000.appspot.com",
    messagingSenderId: "630665426143",
    appId: "1:630665426143:web:63600fd0e02e24f229e56a"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  export { projectFirestore, projectAuth }