import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    // text = "new text" // Wrong way to change the state
    // setText("new text") // Coreect way to change the state

    const handleUpClick = () => {
        let newText = text.toUpperCase(); 
        setText(newText);
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >Convert to UpperCase</button>
        </div>
    )
} 
