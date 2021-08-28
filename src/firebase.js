import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBhpiPODlMTeFYqPVMmiJZfihUg3c6PUt8",
    authDomain: "amieldev-chat.firebaseapp.com",
    projectId: "amieldev-chat",
    storageBucket: "amieldev-chat.appspot.com",
    messagingSenderId: "296546841438",
    appId: "1:296546841438:web:406b01c4e5e2f5e64b95cf",
    measurementId: "G-L63465J4X1"
})

const db=firebaseApp.firestore();

const auth=firebase.auth();

export {db,auth}