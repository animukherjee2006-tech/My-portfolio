import React, { useEffect } from "react";
import './App.css';
import Navber from "./component/Navber";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Footer from "./component/footer";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

function ScrollTosection(){
  const location = useLocation()

  useEffect(()=>{
    const id= location.pathname.replace("/","") || "home"
    const el= document.getElementById(id)

    if(el){
      el.scrollIntoView({behavior:"smooth"})
    }
  },[location])

  return null
}
function App(){

  return(
    <>
    <ScrollTosection/>
        
            <Navber/>
        
        <section id="home"><Home/></section>
        <section id="about"><About/></section>
        <section id="education"><Education/></section>
        <section id="project"><Project/></section>
        <section id="skills"><Skills/></section>
        <section id="contact"><Contact/></section>
           <Footer/>
        
    </>
    
  )
}

export default App;
