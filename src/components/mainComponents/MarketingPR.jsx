import React from 'react';
import './shared/DomainPage.css';
import DomainParticles from './shared/DomainParticles';
import useDomainScrollAnimations from './shared/useDomainScrollAnimations';
import RotatingText from './shared/RotatingText';

const MarketingPR = () => {
  useDomainScrollAnimations();

  const tools = [
    { icon: '📊', name: 'Google Analytics', desc: 'Track, analyze, and report website traffic and user behavior to drive data-informed marketing decisions.', link: 'https://analytics.google.com' },
    { icon: '📢', name: 'Meta Ads Manager', desc: 'Create and manage paid advertising campaigns across Facebook and Instagram to reach targeted audiences.', link: 'https://www.facebook.com/business/tools/ads-manager' },
    { icon: '📧', name: 'Mailchimp', desc: 'Email marketing automation platform for creating campaigns, managing audiences, and analyzing performance.', link: 'https://mailchimp.com' },
    { icon: '🔍', name: 'SEMrush', desc: 'All-in-one SEO, content, and competitive research platform used by digital marketing professionals worldwide.', link: 'https://www.semrush.com' },
    { icon: '📅', name: 'Hootsuite', desc: 'Social media management platform for scheduling posts, monitoring mentions, and measuring performance across channels.', link: 'https://hootsuite.com' },
    { icon: '🎯', name: 'HubSpot CRM', desc: 'Industry-leading CRM and inbound marketing platform for managing leads, campaigns, and customer journeys.', link: 'https://www.hubspot.com' },
  ];

  return (
    <div className="domain-page">
      <DomainParticles />

      <section className="dp-hero">
        <div className="dp-hero-content">
          <p className="dp-hero-subtitle-line">Make the world talk using</p>
          <h1 className="dp-hero-title">
            <span className="dp-rotating-wrapper">
              <RotatingText
                texts={['Strategy', 'Branding', 'SEO', 'Campaigns', 'Storytelling']}
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
            Shape perceptions, drive conversations, and build brands that resonate. From viral campaigns to press strategy — learn the art and science of making your message impossible to ignore.
          </p>
          <div className="dp-hero-ctas">
            <button className="dp-btn dp-btn-primary" onClick={() => document.getElementById('mpr-what')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Now
            </button>
            <button className="dp-btn dp-btn-secondary">Join Marketing @ Elabs</button>
          </div>
        </div>
        <div className="dp-hero-fade" />
      </section>

      <div className="dp-section-bg">
        <section id="mpr-what" className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Marketing & PR — The Voice of Every Brand</h2>
          <p className="dp-section-subtitle scroll-anim">Turning ideas into movements and products into legends</p>
          <div className="dp-what-grid">
            <div className="dp-what-text scroll-anim slide-left">
              <h3>Where Strategy Meets Storytelling</h3>
              <p><strong>Marketing & PR</strong> is the discipline of communicating value — understanding audiences, crafting messages, and choosing the right channels to reach the right people at exactly the right moment.</p>
              <p><strong>Digital marketing, brand strategy, public relations, and growth hacking</strong> are the modern arsenal of anyone who wants their ideas — or their company — to be heard in a noisy world.</p>
              <p>At Elabs, our marketing domain manages community growth, event promotions, social media presence, and outreach campaigns that give every initiative the audience it deserves.</p>
            </div>
            <div className="dp-feature-cards scroll-anim slide-right">
              <div className="dp-feature-card"><strong>Brand Strategy & Identity</strong>Develop a compelling brand voice and positioning that differentiates you in a crowded market.</div>
              <div className="dp-feature-card"><strong>Digital Marketing & SEO</strong>Master search engine optimization, paid advertising, and content marketing to drive organic and paid growth.</div>
              <div className="dp-feature-card"><strong>Social Media Management</strong>Build engaged communities across platforms through consistent, creative, and strategic content calendars.</div>
              <div className="dp-feature-card"><strong>Public Relations & Outreach</strong>Craft press releases, manage media relationships, and build the public narrative around projects and events.</div>
            </div>
          </div>
        </section>
      </div>

      <div className="dp-section-bg">
        <section className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Tools & Technologies We Use</h2>
          <p className="dp-section-subtitle scroll-anim">The modern marketer's toolkit — data-driven and results-focused</p>
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
          <h2 className="dp-section-title scroll-anim zoom-in">Marketing & PR at Elabs — Impact</h2>
          <p className="dp-section-subtitle scroll-anim">Why communication skills are the ultimate force multiplier</p>
          <div className="dp-stats-grid">
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">5×</div><h4>Reach Multiplier</h4><p>Strategic marketing campaigns generate 5× more event registrations and community sign-ups</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">10K+</div><h4>Community Reach</h4><p>Elabs campaigns have collectively reached thousands of students across social platforms</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">📈</div><h4>Growth Hacking</h4><p>Data-driven campaigns that turn experiments into exponential growth curves</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">∞</div><h4>Brand Value</h4><p>A strong brand compounds over time — making every future initiative easier to launch</p></div>
          </div>
          <div className="dp-impact-box scroll-anim zoom-in">
            <h3>The Real Impact</h3>
            <p>The best technology fails in silence without great marketing. Every breakthrough product, every transformative idea needs someone to tell its story compellingly. At Elabs, our marketing domain gives engineers and creators a superpower — the ability to make the world care. These skills dramatically multiply the impact of every other domain in Elabs.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MarketingPR;
