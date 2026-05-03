import React from 'react';

const CodeVisual = () => {
  return (
    <div className="code-editor-container">
      <div className="code-window">
        
        <div className="window-header">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
          <span className="filename">PlayerController.cs</span>
        </div>
        
        
        <div className="code-body">
          <div className="line">
            <span className="keyword">void</span> <span className="function">Update</span>() {'{'}
          </div>
          <div className="line indent">
            <span className="keyword">if</span> (<span className="variable">isGrounded</span>) {'{'}
          </div>
          <div className="line indent-2">
            <span className="function">Jump</span>();
          </div>
          <div className="line indent">
            {'}'}
          </div>
          <div className="line indent">
            <span className="variable">_player</span>.<span className="function">Attack</span>();
          </div>
          <div className="line">
            {'}'} <span className="cursor">|</span>
          </div>
        </div>
      </div>

      
      <style>{`
        .code-editor-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }

        .code-window {
          width: 320px;
          background-color: #1e1e1e;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 140, 0, 0.1);
          border: 1px solid #333;
          overflow: hidden;
          font-family: 'Consolas', 'Monaco', monospace;
          transition: transform 0.3s ease;
        }

        .code-window:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 15px 40px rgba(255, 140, 0, 0.2);
          border-color: #ff8c00;
        }

        .window-header {
          background-color: #252526;
          padding: 10px 15px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #333;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right: 6px;
        }
        .red { background-color: #ff5f56; }
        .yellow { background-color: #ffbd2e; }
        .green { background-color: #27c93f; }
        
        .filename {
          margin-left: 15px;
          color: #888;
          font-size: 0.8rem;
        }

        .code-body {
          padding: 20px;
          color: #d4d4d4;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .indent { padding-left: 20px; }
        .indent-2 { padding-left: 40px; }

        .keyword { color: #569cd6; } /* Blue for void, if */
        .function { color: #dcdcaa; } /* Yellow for functions */
        .variable { color: #9cdcfe; } /* Light blue for variables */

        .cursor {
          display: inline-block;
          color: #ff8c00;
          font-weight: bold;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default CodeVisual;