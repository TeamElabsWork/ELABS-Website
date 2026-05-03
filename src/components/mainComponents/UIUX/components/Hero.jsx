import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const heroRect = heroRef.current.getBoundingClientRect();
      const heroTitle = heroRef.current.querySelector('.hero-title');
      const heroDescription = heroRef.current.querySelector('.hero-description');
      const heroCTAGroup = heroRef.current.querySelector('.hero-cta-group');

      if (heroRect.bottom < 0) {
        heroRef.current.classList.add('fadeOut');
        if(heroTitle) heroTitle.classList.add('scroll-out');
        if(heroDescription) heroDescription.classList.add('scroll-out');
        if(heroCTAGroup) heroCTAGroup.classList.add('scroll-out');
      } else {
        heroRef.current.classList.remove('fadeOut');
        if(heroTitle) heroTitle.classList.remove('scroll-out');
        if(heroDescription) heroDescription.classList.remove('scroll-out');
        if(heroCTAGroup) heroCTAGroup.classList.remove('scroll-out');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-content">
        <h1 className="hero-title">
          Design the Future with <span className="hero-title-highlight">UI/UX Excellence</span>
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
    </section>
  );
};

export default Hero;