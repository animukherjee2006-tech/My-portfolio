import React, { useState } from 'react';
import project1 from '../assets/project1.jpg';
import Linkup from '../assets/Linkup.png';

function Project() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const structuralProjects = [
    {
      id: 'linkup',
      title: 'Linkup — Real-time Social Hub',
      description: 'A full-stack social connectivity matrix supporting real-time chat layers, state-secured JWT cookies authentication, and interactive global post-feeds.',
      tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'JWT'],
      img: Linkup,
      liveLink: 'https://linkup-1-frontend.onrender.com/',
      status: 'PRODUCTION_STABLE // HOSTED_LIVE'
    },
    {
      id: 'calculator',
      title: 'Web Calculator Engine',
      description: 'A clean, responsive and fluid digital compute environment implementing pure mathematical logic evaluation string structures.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'ES6+ Logic'],
      img: project1,
      liveLink: 'https://animukherjee2006-tech.github.io/Calculator/',
      status: 'REPOSITORY_LEGACY // COMPILED'
    }
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minHeight: '100vh',
        boxSizing: 'border-box',
        padding: '100px 24px 80px 24px',
        backgroundColor: '#030305',
        backgroundImage: `
          linear-gradient(rgba(0, 234, 255, 0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 234, 255, 0.015) 1px, transparent 1px),
          radial-gradient(circle at 50% 20%, #0f0b24 0%, #030305 75%)
        `,
        backgroundSize: '40px 40px, 40px 40px, 100% 100%',
        color: '#ffffff',
        fontFamily: '"JetBrains Mono", "Inter", monospace, sans-serif'
        
      }}
    >
      <style>{`
        @keyframes containerEntrance {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes textPulse {
          0% { opacity: 0.3; transform: scale(0.99); }
          50% { opacity: 0.7; transform: scale(1); }
          100% { opacity: 0.3; transform: scale(0.99); }
        }
      `}</style>

      <div style={{ marginBottom: '65px', textAlign: 'center', animation: 'containerEntrance 0.8s ease-out' }}>
        <h1
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: '900',
            margin: '0 0 16px 0',
            letterSpacing: '-2px',
            background: 'linear-gradient(180deg, #ffffff 30%, #71717a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          PROJECT_ARCHIVES
        </h1>
        <div style={{ 
          width: '80px', 
          height: '3px', 
          background: 'linear-gradient(90deg, #00eaff, #925fff)', 
          borderRadius: '2px',
          margin: '0 auto',
          boxShadow: '0 0 10px rgba(0, 234, 255, 0.5)'
        }} />
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '36px',
          justifyContent: 'center',
          maxWidth: '1140px',
          width: '100%',
          boxSizing: 'border-box',
          marginBottom: '60px',
          animation: 'containerEntrance 1s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {structuralProjects.map((project) => {
          const isHovered = hoveredCard === project.id;

          return (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                flex: '1 1 340px',
                maxWidth: '440px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxSizing: 'border-box',
                position: 'relative',
                background: isHovered ? 'rgba(12, 10, 24, 0.7)' : 'rgba(8, 8, 12, 0.4)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid transparent',
                backgroundImage: isHovered
                  ? 'linear-gradient(rgba(12, 10, 24, 1), rgba(12, 10, 24, 1)), linear-gradient(135deg, #00eaff 0%, #925fff 100%)'
                  : 'linear-gradient(rgba(8, 8, 12, 1), rgba(8, 8, 12, 1)), linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
                boxShadow: isHovered 
                  ? '0 25px 50px rgba(0, 234, 255, 0.15), 0 0 20px rgba(146, 95, 255, 0.1)' 
                  : '0 15px 35px rgba(0, 0, 0, 0.6)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div style={{ width: '100%', height: '210px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={project.img}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  backgroundColor: 'rgba(5, 5, 8, 0.75)',
                  backdropFilter: 'blur(6px)',
                  WebkitBackdropFilter: 'blur(6px)',
                  border: `1px solid ${isHovered ? '#00eaff' : 'rgba(255, 255, 255, 0.15)'}`,
                  padding: '5px 12px',
                  borderRadius: '8px',
                  fontSize: '0.65rem',
                  fontWeight: '700',
                  color: isHovered ? '#00eaff' : '#a1a1aa',
                  letterSpacing: '1px',
                  transition: 'all 0.3s ease'
                }}>
                  {project.status}
                </div>
                
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: isHovered ? 'rgba(3, 3, 5, 0.15)' : 'rgba(3, 3, 5, 0.45)',
                  transition: 'background 0.3s ease'
                }} />
              </div>

              <div style={{ padding: '28px', textAlign: 'left' }}>
                <h3 style={{ 
                  margin: '0 0 12px 0', 
                  fontSize: '1.3rem', 
                  fontWeight: '800', 
                  color: '#ffffff',
                  fontFamily: '"Inter", sans-serif',
                  letterSpacing: '-0.3px'
                }}>
                  {project.title}
                </h3>
                
                <p style={{ 
                  margin: '0 0 24px 0', 
                  fontSize: '0.9rem', 
                  color: '#a1a1aa', 
                  lineHeight: '1.6',
                  fontFamily: '"Inter", sans-serif'
                }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: '700',
                        color: isHovered ? '#00eaff' : '#925fff',
                        backgroundColor: isHovered ? 'rgba(0, 234, 255, 0.05)' : 'rgba(146, 95, 255, 0.05)',
                        padding: '5px 12px',
                        borderRadius: '8px',
                        border: isHovered ? '1px solid rgba(0, 234, 255, 0.2)' : '1px solid rgba(146, 95, 255, 0.15)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '14px',
                    borderRadius: '12px',
                    background: isHovered ? 'linear-gradient(90deg, #00eaff, #925fff)' : 'rgba(255, 255, 255, 0.03)',
                    color: isHovered ? '#030305' : '#ffffff',
                    fontWeight: '800',
                    fontSize: '0.85rem',
                    letterSpacing: '1px',
                    textDecoration: 'none',
                    border: isHovered ? '1px solid transparent' : '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: isHovered ? '0 10px 25px rgba(0, 234, 255, 0.35)' : 'none',
                    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  LAUNCH_DEPLOYMENT ↗
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div 
        style={{ 
          marginTop: '20px', 
          fontSize: '0.75rem', 
          fontWeight: '800', 
          letterSpacing: '3px',
          color: '#925fff',
          background: 'rgba(146, 95, 255, 0.04)',
          padding: '12px 28px',
          borderRadius: '30px',
          border: '1px solid rgba(146, 95, 255, 0.2)',
          animation: 'textPulse 3s ease-in-out infinite',
          boxShadow: '0 0 20px rgba(146, 95, 255, 0.03)'
        }}
      >
        // ENGINE_STATUS: COMPILING_NEW_ARCHITECTURE... ⚡
      </div>
    </div>
  );
}

export default Project;