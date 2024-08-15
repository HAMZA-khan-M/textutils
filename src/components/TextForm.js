    import React, { useState } from 'react';
    export default function TextForm(props) {

      const [text, settext] = useState("enter here text");
    //  text="abc";       wrong
    // settext("hello"); //right way to update
    const handleUpClick=()=>
      {
    //console.log("handleUpClick is click"+ text);
    let newText=text.toUpperCase();
    //console.log(newText);
    settext(newText);
    props.showAlert("converted to UpperCase","success");
    
    }
    const handleLoClick=()=>
      {
    //console.log("handleUpClick is click"+ text);
    let newText=text.toLowerCase();
    //console.log(newText);
    settext(newText);
    props.showAlert("converted to LowerCase","success");


    }

    const handleOnChange=(event)=>
    {
      //console.log("handleOnChange is click");
    settext(event.target.value);//helps in typing in textarea text
    }

      return (
        <>
    <div className='container ' style={{color: props.mode === 'light' ? 'black' :'white' } }>
        <h1 >{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode === 'light' ? 'lightslategrey' :'darkgrey',color: props.mode === 'light' ? 'white' :'black' } }  id="myBox" /*func is used for typing in textarea*/onChange={handleOnChange} value={text} rows="8"></textarea>
      </div>
        <button className="btn btn-primary mx-2" onClick={/*func name*/handleUpClick}>convert to uppercase </button>
        <button className="btn btn-primary mx-2" onClick={/*func name*/handleLoClick}>convert to lowerercase </button>

    </div>

    <div className='container my-3' style={{ color: props.mode === 'light' ? 'black' : 'white' } }>
  <h1>TEXT SUMMARY</h1>
  <p>
    {text.split(" ").filter(Boolean).length} words {text.length} characters
  </p>
  <p>{0.008 * text.split(" ").filter(Boolean).length} minutes to be taken to read</p>
  <h2>PREVIEW OF TEXT</h2>
  <p>{text.length>0?text:"Enter Text To Preview"}</p>
  
</div>
        </>
      )

    }
