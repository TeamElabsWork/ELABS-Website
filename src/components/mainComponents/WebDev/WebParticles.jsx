import React from 'react';

const WebParticles = () => {
  const particles = Array.from({ length: 60 });
  return (
    <div className="web-particle-container">
      {particles.map((_, i) => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 10 + Math.random() * 10;
        const size = 2 + Math.random() * 3;
        return (
          <div key={i} className="web-particle"
            style={{
              left: `${left}%`, top: `${top}%`,
              width: `${size}px`, height: `${size}px`,
              animationDelay: `-${delay}s`, animationDuration: `${duration}s`,
            }}
          />
        );
      })}
      <style>{`
        .web-particle-container {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none; z-index: 1; overflow: hidden;
        }
        .web-particle {
          position: absolute; border-radius: 50%; background: #ff8c00;
          box-shadow: 0 0 8px #ff8c00; opacity: 0;
          animation: webDrift linear infinite;
        }
        @keyframes webDrift {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-100px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default WebParticles;