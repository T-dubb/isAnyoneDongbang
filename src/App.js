import './App.css';


function App() {
  return (
    <div className="backGround">
      <div className="signUpBlock">
        <img className="logo" src="dongnuit.png"/>
        <div className="inputContainer">
          <div className="inputBox">
            <div className="inputTitle">name</div>
            <input className="inputLine" placeholder='name'></input>
          </div>
          <div className="inputBox">
            <div className="inputTitle">student-id</div>
            <input className="inputLine" placeholder='student-id'></input>
          </div>
          <div className="inputBox">
            <div className="inputTitle text">password</div>
            <input className="inputLine text" placeholder='password'></input>
          </div>
        </div>
        <div className="signUpBtn text">sign-up</div>
      </div>
    </div>
  );
}

export default App;
