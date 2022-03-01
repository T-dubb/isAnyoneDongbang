import React from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import "../styles/HomeScreen.css";
import { map } from '@firebase/util';

const dummyData = [
  {
    userName: "권유진",
    occupancyTime: 385,
  },
  {
    userName: "박혜진",
    occupancyTime: 385,
  },
  {
    userName: "김태우",
    occupancyTime: 330,
  },
  {
    userName: "이중훈",
    occupancyTime: 185,
  },
  {
    userName: "나은지",
    occupancyTime: 185,
  },
  {
    userName: "서정하",
    occupancyTime: 110,
  },
  {
    userName: "추민정",
    occupancyTime: 25,
  },
  {
    userName: "김우일",
    occupancyTime: 25,
  },
];

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
        <button onClick={logoutClick}>
          로그아웃!
        </button>
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
  const UserBox = ({userName, occupancyTime}) => {
    return (
      <div className="HomeScreenUserBox">
        <div>{userName}</div>
        <div>{occupancyTime}</div>
      </div>
    );
  }
  const HomeScreenContent = () => {
    return (
      <div className="HomeScreenBodyContainer">
        {dummyData.map(
          ({userName, occupancyTime}) => (
            <UserBox
              userName={userName}
              occupancyTime={occupancyTime}
            />
          )
        )}
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