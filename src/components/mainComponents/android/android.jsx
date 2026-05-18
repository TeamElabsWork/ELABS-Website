import React from 'react';
import '../shared/DomainPage.css';
import DomainParticles from '../shared/DomainParticles';
import useDomainScrollAnimations from '../shared/useDomainScrollAnimations';
import RotatingText from '../shared/RotatingText';

const Android = () => {
  useDomainScrollAnimations();

  const tools = [
    { icon: '🤖', name: 'Android Studio', desc: 'Official IDE for Android development — feature-rich with an emulator, debugger, and profiler built-in.', link: 'https://developer.android.com/studio' },
    { icon: '🎯', name: 'Kotlin', desc: 'Modern, concise, and safe programming language officially recommended by Google for Android development.', link: 'https://kotlinlang.org' },
    { icon: '🔥', name: 'Firebase', desc: "Google's mobile backend platform — real-time database, authentication, cloud storage, and analytics.", link: 'https://firebase.google.com' },
    { icon: '🖌️', name: 'Jetpack Compose', desc: "Android's modern declarative UI toolkit for building native interfaces with less code and Kotlin.", link: 'https://developer.android.com/compose' },
    { icon: '🔌', name: 'Retrofit', desc: 'Type-safe HTTP client for Android — makes consuming REST APIs clean, easy, and maintainable.', link: 'https://square.github.io/retrofit/' },
    { icon: '🏗️', name: 'Gradle', desc: 'Flexible build automation system for Android — manages dependencies and automates the build pipeline.', link: 'https://gradle.org' },
  ];

  return (
    <div className="domain-page">
      <DomainParticles />

      {/* Hero */}
      <section className="dp-hero">
        <div className="dp-hero-content">
          <p className="dp-hero-subtitle-line">Build native apps powered by</p>
          <h1 className="dp-hero-title">
            <span className="dp-rotating-wrapper">
              <RotatingText
                texts={['Kotlin', 'Firebase', 'Jetpack', 'Android SDK', 'Compose']}
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
            Create powerful, beautiful Android applications that run on billions of devices worldwide. From Kotlin fundamentals to deploying on the Play Store — master mobile development at Elabs.
          </p>
          <div className="dp-hero-ctas">
            <button className="dp-btn dp-btn-primary" onClick={() => document.getElementById('android-what')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Now
            </button>
            <button className="dp-btn dp-btn-secondary">
              Join Android @ Elabs
            </button>
          </div>
        </div>
        <div className="dp-hero-fade" />
      </section>

      <div className="dp-section-bg">
        <section id="android-what" className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Android Development — Mobile First</h2>
          <p className="dp-section-subtitle scroll-anim">Building for the world's most popular mobile platform</p>
          <div className="dp-what-grid">
            <div className="dp-what-text scroll-anim slide-left">
              <h3>Powering Billions of Devices</h3>
              <p><strong>Android</strong> powers over 3 billion active devices worldwide, making it the most widely used mobile operating system on the planet.</p>
              <p><strong>Android development</strong> lets you create apps that run across an enormous range of devices — from budget smartphones to flagship tablets and smart TVs.</p>
              <p>At Elabs, we build real, functional Android applications using the latest tools and best practices endorsed by Google's own engineering team.</p>
            </div>
            <div className="dp-feature-cards scroll-anim slide-right">
              <div className="dp-feature-card"><strong>Kotlin Programming</strong>Write concise, expressive, and safe code with Google's recommended language for Android.</div>
              <div className="dp-feature-card"><strong>Jetpack Compose UI</strong>Build beautiful native UIs declaratively with Android's modern toolkit.</div>
              <div className="dp-feature-card"><strong>Firebase Integration</strong>Connect apps to real-time backends with authentication, cloud storage, and analytics.</div>
              <div className="dp-feature-card"><strong>Play Store Deployment</strong>Package, test, and publish your app to millions of Android users worldwide.</div>
            </div>
          </div>
        </section>
      </div>

      <div className="dp-section-bg">
        <section className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Tools & Technologies We Use</h2>
          <p className="dp-section-subtitle scroll-anim">Google's modern Android development ecosystem</p>
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
          <h2 className="dp-section-title scroll-anim zoom-in">Android at Elabs — Impact</h2>
          <p className="dp-section-subtitle scroll-anim">Why Android development matters</p>
          <div className="dp-stats-grid">
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">3B+</div><h4>Active Devices</h4><p>Android runs on over 3 billion active devices globally</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">72%</div><h4>Market Share</h4><p>Android dominates the global smartphone market</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">8+</div><h4>Apps Built</h4><p>Real Android applications created by Elabs members</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">∞</div><h4>Opportunity</h4><p>From fintech to healthcare, every industry needs mobile apps</p></div>
          </div>
          <div className="dp-impact-box scroll-anim zoom-in">
            <h3>The Real Impact</h3>
            <p>Mobile apps have transformed how people live, work, and communicate. At Elabs, Android development goes beyond coding — it's about designing experiences that solve real problems for real users. Our members build apps they're proud to show the world, not just classroom exercises.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Android;