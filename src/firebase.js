import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB6fz_-Kf75rUEBgNSlkoYhCej3X55wLWo",
    authDomain: "cloudside-e9ca7.firebaseapp.com",
    projectId: "cloudside-e9ca7",
    storageBucket: "cloudside-e9ca7.appspot.com",
    messagingSenderId: "743516632086",
    appId: "1:743516632086:web:71cfe689d81bdb207af137"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };