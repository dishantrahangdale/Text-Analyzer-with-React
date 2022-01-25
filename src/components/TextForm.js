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
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
    }
    const handleTitleCase = () => {
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(" "));
    }
    const handleReverse = (event) => {
        /* Convert string to array*/
        let strArr = text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);
    };
    const handleExtraSpaces = ()=>{
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText)
    };
    const [text, setText] = useState('Enter Text here');
    // text = "new value"    //wrong method
    // setText("new value"); //correct
    
    const [myStyle,setMyStyle] = useState({
        color : 'black',
        backgroundColor : 'white',
      })
      const [btnText,setBtnText] = useState("Dark Mode")
      const toggleStyle = (event)=>{
        if(myStyle.color=='black'){
          console.log("clicked");
          setMyStyle({
            color : 'white',
            backgroundColor : 'black',
          })
          document.body.style.backgroundColor = 'black'
          document.body.style.color = 'white'
          setBtnText("Light Mode");
        }
        else{
            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'
          setMyStyle({
            color : 'black',
            backgroundColor : 'white'
          })
          setBtnText("Dark Mode");
        }
        
      }
    

  return (
      <>
        <div className='container' >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"></label>
                <textarea onChange={handleOnChange} style={myStyle} id="myBox" cols="30" rows="10" value={text} className="form-control"></textarea>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary mx-2 my-2">Convert to upper Case</button>
            <button onClick={handlelowClick} className="btn btn-primary mx-2 my-2">Convert to lower Case</button>
            <button onClick={handleClearClick} className="btn btn-primary mx-2 my-2">Clear Text</button>
            <button onClick={handleTitleCase} className="btn btn-primary mx-2 my-2">Title Text</button>
            <button onClick={handleReverse} className="btn btn-primary mx-2 my-2">Reverse Text</button>
            <button onClick={handleExtraSpaces} className="btn btn-primary mx-2 my-2">Remove Extra Spaces</button>
            <button onClick={toggleStyle} className="btn btn-primary mx-2 my-2">{btnText}</button>
            
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
 