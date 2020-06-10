import React,{ useState } from "react";
import Button from "./Button";

import SignUp_Image from "../Images/SignUp_Image.svg";

function SignUp() {
    let [userData,setUserData] = useState({
        userName : "",
        password: "",
        email: ""
    });

    let handleUserNameChange = e => {
        let pattern = /[a-z]{6,}/
        let newVal = e.target.value
        if(newVal.match(pattern)){
            setUserData(prevValue => {
                return {
                    ...prevValue,
                    userName: newVal.toLowerCase()
                }
            })
            e.target.classList.remove("error")
        } else {
            e.target.classList.add("error")
        }
    }

    let handlePasswordChange = e => {
        let pattern = /[a-z]{6,}/
        let newVal = e.target.value
        if(newVal.match(pattern)){
            setUserData(prevValue => {
                return {
                    ...prevValue,
                    password: newVal
                }
            })
            e.target.classList.remove("error")
        } else {
            e.target.classList.add("error")
        }
    }

    let handleCheckPassword = e => {
        let newVal = e.target.value
        if(newVal===userData.password){
            e.target.classList.remove("error")
        } else {
            e.target.classList.add("error")
        }
    }

    let handleClickSignUp = () => {
        if(userData.userName.match(/[a-z]{6,}/) && userData.password.match(/[a-z]{6,}/) && userData.email.match(/@/)){
            localStorage.setItem("userName",userData.userName)
            localStorage.setItem("password",userData.password)
            localStorage.setItem("email",userData.email)
            alert("Succes! Account created")
        }  
    }

    let handleEmailChange = e => {
        let pattern = /@/
        let newEmail = e.target.value;
        if(newEmail.match(pattern)){
            setUserData(prevValue => {
                return {
                    ...prevValue,
                        email : newEmail.toLowerCase()
                }
            })
            e.target.classList.remove("error")
        } else {
            e.target.classList.add("error")
        }
    }

    return (
        <div className="main_signup">
            <div className="signUp">
                <img src={SignUp_Image} alt="SignUp"/>
                <div className="signUp_content">
                    <h1>Signup</h1>
                    <div className="UserName">
                        <label for="userName"><span className="labels">UserName</span></label><br/>
                        <input type="text" placeholder="Type here..." name="username" onChange={handleUserNameChange}/>
                        <p className="disclaimer">* Username should be min 6 character long alphabets</p>
                    </div>
                    <div className="Password">
                        <label for="password"><span className="labels">Password</span></label><br/>
                        <input type="password" placeholder="Type here..." name="password" onChange={handlePasswordChange}/> 
                        <p className="disclaimer">* Password should be min 6 character long alphabets</p>                   
                    </div>
                    <div className="Password">
                        <label for="password_again"><span className="labels">Password Again</span></label><br/>
                        <input type="password" placeholder="Type here..." name="password_again" onChange={handleCheckPassword}/>
                    </div>
                    <div className="UserName">
                        <label for="email"><span className="labels">Email</span></label><br/>
                        <input type="email" placeholder="Type here..." name="email" onChange={handleEmailChange}/>
                        <p className="disclaimer">* A valid email</p>
                    </div>
                    <Button value="Sign Up" onClick={handleClickSignUp}/>
                    
                </div>
            </div>
        </div>
    )
}

export default SignUp;