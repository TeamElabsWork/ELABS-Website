import React from 'react';

const ARVRScene = () => {
  return (
    <div className="ar-vr-visual-container">
      
      <div className="cyber-loader">
        <div className="cyber-ring ring-1"></div>
        <div className="cyber-ring ring-2"></div>
        <div className="cyber-ring ring-3"></div>
        <div className="cyber-core"></div>
      </div>
      
      <p className="ar-vr-caption">( The Metaverse Awaits )</p>

      
      <style>{`
        .ar-vr-visual-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 300px;
          width: 100%;
          position: relative;
        }

        .cyber-loader {
          position: relative;
          width: 200px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 800px;
        }

        .cyber-ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid transparent;
        }

        /* Outer Cyan Ring */
        .ring-1 {
          width: 100%;
          height: 100%;
          border-top: 4px solid #00e5ff;
          border-bottom: 4px solid #00e5ff;
          box-shadow: 0 0 15px #00e5ff, inset 0 0 15px #00e5ff;
          animation: cyber-spin 4s linear infinite;
        }

        /* Middle Purple/Pink Ring */
        .ring-2 {
          width: 70%;
          height: 70%;
          border-left: 4px solid #ff00ff;
          border-right: 4px solid #ff00ff;
          box-shadow: 0 0 10px #ff00ff;
          animation: cyber-spin-reverse 6s linear infinite;
        }

        /* Inner White Ring */
        .ring-3 {
          width: 40%;
          height: 40%;
          border-top: 2px solid white;
          border-bottom: 2px solid white;
          animation: cyber-spin 2s linear infinite;
        }

        /* Glowing Center Core */
        .cyber-core {
          width: 15px;
          height: 15px;
          background-color: #00e5ff;
          border-radius: 50%;
          box-shadow: 0 0 20px 5px #00e5ff;
          animation: pulse-core 1.5s ease-in-out infinite alternate;
        }

        .ar-vr-caption {
          margin-top: 20px;
          font-family: monospace;
          color: #00e5ff;
          letter-spacing: 2px;
          text-shadow: 0 0 5px #00e5ff;
          opacity: 0.8;
          font-size: 0.9rem;
        }

        @keyframes cyber-spin {
          0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          100% { transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg); }
        }

        @keyframes cyber-spin-reverse {
          0% { transform: rotateX(360deg) rotateY(360deg) rotateZ(0deg); }
          100% { transform: rotateX(0deg) rotateY(0deg) rotateZ(360deg); }
        }

        @keyframes pulse-core {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.2); opacity: 1; box-shadow: 0 0 30px 10px #00e5ff; }
        }
      `}</style>
    </div>
  );
};

export default ARVRScene;