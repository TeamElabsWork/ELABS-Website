import React from 'react';
import RotatingText from '../../shared/RotatingText';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" style={{ position: 'relative' }}>
      <div className="hero-content">
        <p style={{ fontSize: '1.4rem', color: '#cccccc', marginBottom: '0.6rem', fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
          Design the future using
        </p>
        <h1 className="hero-title" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            <RotatingText
              texts={['Figma', 'Prototyping', 'User Research', 'Design Systems', 'Wireframing']}
              mainClassName="px-3 py-1 bg-orange-500 text-white overflow-hidden rounded-xl"
              staggerFrom="last"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-120%' }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5"
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              rotationInterval={2000}
              splitBy="characters"
              auto
              loop
            />
          </span>
          <span className="hero-title-highlight" style={{ display: 'inline' }}>at Elabs</span>
        </h1>
        <p className="hero-description">
          Join our design community where innovation meets creativity. Master the art of creating beautiful, intuitive digital experiences that captivate users and solve real problems.
        </p>
        <div className="hero-cta-group">
          <button className="hero-button hero-button-primary" onClick={() => scrollToSection('uiux')}>
            Explore Now
          </button>
          <button className="hero-button hero-button-secondary">
            Join UI/UX @ Elabs
          </button>
        </div>
      </div>
      {/* Gradient fade at bottom for seamless transition */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '220px',
        background: 'linear-gradient(to bottom, transparent, #0a0a0a)',
        zIndex: 5,
        pointerEvents: 'none',
      }} />
    </section>
  );
};

export default Hero;