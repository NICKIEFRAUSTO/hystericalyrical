import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar(){ 
return(

  
  <div>
    <ul className="nav bg-warning justify-content-center">
    <li className="nav-item">
        <Link to="/Signup" className="nav-link text-success" ><strong>Create Account</strong></Link>
    </li>
    <li className="nav-item">
        <Link to="/Login" className="nav-link text-success active" ><strong>LogIn to Play</strong></Link>
    </li>
    
    </ul>
  </div>


 )
}

export default Navbar;

