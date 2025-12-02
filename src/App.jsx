import React from "react";
import './App.css';
import Navber from "./component/Navber";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Footer from "./component/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App(){

  return(
    <>
           <Router>
            <Navber/>

            <Routes>
              <Route path="/home" element= {<Home/>}/>
              <Route path= "/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/education" element={<Education/>}/>
              <Route path="/project" element={<Project/>}/>
              <Route path="/skills" element={<Skills/>}/>
            </Routes >
           </Router>
        
           <Footer/>
        
    </>
    
  )
}

export default App;
