import { Link } from "react-router-dom";
import { useState } from 'react'
import '../styles/SignIn.css';
import { firebaseApp } from '../firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

function SignIn() {
    firebaseApp();
    const auth = getAuth();

    const [studentId, setStudentId] = useState("")
    const [password, setPassword] = useState("")

    const inputStudentId = (e) => {
        setStudentId(e.target.value)
    }
    const inputPassword = (e) => {
        setPassword(e.target.value)
    }

    const signIn = (id, password) => {
        const email = id + "@kaldi.kaist.ac.kr";
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("환영합니다, " + id + "님!");
            })
            .catch((error) => {
                alert("오류 발생!");
                console.log(error);
            });
    }
    return (
        <div className="signInBackGround">
            <div className="signInBlock">
                <img className="logo" src="dongnuit.png" />
                <div className="signIn-inputArea">
                    <div className="signIn-inputContainer">
                        <input className="signIn-inputLine" placeholder='학번' value={studentId} onChange={(evt) => inputStudentId(evt)} />
                    </div>
                    <div className="signIn-inputContainer">
                        <input className="signIn-inputLine" placeholder='비밀번호' value={password} onChange={(evt) => inputPassword(evt)} />
                        <div className="signIn-findpwd">비밀번호를 잊어버리셨나요?</div>
                    </div>
                </div>
                <div className="signInBtn" onClick={(evt) => signIn(studentId, password)}>로그인</div>
                <Link to="/signUp">
                    <div className="signIn-signUp">회원 가입하기</div>
                </Link>
            </div>
        </div>
    );
}

export default SignIn;