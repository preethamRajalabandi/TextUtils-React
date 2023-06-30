import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");
    // text = "new text" // Wrong way to change the state
    // setText("new text") // Coreect way to change the state

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick} >Convert to LowerCase</button>
            </div>
            <div className="container my-2">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
} 
