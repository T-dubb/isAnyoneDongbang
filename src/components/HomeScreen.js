// import './App.css'
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";

function HomeScreen() {
  //private routing
  // useEffect(() => {
    
  
  //   return () => {
      
  //   }
  // }, [])
  const logoutClick = () => {
    
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