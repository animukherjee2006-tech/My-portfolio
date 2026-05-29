import React, { useEffect, useState } from 'react';
import Navbutton from './Navbutton';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [show, setshow] = useState(true);
  const [lasscrolly, setlastscrolly] = useState(0);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY < 0) return;

      if (window.scrollY < lasscrolly) {
        setshow(true);
      } else if (window.scrollY > 40) {
        setshow(false);
      }
      setlastscrolly(window.scrollY);
    };

    window.addEventListener('scroll', handlescroll);
    return () => window.removeEventListener('scroll', handlescroll);
  }, [lasscrolly]);

  return (
    <div
      style={{
        position: 'sticky',
        top: show ? '0' : '-12vh',
        left: 0,
        right: 0,
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

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          position: 'relative',
          transform: show ? 'translateY(0)' : 'translateY(-12px)',
          opacity: show ? 1 : 0,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <Navbutton />
      </div>
    </div>
  );
}

export default Navbar;