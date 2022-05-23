
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About'
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';
import { Routes ,Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] =  useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1a1a1a';
      showAlert("Dark Mode has been enabled","success");
      // document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success")
      // document.title = "TextUtils - Light Mode";


    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils2" aboutText="About Us" homeText="Home"/> */}
      {/* <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode}/> */}
       {/* <Router> */}
      <Navbar title="TextUtils"  toggleMode={toggleMode} mode={Mode}/> 
      <Alert alert={alert}/>
      <div className="container my-3">
      <Textform showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces..." mode={Mode}/> 
      {/* <About mode={Mode}/>  */}
      {/* <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode}/> */}
       {/* <Routes> */}
      {/* <Route excat path="/" element={<Textform showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces..." mode={Mode}/>} />
     <Route excat path="/About" element={<About mode={Mode}/>} />
      </Routes> */}
     </div>
    {/* </Router>   */}
    </>
  );
}

export default App;
