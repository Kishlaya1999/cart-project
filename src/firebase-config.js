// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyASKax84MT8HzETjcnQJ7hwYaYZO52uZ4g",
     authDomain: "cart-f737c.firebaseapp.com",
     projectId: "cart-f737c",
     storageBucket: "cart-f737c.appspot.com",
     messagingSenderId: "376776125863",
     appId: "1:376776125863:web:b3cdc41603d55d2113da82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;