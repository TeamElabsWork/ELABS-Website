import React from 'react';

const InteractiveCore = () => {
  return (
    <div className="hologram-container">
      
      <div className="core-orb"></div>
      
     
      <div className="ring ring-1"></div>
      <div className="ring ring-2"></div>
      
      
      <style>{`
        .hologram-container {
          position: relative;
          width: 300px;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
        }

        .core-orb {
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, #ffaa00 10%, #ff4500 90%);
          border-radius: 50%;
          box-shadow: 0 0 60px #ff8c00;
          animation: float 3s ease-in-out infinite alternate, pulse 2s infinite;
          position: relative;
          z-index: 10;
        }

        .ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid rgba(255, 140, 0, 0.6);
          box-shadow: 0 0 20px rgba(255, 140, 0, 0.3);
          z-index: 1;
        }

        .ring-1 {
          width: 180px;
          height: 180px;
          border-top-color: transparent;
          border-bottom-color: transparent;
          animation: spin 4s linear infinite;
        }

        .ring-2 {
          width: 240px;
          height: 240px;
          border-left-color: transparent;
          border-right-color: transparent;
          animation: spin-reverse 7s linear infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-20px); }
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 40px #ff8c00; transform: scale(1); }
          50% { box-shadow: 0 0 80px #ffaa00; transform: scale(1.05); }
          100% { box-shadow: 0 0 40px #ff8c00; transform: scale(1); }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
};

export default InteractiveCore;