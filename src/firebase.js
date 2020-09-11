import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAKe6X222zo87s_8AtS2NNCoTCGhNWZB08",
    authDomain: "marvo-react.firebaseapp.com",
    databaseURL: "https://marvo-react.firebaseio.com",
    projectId: "marvo-react",
    storageBucket: "marvo-react.appspot.com",
    messagingSenderId: "136049918592",
    appId: "1:136049918592:web:96d0a61c984c02d4dc1c65",
    measurementId: "G-B4CLGGT51T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};