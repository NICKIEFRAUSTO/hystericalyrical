import React from "react";
import "./style.css"

function Home(){ 
return(

<header className="subnav-hero-section">
  <h1 className="subnav-hero-headline">Hystericalyrical </h1>
  <h3 className="subnav-hero-headline"> by Frausto, Tomlinson and Vargas</h3>
  <ul className="subnav-hero-subnav" >
  <li><a href="#">Login!</a></li>
  <li><a href="#" className="is-active">PLAY!</a></li>
    <li><a target="_blank" href="https://zurb.com/responsive">Just do it!</a></li>
  </ul>
  
</header>
 )
}

export default Home;