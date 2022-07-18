import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let textNew = text.toUpperCase();
    setText(textNew);
  };
  const handleLowClick = () => {
    let textNew = text.toLowerCase();
    setText(textNew);
  };
  const handleClearClick = () => {
    let textNew = "";
    setText(textNew);
  };
  const handleCapClick = () => {
    let textNew = text[0].toUpperCase() + text.slice(1);
    setText(textNew);
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // setText("New text")
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="my-box"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to UPPERCASE
        </button>{" "}
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>
        Convert to lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>
        Clear
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCapClick}>
        Captalise 
      </button>
      </div> 
      <div className="container my-3">
        <h1>Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
      </div>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
  );
}
