import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import './App.css';
//import About from './Components/About';
function App() {
  const [mode, setmode] = useState('light');
  const toggleMode = () =>{
    if( mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    } 
  }
  return (
    <>
      <Navbar text="textOperator" bgMode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter text to Analyze below" bgMode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
