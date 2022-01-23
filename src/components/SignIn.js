import { Link } from "react-router-dom";
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
            <Link to="signup"><button>회원가입하기</button></Link>
        </div>
    );
}

export default SignIn;