import React, { useState } from 'react';
import python from '../assets/python.jpeg';
import c from '../assets/c.jpeg';
import cpp from '../assets/c++.jpeg';
import css from '../assets/css.jpeg';
import dsa from '../assets/dsa.jpeg';
import express from '../assets/express.jpeg';
import github from '../assets/github.jpeg';
import js from '../assets/js.jpeg';
import mern from '../assets/mern.jpeg';
import mongo from '../assets/mongo.jpeg';
import nodejs from '../assets/nodejs.jpeg';
import react from '../assets/react.jpeg';

function Skills() {
  const [isTreeActive, setIsTreeActive] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const skillsTree = {
    languages: {
      title: 'LANGUAGES_MODULE',
      color: '#00eaff',
      skills: [
        { name: 'C Language', src: c, desc: 'Procedural logic structure and memory management foundations.' },
        { name: 'C++', src: cpp, desc: 'Object-oriented programming and optimized algorithmic compilation.' },
        { name: 'Python', src: python, desc: 'High-level scripting automation and structural backend workflows.' },
        { name: 'JavaScript', src: js, desc: 'Asynchronous engine runtime architecture and event-driven logic.' },
        { name: 'MongoDB', src: mongo, desc: 'Document schema architecture and dynamic query execution.' }
      ]
    },
    frontend: {
      title: 'FRONTEND_UI',
      color: '#ff4c4c',
      skills: [
        { name: 'CSS3', src: css, desc: 'Modern styling layout structures and responsive design execution.' },
        { name: 'JavaScript', src: js, desc: 'Dynamic client-side interaction engine and state control.' },
        { name: 'React.js', src: react, desc: 'Component virtualization, hooks design, and virtual DOM mapping.' }
      ]
    },
    backend: {
      title: 'BACKEND_CORE',
      color: '#925fff',
      skills: [
        { name: 'Node.js', src: nodejs, desc: 'Scalable asynchronous event loops and non-blocking runtime.' },
        { name: 'Express.js', src: express, desc: 'RESTful API routing architecture and middleware control structures.' },
        { name: 'MongoDB', src: mongo, desc: 'NoSQL collection engineering and aggregation data pipelines.' },
        { name: 'MERN Stack', src: mern, desc: 'Full-stack infrastructure orchestration and holistic system deployment.' }
      ]
    },
    devops: {
      title: 'DEVOPS_TOOLS',
      color: '#00ffc8',
      skills: [
        { name: 'GitHub / Git', src: github, desc: 'Version control engine, branch isolation, and source code syncing.' },
        { name: 'Data Structures', src: dsa, desc: 'Problem-solving matrices and computational asset optimization.' }
      ]
    }
  };

  const handleMasterClick = () => {
    setIsTreeActive(!isTreeActive);
    setActiveCategory(null);
  };

  const handleCategoryClick = (catKey) => {
    setActiveCategory(activeCategory === catKey ? null : catKey);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        minHeight: '100vh',
        boxSizing: 'border-box',
        backgroundColor: '#030305',
        backgroundImage: `
          linear-gradient(rgba(146, 95, 255, 0.008) 1px, transparent 1px),
          linear-gradient(90deg, rgba(146, 95, 255, 0.008) 1px, transparent 1px),
          radial-gradient(circle at 50% 30%, #0c081d 0%, #030305 70%)
        `,
        backgroundSize: '30px 30px, 30px 30px, 100% 100%',
        padding: '120px 24px 80px 24px',
        fontFamily: '"JetBrains Mono", monospace',
        color: '#ffffff',
        overflowX: 'hidden'
      }}
    >
      <style>{`
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 15px rgba(146, 95, 255, 0.2); }
          50% { box-shadow: 0 0 30px rgba(146, 95, 255, 0.5); }
          100% { box-shadow: 0 0 15px rgba(146, 95, 255, 0.2); }
        }
        @keyframes beamVertical {
          from { height: 0; opacity: 0; }
          to { height: 50px; opacity: 1; }
        }
        @keyframes nodeEntrance {
          from { opacity: 0; transform: scale(0.9) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
          fontWeight: '900',
          margin: '0 0 12px 0',
          letterSpacing: '-1.5px',
          background: 'linear-gradient(180deg, #ffffff 40%, #52525b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          SYSTEM_ARCHITECT_TREE
        </h2>
        <p style={{ color: '#71717a', fontSize: '0.85rem', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>
          Initialize the core framework button to map the operational engine blocks.
        </p>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '900px',
        position: 'relative'
      }}>
        
        {/* MASTER CENTRAL BUTTON */}
        <button
          onClick={handleMasterClick}
          style={{
            background: isTreeActive ? '#0a0a0f' : 'linear-gradient(135deg, #925fff 0%, #4c1d95 100%)',
            color: '#ffffff',
            border: isTreeActive ? '2px solid #925fff' : '2px solid transparent',
            padding: '20px 45px',
            borderRadius: '16px',
            fontSize: '1rem',
            fontWeight: '900',
            letterSpacing: '3px',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            animation: isTreeActive ? 'none' : 'pulseGlow 2.5s infinite ease-in-out',
          }}
          onMouseEnter={(e) => {
            if(isTreeActive) e.currentTarget.style.boxShadow = '0 0 25px rgba(146, 95, 255, 0.4)';
          }}
          onMouseLeave={(e) => {
            if(isTreeActive) e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {isTreeActive ? '⚡ INITIALIZED // CLOSE_MATRIX' : '☄️ INITIALIZE_SKILLS_CORE'}
        </button>

        {/* TRUNK LINE */}
        {isTreeActive && (
          <div style={{
            width: '2px',
            height: '50px',
            background: 'linear-gradient(180deg, #925fff, rgba(255,255,255,0.1))',
            animation: 'beamVertical 0.4s ease-out forwards',
            position: 'relative'
          }} />
        )}

        {/* CATEGORIES BRIDGES */}
        {isTreeActive && (
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '20px',
              width: '100%',
              animation: 'nodeEntrance 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              position: 'relative',
              zIndex: 5
            }}
          >
            {Object.keys(skillsTree).map((key) => {
              const cat = skillsTree[key];
              const isCatSelected = activeCategory === key;

              return (
                <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <button
                    onClick={() => handleCategoryClick(key)}
                    style={{
                      width: '100%',
                      background: isCatSelected ? 'rgba(255,255,255,0.03)' : '#0d0d12',
                      border: `1px solid ${isCatSelected ? cat.color : 'rgba(255, 255, 255, 0.08)'}`,
                      borderRadius: '12px',
                      padding: '16px 12px',
                      color: isCatSelected ? '#ffffff' : '#a1a1aa',
                      fontSize: '0.75rem',
                      fontWeight: '800',
                      letterSpacing: '1.5px',
                      cursor: 'pointer',
                      textAlign: 'center',
                      boxShadow: isCatSelected ? `0 0 20px ${cat.color}33` : 'none',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => {
                      if (!isCatSelected) e.currentTarget.style.borderColor = cat.color;
                    }}
                    onMouseLeave={(e) => {
                      if (!isCatSelected) e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    }}
                  >
                    {isCatSelected ? '[-] ' : '[+] '} {cat.title}
                  </button>

                  {/* ACTIVE DATA LEAF EXPANSTION */}
                  {isCatSelected && (
                    <div style={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      marginTop: '20px',
                      animation: 'nodeEntrance 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                    }}>
                      {cat.skills.map((skill, index) => (
                        <div
                          key={index}
                          style={{
                            background: 'rgba(255, 255, 255, 0.01)',
                            borderLeft: `3px solid ${cat.color}`,
                            borderTop: '1px solid rgba(255,255,255,0.03)',
                            borderRight: '1px solid rgba(255,255,255,0.03)',
                            borderBottom: '1px solid rgba(255,255,255,0.03)',
                            borderRadius: '0 12px 12px 0',
                            padding: '14px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            textAlign: 'left',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            transition: 'all 0.25s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                            e.currentTarget.style.transform = 'translateX(4px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.01)';
                            e.currentTarget.style.transform = 'translateX(0)';
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                            <div style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '8px',
                              overflow: 'hidden',
                              backgroundColor: '#050508',
                              border: '1px solid rgba(255, 255, 255, 0.08)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <img src={skill.src} alt={skill.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.2px' }}>
                              {skill.name}
                            </span>
                          </div>
                          <p style={{
                            margin: 0,
                            fontSize: '0.68rem',
                            color: '#71717a',
                            lineHeight: '1.4',
                            fontFamily: '"Inter", sans-serif'
                          }}>
                            {skill.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}

export default Skills;