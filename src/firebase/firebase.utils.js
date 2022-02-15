import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCIy-QUbrdOvQmkcdvaxGo1DZh1IBRpIjU",
  authDomain: "crwn-db-c2a5e.firebaseapp.com",
  projectId: "crwn-db-c2a5e",
  storageBucket: "crwn-db-c2a5e.appspot.com",
  messagingSenderId: "425113488922",
  appId: "1:425113488922:web:c182da5228e685ff9ecba3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

