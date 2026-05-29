import React, { useState } from 'react';
import github from '../assets/github.jpeg';
import linkdin from '../assets/linkdin.jpeg';

function Footer() {
  // Individual interaction states for custom neon highlights
  const [isTopHovered, setIsTopHovered] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  // Reusable styling layout engine for high-end glowing holographic buttons
  const socialCardStyle = (id, neonColor) => {
    const isCurrent = hoveredSocial === id;
    return {
      width: '56px',
      height: '56px',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      backgroundColor: isCurrent ? 'rgba(5, 5, 8, 0.9)' : 'rgba(15, 15, 25, 0.4)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      
      // Advanced dual-gradient holographic bounding box border trick
      border: '1px solid transparent',
      backgroundImage: isCurrent
        ? `linear-gradient(rgba(5, 5, 8, 1), rgba(5, 5, 8, 1)), linear-gradient(135deg, ${neonColor} 0%, #925fff 100%)`
        : 'linear-gradient(rgba(15, 15, 25, 1), rgba(15, 15, 25, 1)), linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',

      // Physics micro-interaction engine values
      transform: isCurrent ? 'translateY(-6px) scale(1.08)' : 'translateY(0) scale(1)',
      boxShadow: isCurrent 
        ? `0 12px 25px ${neonColor}45, 0 0 15px ${neonColor}30` 
        : '0 4px 15px rgba(0, 0, 0, 0.4)',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    };
  };

  return (
    <div
      className="footer-section"
      style={{
        width: '100%',
        boxSizing: 'border-box',
        backgroundColor: '#030305',
        
        // Cyberpunk digital matrix grid blueprint texture overlay
        backgroundImage: `
          linear-gradient(rgba(0, 234, 255, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 234, 255, 0.02) 1px, transparent 1px),
          radial-gradient(circle at 50% 100%, #100b2b 0%, #030305 80%)
        `,
        backgroundSize: '30px 30px, 30px 30px, 100% 100%',
        
        color: '#ffffff',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 24px 40px 24px',
        fontFamily: '"JetBrains Mono", "Inter", monospace, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Global CSS Keyframe Injection for the neon loading bar loop animation */}
      <style>{`
        @keyframes laserRunLoop {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* TOP ANCHOR: Neon Cyberpunk Laser Running Tracker Strip */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        background: 'linear-gradient(90deg, #00eaff, #925fff, #ff007f, #00ffc8, #00eaff)',
        backgroundSize: '400% 400%',
        animation: 'laserRunLoop 6s linear infinite',
        boxShadow: '0 0 15px rgba(0, 234, 255, 0.8), 0 0 30px rgba(146, 95, 255, 0.4)'
      }} />

      {/* BUTTON: Premium Floating Navigation Action Trigger */}
      <div style={{ marginBottom: '40px' }}>
        <button
          onMouseEnter={() => setIsTopHovered(true)}
          onMouseLeave={() => setIsTopHovered(false)}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            background: isTopHovered ? 'linear-gradient(90deg, #00eaff, #925fff)' : 'rgba(5, 5, 8, 0.6)',
            color: isTopHovered ? '#030305' : '#00eaff',
            padding: '10px 28px',
            borderRadius: '30px',
            border: isTopHovered ? '1px solid transparent' : '1px solid rgba(0, 234, 255, 0.3)',
            fontSize: '0.8rem',
            fontWeight: '800',
            letterSpacing: '3px',
            cursor: 'pointer',
            boxShadow: isTopHovered 
              ? '0 0 25px rgba(0, 234, 255, 0.6), 0 4px 15px rgba(146, 95, 255, 0.4)' 
              : '0 0 10px rgba(0, 234, 255, 0.1)',
            transform: isTopHovered ? 'translateY(-3px)' : 'translateY(0)',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            outline: 'none',
          }}
        >
          SYS.INITIALIZE_SCROLL_TOP ↑
        </button>
      </div>

      {/* GRID: Futuristic Holographic Social Connectivity Node Arrays */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          marginBottom: '45px',
          zIndex: 2
        }}
      >
        {/* LinkedIn Node Connection Portal */}
        <a
          href="https://www.linkedin.com/in/aniruddha-mukherjee-64129a375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredSocial('linkedin')}
          onMouseLeave={() => setHoveredSocial(null)}
          style={socialCardStyle('linkedin', '#00eaff')}
        >
          <img
            src={linkdin}
            alt="LinkedIn"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '12px',
              opacity: hoveredSocial === 'linkedin' ? 1 : 0.75,
              filter: hoveredSocial === 'linkedin' ? 'none' : 'grayscale(30%)',
              transition: 'all 0.3s ease'
            }}
          />
        </a>

        {/* GitHub Repository Target Core Node */}
        <a
          href="https://animukherjee2006-tech.github.io"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredSocial('github')}
          onMouseLeave={() => setHoveredSocial(null)}
          style={socialCardStyle('github', '#00ffc8')}
        >
          <img
            src={github}
            alt="GitHub"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '12px',
              opacity: hoveredSocial === 'github' ? 1 : 0.75,
              filter: hoveredSocial === 'github' ? 'none' : 'grayscale(30%)',
              transition: 'all 0.3s ease'
            }}
          />
        </a>
      </div>

      {/* FOOTER TEXT: Sci-fi Terminal Status Printout Stamp */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <p
          style={{
            margin: '0 0 6px 0',
            fontSize: '0.75rem',
            color: '#6e6e8a',
            letterSpacing: '4px',
            fontWeight: '600',
          }}
        >
          // STATUS: PRODUCTION_READY // ENV: STABLE
        </p>
        <p
          style={{
            margin: 0,
            fontSize: '0.85rem',
            fontWeight: '700',
            letterSpacing: '1px',
            background: 'linear-gradient(90deg, #8c8ca3, #ffffff 50%, #8c8ca3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          © 2026 ANIRUDDHA MUKHERJEE. ALL RIGHTS CONTEXT_SECURED.
        </p>
      </div>
    </div>
  );
}

export default Footer;