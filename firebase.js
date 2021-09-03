import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA10jgWgc6ZAS8hfdZCTQvypGuiYobkvf0",
    authDomain: "facebook-a8644.firebaseapp.com",
    projectId: "facebook-a8644",
    storageBucket: "facebook-a8644.appspot.com",
    messagingSenderId: "777080784321",
    appId: "1:777080784321:web:fbe5a253e078c4075a1b40"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app;
const db = firebase.firestore()
const storage = firebase.storage()

export {db, storage}