// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfqb1xTPc-lVeK8vN83F3wSh-9uka90_U",
  authDomain: "unimate-f1630.firebaseapp.com",
  projectId: "unimate-f1630",
  storageBucket: "unimate-f1630.appspot.com",
  messagingSenderId: "616679306573",
  appId: "1:616679306573:web:933d3d75892c34f001f304",
  measurementId: "G-B6MYKJY9P6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const list_mentors = async ()=> {
    const mentorsRef = await getDocs(collection(db, 'mentors'));
    const data = mentorsRef.docs.map(doc => ({id: doc.id, ... doc.data()}))
    return data
}

