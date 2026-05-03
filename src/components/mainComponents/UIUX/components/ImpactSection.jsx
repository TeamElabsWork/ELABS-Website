import React from 'react';

const ImpactSection = () => {
  return (
    <section id="impact">
      <h2 className="section-title scroll-animate zoom-in">Why UI/UX Matters</h2>
      <div className="impact-grid" style={{ marginTop: '3rem' }}>
        <div className="impact-card scroll-animate">
          <div className="impact-number">85%</div>
          <h4>User Retention</h4>
          <p>Good UX increases user engagement and retention rates significantly</p>
        </div>
        <div className="impact-card scroll-animate">
          <div className="impact-number">70%</div>
          <h4>Conversion Rate</h4>
          <p>Well-designed interfaces boost conversion rates and sales performance</p>
        </div>
        <div className="impact-card scroll-animate">
          <div className="impact-number">50%</div>
          <h4>Cost Reduction</h4>
          <p>Better UX reduces support costs and customer complaints</p>
        </div>
        <div className="impact-card scroll-animate">
          <div className="impact-number">95%</div>
          <h4>Brand Trust</h4>
          <p>Professional design builds credibility and customer confidence</p>
        </div>
      </div>
      <div className="impact-description scroll-animate zoom-in">
        <h3>The Real Impact</h3>
        <p>
          UI/UX design isn't just about aesthetics – it's about solving real problems. It bridges the gap between technology and humanity, making complex systems accessible and enjoyable. In our increasingly digital world, great design is the difference between products that users love and those they abandon.
        </p>
      </div>
    </section>
  );
};

export default ImpactSection;