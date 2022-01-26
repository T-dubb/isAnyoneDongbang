import '../styles/SignUp.css'
import { useState } from 'react'
import { firebaseApp } from '../firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

function SignUp() {
    firebaseApp();
    const auth = getAuth();

    const [userName, setUserName] = useState("")
    const [studentId, setStudentId] = useState("")
    const [password, setPassword] = useState("")

    const inputUserName = (e) => {
        setUserName(e.target.value)
    }
    const inputStudentId = (e) => {
        setStudentId(e.target.value)
    }
    const inputPassword = (e) => {
        setPassword(e.target.value)
    }

    const signUp = (name, id, password) => {
        const email = id + "@kaldi.kaist.ac.kr";
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("환영합니다, " + name + "님!");
            })
            .catch((error) => {
                alert("오류 발생!");
                console.log(error);
            });
    }

    return (
        <div className="signUpBackGround">
            <div className="signUpBlock">
                <img className="logo" src="dongnuit.png" />
                <div className="inputArea">
                    <div className="inputContainer">
                        <div className="inputTitle">이름</div>
                        <input className="inputLine" placeholder='이름' value={userName} onChange={(evt) => inputUserName(evt)} />
                    </div>
                    <div className="inputContainer">
                        <div className="inputTitle">학번</div>
                        <input className="inputLine" placeholder='학번' value={studentId} onChange={(evt) => inputStudentId(evt)} />
                    </div>
                    <div className="inputContainer">
                        <div className="inputTitle text">비밀번호</div>
                        <input className="inputLine text" placeholder='비밀번호' value={password} onChange={(evt) => inputPassword(evt)} />
                    </div>
                    <div className="inputContainer">
                        <div className="inputTitle text">친목조</div>
                        <input className="inputLine text" placeholder='친목조' value={password} onChange={(evt) => inputPassword(evt)} />
                    </div>
                </div>
                <div className="signUpBtn text" onClick={(evt) => signUp(userName, studentId, password)}>회원가입</div>
            </div>
        </div>
    )
}

export default SignUp;