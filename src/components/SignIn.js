import { Link } from "react-router-dom";
import React from 'react';
import { useState } from 'react';
import '../styles/SignIn.css';
import { firestoreDB } from '../firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs, query, where } from "firebase/firestore";

function SignIn() {
    const db = firestoreDB();
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
            .then(async () => {
                const usersRef = collection(db, "userInfo");
                const q = query(usersRef, where("studentId", "==", id));
                const r = await getDocs(q);
                return r.docs[0].data()["userName"];
            })
            .then((name) => {
                alert(`환영합니다, ${name}님!`);
            })
            .then(() => {
                window.location.href = "./home";
            })
            .catch((error) => {
                let errorMessage = "";
                if (id === "") errorMessage = "학번이 비어 있다!"; // approved by Seo; contact him if you 꼬우면
                else if (password === "") errorMessage = "비밀번호가 비어 있다!";
                else {
                    switch (error.code) {
                        case "auth/user-not-found":
                            errorMessage = "해당 학번으로 가입된 계정이 없다!";
                            break;
                        case "auth/wrong-password":
                            errorMessage = "비밀번호가 잘못되었다!";
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
        <div className="signInBackGround">
            <div className="signInBlock">
                <img className="logo" src="dongnuit.png" alt="동누잇 로고" />
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