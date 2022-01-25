import './SignUpPage.css'
import { useState } from 'react'

export default function SignUpPage() {
    const [userName, setUserName] = useState("")
    const [studentId, setStudentId] = useState("")
    const [password, setPassword] = useState("")

    const inputUserName = (evt) => {
        setUserName(evt.target.value)
    }
    const inputStudentId = (evt) => {
        setStudentId(evt.target.value)
    }
    const inputPassword = (evt) => {
        setPassword(evt.target.value)
    }

    const signUp = () => {
        //update database
        //after implementing server...
    }

    return (
        <div className="backGround">
            <div className="signUpBlock">
                <img className="logo" src="dongnuit.png" />
                <div className="inputArea">
                    <div className="inputContainer">
                        <div className="inputTitle">name</div>
                        <input className="inputLine" placeholder='name' value={userName} onChange={(evt) => inputUserName(evt)}/>
                    </div>
                    <div className="inputContainer">
                        <div className="inputTitle">student-id</div>
                        <input className="inputLine" placeholder='student-id' value={studentId} onChange={(evt) => inputStudentId(evt)}/>
                    </div>
                    <div className="inputContainer">
                        <div className="inputTitle text">password</div>
                        <input className="inputLine text" placeholder='password' value={password} onChange={(evt) => inputPassword(evt)}/>
                    </div>
                </div>
                <div className="signUpBtn text" onClick={(evt) => signUp()}>sign-up</div>
            </div>
        </div>
    )
}