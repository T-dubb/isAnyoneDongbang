import '../styles/SignUp.css';

function SignUp() {
    return (
        <div className="loginPageBox">
            여기는 임시 SignUp임.
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

export default SignUp;