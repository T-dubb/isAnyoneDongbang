import logo from './styles/dniLogo.png';
import './App.css';

function App() {
  return (
    <div className="loginPageBox">
      <div className="logo">
        <img src={logo} alt=""/>
      </div>
      <div className="loginInputContainer">
        <input placeholder="학번" className="loginInputItem"/>
      </div>
      <div className="loginInputContainer">
        <input placeholder="비밀번호" className="loginInputItem"/>
      </div>
    </div>
  );
}

export default App;