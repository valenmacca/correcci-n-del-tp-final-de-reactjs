import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoMfpGIbUeE6QI9VTCac-42oa_S0fC6Y8",
  authDomain: "coderhouse71790.firebaseapp.com",
  projectId: "coderhouse71790",
  storageBucket: "coderhouse71790.firebasestorage.app",
  messagingSenderId: "852925300696",
  appId: "1:852925300696:web:9bfb1539375e4d3a44fcad"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);