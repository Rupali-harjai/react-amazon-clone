import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmEOnbmCraINZpKAYtbe3mUPtWak-APZo",
  authDomain: "app-2a72a.firebaseapp.com",
  projectId: "app-2a72a",
  storageBucket: "app-2a72a.appspot.com",
  messagingSenderId: "569311050804",
  appId: "1:569311050804:web:1979d01c85d13a8cd69e61",
  measurementId: "G-876NKRB43N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };