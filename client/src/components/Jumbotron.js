import React from "react";
import "./style.css"
import Navbar from "./Navbar"

function Jumbotron(){ 
return(

  <div className="jumbotron bg-success" >
  <h1 className="display-4 text-center">Hystericalyrical</h1>
  <p className="lead text-center">A fun MadLibs style game.</p>
  {/* <hr className="my-4" /> */}
  <p></p>
  <Navbar />
</div>

 )
}

export default Jumbotron;