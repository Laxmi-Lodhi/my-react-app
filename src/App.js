import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
function App() {
  const [mode,setMode]=useState('dark');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{setAlert(null);},1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#86ace3';
    showAlert("Dark mode has been enabled","success");
  }else{
    setMode('light');
    document.body.style.backgroundColor='light';
    showAlert("Light mode has been enabled","success");
  }
}
return (
    <>
  {/* <Navbar title="TextApp"  aboutText="AboutUs"  /> */}
  {/* <h2>Hello Dear {name}</h2> */}

  <Navbar mode={mode} toggleMode={toggleMode} />
  {/* use useState */}
  <Alert alert={alert} />
  <div className='container  my-3'>
 

 </div>
  <TextForm  showAlert={showAlert} heading ="Enter the text to analyze"  mode={mode} />
  <About />
  
    </>
  );
}
export default App;


