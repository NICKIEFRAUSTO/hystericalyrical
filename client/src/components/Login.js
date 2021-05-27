import React, { Component, useState } from "react";
import "./login.css";

function Login(){ 
  Const [values, setValues]= useState({
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
  setSubmitted(true);
}

  return(
    <div className= "form-container">
      <form className="login-form">{handleSubmit}        
      <input 
        onChange={handleUserNameInputChange}
        value= {values.username}
        className="form-field"
        placeholder= "username"
        name="username"/>

        <input
        onChange={handlePasswordInputChange} 
        value= {values.username}
        className="form-field"
        placeholder= "password"
        name="password"/>
      </form>
    </div>
  )
}

export default Login;

