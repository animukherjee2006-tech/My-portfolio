import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbutton() {
  const navigate = useNavigate();
  const [open, setopen] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const [isCloseHovered, setIsCloseHovered] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const goTo = (path) => {
  setHoveredLink(null); // Clean up hover states before unmounting/moving
  navigate(path);
  setopen(false);
};

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/project' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div style={{ fontFamily: '"JetBrains Mono", monospace' }}>
      <style>{`
        @keyframes cyberDropMenu {
          from { opacity: 0; transform: scale(0.95) translateY(-10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes neonPulseGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @media (max-width: 500px) {
          .responsive-cyber-box {
            width: 90vw !important;
            padding: 30px 20px !important;
          }
        }
      `}</style>

      <button
        onClick={() => setopen(!open)}
        onMouseEnter={() => setIsBtnHovered(true)}
        onMouseLeave={() => setIsBtnHovered(false)}
        style={{
          padding: '10px 24px',
          borderRadius: '30px',
          backgroundColor: isBtnHovered ? '#00eaff' : 'rgba(5, 5, 8, 0.5)',
          color: isBtnHovered ? '#050508' : '#00eaff',
          border: isBtnHovered ? '1px solid transparent' : '1px solid rgba(0, 234, 255, 0.3)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          fontSize: '0.8rem',
          fontWeight: '800',
          letterSpacing: '2px',
          cursor: 'pointer',
          boxShadow: isBtnHovered 
            ? '0 0 20px rgba(0, 234, 255, 0.5)' 
            : '0 4px 15px rgba(0, 0, 0, 0.3)',
          transform: isBtnHovered ? 'translateY(-1px)' : 'translateY(0)',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          outline: 'none',
        }}
      >
        MENU ☰
      </button>

      {open && (
        <div
          onClick={() => setopen(false)} 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(3, 3, 5, 0.7)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 3000, // Safe layer context overlay ke upar
          }}
        >
          <div
            className="responsive-cyber-box"
            onClick={(e) => e.stopPropagation()} 
            style={{
              width: '400px',
              boxSizing: 'border-box',
              background: '#0a0a0f',
              padding: '40px 30px',
              borderRadius: '24px',
              position: 'relative',
              textAlign: 'left',
              border: '1px solid transparent',
              backgroundImage: 'linear-gradient(#0a0a0f, #0a0a0f), linear-gradient(135deg, #00eaff 0%, #925fff 100%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 234, 255, 0.1)',
              animation: 'cyberDropMenu 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}
          >
            {/* Top Glowing Edge Accent */}
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

            {/* Close Button */}
            <button
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
                backgroundColor: isCloseHovered ? 'rgba(255, 0, 127, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                color: isCloseHovered ? '#ff007f' : '#ffffff',
                border: `1px solid ${isCloseHovered ? '#ff007f' : 'rgba(255, 255, 255, 0.08)'}`,
                fontSize: '0.85rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: isCloseHovered ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'all 0.25s ease',
                outline: 'none',
              }}
            >
              ✕
            </button>

            <div style={{
              fontSize: '0.65rem',
              color: '#52525b',
              letterSpacing: '3px',
              marginBottom: '28px',
              fontWeight: '700',
            }}>
              // NAVIGATION_CORE_V2
            </div>

            {/* Navigation links mapping */}
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
                      margin: '6px 0',
                      cursor: 'pointer',
                      fontSize: '1.15rem',
                      fontWeight: '700',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      color: isHovered ? '#00eaff' : '#a1a1aa',
                      backgroundColor: isHovered ? 'rgba(0, 234, 255, 0.03)' : 'transparent',
                      borderLeft: `3px solid ${isHovered ? '#00eaff' : 'transparent'}`,
                      transform: isHovered ? 'translateX(6px)' : 'translateX(0)',
                      transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <span>{link.name}</span>
                    {isHovered && (
                      <span style={{ fontSize: '0.75rem', color: '#925fff', letterSpacing: '1px' }}>
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