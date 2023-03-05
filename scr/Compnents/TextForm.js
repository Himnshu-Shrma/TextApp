import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('');
    // const myStyle3={font:"Verdana, Geneva, Tahoma, sans-serif"}
    const OnUpperCase=()=>{

        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","info")
    }
    // const ChangefontType=()=>{
    //     let newText=document.getElementById("exampleFormControlTextarea1");
    //     let n=text.style.textEmphasis(newText)
    //     console.log(n)
    //     // setText(newText)
    // }
    const removeExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces has been removed","success")
    }
    const OnLowerCase=()=>{

        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","info")
    }
    const onCopy=()=>{
        var newText=document.getElementById("exampleFormControlTextarea1")
        newText.select()
        navigator.clipboard.writeText(newText)
    }
    const onHandleChange=(event)=>{
        setText(event.target.value)
    }
    const onClearText=()=>{
        let newText=""
        setText(newText)
        props.showAlert("Text has been Cleared","warning")
    }
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">  
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'light' ? 'white' : '#e5e4e7'}} onChange={onHandleChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} type="button" onClick={OnUpperCase} className="btn btn-info mx-1 my-1">Upper Case</button>
            <button disabled={text.length===0} type="button" onClick={OnLowerCase} className="btn btn-secondary mx-1 my-1">Lower Case</button>
            <button disabled={text.length===0} type="button" onClick={onClearText} className="btn btn-danger mx-1 my-1">Clear Text</button>
            <button disabled={text.length===0} type="button" onClick={onCopy} className="btn btn-primary mx-1 my-1">Copy Text</button>
            <button disabled={text.length===0} type="button" onClick={removeExtraSpace} className="btn btn-info mx-1 my-1">Remove Extra Space</button>
            {/* <button type="button" onClick={ChangefontType} className="btn btn-primary mx-1">Change Font</button> */}
        </div>
        <div className='container my-3'>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((e)=>{return e.length!==0}).length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}
