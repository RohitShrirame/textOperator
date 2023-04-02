import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');
  
  const handleOnChange = (event) =>{
    // console.log("in change");
    setText(event.target.value);
  }
  const handleOnClickToUpper = () =>{
    // console.log("in click")
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnClickToLower = () =>{
    // console.log("in click")
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnClickToClear = () =>{
    setText('');
  }
  const handleOnClickToCopy = () =>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleOnClickToRemoveSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  return (
    <>
      <div className='container' style={{color:props.bgMode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" style={{backgroundColor
          :props.bgMode==='dark'?'grey':'white',color:props.bgMode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleOnClickToUpper}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleOnClickToLower}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleOnClickToClear}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleOnClickToCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleOnClickToRemoveSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color:props.bgMode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.lenght>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  )
}
