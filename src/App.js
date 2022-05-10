import './App.css';
import React, { useState } from "react";
import NavBar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
      
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  let ToggleMode = ()=>{
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor="#112437";
      showAlert("success", "Dark mode applied successfully!")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("success", "Light mode applied successfully!")
    }

  }
  
  return (
    <>
    <NavBar title ="TextUtils" aboutText = "About TextUtils" mode = {mode} toggleMode = {ToggleMode}/>
    <Alert alert = {alert} />
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze" mode = {mode} showAlert = {showAlert}/>
    </div>
    </>
  );
}

export default App;
