import React, { useEffect, useState } from 'react';
import Navbutton from './Navbutton';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [show, setshow] = useState(true);
  const [lastscrolly, setlastscrolly] = useState(0);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

// Change this inside Navbar.jsx:
useEffect(() => {
  const handlescroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < 0) return;

    // Use a functional update to get the fresh snapshot of the previous state
    setlastscrolly((prevScrollY) => {
      if (currentScrollY < prevScrollY) {
        setshow(true); // Scrolling up
      } else if (currentScrollY > 40) {
        setshow(false); // Scrolling down
      }
      return currentScrollY;
    });
  };

  window.addEventListener('scroll', handlescroll, { passive: true });
  return () => window.removeEventListener('scroll', handlescroll);
}, []); // Empty array! No more constant re-binding.

  return (
    <div
      style={{
        position: 'fixed',
        top: show ? '0' : '-9vh',
        left: 0,
        width: '100%',
        height: '9vh',
        boxSizing: 'border-box',
        zIndex: 2000,
        backgroundColor: 'rgba(5, 5, 8, 0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 6%',
        borderBottom: '1px solid rgba(0, 234, 255, 0.2)',
        boxShadow: show ? '0 10px 40px rgba(0, 0, 0, 0.5)' : 'none',
        transition: 'top 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease'
      }}
    >
      {/* LOGO SECTION */}
      <div
        onClick={() => navigate('/')}
        onMouseEnter={() => setIsLogoHovered(true)}
        onMouseLeave={() => setIsLogoHovered(false)}
        style={{
          display: 'flex',
          fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          gap: '8px',
          fontWeight: '900',
          letterSpacing: '-0.5px',
          cursor: 'pointer',
          userSelect: 'none',
          transform: isLogoHovered ? 'scale(1.02)' : 'scale(1)',
          transition: 'transform 0.3s ease'
        }}
      >
        <div style={{ color: '#00eaff', textShadow: '0 0 10px rgba(0, 234, 255, 0.3)' }}>
          Aniruddha
        </div>
        <div style={{ color: '#925fff', textShadow: '0 0 10px rgba(146, 95, 255, 0.3)' }}>
          Mukherjee
        </div>
      </div>

      {/* MENU BUTTON SECTION */}
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <Navbutton />
      </div>
    </div>
  );
}

export default Navbar;