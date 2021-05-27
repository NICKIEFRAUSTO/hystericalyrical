import React, {useState} from "react";
import "./style.css";
import API from "../util/api";

function Blanksform(){
    const [values, setValues]=useState({
        blank:""
         });

    const handleFormSubmit = e =>{
        e.preventDefault();
        console.log(values);
        API.saveBlanks(values)
    };

    function handleInputChange(event){
        const {name, value} = event .target;
        setValues({...values,[name]:value})
    };

    };
return(
    <header>
        <h1 class="subnav-hero-headline">Hystericalyrical<br></br><small>by: Frausto, Tomlinson, and Vargas</small></h1>
        <ul class="subnav-hero-subnav">
        </ul>
         <form>

            <div className="blanks-div">
                <input value = {values.noun1}
                className="div-field"
                placeholder="something like dog, cat, or bus"
                name="noun1"/>
            </div>
            <button onClick={handleFormSubmit}>Generate Story</button>
        </form>
        
    </header>
)
}

export default Blanksform;