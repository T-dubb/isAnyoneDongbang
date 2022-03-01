import React from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

function HomeScreen() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user == null) {
      window.location.href = "../";
    }
  });

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