import React from 'react';
import '../shared/DomainPage.css';
import DomainParticles from '../shared/DomainParticles';
import useDomainScrollAnimations from '../shared/useDomainScrollAnimations';
import RotatingText from '../shared/RotatingText';

const WebDev = () => {
  useDomainScrollAnimations();

  const tools = [
    { icon: '⚛️', name: 'React', desc: 'Industry-standard library for building interactive, component-driven user interfaces with blazing performance.', link: 'https://react.dev' },
    { icon: '🟢', name: 'Node.js', desc: 'Scalable JavaScript runtime for building high-performance backend services and APIs.', link: 'https://nodejs.org' },
    { icon: '🚂', name: 'Express.js', desc: 'Minimalist and flexible Node.js web framework, perfect for RESTful API development.', link: 'https://expressjs.com' },
    { icon: '🍃', name: 'MongoDB', desc: 'Flexible, document-oriented NoSQL database ideal for modern, data-driven web applications.', link: 'https://www.mongodb.com' },
    { icon: '🎨', name: 'Tailwind CSS', desc: 'Utility-first CSS framework that enables rapid, consistent, and responsive UI development.', link: 'https://tailwindcss.com' },
    { icon: '🔷', name: 'TypeScript', desc: 'Strongly-typed superset of JavaScript that catches bugs early and improves developer productivity.', link: 'https://www.typescriptlang.org' },
  ];

  return (
    <div className="domain-page">
      <DomainParticles />

      {/* Hero */}
      <section className="dp-hero">
        <div className="dp-hero-content">
          <p className="dp-hero-subtitle-line">Master the art of building with</p>
          <h1 className="dp-hero-title">
            <span className="dp-rotating-wrapper">
              <RotatingText
                texts={['React', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind']}
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
            From pixel-perfect frontends to scalable cloud backends — master the full MERN stack and architect the digital future. Build products that millions will use.
          </p>
          <div className="dp-hero-ctas">
            <button className="dp-btn dp-btn-primary" onClick={() => document.getElementById('webdev-what')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Now
            </button>
            <button className="dp-btn dp-btn-secondary">
              Join Web Dev @ Elabs
            </button>
          </div>
        </div>
        <div className="dp-hero-fade" />
      </section>

      {/* What is Web Dev */}
      <div className="dp-section-bg">
        <section id="webdev-what" className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Web Development — The Full Stack</h2>
          <p className="dp-section-subtitle scroll-anim">From idea to deployed product</p>
          <div className="dp-what-grid">
            <div className="dp-what-text scroll-anim slide-left">
              <h3>Architecting the Digital Future</h3>
              <p><strong>Frontend Development</strong> is the visual layer — the HTML, CSS, and JavaScript that users see and interact with. It's about creating beautiful, fast, and responsive interfaces.</p>
              <p><strong>Backend Development</strong> is the engine — the server logic, APIs, databases, and authentication that power every web application.</p>
              <p>Together, full-stack web development lets you build complete products from scratch — from the first pixel to the final deployment on the cloud.</p>
            </div>
            <div className="dp-feature-cards scroll-anim slide-right">
              <div className="dp-feature-card"><strong>HTML / CSS / JavaScript</strong>The foundational trinity of the web — structure, style, and behavior.</div>
              <div className="dp-feature-card"><strong>React & Modern Frameworks</strong>Build reusable components and highly interactive single-page applications.</div>
              <div className="dp-feature-card"><strong>Node.js & REST APIs</strong>Design scalable backend services that power web and mobile apps alike.</div>
              <div className="dp-feature-card"><strong>Database & Deployment</strong>Manage data with MongoDB and ship to the cloud using CI/CD pipelines.</div>
            </div>
          </div>
        </section>
      </div>

      {/* Tools */}
      <div className="dp-section-bg">
        <section className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Tools & Technologies We Use</h2>
          <p className="dp-section-subtitle scroll-anim">The MERN stack and beyond</p>
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

      {/* Stats */}
      <div className="dp-section-bg">
        <section className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Web Dev at Elabs — Impact</h2>
          <p className="dp-section-subtitle scroll-anim">Why learning web development matters</p>
          <div className="dp-stats-grid">
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">10+</div><h4>Live Projects</h4><p>Real-world web apps built and deployed by Elabs members</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">4</div><h4>Core Technologies</h4><p>MERN stack mastered end-to-end across all member projects</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">80%</div><h4>Hire Rate</h4><p>Web developers are among the most in-demand tech professionals</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">∞</div><h4>Possibilities</h4><p>From SaaS to e-commerce, the web is everywhere you look</p></div>
          </div>
          <div className="dp-impact-box scroll-anim zoom-in">
            <h3>The Real Impact</h3>
            <p>Web development is the backbone of the digital economy. At Elabs, we don't just teach syntax — we teach you to think like engineers, solve real user problems, and ship products that make a difference. Every line of code you write could become the next platform that millions rely on.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebDev;