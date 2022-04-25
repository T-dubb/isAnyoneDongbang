// import { Link } from "react-router-dom";
import React from 'react';
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
            .then(() => {
                window.location.href = "/";
            })
            .catch((error) => {
                let errorMessage = "";
                if (name === "") errorMessage = "이름이 비어 있다!"; // approved by Seo; contact him if you 꼬우면
                else if (id === "") errorMessage = "학번이 비어 있다!"; 
                else if (password === "") errorMessage = "비밀번호가 비어 있다!";
                else if (group === "") errorMessage = "친목조가 비어 있다!";
                else {
                    switch (error.code) {
                        case "auth/email-already-in-use":
                            errorMessage = "이미 해당 학번으로 가입된 계정이 있다!"; 
                            break;
                        case "auth/weak-password":
                            errorMessage = "비밀번호가 너무 간단하다! 6글자 이상이어야 한다!";
                            break;
                        default:
                            errorMessage = "예기치 못한 오류다! \n오류 코드: " + error.code;
                    }
                }
                alert(`오류 발생! \n${errorMessage}`);
                console.error(`오류 발생! \n${errorMessage}`);
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