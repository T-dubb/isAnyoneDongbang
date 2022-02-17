// import './App.css'
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
import React, { useEffect } from 'react';
import { firebaseApp } from '../firebase';
import { getAuth, signOut } from 'firebase/auth';

function HomeScreen() {
  firebaseApp();
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user);

  //private routing
  useEffect(() => {
    // if (user == null) {
    //   window.location.href = "../";
    // }

    return () => {

    }
  }, [user])

  const logoutClick = () => {
    signOut(auth)
      .then(() => {
        window.location.href = "../";
      })
      .catch((error) => {
        alert("오류 발생!");
        console.log(error);
      });
  }

  return (
    <div>
      This is Home Screen.
      <button onClick={logoutClick}>
        로그아웃!
      </button>
    </div>
  );
}

export default HomeScreen;