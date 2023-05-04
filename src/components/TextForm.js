//use state

import React , {useState} from 'react'


export default function TextForm(props) {
    const [text,setText] =useState('')          //   <---              initial useState('Enter text here')
    // setText("new text");

    const handelUpClick = () =>{
        // console.log("Upper Case was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case" , "success")
    }
    const handelLoClick = () =>{
        
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case" , "success")
    }
    const handelClearClick = () =>{
        
        let newText ="";
        setText(newText)
        props.showAlert("Text is removed" , "success")
    }
    const handelOnChange = (event) =>{
        // console.log("On change")
        setText(event.target.value)                  // for updating the entered values
    }

    return (
        <>
    <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
        <h1 className='mb-3'>{props.heading}</h1>                   
        <div className="mb-3">
        {/* <label for="myBox" className="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor:props.mode==="dark"?"#13466e":"white" , color:props.mode==="dark"?"white":"#1F7AC1"}} id="myBox" rows="8"></textarea>             {/*   <----  */}
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelUpClick}   >Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handelLoClick}   >Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handelClearClick}   >Clear Text</button>
    
    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
          <h2>Your text Summary</h2>
          <p> {text.split("/\s+/").filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>   
           {/* "/\s+/" it is white spaces */}
          {/* adding filter to fix length  */}
          <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes read </p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>

    </>
     )
   }
        
