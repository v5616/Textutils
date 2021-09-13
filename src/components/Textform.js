import React from "react";
import { useState } from "react";

export const Textform = (props) => {
  const [text, setText] = useState("Enter your text here");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(
      "Converted to Uppercase","danger"
    )
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(
      "Converted to Lowercase","danger"
    )
  };
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 ">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode ==="dark"?"grey":"white", color:props.mode==="dark"?"white":"black"}}
            id="exampleFormControlTextarea1"
            rows="6"
          ></textarea>
        </div>
      
          <button className="btn btn-primary mx-3" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary" onClick={handleLowClick}>
            Convert to Lowercase
          </button>
          
        
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter text to preview"}</p>
      </div>
    </>
  );
};
