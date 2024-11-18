import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import React, { useState } from 'react';

import {BrowserRouter as Router, Route,Routes} from "react-router-dom"

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
        setMode("dark ");
        document.body.style.backgroundColor = "#042743"
        showAlert("Dark mode has been enabled", "success");
        document.title = "TextUtils - Dark Mode";
      //   setInterval(() => {
      //     document.title = "TextUtils  is Amazing";
      // }, 2000);
      // setInterval(() => {
      //     document.title = "Install TextUtils";
      // }, 1500);
    }
    else {
        setMode("light");
        document.body.style.backgroundColor = "white"
        showAlert("Light mode has been enabled", "success");
        document.title = "TextUtils - Light Mode";
    }
}

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    })
  
      setTimeout(() => {
        setAlert(null)
    }, 1500);
  }

  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} aboutText="About textUtils" toggleMode={toggleMode} />
    <Alert alert= {alert}/>
    <div className="container my-3">
    <Routes>
      <Route path= "/about" element={<About />} />
      <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
    </Routes>
    </div>
    </Router> 
    </>
  );
}

export default App;