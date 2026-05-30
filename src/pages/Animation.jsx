import React, { useEffect, useState } from 'react';

function AmbientMatrixPage() {
  // Digital crosshair node pointers ko track karne ke liye dynamic state configuration
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Mouse coordinates ko track karke matrix rays ko dynamically warp karne ke liye
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#030305',
        overflow: 'hidden',
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
        zIndex: 1,
        cursor: 'crosshair', // Premium cyber terminal tracking cursor look
      }}
    >
      {/* Dynamic Embedded Keyframe Engines for Matrix Sweeps & Glowing Hologram Nodes */}
      <style>{`
        @keyframes cyberPulseScanner {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }

        @keyframes glitchFlicker {
          0%, 100% { opacity: 0.15; }
          45% { opacity: 0.15; }
          50% { opacity: 0.4; }
          55% { opacity: 0.08; }
          60% { opacity: 0.3; }
        }

        @keyframes floatQuantumNodes {
          0% { transform: translateY(10vh) translateX(0px) scale(1); opacity: 0.2; }
          33% { transform: translateY(-20vh) translateX(30px) scale(1.3); opacity: 0.5; }
          66% { transform: translateY(-50vh) translateX(-20px) scale(0.8); opacity: 0.3; }
          100% { transform: translateY(-90vh) translateX(10px) scale(1.1); opacity: 0; }
        }
      `}</style>

      {/* LAYER 1: Deep Space Cyber Grid Blueprint Mesh */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(rgba(0, 234, 255, 0.025) 1.5px, transparent 1.5px),
            linear-gradient(90deg, rgba(0, 234, 255, 0.025) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '45px 45px',
          opacity: 0.8,
        }}
      />

      {/* LAYER 2: Micro-Sub-Grid Blueprint Network */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(rgba(146, 95, 255, 0.01) 1px, transparent 1px),
            linear-gradient(90deg, rgba(146, 95, 255, 0.01) 1px, transparent 1px)
          `,
          backgroundSize: '15px 15px',
        }}
      />

      {/* LAYER 3: Interactive Reactive Radial Light Engine */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          // Mouse cursor ke coordinates ko trace karke gradient background flow banata hai
          background: `radial-gradient(circle 450px at ${coords.x}px ${coords.y}px, rgba(0, 234, 255, 0.05) 0%, rgba(146, 95, 255, 0.02) 50%, transparent 100%)`,
          pointerEvents: 'none',
          transition: 'background 0.05s linear',
        }}
      />

      {/* LAYER 4: Static Center Vignette Depth Core */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 50% 50%, transparent 20%, #030305 95%)',
          pointerEvents: 'none',
        }}
      />

      {/* LAYER 5: Vertical Laser Sweep Terminal Line */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(0, 234, 255, 0.3) 15%, rgba(146, 95, 255, 0.6) 50%, rgba(0, 234, 255, 0.3) 85%, transparent)',
          boxShadow: '0 0 15px rgba(146, 95, 255, 0.5), 0 0 30px rgba(0, 234, 255, 0.2)',
          animation: 'cyberPulseScanner 7s cubic-bezier(0.4, 0, 0.2, 1) infinite',
          opacity: 0.6,
          pointerEvents: 'none',
        }}
      />

      {/* LAYER 6: Ambient Tech Quantum Vector Flares (No Bubbles, Pure Tech Nodes) */}
      <div style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}>
        {[
          { left: '12%', top: '85vh', size: '3px', delay: '0s', duration: '14s', color: '#00eaff' },
          { left: '32%', top: '90vh', size: '2px', delay: '3s', duration: '18s', color: '#925fff' },
          { left: '45%', top: '75vh', size: '4px', delay: '1s', duration: '12s', color: '#ff007f' },
          { left: '68%', top: '80vh', size: '2px', delay: '5s', duration: '16s', color: '#00eaff' },
          { left: '85%', top: '95vh', size: '3px', delay: '2s', duration: '20s', color: '#925fff' },
          { left: '22%', top: '70vh', size: '2px', delay: '7s', duration: '15s', color: '#00ffc8' },
          { left: '78%', top: '88vh', size: '3px', delay: '4s', duration: '13s', color: '#ff007f' },
        ].map((node, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: node.left,
              top: node.top,
              width: node.size,
              height: node.size,
              backgroundColor: node.color,
              borderRadius: '0px', // Perfect square matrix node pixels instead of round bubbles
              boxShadow: `0 0 10px ${node.color}, 0 0 20px ${node.color}`,
              animation: `floatQuantumNodes ${node.duration} linear infinite`,
              animationDelay: node.delay,
            }}
          />
        ))}
      </div>

      {/* LAYER 7: Digital Tech Grid Intersections Accent Brackets */}
      <div
        style={{
          position: 'absolute',
          top: '30px',
          left: '30px',
          width: '20px',
          height: '20px',
          borderLeft: '2px solid rgba(0, 234, 255, 0.3)',
          borderTop: '2px solid rgba(0, 234, 255, 0.3)',
          animation: 'glitchFlicker 4s ease infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          right: '30px',
          width: '20px',
          height: '20px',
          borderRight: '2px solid rgba(146, 95, 255, 0.3)',
          borderBottom: '2px solid rgba(146, 95, 255, 0.3)',
          animation: 'glitchFlicker 4s ease infinite',
          animationDelay: '1.5s',
        }}
      />
    </div>
  );
}

export default AmbientMatrixPage;