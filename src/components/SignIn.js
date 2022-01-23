import '../styles/SignIn.css';

function SignIn() {
    
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

export default SignIn;