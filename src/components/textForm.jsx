
import React, {useState} from "react";
import '../App.css';

export default function TextForm({
   btnValue="Enable Dark mode",
   heading="This is the sample form",
   textup="convert to UpperCase",
   ...props
}){
const handleUpClicks=(event)=>{
    event.preventDefault();
    if(text!==''){
    console.log("uppercase was clicked" + text);
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("alert-info","Convert to Uppercase   ","Text is converted into Uppercase")
    }
    else{
      props.showAlert("alert-danger","Input field can't be empty   ","Text is not converted into Uppercase")
    }
} 
const handleLoClicks=(event)=>{
  
    event.preventDefault();
    if(text!==''){console.log("Lowercase was clicked" + text);
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("alert-info","Convert to Lowercase   ","Text is converted into Lowercase")}
    else{
      props.showAlert("alert-danger","Input field can't be empty   ","Text is not converted into Uppercase")
    }
    
} 
const handleClearClicks=(event)=>{
    event.preventDefault();
    if(text!==''){
       console.log("ClearText was clicked" + text);
    let newText= " ";
    setText(newText);
    props.showAlert("alert-info","Clear the text  ","Text is clear")
    }
    else{
      props.showAlert("alert-danger","Input field can't be empty   ","Text is not converted into Uppercase")
    }
   
} 
const handleOnChanges=(event)=>{
    console.log("On change");
    setText(event.target.value);
}
const handleRemoveSpsClicks=(e)=>{
    e.preventDefault();
    if(text!==''){let newtxt= text.split(" ").filter(word=>word.length!==0).join(" ");
    setText(newtxt);
    props.showAlert("alert-info","Clear Extra Space  ","Text Extra space  is clear")}
    else{
      props.showAlert("alert-danger","Input field can't be empty   ","Text is not converted into Uppercase")
    }
  }
  const handleCopyTextClicks=(e)=>{
    e.preventDefault();
    let newtxt= text.split(" ").filter(word=>word.length!==0).join(" ");
     
     if(text!==''){
     navigator.clipboard.writeText(newtxt)
      props.showAlert("alert-info","Text copied  ","Text Copied")
    }
    else{
       props.showAlert("alert-danger","Empty text cant be copied  ","Not Copied")
    };
  }

// let toggleDarkModefun=(e)=>{
// let col=document.querySelectorAll(".btn")
// e.preventDefault()
//  if(myStyle.backgroundColor =='black'){
//     setMyStyle({
//      backgroundColor:'white',
//      color:'black'
//     })
//     setMyBtnText('Enable Dark Mode');
//      Array.from(col).forEach((element)=>{
//     element.style.backgroundColor='#0d6efd';
//     element.style.color='white';
//     })
//  }
//  else{
//     setMyStyle({
//      backgroundColor:'black',
//      color:'white'
//     })
//     setMyBtnText('Disable Dark Mode');
//     Array.from(col).forEach((element)=>{
//     element.style.backgroundColor='white';
//     element.style.color='black';
//     })
//  }
// }



// const [myBtnText,setMyBtnText]= useState('Enable Dark mode');
const [text,setText]= useState('');
    return(
        <>
        
        <div style={{ ...props.stylemodi, minHeight: "100vh", marginTop:"100px" }}>
        <div className="container-fluid" style={props.stylemodi}>
         <form className="p-3">
      <div className="mb-3">
        <h1>{heading}</h1>
        {/* <label htmlFor="comments" className="form-label">Message</label> */}
        <textarea className="form-control" id="comments" rows="8" placeholder="Type here..." value={text} onChange={handleOnChanges} style={props.Stylemodi} ></textarea>
      </div>
      <button  className={`${props.mode==='light'? 'btn btn-outline-primary' :'btn btn-outline-light'} mx-2 my-1`} onClick={handleUpClicks}>{textup}</button> 
      <button  className={`${props.mode==='light'? 'btn btn-outline-primary' :'btn btn-outline-light'} mx-2 my-1`} onClick={handleLoClicks} >Lower Case</button>
      <button  className={`${props.mode==='light'? 'btn btn-outline-primary' :'btn btn-outline-light'} mx-2 my-1`} onClick={handleClearClicks} >Clear The Text</button>
      <button  className={`${props.mode==='light'? 'btn btn-outline-primary' :'btn btn-outline-light'} mx-2 my-1`} onClick={handleRemoveSpsClicks} >Remove Extra Space</button>
      <button  className={`${props.mode==='light'? 'btn btn-outline-primary' :'btn btn-outline-light'} mx-2 my-1`} onClick={handleCopyTextClicks} >Copy Text</button>
      {/* <button  className="btn btn-primary" onClick={props.modefun}>{myBtnText} </button> */}
    </form>
    </div>
    <div className="container-fluid">
         <form className="p-3">
      <div className="mb-3">
        <h1>Preview </h1>
        <div className="row">
            <div className="lttr col-4 row" >
            <h6>Words </h6>
            <p className="letters">{text.split(" ").filter((element)=>{return element.length!==0}).length}</p></div>
            <div className="wrds col-4 row">
            <h6>Letters </h6>
            <p className="words">{text.length}</p></div> 
            <div className="wrds col-4 row">
            <h6>Minutes Read </h6>
            <p className="words-read">{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}</p></div> 
        </div>
        {/* <label htmlFor="comments" className="form-label">Message</label> */}
        <p className="Preview" id="comments-preview" style={props.stylemodi}>{text}</p>
      </div>
    </form>
    </div>
    </div>
    </>
    )
}

