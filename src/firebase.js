// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlzJReTY539VH0_G1Np4lsRIWcu8600VI",
  authDomain: "imsonishivam-portfolio.firebaseapp.com",
  projectId: "imsonishivam-portfolio",
  storageBucket: "imsonishivam-portfolio.appspot.com",
  messagingSenderId: "776245459032",
  appId: "1:776245459032:web:68ea201c2154876f8f322d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
