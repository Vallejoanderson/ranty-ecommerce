import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDRVhJKZCwGz0YovTlPCd3JusoLl5Ne6R0",
  authDomain: "journalapp-99042.firebaseapp.com",
  projectId: "journalapp-99042",
  storageBucket: "journalapp-99042.appspot.com",
  messagingSenderId: "374536539819",
  appId: "1:374536539819:web:ccff2513c587f6dad471ee"
};	

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
	db,
	googleAuthProvider,
	firebase,
}
