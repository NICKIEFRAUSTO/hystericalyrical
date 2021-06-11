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
  <>

  <form>{handleSubmit}

  <div className="form-group row">
      <label 
        for="inputEmail3" 
        className="col-sm-2 col-form-label">
        username
      </label>

      <div className="col-sm-10">
        <input 
          onChange={handleUserNameInputChange} 
          value ={values.username}
          type="text" 
          className="form-control" 
          id="inputUserName"/>
      </div>
  </div>

  <div className="form-group row">
      <label 
        for="inputPassword3" 
        className="col-sm-2 col-form-label">
        Password
      </label>

      <div className="col-sm-10">
        <input 
        onChange={handlePasswordInputChange} 
        value={values.password}
        type="password" 
        className="form-control" 
        id="inputPassword3"/>
      </div>
  </div>

  <div className="form-group row">
      <div className="col-sm-10">
          <button onClick={handleSubmit} 
          type="submit" 
          className="btn btn-warning text-success">
          <strong>Sign in</strong>
          </button>
      </div>
  </div>

</form>

</ >

  )
}

export default Login;


    
