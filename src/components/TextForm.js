import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");
    // text = "new text" // Wrong way to change the state
    // setText("new text") // Coreect way to change the state

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success")
    }

    const handleClearText = () => {
        setText("");
        props.showAlert("Text Cleared", "success")
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleCopy = () => {
        const copyText = document.getElementById("myBox")
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success")
        text.length > 0 ? props.showAlert("Copied to Clipboard!", "success") : props.showAlert("No text to copy, Please add some text!", "warning")
    }

    const handleRemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success")
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#13466e', color: props.mode === 'dark' ? 'white' : 'black' }} ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick} >Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText} >Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpaces} >Remove Extra Spaces</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes to read</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
} 
