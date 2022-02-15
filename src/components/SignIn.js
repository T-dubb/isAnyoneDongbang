import { Link } from "react-router-dom";
import { useState } from 'react';
import '../styles/SignIn.css';
import { firebaseApp, firestoreDB } from '../firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs, query, where } from "firebase/firestore";

function SignIn() {
    firebaseApp();
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
            .catch((error) => {
                alert("오류 발생!");
                console.log(error);
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