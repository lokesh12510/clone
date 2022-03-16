import firebase from "firebase/compat/app";


import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvxrFP9AncemVeMvDAJAPOiGrqDwgo1Pk",
  authDomain: "ytube-clone-test.firebaseapp.com",
  projectId: "ytube-clone-test",
  storageBucket: "ytube-clone-test.appspot.com",
  messagingSenderId: "1040804873263",
  appId: "1:1040804873263:web:967fad3648db3b027c72da",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
