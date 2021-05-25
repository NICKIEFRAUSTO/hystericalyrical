import React from "react";
import "./login.css";
 
function Registration(){
  return( 

<div class="form-registration">
<figure class="form-registration-img">
  <img src="../public/hystericalcolorful.jpg" alt="colorful artwork" />
  <figcaption class="form-registration-img-caption">Experience everything Yeti+ has to offer through Yeti e-shoppe and our related apps.</figcaption>
</figure>

<form class="form-registration-group" action="">
  <input class="form-registration-input"  type="email" placeholder="Your email" />
  <input class="form-registration-submit-button" type="submit" value="Continue" />
  <p class="or-divider"><span>or</span></p>
  
  <p class="form-registration-member-signin">Already a member? <a href="#">Sign in</a></p>
  <p class="form-registration-terms"><a href="#">Terms &amp; Conditions</a>|<a href="#">Privacy</a></p>
</form>

</div>

  );
 }

export default Registration;