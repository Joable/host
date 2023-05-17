import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBVGOnZf96K29utbYO4dvMEQdHdRIZTOsk",
  authDomain: "build-93979.firebaseapp.com",
  projectId: "build-93979",
  storageBucket: "build-93979.appspot.com",
  messagingSenderId: "998667503227",
  appId: "1:998667503227:web:6500c9072b86563d4e84de"
};

/*const firebaseConfig = {
  apiKey: "AIzaSyBPqv2koV2kJHFV5dCcvgjIWkdgZ46eUOE",
  authDomain: "portfolio-8f090.firebaseapp.com",
  projectId: "portfolio-8f090",
  storageBucket: "portfolio-8f090.appspot.com",
  messagingSenderId: "112888837427",
  appId: "1:112888837427:web:de9e11b3815a6de44b7a46"
  };*/

  firebase.initializeApp(firebaseConfig);
  firebase.auth = firebase.auth();
  firebase.db = firebase.firestore();

  export default firebase