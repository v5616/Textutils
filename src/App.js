import React from "react";

import About from "./components/About";
import Header from "./components/Header";
import { Textform }  from "./components/Textform";
import { useState } from "react";
import  Alert  from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

global.jQuery = require('jquery');
require('bootstrap');

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
 const togglemode=()=>{
    if (mode=== 'light') {
      setMode("dark");
      showAlert("Dark mode is on", "success")
      document.body.style.backgroundColor = "#042743"
    }
    else {
      setMode("light");
      showAlert("Dark mode is off", "primary")
      document.body.style.backgroundColor = "white"
    }
  }
 const greenmode=()=>{
    if (mode=== 'light') {
      setMode("dark");
      showAlert("Dark mode is on", "success")
      document.body.style.backgroundColor = "green"
    }
    else {
      setMode("light");
      showAlert("Dark mode is off", "primary")
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
  <Router>
  <Header title="TextUtils" mode={mode} togglemode={togglemode} greenmode={greenmode}/>
  <Alert alert={alert}/>

  <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
         
          <Route exact path="/">
          <Textform showAlert={showAlert} heading="Enter your text here"  mode={mode} />
          </Route>
        </Switch>
  </Router>
 
  
  </>
  );
}

export default App;
