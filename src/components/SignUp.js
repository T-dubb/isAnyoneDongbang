import '../styles/SignUp.css';
import { useState } from 'react';
import { firebaseApp, firestoreDB } from '../firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore";

function SignUp() {
    firebaseApp();
    const db = firestoreDB();
    const auth = getAuth();

    const [userName, setUserName] = useState("")
    const [studentId, setStudentId] = useState("")
    const [password, setPassword] = useState("")
    const [userGroup, setUserGroup] = useState("")

    const inputUserName = (e) => {
        setUserName(e.target.value)
    }
    const inputStudentId = (e) => {
        setStudentId(e.target.value)
    }
    const inputPassword = (e) => {
        setPassword(e.target.value)
    }

    const inputUserGroup = (e) => {
        setUserGroup(e.target.value)
    }

    const signUp = (name, id, password, group) => {
        const email = id + "@kaldi.kaist.ac.kr";
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => addDoc(collection(db, "userInfo"), {
                studentId: id,
                userName: name,
                userGroup: group
            }))
            .then(() => {
                alert(`환영합니다, ${name}님!`);
            })
            .catch((error) => {
                console.error("오류 발생: ", error);
            });
    }

    return (
        <div className="signUpBackGround">
            <div className="signUpBlock">
                <img className="logo" src="dongnuit.png" alt="동누잇 로고" />
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
                        <input className="inputLine text" placeholder='친목조' value={userGroup} onChange={(evt) => inputUserGroup(evt)} />
                    </div>
                </div>
                <div className="signUpBtn text" onClick={(evt) => signUp(userName, studentId, password, userGroup)}>회원가입</div>
            </div>
        </div>
    )
}

export default SignUp;