import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAd_947eu6TsUAAXRVVFUenD4-I0AzM-QQ",
  authDomain: "saas-translator-messaging-app.firebaseapp.com",
  projectId: "saas-translator-messaging-app",
  storageBucket: "saas-translator-messaging-app.appspot.com",
  messagingSenderId: "457943324364",
  appId: "1:457943324364:web:7efe42b59d3e4e16a65469",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
