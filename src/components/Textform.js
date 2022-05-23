// import { useState } from "react";
import React,  { useState }  from "react";


export default function Textform(props) {
    const handleUppercaseClick = () =>{
        // console.log("UpperCase was Clicked "+ Text);
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [Text, setText] = useState('Enter Text here');
    // setText("Set Text");

    const handleLowercaseClick = () =>{
      let newText1 = Text.toLowerCase();
      setText(newText1);
      props.showAlert("Converted to lower Case","success");

    }
    const handleCapatalize = () => {
      let firstChar = Text.charAt(0);
      let newText = firstChar.toUpperCase();
      setText(newText+Text.slice(1));
      props.showAlert("Converted to Sentence case","success");

    }
    const handleExtraSpaces=() =>{
      let newText = Text.replace(/\s+/g,' ').trim();
      setText(newText);
      props.showAlert("Extra spaces removed","success");

    }
    const ClearSpace = () =>{
      let newText = "";
      setText(newText);
      props.showAlert("Text Cleared","success");

    }
    const handleCapatalizeClick = () => {
      let newText = Text.toLowerCase().split(' ').map(function(word){
        return(word.charAt(0).toUpperCase() + word.slice(1));
      }).join(" ");
      setText(newText);
      props.showAlert("Converted to Captialize Case","success");


    }
    const handleAlternatingClick = () =>{
      let newText = Text.split(" ").map(function(word){
        if(word.toUpperCase() === word){
          return word.toLowerCase();
        }else{
          return word.toUpperCase();
        }
      }).join(" ");
      setText(newText);
      props.showAlert("Converted to aLtErNaTiNg CaSe","success");

    }

    const handleCopy = () => {
      console.log("I am copy");
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value) ;
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to clipboard","success");

    }
    return (
        <>
    <div className="container" style={{color:props.mode==='light'?'black':'white' }}>
        <h2 className="mb-3"><center>{props.heading}</center></h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          style={{backgroundColor:props.mode==='light'?'white':'rgb(40, 40, 40)',color:props.mode==='dark'?'white':'black' }}
          rows="9"
          value={Text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUppercaseClick} >UPPERCASE</button>
      <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowercaseClick} >lowercase</button>
      <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapatalizeClick} >Capatalize Case</button>
      <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapatalize} >Sentence Case</button>
      <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleAlternatingClick} >aLtErNaTiNg CaSe</button>
      <button disabled={Text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCopy} >Copy Text</button>
      <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove extra spaces</button>
      <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={ClearSpace} >Clear Text</button>




    </div>
        <div className="container my-3 " style={{color:props.mode==='light'?'black':'white'}}>
            <h3>Your Text Summary</h3>
            <p>{Text.split(" ").filter((element) => {return element.length !== 0}).length} words and {Text.length} characters</p>
            <p> {0.008 * Text.split(" ").filter((element)=> {return element.length!==0}).length} mintues read time </p>
            <h3>Preview</h3>
            <p>{Text.length>0?Text:'Nothing to preview!'}</p>
        </div>
    </>
  );
}
