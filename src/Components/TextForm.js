import React,{useState} from 'react'
export default function TextForm(props) {
  const handelUpClick=()=>{
    // console.log("UpperCase Was  Click"+text);
    let newText=text.toUpperCase();
    setText(newText)
    props. showAlert("convert to UpperCase","Success")
  }

const handelCopy=()=>{
  var text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props. showAlert("Copy Text","Success")
}


 const handelLoClick=()=>{
    // console.log("UpperCase Was  Click"+text);
    let newText=text.toLowerCase();
    setText(newText)
    props. showAlert("convert to LowerCase","Success")
  }
  const handelOnchange=(event)=>{
    // console.log(" onchange");
    setText(event.target.value);
  }
  const handelClClick=()=>{
    // console.log("UpperCase Was  Click"+text);
    let newText=''
    setText(newText)
    props. showAlert("clear Text","Success")
   }
  const[text,setText]=useState("Enter text here");
  const handelExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(""))
    props. showAlert("Remove Extra Spaces","Success")
  }

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "file.txt";
    document.body.appendChild(element); 
    element.click();
    props. showAlert("Download SuccessFull","Success")
  }

  const myStyle = {
    color: "white",
    backgroundColor: "#6f42c175"};
  return (
    <>
    <div className='container'>
      <h2>{props.heading}</h2>
      <div className="mb-3">
      <textarea className="form-control" style={myStyle} value={text} onChange={handelOnchange}  id="myBox" rows="8"></textarea></div>
      <button className="btn btn-primary mx-1" onClick={handelUpClick}>Convrt To UpperCase</button> 
      <button className="btn btn-primary mx-1" onClick={handelLoClick}>Convrt To LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={handelClClick}>Clear  Text</button> 
      <button className="btn btn-primary mx-1" onClick={handelCopy}>Copy  Text</button> 
      <button className="btn btn-primary mx-1" onClick={handelExtraSpace}>ExtraSpace</button> 
      <button className="btn btn-primary mx-1"  onClick={handleDownload}>Download</button>
      
  </div>
  <div className='container my-2'>
    <h3>Text Summary</h3>
    <p>{text.split(" ").length}words and {text.length} Charactors</p>
    <p>{0.008* text.split(" ").length}Minutes</p>
    <h3>Preview</h3>
    <p>{text.length>0?text>text:"Enter somthing in the textbox above to  preview it here"}</p>
  </div>
</>

  )
}
