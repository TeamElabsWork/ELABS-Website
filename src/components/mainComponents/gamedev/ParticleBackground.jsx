import React from 'react';

const ParticleBackground = () => {
  
  const particles = Array.from({ length: 200 });

  return (
    <div className="particle-container">
      {particles.map((_, i) => {
        const randomLeft = Math.random() * 100;
        const randomTop = Math.random() * 100; 
        const randomDelay = Math.random() * 5; 
        const randomDuration = 8 + Math.random() * 10; 
        const randomSize = 2 + Math.random() * 3; 
        
       
        const color = '#ff8c00';

        return (
          <div
            key={i}
            className="particle"
            style={{
              left: `${randomLeft}%`,
              top: `${randomTop}%`,
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              backgroundColor: color, 
              
              boxShadow: `0 0 8px ${color}`,
              animationDelay: `-${randomDelay}s`,
              animationDuration: `${randomDuration}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default ParticleBackground;