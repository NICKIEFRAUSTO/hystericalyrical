import React, { useState } from "react";
import API from "../util/api";

function Signup() {
  const [formObject, setFormObject] = useState({
    username: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("username is " + formObject.username);
    console.log("password is " + formObject.password);
    API.saveUser(formObject);
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  return (
    <>

  <form>

  <div className="form-group row">
  {submitted ? 
  <div className= "success-message">
  Success! Thank you for signing up.
  </div>: null }

      <label 
        for="inputEmail3" 
        className="col-sm-2 col-form-label">
        UserName
      </label>

      <div className="col-sm-10">
        <input 
          onChange={handleInputChange} 
          name="username"
          type="text" 
          className="form-control" 
          id="inputUserName"
          />
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
        onChange={handleInputChange} 
        name="password"
        type="password" 
        className="form-control" 
        id="inputPassword3"
        />
      </div>
  </div>

  <div className="form-group row">
      <div className="col-sm-10">
          <button onClick={handleFormSubmit} 
          type="submit" 
          className="btn btn-warning text-success">
          <strong>Submit</strong>
          </button>
      </div>
  </div>

</form>

</ >

  );
}

export default Signup;
