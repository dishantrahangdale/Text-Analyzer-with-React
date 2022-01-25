import React, {useState} from 'react';

export default function TextForm(props){

    const handleUpClick = ()=>{
        setText("You have clicked on handle up click");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const handlelowClick = ()=>{
        setText("You have clicked on handle up click");
        let newText = text.toLowerCase();
        setText(newText);
    }
    
    const [text, setText] = useState('Enter Text here');
    // text = "new value"    //wrong method
    // setText("new value"); //correct
  return (
      <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"></label>
                <textarea onChange={handleOnChange} id="myBox" cols="30" rows="10" value={text} className="form-control"></textarea>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary mx-2">Convert to upper Case</button>
            <button onClick={handlelowClick} className="btn btn-primary mx-2">Convert to lower Case</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p> {text.split(" ").length} words and {text.length} characters </p>
            <p>{0.008* text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
    )
}
 