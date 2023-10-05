import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('----------------------------');

  const upscale = () => {
    console.log("Button is Working (upscale)");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("Text area function is Working");
    setText(event.target.value);
  };

  return (
    <div>
      <h1>{props.heading}</h1>

      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
      </div>

      <div>
        <button className="btn btn-primary" onClick={upscale}>Click To Uppercase</button>
      </div>
    </div>
  );
}
