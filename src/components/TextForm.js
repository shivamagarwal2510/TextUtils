import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState();
    const handleOnChange = (event)=>{
        console.log("Handle on change called.")
        setText(event.target.value)
    }
    const handleOnClick = ()=>{
        console.log("Handle on click called.")
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("success", "Converted to UpperCase")
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("success", "Copied to Clipboard")
    }
    // console.log({count});
    return (
        <>
        <div>
            <div className="mb-3" style = {{color: props.mode==='dark'?"white":"black"}}>
                <h1 >{props.heading}</h1>
                <textarea
                    style = {{color: props.mode==='dark'?"white":"black", backgroundColor:props.mode==='dark'?"#556a7f":"white"}}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="8"
                    value={text}
                    onChange = {handleOnChange}
                    
                ></textarea>
            </div>
                <button className="btn btn-primary mx-2" onClick={handleOnClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        </div>
        </>
    );
}
