
import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDXgwJPNXh0H9r2zg5EtpaMQ7UVcAjG29k",
    authDomain: "tons-of-damage.firebaseapp.com",
    projectId: "tons-of-damage",
    storageBucket: "tons-of-damage.appspot.com",
    messagingSenderId: "801851445362",
    appId: "1:801851445362:web:55d7366bca1c25743d72eb",
    measurementId: "G-FHWE4KEP1V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


// const db = firebaseApp.fireStore()
// const userCollection = db.collection('users')
