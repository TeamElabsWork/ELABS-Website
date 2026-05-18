import React from 'react';
import '../shared/DomainPage.css';
import DomainParticles from '../shared/DomainParticles';
import useDomainScrollAnimations from '../shared/useDomainScrollAnimations';
import RotatingText from '../shared/RotatingText';

const GameDev = () => {
  useDomainScrollAnimations();

  const tools = [
    { icon: '🎮', name: 'Unity', desc: "The world's most popular game engine — build 2D and 3D games for any platform with C# scripting.", link: 'https://unity.com' },
    { icon: '🤺', name: 'Godot', desc: 'Free, open-source game engine with an intuitive node system and its own Python-like scripting language.', link: 'https://godotengine.org' },
    { icon: '🎭', name: 'Unreal Engine', desc: 'AAA-grade game engine by Epic Games known for photorealistic visuals and Blueprint visual scripting.', link: 'https://www.unrealengine.com' },
    { icon: '🧊', name: 'Blender', desc: 'Free, open-source 3D creation suite for modeling, rigging, animation, and rendering game assets.', link: 'https://www.blender.org' },
    { icon: '🎨', name: 'Aseprite', desc: 'Pixel art editor and animator — perfect for creating sprites, tilesets, and 2D game assets.', link: 'https://www.aseprite.org' },
    { icon: '🔊', name: 'FMOD', desc: 'Professional adaptive audio engine used in hundreds of AAA and indie games for immersive sound design.', link: 'https://www.fmod.com' },
  ];

  return (
    <div className="domain-page">
      <DomainParticles />

      <section className="dp-hero">
        <div className="dp-hero-content">
          <p className="dp-hero-subtitle-line">Create immersive worlds using</p>
          <h1 className="dp-hero-title">
            <span className="dp-rotating-wrapper">
              <RotatingText
                texts={['Unity', 'Godot', 'Blender', 'Unreal', 'C#']}
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
            From concept to controller — design, build, and ship games that captivate players. Master Unity, game design principles, and the full game development pipeline at Elabs.
          </p>
          <div className="dp-hero-ctas">
            <button className="dp-btn dp-btn-primary" onClick={() => document.getElementById('gamedev-what')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Now
            </button>
            <button className="dp-btn dp-btn-secondary">Join Game Dev @ Elabs</button>
          </div>
        </div>
        <div className="dp-hero-fade" />
      </section>

      <div className="dp-section-bg">
        <section id="gamedev-what" className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Game Development — Bringing Ideas to Life</h2>
          <p className="dp-section-subtitle scroll-anim">Where art, code, and design intersect</p>
          <div className="dp-what-grid">
            <div className="dp-what-text scroll-anim slide-left">
              <h3>The Ultimate Creative-Technical Discipline</h3>
              <p><strong>Game Development</strong> is the process of designing, building, and publishing interactive experiences — games — that entertain, educate, or challenge players.</p>
              <p><strong>It's truly multidisciplinary</strong> — combining programming, 2D/3D art, sound design, narrative writing, and UX design into one cohesive, living product.</p>
              <p>At Elabs, we build games that demonstrate real engineering skill — from polished platformers to immersive 3D environments and AR/VR experiences.</p>
            </div>
            <div className="dp-feature-cards scroll-anim slide-right">
              <div className="dp-feature-card"><strong>Game Design & Mechanics</strong>Craft rules, loops, and systems that create engaging and fun player experiences.</div>
              <div className="dp-feature-card"><strong>2D & 3D Development</strong>Build sprite-based 2D games and immersive 3D worlds using Unity and Godot.</div>
              <div className="dp-feature-card"><strong>Physics & Shaders</strong>Implement realistic physics simulation and custom visual shaders for stunning effects.</div>
              <div className="dp-feature-card"><strong>AR/VR Experiences</strong>Push into the frontier of augmented and virtual reality game development.</div>
            </div>
          </div>
        </section>
      </div>

      <div className="dp-section-bg">
        <section className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Tools & Technologies We Use</h2>
          <p className="dp-section-subtitle scroll-anim">Professional game development toolchain</p>
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
          <h2 className="dp-section-title scroll-anim zoom-in">Game Dev at Elabs — Impact</h2>
          <p className="dp-section-subtitle scroll-anim">Why game development is a serious engineering discipline</p>
          <div className="dp-stats-grid">
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">$200B</div><h4>Industry Size</h4><p>The global gaming industry is larger than movies and music combined</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">3B+</div><h4>Gamers</h4><p>Over 3 billion people play video games globally</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">6+</div><h4>Games Built</h4><p>Real, playable games shipped by Elabs game dev members</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">GJ</div><h4>Game Jams</h4><p>Elabs teams participate in global game jams — full games in 48hrs</p></div>
          </div>
          <div className="dp-impact-box scroll-anim zoom-in">
            <h3>The Real Impact</h3>
            <p>Game development teaches problem-solving, optimization, and creative thinking in ways that no other field can. At Elabs, our game developers learn to manage complex systems, optimize for performance, and create compelling user experiences — skills that transfer directly to every area of software engineering.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GameDev;