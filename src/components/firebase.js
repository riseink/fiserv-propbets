import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDqzxFr9fPymmKpwITLvxY72fBL-ultK6E",
    authDomain: "propbets-test.firebaseapp.com",
    projectId: "propbets-test",
    storageBucket: "propbets-test.appspot.com",
    messagingSenderId: "487273770389",
    appId: "1:487273770389:web:b81eebd1f1758c21fada9c"
};
 
firebase.initializeApp(firebaseConfig)

export default firebase