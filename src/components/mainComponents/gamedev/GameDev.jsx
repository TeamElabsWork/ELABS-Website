import React, { useEffect } from 'react';
import './GameDev.css';
import CodeVisual from './CodeVisual'; 
import ARVRScene from './ARVRscene';   
import ParticleBackground from './ParticleBackground'; 

const GameDev = () => {

 //scroll animation
   useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const elementVisible = 100; 

        if (elementTop < windowHeight - elementVisible && elementBottom > 0) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="game-dev-container">
      
      
      <ParticleBackground />

      {/* hero*/}
      <header className="hero-section reveal">
        <div className="hero-box">
          <img 
            src="Images/gamedev-logo-removebg-preview.png" 
            alt="Game Dev Controller Logo" 
            className="hero-logo" 
          />
          <h1 className="title">
            Game Development 
            <span className="highlight-brand">@E Labs</span>
          </h1>
          <p className="hero-text">
            Welcome to the <span className="highlight">Game Dev domain</span>! 
            Here, we bring imagination to life through interactive storytelling, 3D modeling, and complex game mechanics. 
          </p>
        </div>
      </header>

      {/*info */}
      <section className="info-section reveal">
        
        
        <div className="info-text">
          <h2>What is Game Development?</h2>
          <p style={{ color: '#ccc', marginBottom: '20px' }}>
            Game Development is the art of creating games, involving design, build, test, and release. 
            At E Labs, we focus on both the <strong>artistic</strong> and <strong>technical</strong> sides.
          </p>
          <ul className="feature-list">
            <li>3D & 2D Asset Creation</li>
            <li>Level Design & World Building</li>
            <li>Physics & Game Logic Programming</li>
          </ul>
          
          <a 
            href="https://www.gamedev.net/start/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-btn"
          >
            Know More
          </a>
        </div>
        
       
        <div className="info-image">
          <CodeVisual />
        </div>

      </section>

      {/* roadmap */}
      <section className="roadmap-section reveal">
        <h2 style={{color: 'white', fontSize: '2.5rem', marginBottom: '40px'}}>Your Journey at E-Labs</h2>
        <div className="roadmap-container">
          <div className="roadmap-card left">
            <h3>Level 1: The Basics</h3>
            <p>Master the fundamentals of <strong>C# & C++</strong>. Learn how game loops, variables, and physics engines actually work.</p>
          </div>
          <div className="roadmap-card right">
            <h3>Level 2: First Engine</h3>
            <p>Dive into <strong>Unity 3D</strong>. Create your first playable character, design a level, and implement basic enemy AI.</p>
          </div>
          <div className="roadmap-card left">
            <h3>Level 3: Advanced Mechanics</h3>
            <p>Switch gears to <strong>Unreal Engine 5</strong>. Work with Blueprints, high-fidelity lighting, and complex particle systems.</p>
          </div>
          <div className="roadmap-card right">
            <h3>Level 4: Game Jam</h3>
            <p>Team up! Participate in a 48-hour <strong>Game Jam</strong> to build a complete game from scratch and publish it on itch.io.</p>
          </div>
        </div>
      </section>

      {/* tools  */}
      <section className="tools-section reveal">
        <h2>Popular Game Dev Tools</h2>
        <div className="cards-container">
          {/* Unity */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Unity_2021.svg" alt="Unity Logo" className="tool-logo invert-logo" />
                <h3>Unity</h3>
              </div>
              <div className="flip-card-back">
                <p>A versatile engine for 2D, 3D, & VR games with C#. Great for all skill levels.</p>
                <a href="https://unity.com/" target="_blank" rel="noopener noreferrer" className="card-btn">Official Site</a>
              </div>
            </div>
          </div>
          {/* Unreal */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/UE_Logo_Black_Centered.svg" alt="Unreal Engine Logo" className="tool-logo invert-logo" />
                <h3>Unreal</h3>
              </div>
              <div className="flip-card-back">
                <p>Powering high-fidelity graphics and cinematic experiences using C++ and Blueprints.</p>
                <a href="https://www.unrealengine.com/" target="_blank" rel="noopener noreferrer" className="card-btn">Official Site</a>
              </div>
            </div>
          </div>
          {/* Blender */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://download.blender.org/branding/community/blender_community_badge_white.svg" alt="Blender Logo" className="tool-logo" />
                <h3>Blender</h3>
              </div>
              <div className="flip-card-back">
                <p>The open-source suite for 3D modeling, rigging, animation, and rendering assets.</p>
                <a href="https://www.blender.org/" target="_blank" rel="noopener noreferrer" className="card-btn">Official Site</a>
              </div>
            </div>
          </div>
          {/* C++ */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++ Logo" className="tool-logo" />
                <h3>C# / C++</h3>
              </div>
              <div className="flip-card-back">
                <p>The core languages driving game logic, physics, and performance optimization.</p>
                <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noopener noreferrer" className="card-btn">Documentation</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ar/vr */}
      <section className="ar-vr-section reveal">
        <div className="ar-vr-content">
          <h2>AR/VR & Immersive Experiences</h2>
          <p>
            Gaming isn't just about screens anymore. At E-Labs, we explore the cutting edge of 
            <strong> Augmented (AR)</strong> and <strong>Virtual Reality (VR)</strong>. 
            Learn to build immersive worlds for platforms like Meta Quest and create mixed-reality 
            applications that blend the digital and physical worlds using industry-standard frameworks.
          </p>
        </div>
        <div className="ar-vr-visual">
           <ARVRScene />
        </div>
      </section>

    </div>
  );
};

export default GameDev;