import React from 'react';

const UIUXSection = () => {
  return (
    <section id="uiux">
      <h2 className="section-title scroll-animate zoom-in">UI/UX - The Science of Intuition</h2>
      <div className="uiux-container" style={{ marginTop: '3rem' }}>
        <div className="uiux-text scroll-animate slide-left">
          <h3>Understanding Design Excellence</h3>
          <p><strong>User Interface (UI)</strong> is the visual layer – buttons, colors, typography, and layout that users interact with. It's about making digital products beautiful and intuitive.</p>
          <p><strong>User Experience (UX)</strong> is the journey – how users feel, the problems solved, and the emotions evoked. It's the entire story from discovery to satisfaction.</p>
          <p>Together, UI/UX design creates seamless, delightful interactions that bridge technology and human connection.</p>
        </div>
        <div className="uiux-visual scroll-animate slide-right">
          <div className="design-feature scroll-animate">
            <strong>Visual Design</strong><br />
            Creating aesthetically pleasing interfaces that reflect brand identity
          </div>
          <div className="design-feature scroll-animate">
            <strong>User Research</strong><br />
            Understanding user needs, behaviors, and pain points
          </div>
          <div className="design-feature scroll-animate">
            <strong>Interaction Design</strong><br />
            Defining how users interact with products and digital systems
          </div>
          <div className="design-feature scroll-animate">
            <strong>Accessibility</strong><br />
            Ensuring designs are inclusive and usable for everyone
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIUXSection;