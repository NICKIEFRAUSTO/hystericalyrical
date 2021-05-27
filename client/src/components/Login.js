import React, { Component, useState } from "react";
import "./login.css";

function Login(){ 
  Const [values, setValues]= useState({
    username: "",
    password: "",
  })





  return(
    <div className= "form-container">
      <form className="login-form">
        <input 
        value= {values.username}
        className="form-field"
        placeholder= "username"
        name="username"/>
      </form>
    </div>
  )
}


// class Form extends Component {
//   // Setting the component's initial state
//   state = {
//     userName: "",
//     password: ""
    
//   };

//   handleInputChange = event => {
//     // Getting the value and name of the input which triggered the change
//     let value = event.target.value;
//     const name = event.target.name;

//     if (name === "password") {
//       value = value.substring(0, 15);
//     }
//     // Updating the input's state
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     event.preventDefault();
//     if (!this.state.firstName || !this.state.lastName) {
//       alert("Please enter a username!");
//     } else if (this.state.password.length < 6) {
//       alert(
//         `Choose a more secure password ${this.state.userName}`
//       );
//     } else {
//       alert(`Hello ${this.state.userName} `);
//     }

//     this.setState({
//       userName: "",
//       password: "",
      
//     });
//   };

//   render() {
//     // Notice how each input has a `value`, `name`, and `onChange` prop
//     return (
//       <div>
//         <p>
//           Hello {this.state.userName} 
//         </p>
//         <form className="form">
//           <input
//             value={this.state.userName}
//             name="userName"
//             onChange={this.handleInputChange}
//             type="text"
//             placeholder="UserName"
//           />
//           <input
//             value={this.state.password}
//             name="password"
//             onChange={this.handleInputChange}
//             type="password"
//             placeholder="Password"
//           />
          
//           <button onClick={this.handleFormSubmit}>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Form;