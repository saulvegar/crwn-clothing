import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCsqV3ra0U_7fVKhm7MzAjbBIgdjEfaFJg",
  authDomain: "crwn-db-5c989.firebaseapp.com",
  databaseURL: "https://crwn-db-5c989.firebaseio.com",
  projectId: "crwn-db-5c989",
  storageBucket: "",
  messagingSenderId: "224461625733",
  appId: "1:224461625733:web:b256aa1955fe4c92"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;