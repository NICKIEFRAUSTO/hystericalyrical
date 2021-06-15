import React from "react";
import "./style.css"
import Navbar from "./Navbar"

function Jumbotron(){ 
return(

  <div className="jumbotron bg-success" >
  <h1 className="display-4 text-center">Hystericalyrical</h1>
  <p className="lead text-center">A fun story building game.</p>
  
  <p></p>
  <Navbar />
</div>

 )
}

export default Jumbotron;