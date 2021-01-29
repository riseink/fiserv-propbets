
import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAoRyOCCxZsYdMMvB98_P7ZHlSHbRxDIcA",
    authDomain: "propbets-live.firebaseapp.com",
    projectId: "propbets-live",
    storageBucket: "propbets-live.appspot.com",
    messagingSenderId: "1033770625820",
    appId: "1:1033770625820:web:7de8a5d5311e4865e868d9"
};
 
firebase.initializeApp(firebaseConfig)

export default firebase