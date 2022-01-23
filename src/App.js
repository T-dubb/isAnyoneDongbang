import './App.css';
import { useEffect } from 'react';
import { firestore } from "./firebase";

function App() {
  //fortest
  useEffect(() => {
    // firestore.js에서 가져온 firestore 객체
    firestore
        .collection("users") //  "users" 컬렉션 반환
        .get() // "users" 컬렉션의 모든 다큐먼트를 갖는 프로미스 반환
        .then((docs) => {
        docs.forEach((doc) => { console.log(doc.data());})
    });
  }, []);
  
  return (
    <div className="loginPageBox">
      <div className="logoContainer" >
        <img className="logoItem" src="styles/dniLogo.png" alt="" />
      </div>
      <div className="loginInputContainer" >
        <input className="loginInputItem"
          placeholder="학번"
        />
      </div>
      <div className="loginInputContainer" >
        <input className="loginInputItem"
          placeholder="비밀번호"
        />
      </div>
    </div>
  );
}

export default App;
