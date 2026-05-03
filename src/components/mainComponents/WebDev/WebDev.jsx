import React, { useEffect } from 'react';
import './WebDev.css';
import StackVisual from './StackVisual'; 
import WebParticles from './WebParticles';

const WebDev = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tools = [
    { name: 'React', desc: 'Industry-standard library for building interactive user interfaces.' },
    { name: 'Node.js', desc: 'Scalable JavaScript runtime for building high-performance backends.' },
    { name: 'Express', desc: 'Minimalist web framework for Node.js API development.' },
    { name: 'MongoDB', desc: 'Flexible NoSQL database for modern data-driven applications.' }
  ];

  return (
    <div className="web-dev-container">
      <WebParticles />

      {/* CENTERED HERO SECTION */}
      <header className="web-hero-section reveal">
        <div className="hero-box-centered">
          <img 
            src="public/Images/Logo/WebDevelopment.png" 
            alt="Web Dev Logo" 
            className="web-hero-logo" 
          />
          <h1 className="web-title">
            Web Development 
            <span className="web-highlight-brand">@E Labs</span>
          </h1>
          <p className="hero-text">
            Architecting the Digital Future. 
            From pixel-perfect frontends to scalable cloud backends, we build the internet of tomorrow.
          </p>
        </div>
      </header>

      {/* INFO SECTION */}
      <section className="web-info-section reveal">
        <div className="info-text">
          <h2>The Full Stack Ecosystem</h2>
          <p className="web-description">
            We bridge the gap between user experience and complex server logic using the MERN stack.
          </p>
          <ul className="web-feature-list">
            <li>Reactive User Interfaces with React</li>
            <li>Scalable Backend Architecture</li>
            <li>Database Management & Optimization</li>
          </ul>
        </div>
        <div className="info-image">
          <StackVisual />
        </div>
      </section>

      {/* TIMELINE ROADMAP */}
      <section className="web-roadmap-section reveal">
        <h2 className="section-title">The Web Roadmap</h2>
        <div className="web-timeline">
          <div className="timeline-item left">
            <div className="timeline-content">
              <h3>The Foundation</h3>
              <p>Master HTML5, CSS3, & JavaScript. Learn the core pillars of the web.</p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="timeline-content">
              <h3>Frontend Mastery</h3>
              <p>Dive into React.js to build interactive and dynamic user interfaces.</p>
            </div>
          </div>
          <div className="timeline-item left">
            <div className="timeline-content">
              <h3>Backend Power</h3>
              <p>Build robust APIs using Node.js and manage data with MongoDB.</p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="timeline-content">
              <h3>Cloud & Deployment</h3>
              <p>Launch your apps using Cloud Services and modern CI/CD pipelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/*TECH STACK FLIP CARDS */}
      <section className="web-tools-section reveal">
        <h2 className="section-title">Our Tech Stack</h2>
        <div className="web-cards-grid">
          {tools.map((tool, index) => (
            <div className="web-flip-card" key={index}>
              <div className="web-flip-card-inner">
                <div className="web-flip-card-front">
                  <h3>{tool.name}</h3>
                </div>
                <div className="web-flip-card-back">
                  <p>{tool.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WebDev;