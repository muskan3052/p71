import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBhi3B00PT8-RuTy8KNpMruCDH_eqhb6p8",
    authDomain: "e-ride-ff77f.firebaseapp.com",
    projectId: "e-ride-ff77f",
    storageBucket: "e-ride-ff77f.appspot.com",
    messagingSenderId: "636581226293",
    appId: "1:636581226293:web:3b68f2326337b0061a8e7c"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
