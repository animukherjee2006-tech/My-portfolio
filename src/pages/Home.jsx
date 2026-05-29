import React, { useState } from 'react';
import Ani from '../assets/Ani.jpg';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const [isStartHovered, setIsStartHovered] = useState(false);
  const [isBrowseHovered, setIsBrowseHovered] = useState(false);
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  return (
    <div
      className="Homi"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minHeight: '100vh',
        boxSizing: 'border-box',
        gap: '40px',
        padding: '60px 24px',
        backgroundColor: '#050508',
        backgroundImage: 'radial-gradient(circle at 50% 30%, #121026 0%, #050508 75%)',
        color: '#ffffff',
        fontFamily: '"Inter", "Segoe UI", sans-serif',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <style>{`
        @keyframes masterFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cyberGlowRotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes avatarFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        
        @media (max-width: 768px) {
          .Homi {
            flex-direction: column !important;
            text-align: center !important;
            justify-content: center !important;
            gap: 35px !important;
          }
          .hero-content-block {
            text-align: center !important;
            align-items: center !important;
          }
          .button-row-layout {
            justify-content: center !important;
          }
        }
      `}</style>

      <div
        onMouseEnter={() => setIsAvatarHovered(true)}
        onMouseLeave={() => setIsAvatarHovered(false)}
        style={{
          width: 'clamp(210px, 25vw, 280px)',
          height: 'clamp(210px, 25vw, 280px)',
          borderRadius: '50%',
          padding: '5px',
          background: 'linear-gradient(135deg, #00eaff, #00ffc8, #0099ff, #00eaff, #00ffc8)',
          backgroundSize: '300% 300%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          flexShrink: 0,
          animation: 'masterFadeIn 0.8s ease, cyberGlowRotate 4s linear infinite, avatarFloat 6s ease-in-out infinite',
          boxShadow: isAvatarHovered 
            ? '0 0 35px rgba(0, 234, 255, 0.6), 0 0 15px rgba(0, 255, 200, 0.3)' 
            : '0 0 20px rgba(0, 153, 255, 0.3)',
          transform: isAvatarHovered ? 'scale(1.04)' : 'scale(1)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <img
          src={Ani}
          alt="Ani"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid #050508'
          }}
        />
      </div>

      <div 
        className="hero-content-block"
        style={{ 
          maxWidth: '580px', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-start',
          textAlign: 'left',
          animation: 'masterFadeIn 0.8s ease'
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
            fontWeight: '900',
            margin: '0 0 12px 0',
            letterSpacing: '-1.5px',
            lineHeight: '1.15',
            background: 'linear-gradient(180deg, #ffffff 40%, #a3a3a3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Welcome to my Portfolio
        </h1>

        <h2
          style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            fontWeight: '400',
            color: '#b3b3cc',
            lineHeight: '1.65',
            margin: '0 0 32px 0',
            letterSpacing: '0.2px'
          }}
        >
          Hello, I am{' '}
          <span style={{ 
            background: 'linear-gradient(90deg, #00eaff, #0099ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '800'
          }}>
            Aniruddha Mukherjee
          </span>
          . A B.Tech CSE student passionate about growth, optimization, and software development.
        </h2> 

        <div 
          className="button-row-layout"
          style={{ display: 'flex', gap: '16px', width: '100%', flexWrap: 'wrap' }}
        >
          <button
            onClick={() => navigate('/contact')}
            onMouseEnter={() => setIsStartHovered(true)}
            onMouseLeave={() => setIsStartHovered(false)}
            style={{
              background: isStartHovered ? 'linear-gradient(90deg, #00eaff 0%, #0099ff 100%)' : 'transparent',
              color: isStartHovered ? '#050508' : '#00eaff',
              padding: '12px 30px',
              fontSize: '0.95rem',
              fontWeight: '800',
              borderRadius: '30px',
              border: '2px solid #00eaff',
              cursor: 'pointer',
              letterSpacing: '0.5px',
              boxShadow: isStartHovered ? '0 8px 25px rgba(0, 234, 255, 0.45)' : '0 4px 12px rgba(0, 234, 255, 0.05)',
              transform: isStartHovered ? 'translateY(-3px)' : 'translateY(0)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            Start a Project
          </button>

          <button
            onClick={() => navigate('/project')}
            onMouseEnter={() => setIsBrowseHovered(true)}
            onMouseLeave={() => setIsBrowseHovered(false)}
            style={{
              background: isBrowseHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.04)',
              color: isBrowseHovered ? '#050508' : '#ffffff',
              padding: '12px 30px',
              fontSize: '0.95rem',
              fontWeight: '800',
              borderRadius: '30px',
              border: isBrowseHovered ? '2px solid #ffffff' : '2px solid rgba(255, 255, 255, 0.25)',
              backdropFilter: 'blur(4px)',
              cursor: 'pointer',
              letterSpacing: '0.5px',
              boxShadow: isBrowseHovered ? '0 8px 25px rgba(255, 255, 255, 0.25)' : 'none',
              transform: isBrowseHovered ? 'translateY(-3px)' : 'translateY(0)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            Browse Works
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;