import React from 'react';
import './shared/DomainPage.css';
import DomainParticles from './shared/DomainParticles';
import useDomainScrollAnimations from './shared/useDomainScrollAnimations';
import RotatingText from './shared/RotatingText';

const Entrepreneurship = () => {
  useDomainScrollAnimations();

  const tools = [
    { icon: '🚀', name: 'Lean Canvas', desc: 'One-page business model framework that helps founders rapidly validate assumptions and structure their startup idea.', link: 'https://leanstack.com/lean-canvas' },
    { icon: '💰', name: 'Financial Modeling', desc: 'Learn to build P&L statements, unit economics, and investor-ready financial projections using Excel and Google Sheets.', link: 'https://www.wallstreetmojo.com' },
    { icon: '📊', name: 'Notion for Startups', desc: 'Organize your startup operations, OKRs, investor updates, and team wikis in a single connected workspace.', link: 'https://www.notion.so/startups' },
    { icon: '🎤', name: 'Pitch Deck Design', desc: 'Master the art of the investor pitch — storytelling, slide structure, and the narrative arc that compels funding decisions.', link: 'https://www.ycombinator.com/library/4T-how-to-design-a-better-pitch-deck' },
    { icon: '🔬', name: 'Customer Discovery', desc: 'Frameworks and tools for conducting user interviews, validating problem-solution fit, and avoiding the #1 startup killer.', link: 'https://www.strategyzer.com' },
    { icon: '🌐', name: 'AngelList / Crunchbase', desc: 'Startup ecosystem platforms for fundraising, hiring, tracking competitors, and understanding the venture capital landscape.', link: 'https://www.angellist.com' },
  ];

  return (
    <div className="domain-page">
      <DomainParticles />

      <section className="dp-hero">
        <div className="dp-hero-content">
          <p className="dp-hero-subtitle-line">Build what the world needs using</p>
          <h1 className="dp-hero-title">
            <span className="dp-rotating-wrapper">
              <RotatingText
                texts={['Startups', 'Fundraising', 'Lean Thinking', 'Disruption', 'Vision']}
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
            Don't just build products — build companies. Learn to validate ideas at zero cost, raise capital, build teams, and turn a spark of insight into a venture that changes industries.
          </p>
          <div className="dp-hero-ctas">
            <button className="dp-btn dp-btn-primary" onClick={() => document.getElementById('ent-what')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Now
            </button>
            <button className="dp-btn dp-btn-secondary">Join Entrepreneurship @ Elabs</button>
          </div>
        </div>
        <div className="dp-hero-fade" />
      </section>

      <div className="dp-section-bg">
        <section id="ent-what" className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Entrepreneurship — The Art of Building From Nothing</h2>
          <p className="dp-section-subtitle scroll-anim">From dorm room idea to funded startup — the journey starts here</p>
          <div className="dp-what-grid">
            <div className="dp-what-text scroll-anim slide-left">
              <h3>Think Like a Founder</h3>
              <p><strong>Entrepreneurship</strong> is the discipline of identifying real problems, designing innovative solutions, and building scalable businesses from the ground up — with limited resources and unlimited ambition.</p>
              <p><strong>Startup methodology, venture capital, product management, and business strategy</strong> are the frameworks that transform technical talent into company-builders who can compete on the global stage.</p>
              <p>At Elabs, our Entrepreneurship domain nurtures the next generation of founders — running business case competitions, pitch events, mentorship programs, and startup incubation initiatives for students with bold ideas.</p>
            </div>
            <div className="dp-feature-cards scroll-anim slide-right">
              <div className="dp-feature-card"><strong>Idea Validation & Lean Startup</strong>Learn to test ideas rapidly without building anything — saving months of engineering on products nobody wants.</div>
              <div className="dp-feature-card"><strong>Fundraising & Venture Capital</strong>Understand term sheets, cap tables, valuation, and how to pitch angel investors and VCs to secure funding.</div>
              <div className="dp-feature-card"><strong>Product-Market Fit</strong>Master the frameworks for finding the exact intersection of a real problem and a solution people will pay for.</div>
              <div className="dp-feature-card"><strong>Go-To-Market Strategy</strong>Design the launch plan, pricing model, and distribution channels that take a product from zero to traction.</div>
            </div>
          </div>
        </section>
      </div>

      <div className="dp-section-bg">
        <section className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Tools & Frameworks We Use</h2>
          <p className="dp-section-subtitle scroll-anim">The founder's toolkit — from idea to investment</p>
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
          <h2 className="dp-section-title scroll-anim zoom-in">Entrepreneurship at Elabs — Impact</h2>
          <p className="dp-section-subtitle scroll-anim">Why the entrepreneurial mindset transforms every career</p>
          <div className="dp-stats-grid">
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">$100B+</div><h4>Startup Value</h4><p>Indian student-founded startups have generated over $100B in combined valuation in the last decade</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">72%</div><h4>Founder Advantage</h4><p>72% of top companies prefer hiring candidates with entrepreneurial experience or side projects</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">🏆</div><h4>Pitch Competitions</h4><p>Elabs members compete in national hackathons and business plan competitions, winning funding and recognition</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">0→1</div><h4>The Journey</h4><p>Nothing is more challenging or more rewarding than building something from absolutely nothing</p></div>
          </div>
          <div className="dp-impact-box scroll-anim zoom-in">
            <h3>The Real Impact</h3>
            <p>Engineering teaches you to build. Entrepreneurship teaches you to build the right thing. The founders of tomorrow are in classrooms today — and Elabs is where they learn to think beyond the code. Whether you want to start your own company or be an invaluable "intrapreneur" inside a large one, this domain will transform how you see every problem you encounter.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Entrepreneurship;
