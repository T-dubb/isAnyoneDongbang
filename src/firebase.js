import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD9V2d1KE2dkBKkuI0lvFF8fJXh1Zgk9bw",
    authDomain: "is-anyone-dongbang.firebaseapp.com",
    projectId: "is-anyone-dongbang",
    storageBucket: "is-anyone-dongbang.appspot.com",
    messagingSenderId: "908426611204",
    appId: "1:908426611204:web:5580e5f974144f12a30351",
    measurementId: "G-V3N0NFMG68"
};

export const firestoreDB = () => {
    return getFirestore();
};

export const firebaseApp = () => {
    initializeApp(firebaseConfig);
}