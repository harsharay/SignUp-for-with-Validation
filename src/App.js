import React,{ useState } from 'react';
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import './App.css';

function App() {
  let [state,setState] = useState({
    signedUp: false,
    loggedIn: false,
  })
  let [userData,setUserData] = useState({
    userName: "",
    password: ""
  })

  let handleClickSignUp = () => {
    if(!userData.username===null && userData.password === ""){
      setState(prevValue => {
        return {
          ...prevValue,
          signedUp: true
        }
      })
    }
  }

  if(!state.signedUp){
    return(
      <>
        <SignUp />
      </>
    )
  } else {
    return(
      <>
        (<h1>Login</h1>
        <Login />)
      </>
    )
  }
  
  
}

export default App;
