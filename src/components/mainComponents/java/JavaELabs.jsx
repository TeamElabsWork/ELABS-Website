import React from 'react';
import '../shared/DomainPage.css';
import DomainParticles from '../shared/DomainParticles';
import useDomainScrollAnimations from '../shared/useDomainScrollAnimations';
import RotatingText from '../shared/RotatingText';

const JavaELabs = () => {
  useDomainScrollAnimations();

  const tools = [
    { icon: '☕', name: 'Java SE / JDK', desc: 'The core Java development kit — the foundation for all Java-based applications from desktop to enterprise.', link: 'https://www.oracle.com/java/' },
    { icon: '🌱', name: 'Spring Boot', desc: "The industry's go-to framework for building production-ready Java microservices and REST APIs with minimal configuration.", link: 'https://spring.io/projects/spring-boot' },
    { icon: '🐘', name: 'Hibernate & JPA', desc: 'Object-relational mapping frameworks that make database interactions elegant, type-safe, and maintainable in Java.', link: 'https://hibernate.org' },
    { icon: '🐬', name: 'MySQL / PostgreSQL', desc: 'Relational database systems that pair seamlessly with Java backends for structured, scalable data storage.', link: 'https://www.mysql.com' },
    { icon: '🔧', name: 'Maven / Gradle', desc: 'Build automation and dependency management tools that streamline Java project builds and deployments.', link: 'https://maven.apache.org' },
    { icon: '🧪', name: 'JUnit & Mockito', desc: 'Testing frameworks for writing unit and integration tests — the backbone of production-quality Java code.', link: 'https://junit.org' },
  ];

  return (
    <div className="domain-page">
      <DomainParticles />

      {/* Hero */}
      <section className="dp-hero">
        <div className="dp-hero-content">
          <p className="dp-hero-subtitle-line">Build robust enterprise systems with</p>
          <h1 className="dp-hero-title">
            <span className="dp-rotating-wrapper">
              <RotatingText
                texts={['Spring Boot', 'Hibernate', 'Maven', 'JUnit', 'REST APIs']}
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
            Master the language that powers the world's most critical software. From object-oriented fundamentals to microservices at scale — Java at Elabs means enterprise-grade engineering.
          </p>
          <div className="dp-hero-ctas">
            <button className="dp-btn dp-btn-primary" onClick={() => document.getElementById('java-what')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Now
            </button>
            <button className="dp-btn dp-btn-secondary">Join Java @ Elabs</button>
          </div>
        </div>
        <div className="dp-hero-fade" />
      </section>

      {/* What is Java */}
      <div className="dp-section-bg">
        <section id="java-what" className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Java — The Language of Enterprise</h2>
          <p className="dp-section-subtitle scroll-anim">Write once, run anywhere — powering 3 billion devices</p>
          <div className="dp-what-grid">
            <div className="dp-what-text scroll-anim slide-left">
              <h3>The Backbone of Modern Software</h3>
              <p><strong>Java</strong> is one of the world's most widely used programming languages — statically typed, object-oriented, and designed from the ground up for reliability, performance, and scalability.</p>
              <p><strong>Backend development</strong> with Java means building REST APIs, microservices, and enterprise applications that handle millions of requests per day — the kind of systems that power banking, logistics, and e-commerce platforms globally.</p>
              <p>At Elabs, Java members build real full-stack applications using Spring Boot, connect to databases, write unit tests, and ship production-quality code.</p>
            </div>
            <div className="dp-feature-cards scroll-anim slide-right">
              <div className="dp-feature-card"><strong>Object-Oriented Design</strong>Master classes, interfaces, inheritance, polymorphism, and the core principles of OOP.</div>
              <div className="dp-feature-card"><strong>Spring Boot APIs</strong>Build RESTful microservices with authentication, validation, and database integration.</div>
              <div className="dp-feature-card"><strong>Database Integration</strong>Connect to MySQL and PostgreSQL using JPA/Hibernate with efficient query optimization.</div>
              <div className="dp-feature-card"><strong>Testing & Clean Code</strong>Write robust unit and integration tests using JUnit and follow SOLID design principles.</div>
            </div>
          </div>
        </section>
      </div>

      {/* Tools */}
      <div className="dp-section-bg">
        <section className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Tools & Technologies We Use</h2>
          <p className="dp-section-subtitle scroll-anim">The modern Java enterprise development stack</p>
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
          <h2 className="dp-section-title scroll-anim zoom-in">Java at Elabs — Impact</h2>
          <p className="dp-section-subtitle scroll-anim">Why Java remains the cornerstone of enterprise software</p>
          <div className="dp-stats-grid">
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">3B+</div><h4>Devices</h4><p>Java runs on over 3 billion devices worldwide — desktops, servers, and Android apps</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">#3</div><h4>Most Used</h4><p>Java consistently ranks among the top 3 most-used programming languages globally</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">30yr</div><h4>Proven</h4><p>30+ years of enterprise adoption — Java is stable, mature, and battle-tested</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">💼</div><h4>Employable</h4><p>Java backend developer is one of the highest-paid engineering roles in India and globally</p></div>
          </div>
          <div className="dp-impact-box scroll-anim zoom-in">
            <h3>The Real Impact</h3>
            <p>Java is the language of choice for banks, insurance companies, logistics giants, and government systems — any organization that demands reliability and scale. At Elabs, Java members go beyond syntax. They architect systems, think about concurrency and performance, and build projects that demonstrate real backend engineering competence — making them ready for the toughest technical interviews.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JavaELabs;