import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setInterval(() => {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been Enabled", "success")
      document.title("Text App - Dark Mode")

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been Disabled", "success")
      document.title("Text App - Light Mode")
    }
  }
  return (
    <>
      
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      
        
{/*         
      <TextForm heading="Enter The Text To Analyse" mode={mode} showAlert={showAlert} />
        
        
      <About mode={mode} /> */}
      <Router>
        <Routes>
        <Route exact path='/' element={<div><div className='container'>
          <TextForm heading="Enter The Text To Analyse" mode={mode} showAlert={showAlert} />
        </div></div>} />
        <Route exact path='about' element={<div><div className='container'>
          <About mode={mode} />
        </div></div>} />
        
        </Routes>
      </Router>
 
        
      


    </>
  );
}

export default App;
