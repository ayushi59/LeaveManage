import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB2EE6VX1y1owT4JX_GTzFgKZEPUwNID1E",
    authDomain: "leave-management-teachers.firebaseapp.com",
    databaseURL: "https://leave-management-teachers.firebaseio.com",
    projectId: "leave-management-teachers",
    storageBucket: "leave-management-teachers.appspot.com",
    messagingSenderId: "845494884203",
    appId: "1:845494884203:web:9bc4f7278f614ecdc49e2e",
    measurementId: "G-RPC16F0ZMT"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;