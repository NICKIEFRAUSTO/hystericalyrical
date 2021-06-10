import React, { useState } from "react";
// import "./login.css";

function Login(){ 
  const [values, setValues]= useState({
    username: "",
    password: "",
  })

const handleUserNameInputChange = (event)=>{
  setValues({...values, username: event.target.value})
}
const handlePasswordInputChange = (event)=>{
  setValues({...values, password: event.target.value})
}
const handleSubmit=(event)=>{
  event.preventDefault();
  
}

  return(
    <div className= "form-container">
      <form className="login-form">{handleSubmit}        
      <input 
        onChange={handleUserNameInputChange}
       
        className="form-field"
        placeholder= "username"
        name="username"/>

        <input
        onChange={handlePasswordInputChange} 
        
        className="form-field"
        placeholder= "password"
        type= "password"
        name="password"/>
      </form>
    </div>
  )
}

export default Login;

