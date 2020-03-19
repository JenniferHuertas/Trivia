import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCIMsNvxOIRYMaHbiGWLgzmpNvU4aoinNk',
  authDomain: 'trivia-10261.firebaseapp.com',
  databaseURL: 'https://trivia-10261.firebaseio.com',
  projectId: 'trivia-10261',
  storageBucket: 'trivia-10261.appspot.com',
  messagingSenderId: '427751577346',
  appId: '1:427751577346:web:001a551fe745c84759141b',
  measurementId: 'G-45VLLQMP73',
};

const db = firebase.initializeApp(firebaseConfig).firestore();

export default db;
