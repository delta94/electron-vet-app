import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

export const config = {
  apiKey: "AIzaSyB9H292Lx47xSutp43PTVcoo4sY9yrWkBc",
  authDomain: "electron-vet-app.firebaseapp.com",
  databaseURL: "https://electron-vet-app.firebaseio.com",
  projectId: "electron-vet-app",
  storageBucket: "electron-vet-app.appspot.com",
  messagingSenderId: "675210899315",
  appId: "1:675210899315:web:8e01aa4b2cb5bb2df9df06"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore()

export default firebase;