import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyA7SF8f8-KdamljOr0ja4Ay-66PlQO7TP4",
  authDomain: "barter-system-app-b816c.firebaseapp.com",
  projectId: "barter-system-app-b816c",
  storageBucket: "barter-system-app-b816c.appspot.com",
  messagingSenderId: "54115946455",
  appId: "1:54115946455:web:949ea705b2960d27278592"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();