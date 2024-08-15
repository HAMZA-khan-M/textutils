import { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

  const toggleMode=()=>
    {
     if(mode==="light")
       {
          setmode("dark")
          document.body.style.backgroundColor= '#042743   ';
         // document.title ="Textutils DARKMODE ";
          showAlert("Darkmode is enabled","success");
      //    setInterval(()=> {document.title ="Textutils is Amazing ";},1000  );
       //   setInterval(()=> {document.title ="INstall Textutils";},2000  );

        }else{ setmode("light")
          document.body.style.backgroundColor= 'white';
          showAlert("Lightmode is enabled","success");

         }
      }

      const [gmode, setgmode] = useState("light");
      const togglegMode=()=>
        {
         if(gmode==="light")
           {
              setgmode("dark")
              document.body.style.backgroundColor= '#198754';
    
              showAlert("Darkmode is enabled","success");
            }else{ setgmode("light")
              document.body.style.backgroundColor= 'white';
              showAlert("Lightmode is enabled","success");
    
             }
          }

      const [alert, setalert] = useState(null);
     const showAlert=(message,type)=>
     {
      setalert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setalert(null);
      }, 1500);
     }

      return (
    <>
     <Router>
      <Navbar mode={mode} toggleMode={toggleMode} gmode={gmode} togglegMode={togglegMode} title="react" Home="react Home" About="react about"/>
      <Alerts alert={alert}/>

      <Routes>
          <Route path="/About" element={<AboutUs />} />
          <Route path="/" element={<div className="container my-3"><TextForm showAlert={showAlert} heading="Enter data here" mode={mode} /></div>} />
        </Routes>
     
        </Router>
    </>
  );
}

export default App;