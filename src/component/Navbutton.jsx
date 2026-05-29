import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbutton() {
  const navigate = useNavigate();
  const [open, setopen] = useState(false);

 
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const [isCloseHovered, setIsCloseHovered] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const goTo = (path) => {
    navigate(path);
    setopen(false);
  };

  // Nav items configuration list
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/project' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div
      className="navWraper"
      style={{
        position: 'fixed',
        top: '24px',
        right: '24px',
        zIndex: 2000,
        fontFamily: '"JetBrains Mono", "Inter", monospace, sans-serif',
      }}
    >
    
      <style>{`
        @keyframes cyberDropMenu {
          from { opacity: 0; transform: translateY(-20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes neonPulseGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @media (max-width: 500px) {
          .responsive-cyber-box {
            width: 85vw !important;
            right: 0px !important;
          }
        }
      `}</style>

     
      <button
        className="menu-btn"
        onClick={() => setopen(!open)}
        onMouseEnter={() => setIsBtnHovered(true)}
        onMouseLeave={() => setIsBtnHovered(false)}
        style={{
          padding: '12px 28px',
          borderRadius: '30px',
          backgroundColor: isBtnHovered ? '#00eaff' : 'rgba(5, 5, 8, 0.8)',
          color: isBtnHovered ? '#050508' : '#00eaff',
          
          
          border: isBtnHovered ? '1px solid transparent' : '1px solid rgba(0, 234, 255, 0.4)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          
          fontSize: '0.85rem',
          fontWeight: '800',
          letterSpacing: '2px',
          cursor: 'pointer',
          boxShadow: isBtnHovered 
            ? '0 0 25px rgba(0, 234, 255, 0.6), 0 0 10px rgba(0, 234, 255, 0.3)' 
            : '0 4px 15px rgba(0, 0, 0, 0.5)',
          
          transform: isBtnHovered ? 'scale(1.05) translateY(-2px)' : 'scale(1) translateY(0)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          outline: 'none',
        }}
      >
        MENU ☰
      </button>

      {open && (
        <div
          className="menu-overlay"
          onClick={() => setopen(false)} 
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(3, 3, 5, 0.65)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1999,
            left: 'calc(-100vw + 100% + 24px)', // Dynamically centers full view bounds relative to fixed attachment parent
            top: '-24px',
          }}
        >
          
          <div
            className="menu-box responsive-cyber-box"
            onClick={(e) => e.stopPropagation()} 
            style={{
              width: '400px',
              boxSizing: 'border-box',
              background: 'rgba(10, 10, 15, 0.85)',
              padding: '40px 30px',
              borderRadius: '24px',
              position: 'relative',
              textAlign: 'left',
              
              
              border: '1px solid transparent',
              backgroundImage: 'linear-gradient(rgba(10, 10, 15, 1), rgba(10, 10, 15, 1)), linear-gradient(135deg, #00eaff 0%, #925fff 100%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 234, 255, 0.15)',
              animation: 'cyberDropMenu 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}
          >
         
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '3px',
              background: 'linear-gradient(90deg, #00eaff, #925fff, #ff007f, #00eaff)',
              backgroundSize: '300% 300%',
              animation: 'neonPulseGlow 4s linear infinite',
              borderTopLeftRadius: '24px',
              borderTopRightRadius: '24px',
            }} />

            <button
              className="close-btn"
              onClick={() => setopen(false)}
              onMouseEnter={() => setIsCloseHovered(true)}
              onMouseLeave={() => setIsCloseHovered(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: isCloseHovered ? 'rgba(255, 0, 127, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                color: isCloseHovered ? '#ff007f' : '#ffffff',
                border: `1px solid ${isCloseHovered ? '#ff007f' : 'rgba(255, 255, 255, 0.1)'}`,
                fontSize: '0.9rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: isCloseHovered ? '0 0 12px rgba(255, 0, 127, 0.4)' : 'none',
                transform: isCloseHovered ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                outline: 'none',
              }}
            >
              ✕
            </button>

            
            <div style={{
              fontSize: '0.7rem',
              color: '#555566',
              letterSpacing: '3px',
              marginBottom: '24px',
              fontWeight: '700',
            }}>
              // NAVIGATION_CORE_V2
            </div>

            
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {links.map((link, index) => {
                const isHovered = hoveredLink === index;

                return (
                  <li
                    key={index}
                    onMouseEnter={() => setHoveredLink(index)}
                    onMouseLeave={() => setHoveredLink(null)}
                    onClick={() => goTo(link.path)}
                    style={{
                        
                      padding: '14px 16px',
                      margin: '8px 0',
                      cursor: 'pointer',
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      
                      // Cyberpunk terminal translations
                      color: isHovered ? '#00eaff' : '#ffffff',
                      backgroundColor: isHovered ? 'rgba(0, 234, 255, 0.04)' : 'transparent',
                      borderLeft: `3px solid ${isHovered ? '#00eaff' : 'transparent'}`,
                      
                      transform: isHovered ? 'translateX(8px)' : 'translateX(0)',
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <span>{link.name}</span>
                    {isHovered && (
                      <span style={{ fontSize: '0.85rem', color: '#925fff', opacity: 0.8 }}>
                        EXECUTE_ROUTE ↗
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbutton;