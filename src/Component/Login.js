import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

let emailInputRef = useRef();
let passwordInputRef=useRef();
let navigate = useNavigate();

useEffect(()=>{
  emailInputRef.current.value=sessionStorage.getItem("email")
  passwordInputRef.current.value=sessionStorage.getItem("password")

  if (sessionStorage.getItem("email") && sessionStorage.getItem("password") ) {
    onLoginClick();
  }
  
},[])

 let onLoginClick=()=>{
        let typedEmail = emailInputRef.current.value;
        let typedPassword = passwordInputRef.current.value;


         if (typedEmail =="sree@gmail.com"&& typedPassword=="sree123") {

          sessionStorage.setItem("email",emailInputRef.current.value)
          sessionStorage.setItem("password",passwordInputRef.current.value)

          navigate("/Dashboard")

         } else {
            alert("Username/Password is in correct")
         }
 }

 


  return (
    <div className="App">
         <form className="fm">
      <h1 style={{backgroundColor:"violet",color:"blue",fontSize:"4rem"}}>Login</h1>
    <div className="dv">
  
        <label className="name">Email</label>
        <input ref={emailInputRef}></input>
        </div>

        <div className="dv">  
        <label className="name">password</label>
        <input ref={passwordInputRef}></input>
        </div>

       
   
   
      <div>
       <button type="button" onClick={()=>{
       onLoginClick()
    }}
       >
        Login
        </button>

      
      </div>
    </form> 
    <br></br>
    <br></br>
    <Link to="Signup">Signup</Link>
   
    </div>
  )
}

export default Login