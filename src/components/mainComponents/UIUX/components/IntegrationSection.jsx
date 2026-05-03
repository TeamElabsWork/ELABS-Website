import React from 'react';

const IntegrationSection = () => {
  return (
    <section id="integration">
      <h2 className="section-title scroll-animate zoom-in">How We Use UI/UX at Elabs</h2>
      
      <div className="integration-steps" style={{ marginTop: '3rem' }}>
        <div className="step scroll-animate">
          <div className="step-number">1</div>
          <h4>Learn</h4>
          <p>Master design fundamentals and industry best practices</p>
        </div>
        <div className="step scroll-animate">
          <div className="step-number">2</div>
          <h4>Design</h4>
          <p>Create mockups and prototypes using professional tools</p>
        </div>
        <div className="step scroll-animate">
          <div className="step-number">3</div>
          <h4>Develop</h4>
          <p>Collaborate with developers to build real products</p>
        </div>
        <div className="step scroll-animate">
          <div className="step-number">4</div>
          <h4>Innovate</h4>
          <p>Push boundaries and create next-gen electrical engineering solutions</p>
        </div>
      </div>

      <div className="integration-highlight scroll-animate zoom-in">
        <h3>Elabs Integration Features</h3>
        <ul>
          <li className="scroll-animate slide-left">Design workshops and training sessions for electrical as well as other disciplines of engineering</li>
          <li className="scroll-animate slide-left">Collaboration between design and hardware development teams</li>
          <li className="scroll-animate slide-left">UI/UX solutions for embedded systems and IoT interfaces</li>
          <li className="scroll-animate slide-left">Design thinking applied to electrical engineering challenges</li>
          <li className="scroll-animate slide-left">Competition and hackathon participation</li>
          <li className="scroll-animate slide-left">Industry exposure through guest lectures and internship opportunities</li>
        </ul>
      </div>
    </section>
  );
};

export default IntegrationSection;