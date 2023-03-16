import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import About from './components/About';
import ContactMe from './components/ContactMe';
import Error from './components/Error';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Ressume from './components/Ressume';
import "./App.css"
import ResumePage from './components/ResumePage';
// import Education from './components/Education';


 

const App = () => {
  return (
   
    <>
    <h1>RAVINDRA DESHMUKH</h1>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/ressume" element={<Ressume/>}/>
    <Route path="/contactme" element={<ContactMe/>}/>
    <Route path="*" element={<Error/>}/>
    <Route path="/ressumepage" element={<ResumePage/>}/>
    {/* <Route path="/education"/> */}
   
    
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;