import React from 'react';
import './UIUX.css';

import Hero from './components/Hero';
import UIUXSection from './components/UIUXSection';
import SoftwareSection from './components/SoftwareSection';
import ImpactSection from './components/ImpactSection';
import ParticleBackground from './components/ParticleBackground';

import useScrollAnimations from './hooks/useScrollAnimations';

const UIUX = () => {
  useScrollAnimations();

  return (
    <div className="uiux-page">
      <ParticleBackground />
      <Hero />
      <UIUXSection />
      <SoftwareSection />
      <ImpactSection />
    </div>
  );
};

export default UIUX;