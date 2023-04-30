import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebase = {
    apiKey: "AIzaSyCkOeHP7xAAsOGWHOqh1SAiBpF_ehZdjXg",
    authDomain: "findservice-4922d.firebaseapp.com",
    databaseURL: "https://findservice-4922d-default-rtdb.firebaseio.com",
    projectId: "findservice-4922d",
    storageBucket: "findservice-4922d.appspot.com",
    messagingSenderId: "587869185863",
    appId: "1:587869185863:web:be56ce746518fbf3580e62",
    measurementId: "G-3454CG3ZGD"
};

// Initialize Firebase
const app = initializeApp(firebase);
const auth = getAuth(app);

export{app, auth}
