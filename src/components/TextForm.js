import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }

    const handleLowClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");

    }

    const handleClearClick = () => {
        // console.log("Uppercase was clicked");
        let newText = '';
        setText(newText)
        props.showAlert("Clear the data!","success");
    }

    const handleCapitalizeClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text[0].toUpperCase() + text.substring(1);
        // console.log(newText);
        setText(newText);

    }

    

    const handleCopy = ()=>{
        // var text = document.getElementById('myBox');
        // text.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard","success");
    }
   

    const handleOnChange = (event)=>{
        // console.log("Handle on change");
        setText(event.target.value)
    }


    const [text,setText] = useState('');
    return (
        <>
            <div className='container' style={{color:props.mode==='light'?'#042743':'white'}}>
                {/* to use javascript we use on curly brackets and to use objects in that we use two curly brackets */}
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* we have used OnChange method so that we enter the text there */}
                <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'#13466e',color:props.mode==='light'?"black":"white"}} onChange={handleOnChange} id="myBox" value={text} rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick} disabled={text.length===0}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleLowClick} disabled={text.length===0}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleClearClick} disabled={text.length===0}>Clear</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleCapitalizeClick} disabled={text.length===0}>Convert to Capitalize</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleCopy} disabled={text.length===0}>Copy Text</button>
           


        </div>

            <div className='container my-3' style={{color:props.mode==='light'?'#042743':'white'}}>
                <h2>Your Text Summary</h2>
                <p> {text.trim().split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                {/* <p >${countWord(text)}</p> */}
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read the text</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>
    )
}
