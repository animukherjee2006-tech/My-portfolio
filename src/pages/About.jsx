import React, { useState } from 'react';

function About() {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [hoveredBadge, setHoveredBadge] = useState(null);

  const getBadgeStyle = (id, activeColor) => ({
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '8px',
    backgroundColor: hoveredBadge === id ? activeColor : 'rgba(255, 255, 255, 0.05)',
    color: hoveredBadge === id ? '#050508' : '#ffffff',
    fontWeight: '700',
    fontSize: '0.9rem',
    border: `1px solid ${hoveredBadge === id ? 'transparent' : 'rgba(255, 255, 255, 0.15)'}`,
    cursor: 'pointer',
    transform: hoveredBadge === id ? 'translateY(-2px)' : 'translateY(0)',
    transition: 'all 0.2s ease-in-out',
    whiteSpace: 'nowrap' // Badge text ko split hone se rokega
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '100%',
        minHeight: '91vh',
        boxSizing: 'border-box',
        backgroundColor: '#050508',
        backgroundImage: 'radial-gradient(circle at 50% 70%, #121026 0%, #050508 70%)',
        color: '#ffffff',
        padding: '100px 24px',
        fontFamily: '"Inter", "Segoe UI", sans-serif',

        overflowX: 'hidden' // Strict section restriction
      }}
    >
      <style>{`
        @keyframes cardEntrance {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{ marginBottom: '45px', textAlign: 'center' }}>
        <h2
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
            fontWeight: '900',
            margin: '0 0 12px 0',
            letterSpacing: '-1.5px',
            background: 'linear-gradient(135deg, #ffffff 40%, #a3a3a3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Behind The Code
        </h2>
        <div style={{ 
          width: '70px', 
          height: '4px', 
          background: 'linear-gradient(90deg, #00eaff, #925fff)', 
          borderRadius: '2px',
          margin: '0 auto',
          boxShadow: '0 0 10px rgba(0, 234, 255, 0.3)'
        }} />
      </div>

      <div
        onMouseEnter={() => setIsCardHovered(true)}
        onMouseLeave={() => setIsCardHovered(false)}
        style={{
          maxWidth: '800px',
          width: '100%',
          boxSizing: 'border-box',
          padding: 'clamp(30px, 5vw, 50px) clamp(20px, 5vw, 40px)', // Mobile standard responsive padding
          textAlign: 'left',
          lineHeight: '1.9',
          fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
          color: '#d1d1e0',
          background: isCardHovered ? 'rgba(15, 12, 38, 0.5)' : 'rgba(10, 10, 15, 0.3)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: '24px',
          border: '1px solid transparent',
          backgroundImage: isCardHovered
            ? 'linear-gradient(rgba(15, 12, 38, 1), rgba(15, 12, 38, 1)), linear-gradient(135deg, #00eaff 0%, #925fff 100%)'
            : 'linear-gradient(rgba(10, 10, 15, 1), rgba(10, 10, 15, 1)), linear-gradient(135deg, rgba(0, 234, 255, 0.2) 0%, rgba(146, 95, 255, 0.1) 100%)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
          boxShadow: isCardHovered 
            ? '0 20px 45px rgba(0, 234, 255, 0.12), 0 0 30px rgba(146, 95, 255, 0.08)' 
            : '0 15px 35px rgba(0, 0, 0, 0.5)',
          animation: 'cardEntrance 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isCardHovered ? 'translateY(-6px)' : 'translateY(0)',
          wordBreak: 'break-word'
        }}
      >
        <span style={{ fontSize: '1.7rem', display: 'block', marginBottom: '20px' }}>
          Hey, I’m <span style={{ 
            background: 'linear-gradient(90deg, #00eaff, #925fff)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            fontWeight: '900' 
          }}>Ani</span> 👋
        </span>
        
        A curious mind, a{' '}
        <span 
          onMouseEnter={() => setHoveredBadge('solver')} 
          onMouseLeave={() => setHoveredBadge(null)}
          style={getBadgeStyle('solver', '#00eaff')}
        >
          problem solver
        </span>
        , and someone who believes big things start with small lines of code.
        <br /><br />
        I’m a computer science student who loves turning ideas into real, working products—whether it’s a stunning frontend interface, a cross-platform mobile app, or a robust{' '}
        <span 
          onMouseEnter={() => setHoveredBadge('backend')} 
          onMouseLeave={() => setHoveredBadge(null)}
          style={getBadgeStyle('backend', '#925fff')}
        >
          backend system
        </span> 
        that actually scales. I’m not just learning tech to pass exams; I’m learning it to build, experiment, and break limits to create software that makes people’s lives effortlessly simpler.
        <br /><br />
        Right now, I enjoy diving deep into how things break and work behind the scenes:
        
        {/* Safe text container adjustments for tag layout */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '25px', alignItems: 'center', width: '100%' }}>
          <span style={{ color: '#63637e', fontSize: '0.85rem', fontWeight: '800', letterSpacing: '1px' }}>CORE_FOCUS:</span>
          <span onMouseEnter={() => setHoveredBadge('apis')} onMouseLeave={() => setHoveredBadge(null)} style={getBadgeStyle('apis', '#00eaff')}>APIs</span>
          <span onMouseEnter={() => setHoveredBadge('db')} onMouseLeave={() => setHoveredBadge(null)} style={getBadgeStyle('db', '#925fff')}>Databases</span>
          <span onMouseEnter={() => setHoveredBadge('sd')} onMouseLeave={() => setHoveredBadge(null)} style={getBadgeStyle('sd', '#00eaff')}>System Design</span>
          <span onMouseEnter={() => setHoveredBadge('arch')} onMouseLeave={() => setHoveredBadge(null)} style={getBadgeStyle('arch', '#925fff')}>Clean Architecture 🚀</span>
        </div>
      </div>
    </div>
  );
}

export default About;
