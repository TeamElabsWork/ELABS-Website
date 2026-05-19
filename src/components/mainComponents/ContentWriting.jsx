import React from 'react';
import './shared/DomainPage.css';
import DomainParticles from './shared/DomainParticles';
import useDomainScrollAnimations from './shared/useDomainScrollAnimations';
import RotatingText from './shared/RotatingText';

const ContentWriting = () => {
  useDomainScrollAnimations();

  const tools = [
    { icon: '✍️', name: 'Notion', desc: 'All-in-one workspace for writing, planning, collaboration, and building content systems and editorial calendars.', link: 'https://www.notion.so' },
    { icon: '🔤', name: 'Grammarly', desc: 'AI-powered writing assistant that checks grammar, clarity, engagement, and delivery across platforms.', link: 'https://www.grammarly.com' },
    { icon: '🔍', name: 'Surfer SEO', desc: 'Content optimization tool that analyzes top-ranking pages and guides you to write content that ranks on Google.', link: 'https://surferseo.com' },
    { icon: '🤖', name: 'ChatGPT / Claude', desc: 'Leverage large language models to ideate, draft, refine, and scale content production without losing your unique voice.', link: 'https://openai.com/chatgpt' },
    { icon: '📝', name: 'Medium / Substack', desc: 'Publishing platforms for building a personal brand, sharing long-form writing, and growing a dedicated readership.', link: 'https://medium.com' },
    { icon: '📊', name: 'BuzzSumo', desc: 'Content research tool that reveals what topics and formats perform best, helping you write content people actually share.', link: 'https://buzzsumo.com' },
  ];

  return (
    <div className="domain-page">
      <DomainParticles />

      <section className="dp-hero">
        <div className="dp-hero-content">
          <p className="dp-hero-subtitle-line">Tell stories that matter using</p>
          <h1 className="dp-hero-title">
            <span className="dp-rotating-wrapper">
              <RotatingText
                texts={['Blogging', 'Copywriting', 'SEO Writing', 'Storytelling', 'Technical Docs']}
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
            Words build worlds. Master the art of crafting compelling narratives, technical documentation, SEO-optimized articles, and persuasive copy that drives real action in the real world.
          </p>
          <div className="dp-hero-ctas">
            <button className="dp-btn dp-btn-primary" onClick={() => document.getElementById('cw-what')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Now
            </button>
            <button className="dp-btn dp-btn-secondary">Join Writing @ Elabs</button>
          </div>
        </div>
        <div className="dp-hero-fade" />
      </section>

      <div className="dp-section-bg">
        <section id="cw-what" className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Content Writing — The Original Superpower</h2>
          <p className="dp-section-subtitle scroll-anim">From blog posts to billion-dollar brand voices</p>
          <div className="dp-what-grid">
            <div className="dp-what-text scroll-anim slide-left">
              <h3>Write. Influence. Lead.</h3>
              <p><strong>Content Writing</strong> is the craft of using words strategically — to educate, persuade, entertain, and inspire audiences across blogs, social media, emails, documentation, and more.</p>
              <p><strong>SEO content, technical writing, copywriting, and storytelling</strong> are all facets of this discipline, each requiring a unique blend of creativity, research, and audience awareness.</p>
              <p>At Elabs, our content writers power the newsletter, event write-ups, social media captions, technical documentation, and the stories that define our community's identity.</p>
            </div>
            <div className="dp-feature-cards scroll-anim slide-right">
              <div className="dp-feature-card"><strong>SEO & Long-Form Blogging</strong>Write content that ranks on Google by mastering keyword research, search intent, and on-page optimization techniques.</div>
              <div className="dp-feature-card"><strong>Copywriting & Persuasion</strong>Craft headlines, CTAs, landing pages, and ads that convert readers into believers and buyers.</div>
              <div className="dp-feature-card"><strong>Technical Documentation</strong>Translate complex engineering concepts into clear, accessible guides that developers and users actually want to read.</div>
              <div className="dp-feature-card"><strong>Narrative & Storytelling</strong>Build brand narratives and personal stories that create emotional connection and lasting memory.</div>
            </div>
          </div>
        </section>
      </div>

      <div className="dp-section-bg">
        <section className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Tools & Technologies We Use</h2>
          <p className="dp-section-subtitle scroll-anim">The modern writer's arsenal — research, writing, and optimization</p>
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
          <h2 className="dp-section-title scroll-anim zoom-in">Content Writing at Elabs — Impact</h2>
          <p className="dp-section-subtitle scroll-anim">Why strong writing is a career multiplier for every discipline</p>
          <div className="dp-stats-grid">
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">70%</div><h4>Higher Engagement</h4><p>Well-crafted content generates 70% more engagement than generic posts across all platforms</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">3×</div><h4>More Leads</h4><p>Companies with active content strategies generate 3× more leads than those without one</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">📰</div><h4>Published Work</h4><p>Elabs writers publish articles, newsletters, and technical guides read by students nationwide</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">∞</div><h4>Career Value</h4><p>Strong writing skills make engineers, designers, and founders dramatically more effective communicators</p></div>
          </div>
          <div className="dp-impact-box scroll-anim zoom-in">
            <h3>The Real Impact</h3>
            <p>In a world where every professional communicates digitally, the ability to write clearly and compellingly is the rarest and most valuable skill. At Elabs, our content writers don't just support other domains — they define how the world perceives our community, projects, and people. Strong writing opens doors that technical skills alone cannot.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContentWriting;
