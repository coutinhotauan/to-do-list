import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

let firebaseConfig = {
    apiKey: "AIzaSyCeIVlr646orydy4qeJrba084Z1qMHnjPM",
    authDomain: "to-do-list-2606f.firebaseapp.com",
    projectId: "to-do-list-2606f",
    storageBucket: "to-do-list-2606f.appspot.com",
    messagingSenderId: "326475558240",
    appId: "1:326475558240:web:3f817c82d9dc206aa64205",
    measurementId: "G-KM0M4DRSDR"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;