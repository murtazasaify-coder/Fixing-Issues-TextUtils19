import React, { useState } from 'react'

export default function Form(props) {
    const  handleonclick=()=>{
        // console.log("before" +text);
        let textlocal=text.toUpperCase();
        settext(textlocal);
        props.showAlert('Converted to Upper Case','success');
        
    }
    const  handleonclickLower=()=>{
        let textlocal=text.toLowerCase();
        settext(textlocal);
        props.showAlert('Converted to Lower Case','success');
   
    }
    const  handleonclickclear=()=>{
        let textlocal='';
        settext(textlocal);
        props.showAlert('Cleared Everything','success');
   
    }
    const handleonclickCopy=()=>{
       let text=document.getElementById("mybox");
       text.select();
       document.getSelection().removeAllRanges();
       navigator.clipboard.writeText(text.value);
    }
     
   const handleonclickRemove=()=>{
      let newtext=text.split(/[ ]+/);
      settext(newtext.join(" "));
    }
    const  handlechange=(event)=>{
        settext(event.target.value);
        
    }
    const [text, settext] = useState("Welcome to hakimi Provision");
  return (
    
    <div>
       <div className="container">
         <div >
           <h1 className="mb-2">{props.heading}</h1>
         </div>
         <div className="mb-3">
           <textarea className="form-control" id="mybox" style={{backgroundColor:props.mode==='light'?'white':'#067a97', color:props.mode==='light'?'black':'white'}} onChange={handlechange} value={text} rows="6"></textarea>
         </div>
            <button disabled={text.length===0}className="btn btn-primary mx-2 my-1"  onClick={handleonclick}>Convert to Upper Case</button>
            <button disabled={text.length===0}className="btn btn-primary mx-2 my-1"  onClick={handleonclickLower}>Convert to Lower Case</button>
            <button disabled={text.length===0}className="btn btn-primary mx-2 my-1"  onClick={handleonclickclear}>Clear Text</button>
            <button disabled={text.length===0}className="btn btn-primary mx-2 my-1"  onClick={handleonclickCopy}>Copy Text</button>
            <button disabled={text.length===0}className="btn btn-primary mx-2 my-1"  onClick={handleonclickRemove}>Remove Extra Space </button>
        </div> 
        <div className="container my-3">
            <h2 >Your Text Summary</h2>
            <p>{text.split(" ").filter((element)=>{ return element.length!==0}).length} words and {text.length} characters </p>
            <p>{0.008*text.split(" ").filter((element)=>{ return element.length!==0}).length} time to read </p>
        </div>
        <div className="container my-3">
            <h2>Preview</h2>
            <p>{text.length===0?'nothing to preview':text}</p>
        </div>
    </div>
  )
  }
