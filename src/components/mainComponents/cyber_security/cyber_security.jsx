import React from 'react';
import '../shared/DomainPage.css';
import DomainParticles from '../shared/DomainParticles';
import useDomainScrollAnimations from '../shared/useDomainScrollAnimations';
import RotatingText from '../shared/RotatingText';

const Cyber = () => {
  useDomainScrollAnimations();

  const tools = [
    { icon: '🐉', name: 'Kali Linux', desc: 'The industry-standard penetration testing OS, packed with hundreds of security auditing tools.', link: 'https://www.kali.org' },
    { icon: '🔬', name: 'Wireshark', desc: 'Powerful network protocol analyzer for capturing and interactively inspecting live network traffic.', link: 'https://www.wireshark.org' },
    { icon: '💥', name: 'Metasploit', desc: "World's most widely used penetration testing framework for developing, testing, and executing exploits.", link: 'https://www.metasploit.com' },
    { icon: '🕷️', name: 'Burp Suite', desc: 'Leading web application security testing platform for finding vulnerabilities in web apps.', link: 'https://portswigger.net/burp' },
    { icon: '🗺️', name: 'Nmap', desc: 'Open-source network scanner for host discovery, port scanning, and OS/service detection.', link: 'https://nmap.org' },
    { icon: '🛡️', name: 'OWASP ZAP', desc: 'Open-source web app scanner actively maintained by OWASP for finding security vulnerabilities.', link: 'https://www.zaproxy.org' },
  ];

  return (
    <div className="domain-page">
      <DomainParticles />

      <section className="dp-hero">
        <div className="dp-hero-content">
          <p className="dp-hero-subtitle-line">Defend digital systems using</p>
          <h1 className="dp-hero-title">
            <span className="dp-rotating-wrapper">
              <RotatingText
                texts={['Kali Linux', 'Metasploit', 'Wireshark', 'Burp Suite', 'Nmap']}
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
            Master the art of ethical hacking, penetration testing, and digital defense. Learn to think like an attacker to build impenetrable systems and protect critical infrastructure.
          </p>
          <div className="dp-hero-ctas">
            <button className="dp-btn dp-btn-primary" onClick={() => document.getElementById('cyber-what')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Now
            </button>
            <button className="dp-btn dp-btn-secondary">Join Cyber @ Elabs</button>
          </div>
        </div>
        <div className="dp-hero-fade" />
      </section>

      <div className="dp-section-bg">
        <section id="cyber-what" className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Cyber Security — The Digital Shield</h2>
          <p className="dp-section-subtitle scroll-anim">Protecting systems, networks, and data from digital attacks</p>
          <div className="dp-what-grid">
            <div className="dp-what-text scroll-anim slide-left">
              <h3>Think Like a Hacker, Defend Like a Pro</h3>
              <p><strong>Cyber Security</strong> is the practice of protecting systems, networks, and programs from digital attacks, unauthorized access, and data breaches that can cause massive harm.</p>
              <p><strong>Ethical Hacking</strong> involves legally breaking into computer systems to discover vulnerabilities before malicious attackers can exploit them — then fixing those weaknesses.</p>
              <p>At Elabs, we train security-minded engineers who understand both offense and defense — the key to building truly secure systems in today's threat landscape.</p>
            </div>
            <div className="dp-feature-cards scroll-anim slide-right">
              <div className="dp-feature-card"><strong>Network Security</strong>Analyze traffic, detect intrusions, and secure communication channels across networks.</div>
              <div className="dp-feature-card"><strong>Penetration Testing</strong>Perform structured ethical hacks to expose system weaknesses before attackers do.</div>
              <div className="dp-feature-card"><strong>Web App Security</strong>Find and fix OWASP Top 10 vulnerabilities in web applications and APIs.</div>
              <div className="dp-feature-card"><strong>CTF Competitions</strong>Practice offensive and defensive skills in Capture the Flag cybersecurity challenges.</div>
            </div>
          </div>
        </section>
      </div>

      <div className="dp-section-bg">
        <section className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Tools & Technologies We Use</h2>
          <p className="dp-section-subtitle scroll-anim">Industry-standard security tooling</p>
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
          <h2 className="dp-section-title scroll-anim zoom-in">Cyber Security at Elabs — Impact</h2>
          <p className="dp-section-subtitle scroll-anim">Why cybersecurity skills are critical</p>
          <div className="dp-stats-grid">
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">$8T</div><h4>Global Cost</h4><p>Cybercrime expected to cost the world $8 trillion in 2023</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">3.5M</div><h4>Job Gap</h4><p>3.5 million unfilled cybersecurity positions worldwide</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">CTF</div><h4>Competitions</h4><p>Members compete in national-level CTF cybersecurity events</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">100%</div><h4>Ethical</h4><p>All hacking at Elabs is performed ethically in controlled environments</p></div>
          </div>
          <div className="dp-impact-box scroll-anim zoom-in">
            <h3>The Real Impact</h3>
            <p>Every organization — from hospitals to banks to power grids — depends on security experts. At Elabs, our cyber security program isn't just about learning tools. It's about developing an attacker's mindset and a defender's discipline. Our members come out ready to protect real systems in the real world.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cyber;