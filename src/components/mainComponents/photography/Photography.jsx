import React from 'react';
import '../shared/DomainPage.css';
import DomainParticles from '../shared/DomainParticles';
import useDomainScrollAnimations from '../shared/useDomainScrollAnimations';
import RotatingText from '../shared/RotatingText';

const Photography = () => {
  useDomainScrollAnimations();

  const tools = [
    { icon: '🌟', name: 'Adobe Lightroom', desc: 'Industry-standard photo editing and management software for professional color grading and batch processing.', link: 'https://www.adobe.com/products/photoshop-lightroom.html' },
    { icon: '🖼️', name: 'Adobe Photoshop', desc: "The world's most powerful image editing tool for compositing, retouching, and creative photo manipulation.", link: 'https://www.adobe.com/products/photoshop.html' },
    { icon: '🎬', name: 'DaVinci Resolve', desc: 'Professional-grade video editing and color grading software used in Hollywood and content creation worldwide.', link: 'https://www.blackmagicdesign.com/products/davinciresolve' },
    { icon: '🎥', name: 'Premiere Pro', desc: "Adobe's industry-leading video editing software for creating cinematic sequences and social media content.", link: 'https://www.adobe.com/products/premiere.html' },
    { icon: '🎨', name: 'Canva Pro', desc: 'Versatile design platform for creating social media graphics, event posters, and visual brand content quickly.', link: 'https://www.canva.com' },
    { icon: '📷', name: 'Camera & Lenses', desc: 'Hands-on experience with DSLR and mirrorless cameras, understanding optics, exposure, and composition fundamentals.', link: 'https://www.dpreview.com' },
  ];

  return (
    <div className="domain-page">
      <DomainParticles />

      <section className="dp-hero">
        <div className="dp-hero-content">
          <p className="dp-hero-subtitle-line">Capture every moment with</p>
          <h1 className="dp-hero-title">
            <span className="dp-rotating-wrapper">
              <RotatingText
                texts={['Lightroom', 'Photoshop', 'DaVinci', 'Premiere', 'Canva']}
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
            Master the art and science of visual storytelling. From golden hour portraits to product photography and cinematic video — develop your unique creative voice at Elabs.
          </p>
          <div className="dp-hero-ctas">
            <button className="dp-btn dp-btn-primary" onClick={() => document.getElementById('photo-what')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Now
            </button>
            <button className="dp-btn dp-btn-secondary">Join Photography @ Elabs</button>
          </div>
        </div>
        <div className="dp-hero-fade" />
      </section>

      <div className="dp-section-bg">
        <section id="photo-what" className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Photography — The Art of Light & Story</h2>
          <p className="dp-section-subtitle scroll-anim">Where technical precision meets creative vision</p>
          <div className="dp-what-grid">
            <div className="dp-what-text scroll-anim slide-left">
              <h3>See the World Differently</h3>
              <p><strong>Photography</strong> is both a technical craft and an art form — understanding how light, composition, and timing combine to freeze moments that communicate emotion, story, and truth.</p>
              <p><strong>Visual storytelling</strong> extends beyond photos into videography, post-production, and brand visual identity — skills that are in massive demand in today's content-first world.</p>
              <p>At Elabs, we document events, build portfolios, create brand assets, and push the boundaries of visual creativity alongside engineering projects.</p>
            </div>
            <div className="dp-feature-cards scroll-anim slide-right">
              <div className="dp-feature-card"><strong>Composition & Framing</strong>Apply the rule of thirds, leading lines, and depth to create visually compelling photographs.</div>
              <div className="dp-feature-card"><strong>Lighting Mastery</strong>Work with natural and artificial light — studio, golden hour, and flash techniques.</div>
              <div className="dp-feature-card"><strong>Post-Production Editing</strong>Edit, color grade, and retouch photos and videos to professional commercial standards.</div>
              <div className="dp-feature-card"><strong>Video & Cinematic</strong>Plan, shoot, and edit cinematic video content for events, social media, and brand stories.</div>
            </div>
          </div>
        </section>
      </div>

      <div className="dp-section-bg">
        <section className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Tools & Technologies We Use</h2>
          <p className="dp-section-subtitle scroll-anim">Professional photography and editing toolkit</p>
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
          <h2 className="dp-section-title scroll-anim zoom-in">Photography at Elabs — Impact</h2>
          <p className="dp-section-subtitle scroll-anim">Why visual communication is a critical skill</p>
          <div className="dp-stats-grid">
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">20+</div><h4>Events Shot</h4><p>Technical symposiums, workshops, and cultural events documented by Elabs photographers</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">1000+</div><h4>Photos Archived</h4><p>Growing gallery of high-quality Elabs event and project photography</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">🎞️</div><h4>Cinematic Videos</h4><p>Promotional and recap videos produced for Elabs events and social media</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">∞</div><h4>Stories Told</h4><p>Every project, event, and achievement at Elabs has a visual story behind it</p></div>
          </div>
          <div className="dp-impact-box scroll-anim zoom-in">
            <h3>The Real Impact</h3>
            <p>Visual communication is how Elabs tells its story to the world. Our photographers and videographers are the backbone of every event, launch, and achievement showcase. Beyond Elabs, these skills open doors in content creation, product marketing, documentary filmmaking, and design — an ever-growing creative economy.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Photography;