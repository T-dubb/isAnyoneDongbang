import '../styles/SignUp.css'
import { useState } from 'react'

function SignUp() {
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

    const signUp = () => {
        //update database
        //after implementing server...
    }

    return (
        <div className="signUpBackGround">
            <div className="signUpBlock">
                <img className="logo" src="dongnuit.png" />
                <div className="inputArea">
                    <div className="inputContainer">
                        <div className="inputTitle">이름</div>
                        <input className="inputLine" placeholder='이름' value={userName} onChange={(evt) => inputUserName(evt)}/>
                    </div>
                    <div className="inputContainer">
                        <div className="inputTitle">학번</div>
                        <input className="inputLine" placeholder='학번' value={studentId} onChange={(evt) => inputStudentId(evt)}/>
                    </div>
                    <div className="inputContainer">
                        <div className="inputTitle text">비밀번호</div>
                        <input className="inputLine text" placeholder='비밀번호' value={password} onChange={(evt) => inputPassword(evt)}/>
                    </div>
                    <div className="inputContainer">
                        <div className="inputTitle text">친목조</div>
                        <input className="inputLine text" placeholder='친목조' value={password} onChange={(evt) => inputPassword(evt)}/>
                    </div>
                </div>
                <div className="signUpBtn text" onClick={(evt) => signUp()}>회원가입</div>
            </div>
        </div>
    )
}

export default SignUp;