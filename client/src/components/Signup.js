import React, { useState } from "react";
import API from "../util/api";


function Signup() {
  const [formObject, setFormObject] = useState({
    username:"", 
    password:""})


  const handleFormSubmit = e => {
    e.preventDefault();
    console.log("username is " + formObject.username);
    console.log("password is " + formObject.password);
  API.saveUser (formObject)
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  return (
    <div>
      <form className="form">{handlesubmit}
          <input
            onChange={handleInputChange}
            <div className="success-message">Success! Thank you for Signingup</div>
            name="username"
            type="text"
            placeholder="UserName"
          />
          <input
            
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="Password"
          />
          
          <button onClick={handleFormSubmit}>Submit</button>
        </form>
    </div>      
  );
}
                        
        

export default Signup;

