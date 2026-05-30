import React, { useEffect } from "react";
import Navber from "./component/Navber";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Footer from "./component/footer";
import Animation from './pages/Animation'; // Ambient background scene loop
import { BrowserRouter as Router, useLocation } from "react-router-dom";

// Automatic URL Hash-To-Section Scroller Engine
function ScrollTosection() {
  const location = useLocation();

  useEffect(() => {
    // Agar route path '/' hai toh default fallback to "home"
    const id = location.pathname.replace("/", "") || "home";
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    // CRITICAL FIX: <Router> wrapper ko wapas lagaya taaki useLocation() crash na kare
     <>
      <ScrollTosection />

      {/* MAIN LAYOUT WRAPPER */}
      <div 
        style={{ 
          width: '100%', 
          backgroundColor: '#030305', 
          position: 'relative',
          margin: 0,
          padding: 0
        }}
      >
        {/* BACKGROUND LAYER: FIXED AMBIENT ANIMATION */}
        <div 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100vw', 
            height: '100vh', 
            zIndex: 1, // Background me set kiya
            pointerEvents: 'none' // Taaki click iske paar (through) content par lag sake
          }}
        >
          <Animation />
        </div>

        {/* FOREGROUND LAYER: NAVIGATION & CONTENT STACK */}
        <div 
          style={{ 
            position: 'relative', 
            zIndex: 2, // Animation ke upar layer karne ke liye
            width: '100%' 
          }}
        >
          {/* Navbar yahan perfectly foreground me kaam karega */}
          <Navber />

          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="project"><Project /></section>
          <section id="skills"><Skills /></section>
          <section id="contact"><Contact /></section>
          
          <Footer />
        </div>

      </div>
    </>
  );
}

export default App;
