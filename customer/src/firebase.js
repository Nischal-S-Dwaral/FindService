import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebase = {
    apiKey: "---apiKey---",
    authDomain: "---authDomain---",
    databaseURL: "---databaseURL---",
    projectId: "---projectId---",
    storageBucket: "---storageBucket---",
    messagingSenderId: "---messagingSenderId---",
    appId: "---appId---",
    measurementId: "---measurementId---"
};

// Initialize Firebase
const app = initializeApp(firebase);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

export{app, auth, googleProvider}
