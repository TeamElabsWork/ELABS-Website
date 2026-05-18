import React from 'react';
import './shared/DomainPage.css';
import DomainParticles from './shared/DomainParticles';
import useDomainScrollAnimations from './shared/useDomainScrollAnimations';
import RotatingText from './shared/RotatingText';

const CloudComputing = () => {
  useDomainScrollAnimations();

  const tools = [
    { icon: '☁️', name: 'Amazon Web Services', desc: "The world's most comprehensive cloud platform — compute, storage, networking, AI, and hundreds of services.", link: 'https://aws.amazon.com' },
    { icon: '🐳', name: 'Docker', desc: 'Containerization platform that packages applications and their dependencies into portable, reproducible containers.', link: 'https://www.docker.com' },
    { icon: '☸️', name: 'Kubernetes', desc: 'Open-source orchestration system for automating deployment, scaling, and management of containerized applications.', link: 'https://kubernetes.io' },
    { icon: '🏗️', name: 'Terraform', desc: 'Infrastructure as Code tool for provisioning and managing cloud resources using declarative configuration files.', link: 'https://www.terraform.io' },
    { icon: '🔄', name: 'Jenkins / GitHub Actions', desc: 'CI/CD automation platforms for building, testing, and deploying software continuously and reliably.', link: 'https://www.jenkins.io' },
    { icon: '🐧', name: 'Linux & Bash', desc: 'Foundation of cloud engineering — command-line mastery, shell scripting, and Linux system administration.', link: 'https://www.linux.org' },
  ];

  return (
    <div className="domain-page">
      <DomainParticles />

      <section className="dp-hero">
        <div className="dp-hero-content">
          <p className="dp-hero-subtitle-line">Scale without limits using</p>
          <h1 className="dp-hero-title">
            <span className="dp-rotating-wrapper">
              <RotatingText
                texts={['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Linux']}
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
            Master the infrastructure of the modern internet. From Linux fundamentals to Kubernetes orchestration — learn to build, deploy, and scale systems that never go down.
          </p>
          <div className="dp-hero-ctas">
            <button className="dp-btn dp-btn-primary" onClick={() => document.getElementById('cloud-what')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Now
            </button>
            <button className="dp-btn dp-btn-secondary">Join Cloud @ Elabs</button>
          </div>
        </div>
        <div className="dp-hero-fade" />
      </section>

      <div className="dp-section-bg">
        <section id="cloud-what" className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Cloud Computing — The Backbone of the Internet</h2>
          <p className="dp-section-subtitle scroll-anim">Infinite compute power, on demand, globally distributed</p>
          <div className="dp-what-grid">
            <div className="dp-what-text scroll-anim slide-left">
              <h3>Infrastructure That Powers Everything</h3>
              <p><strong>Cloud Computing</strong> delivers on-demand computing resources — servers, storage, databases, networking — over the internet, eliminating the need for physical hardware ownership.</p>
              <p><strong>DevOps and Site Reliability Engineering</strong> bridges development and operations, using automation, CI/CD pipelines, and containerization to ship code faster and more reliably than ever.</p>
              <p>At Elabs, we deploy real applications to AWS, manage containers with Docker and Kubernetes, and build automated pipelines that power production systems.</p>
            </div>
            <div className="dp-feature-cards scroll-anim slide-right">
              <div className="dp-feature-card"><strong>IaaS / PaaS / SaaS</strong>Understand the cloud service models and when to use each for maximum efficiency and cost-effectiveness.</div>
              <div className="dp-feature-card"><strong>Containerization & Docker</strong>Package apps into containers that run identically in development, staging, and production.</div>
              <div className="dp-feature-card"><strong>CI/CD Pipelines</strong>Automate testing and deployment so every code change ships safely and instantly.</div>
              <div className="dp-feature-card"><strong>Infrastructure as Code</strong>Define and provision cloud resources programmatically using Terraform and CloudFormation.</div>
            </div>
          </div>
        </section>
      </div>

      <div className="dp-section-bg">
        <section className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Tools & Technologies We Use</h2>
          <p className="dp-section-subtitle scroll-anim">The modern DevOps and cloud engineering stack</p>
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
          <h2 className="dp-section-title scroll-anim zoom-in">Cloud Computing at Elabs — Impact</h2>
          <p className="dp-section-subtitle scroll-anim">Why cloud skills are non-negotiable for modern engineers</p>
          <div className="dp-stats-grid">
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">$700B</div><h4>Market Size</h4><p>Global cloud computing market projected to exceed $700B by 2028</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">94%</div><h4>Enterprise Adoption</h4><p>94% of enterprises use cloud services in their operations</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">99.9%</div><h4>Uptime Goal</h4><p>Elabs cloud projects target enterprise-grade availability standards</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">AWS</div><h4>Certified Path</h4><p>Members guided toward industry-recognized AWS and GCP certifications</p></div>
          </div>
          <div className="dp-impact-box scroll-anim zoom-in">
            <h3>The Real Impact</h3>
            <p>Cloud engineers are the architects of the modern internet. Every app, website, and service you use runs on cloud infrastructure. At Elabs, our cloud domain teaches engineers to think at scale — building systems that are resilient, cost-efficient, and fast. These skills are among the highest-paid in all of software engineering.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CloudComputing;
