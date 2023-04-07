import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAp0GwKfRAQlCDQyK6TPwa0CzpGtPLSGsQ",
  authDomain: "findservice-eb3bd.firebaseapp.com",
  projectId: "findservice-eb3bd",
  storageBucket: "findservice-eb3bd.appspot.com",
  messagingSenderId: "656020877960",
  appId: "1:656020877960:web:9d23cebc6f050be70b653d"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{app, auth}
