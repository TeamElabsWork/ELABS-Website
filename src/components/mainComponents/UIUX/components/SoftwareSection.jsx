import React from 'react';

const SoftwareSection = () => {
  return (
    <section id="software">
      <h2 className="section-title scroll-animate zoom-in">Tools & Softwares We Use</h2>
      <div className="software-grid" style={{ marginTop: '3rem' }}>
        
        <div className="software-card scroll-animate flip-in">
          <div className="software-icon"><img className="software-card-logo" src="/Images/Logo/figma.png" alt="Figma" /></div>
          <h4>Figma</h4>
          <p>Collaborative design platform for creating UI mockups, prototypes, and design systems. Real-time collaboration makes teamwork effortless.</p>
          <a href="https://www.figma.com" target="_blank" rel="noreferrer" className="software-link">Visit Figma</a>
        </div>

        <div className="software-card scroll-animate flip-in">
          <div className="software-icon"><img className="software-card-logo" src="./public/Images/Logo/adoxd.png" alt="Adobe XD" /></div>
          <h4>Adobe XD</h4>
          <p>Intuitive UX/UI design tool with powerful prototyping capabilities. Perfect for wireframing and creating interactive experiences.</p>
          <a href="https://www.adobe.com/products/xd" target="_blank" rel="noreferrer" className="software-link">Visit Adobe XD</a>
        </div>

        <div className="software-card scroll-animate flip-in">
          <div className="software-icon"><img className="software-card-logo" src="./public/Images/Logo/sketch.png" alt="Sketch" /></div>
          <h4>Sketch</h4>
          <p>Professional design tool focused on UI design. Lightweight, powerful, and ideal for creating vector designs and animations.</p>
          <a href="https://www.sketch.com" target="_blank" rel="noreferrer" className="software-link">Visit Sketch</a>
        </div>

        <div className="software-card scroll-animate flip-in">
          <div className="software-icon"><img className="software-card-logo" src="./public/Images/Logo/protpie.png" alt="Protopie" /></div>
          <h4>Protopie</h4>
          <p>Advanced prototyping tool for creating realistic, interactive prototypes without coding. Brings designs to life with animations and interactions.</p>
          <a href="https://www.protopie.io" target="_blank" rel="noreferrer" className="software-link">Visit Protopie</a>
        </div>

        <div className="software-card scroll-animate flip-in">
          <div className="software-icon"><img className="software-card-logo" src="./public/Images/Logo/penpot.png" alt="Penpot" /></div>
          <h4>Penpot</h4>
          <p>Open-source design and prototyping platform. Collaborative, web-based, and perfect for teams working on complex design projects.</p>
          <a href="https://www.penpot.app" target="_blank" rel="noreferrer" className="software-link">Visit Penpot</a>
        </div>

        <div className="software-card scroll-animate flip-in">
          <div className="software-icon"><img className="software-card-logo" src="./public/Images/Logo/balsamiq.png" alt="Balsamiq" /></div>
          <h4>Balsamiq</h4>
          <p>Quick wireframing tool for rapid prototyping. Great for brainstorming ideas and creating low-fidelity mockups efficiently.</p>
          <a href="https://www.balsamiq.com" target="_blank" rel="noreferrer" className="software-link">Visit Balsamiq</a>
        </div>

      </div>
    </section>
  );
};

export default SoftwareSection;