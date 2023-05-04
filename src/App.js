import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React , {useState} from 'react'; 
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route , Link } from "react-router-dom";

// routing npm i react-router-dom

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

 const showAlert =(message, type) => {
   setAlert({
    msg: message,
    type : type
   })
   setTimeout(() => {
    setAlert(null);
   }, 1500);
 }
 const removeBodyClasses = () =>{
   document.body.classList.remove('bg-light')
   document.body.classList.remove('bg-dark')
   document.body.classList.remove('bg-primary')
   document.body.classList.remove('bg-success')
   document.body.classList.remove('bg-warning')
   document.body.classList.remove('bg-danger')
 }
  
 const toggleMode = (cls)=>{
  removeBodyClasses();
  console.log(cls);
  document.body.classList.add('bg-'+cls)
       if (mode==="light"){
         setMode('dark')
         document.body.style.backgroundColor = '#1F7AC1'
         showAlert("Dark Mode has been enabled","success")
         document.title = "TextUtils - DarkMode"
        
        //  setInterval(() => {
        //   document.title = "TextUtils is amazing"
        //  }, 2750);
         
        //  setInterval(() => {
        //   document.title = "Install It Now"
        //  }, 1000);
       }
       else
       {
         setMode ("light")
         document.body.style.backgroundColor = 'white'
         showAlert("Light Mode has been enabled","success")
         document.title = "TextUtils - LightMode"

       }
  }
  return (
   <>

   {/* <Navbar/> */}
   {/* <Navbar title="Text Utils" aboutText = "About TextUtils"/> */}

   {/* <Route path="/" element={<Layout />}> */}
   {/* a is replaced by Link and href is replaced by to */}


   <Router>
   <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert= {alert}/>
   <div className="container my-3">
   <Routes>
   
   
   <Route exact  path="*" element={<TextForm showAlert={showAlert} heading = "TextUitls - Text Counter , Word Counter" mode={mode}/>}/>
   <Route  exact path="About" element={<About mode={mode}/>}/>
  
   </Routes>
   </div>
   </Router>

   </>

  );
}

export default App;
