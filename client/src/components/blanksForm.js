import React, {useState} from "react";
import "./style.css";
import API from "../util/api";

function Blanksform(){
    const [values, setValues]=useState({
        noun1: "",
        noun2: "",
        adjective: "",
        verb1: "",
        person: "",
        place: "",
        noun3: "",
        adverb: "",
        properNoun: "",
        verb2: ""

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
            <div className="blanks-div">
                <input value = {values.adjective}
                className="div-field"
                placeholder="something like happy, silly, or great"
                name="adjective"/>
            </div>
            <div className="blanks-div">
                <input value = {values.verb1}
                className="div-field"
                placeholder="something like run, ski, or drive"
                name="verb1"/>
            </div>
            <div className="blanks-div">
                <input value = {values.person}
                className="div-field"
                placeholder="something like boy, girl, or dude"
                name="person"/>
            </div>
            <div className="blanks-div">
                <input value = {values.place}
                className="div-field"
                placeholder="something like museum, grocery store, or house"
                name="place"/>
            </div>
            <div className="blanks-div">
                <input value = {values.noun2}
                className="div-field"
                placeholder="something like hairbrush, tv remote, or phone"
                name="noun2"/>
            </div>
            <div className="blanks-div">
                <input value = {values.adverb}
                className="div-field"
                placeholder="something like quickly, slowly, or Lively"
                name="adverb"/>
            </div>
            <div className="blanks-div">
                <input value = {values.properNoun}
                className="div-field"
                placeholder="something like Joey, Samantha, Mr. Burns"
                name="properNoun"/>
            </div>
            <div className="blanks-div">
                <input value = {values.verb2}
                className="div-field"
                placeholder="something like carry, build, or speak"
                name="verb2"/>
            </div>
            <div className="blanks-div">
                <input value = {values.noun3}
                className="div-field"
                placeholder="something like desk, apple, or window"
                name="noun3"/>
            </div>
            <button onClick={handleFormSubmit}>Generate Story</button>
        </form>
        
    </header>
)
}

export default Blanksform;