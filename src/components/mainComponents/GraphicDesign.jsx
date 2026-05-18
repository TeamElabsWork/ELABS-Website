import React from 'react';
import './shared/DomainPage.css';
import DomainParticles from './shared/DomainParticles';
import useDomainScrollAnimations from './shared/useDomainScrollAnimations';
import RotatingText from './shared/RotatingText';

const GraphicDesign = () => {
  useDomainScrollAnimations();

  const tools = [
    { icon: '🖊️', name: 'Adobe Illustrator', desc: 'Industry-standard vector graphics software for creating logos, icons, illustrations, and scalable brand assets.', link: 'https://www.adobe.com/products/illustrator.html' },
    { icon: '🖼️', name: 'Adobe Photoshop', desc: 'The gold standard for raster graphics editing — photo manipulation, digital painting, and compositing.', link: 'https://www.adobe.com/products/photoshop.html' },
    { icon: '📱', name: 'Figma', desc: 'Cloud-based design and prototyping tool perfect for UI design, design systems, and real-time team collaboration.', link: 'https://www.figma.com' },
    { icon: '📐', name: 'Adobe InDesign', desc: 'Professional desktop publishing tool for creating layouts for print media, magazines, and marketing materials.', link: 'https://www.adobe.com/products/indesign.html' },
    { icon: '✨', name: 'After Effects', desc: 'Create stunning motion graphics, visual effects, and animated brand assets for video and digital media.', link: 'https://www.adobe.com/products/aftereffects.html' },
    { icon: '🎨', name: 'Canva Pro', desc: 'Rapid design platform for creating social media content, presentations, and marketing materials at scale.', link: 'https://www.canva.com' },
  ];

  return (
    <div className="domain-page">
      <DomainParticles />

      <section className="dp-hero">
        <div className="dp-hero-content">
          <p className="dp-hero-subtitle-line">Design what people remember using</p>
          <h1 className="dp-hero-title">
            <span className="dp-rotating-wrapper">
              <RotatingText
                texts={['Illustrator', 'Photoshop', 'Figma', 'After Effects', 'InDesign']}
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
            {' '}at Elabs
          </h1>
          <p className="dp-hero-desc">
            Shape how the world sees ideas. Master visual communication, brand design, and motion graphics — the creative force behind every product people fall in love with.
          </p>
          <div className="dp-hero-ctas">
            <button className="dp-btn dp-btn-primary" onClick={() => document.getElementById('gd-what')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Now
            </button>
            <button className="dp-btn dp-btn-secondary">Join Design @ Elabs</button>
          </div>
        </div>
        <div className="dp-hero-fade" />
      </section>

      <div className="dp-section-bg">
        <section id="gd-what" className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Graphic Design — Visual Language</h2>
          <p className="dp-section-subtitle scroll-anim">Communicating ideas through typography, color, and form</p>
          <div className="dp-what-grid">
            <div className="dp-what-text scroll-anim slide-left">
              <h3>Design That Moves People</h3>
              <p><strong>Graphic Design</strong> is the craft of visual communication — using typography, imagery, color, and layout to convey information and evoke emotion in audiences.</p>
              <p><strong>Brand identity, marketing collateral, social media visuals, and motion graphics</strong> are all products of graphic design — shaping how organizations are perceived and remembered.</p>
              <p>At Elabs, our graphic designers create the visual identity for events, social media campaigns, and member-facing materials, making every initiative look world-class.</p>
            </div>
            <div className="dp-feature-cards scroll-anim slide-right">
              <div className="dp-feature-card"><strong>Typography & Color Theory</strong>Master the principles that govern how text and color work together to guide attention and create mood.</div>
              <div className="dp-feature-card"><strong>Brand Identity Design</strong>Create cohesive logos, style guides, and brand systems that communicate values at a glance.</div>
              <div className="dp-feature-card"><strong>Print & Digital Layout</strong>Design publications, posters, and digital content using professional layout principles.</div>
              <div className="dp-feature-card"><strong>Motion Graphics</strong>Animate logos, create title sequences, and bring static designs to life with movement.</div>
            </div>
          </div>
        </section>
      </div>

      <div className="dp-section-bg">
        <section className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Tools & Technologies We Use</h2>
          <p className="dp-section-subtitle scroll-anim">The Adobe Creative Suite and modern design tools</p>
          <div className="dp-tools-grid">
            {tools.map((tool, i) => (
              <div className="dp-tool-card scroll-anim flip-in" key={i}>
                <span className="dp-tool-icon">{tool.icon}</span>
                <h4>{tool.name}</h4>
                <p>{tool.desc}</p>
                <a href={tool.link} target="_blank" rel="noreferrer" className="dp-tool-link">Learn More</a>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="dp-section-bg">
        <section className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Graphic Design at Elabs — Impact</h2>
          <p className="dp-section-subtitle scroll-anim">Why design is a superpower for engineers</p>
          <div className="dp-stats-grid">
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">50+</div><h4>Designs Created</h4><p>Posters, banners, social posts, and brand assets designed for Elabs</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">3×</div><h4>Higher Impact</h4><p>Brands with strong visual identity attract 3× more engagement</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">🏆</div><h4>Award Worthy</h4><p>Student design projects submitted to national design competitions</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">∞</div><h4>Creativity</h4><p>No ceiling on what you can create when art meets engineering mindset</p></div>
          </div>
          <div className="dp-impact-box scroll-anim zoom-in">
            <h3>The Real Impact</h3>
            <p>Great engineering built ugly deserves better. At Elabs, our graphic designers bridge the gap between technical achievement and beautiful presentation. They make every project look like it belongs on a world stage — from event branding to pitch decks to social media campaigns. Design thinking is a skill that makes every other discipline better.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GraphicDesign;