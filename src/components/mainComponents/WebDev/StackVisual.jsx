import React from 'react';

const StackVisual = () => {
  return (
    <div className="stack-wrapper">
      <div className="stack-canvas">
        <div className="stack-layer layer-frontend"><span>FRONTEND</span></div>
        <div className="stack-layer layer-backend"><span>BACKEND</span></div>
        <div className="stack-layer layer-database"><span>DATABASE</span></div>
      </div>

      <style>{`
        .stack-wrapper {
          perspective: 1000px;
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 50px 0;
        }
        .stack-canvas {
          position: relative;
          width: 300px;
          height: 250px;
          transform: rotateX(50deg) rotateZ(-25deg);
          transform-style: preserve-3d;
        }
        .stack-layer {
          position: absolute;
          width: 250px;
          height: 140px;
          background: rgba(20, 20, 20, 0.85);
          backdrop-filter: blur(5px);
          border: 2px solid #ff8c00;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff8c00;
          font-family: 'Courier New', monospace;
          font-weight: bold;
          font-size: 1.1rem;
          letter-spacing: 2px;
          box-shadow: 0 0 20px rgba(255, 140, 0, 0.3), inset 0 0 10px rgba(255, 140, 0, 0.1);
          transition: all 0.5s ease;
          animation: stackDrift 4s ease-in-out infinite;
        }
        .layer-database { transform: translateZ(0); animation-delay: 0s; }
        .layer-backend { transform: translateZ(70px); border-color: #ffffff; color: #ffffff; animation-delay: 0.2s; }
        .layer-frontend { transform: translateZ(140px); animation-delay: 0.4s; }

        .stack-canvas:hover .layer-frontend { transform: translateZ(200px); }
        .stack-canvas:hover .layer-database { transform: translateZ(-40px); }

        @keyframes stackDrift {
          0%, 100% { margin-top: 0; }
          50% { margin-top: -20px; }
        }
      `}</style>
    </div>
  );
};

export default StackVisual;