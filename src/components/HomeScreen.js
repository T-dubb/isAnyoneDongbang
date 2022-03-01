import React from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import "../styles/HomeScreen.css";

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

  const Header = () => {
    return (
      <div className="HomeScreenHeader">
        This is Header
      </div>
    );
  }
  const Footer = () => {
    return (
      <div>
        This is Footer
      </div>
    );
  }
  const HomeScreenContent = () => {
    return (
      <div>
        This is Home Screen.
        <button onClick={logoutClick}>
          로그아웃!
        </button>
      </div>
    )
  }

  return (
    <div>
      <Header/>
      <HomeScreenContent/>
      <Footer/>
    </div>
  );
}

export default HomeScreen;