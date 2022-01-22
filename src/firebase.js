//firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD9V2d1KE2dkBKkuI0lvFF8fJXh1Zgk9bw",
    authDomain: "is-anyone-dongbang.firebaseapp.com",
    projectId: "is-anyone-dongbang",
    storageBucket: "is-anyone-dongbang.appspot.com",
    messagingSenderId: "908426611204",
    appId: "1:908426611204:web:5580e5f974144f12a30351",
    measurementId: "G-V3N0NFMG68"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };