import React from 'react';
import './shared/DomainPage.css';
import DomainParticles from './shared/DomainParticles';
import useDomainScrollAnimations from './shared/useDomainScrollAnimations';
import RotatingText from './shared/RotatingText';

const IoTEmbedded = () => {
  useDomainScrollAnimations();

  const [isLightMode, setIsLightMode] = React.useState(() =>
    document.documentElement.classList.contains('dark')
  );

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLightMode(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  const tools = [
    { icon: '🔵', name: 'Arduino', desc: 'The most beginner-friendly microcontroller platform — perfect for prototyping sensors, motors, and IoT devices.', link: 'https://www.arduino.cc' },
    { icon: '🍓', name: 'Raspberry Pi', desc: 'A full single-board Linux computer — powerful enough to run web servers, AI, and complex IoT applications.', link: 'https://www.raspberrypi.com' },
    { icon: '📡', name: 'ESP32 / ESP8266', desc: 'Dual-core WiFi + Bluetooth microcontrollers used in thousands of commercial IoT products worldwide.', link: 'https://www.espressif.com' },
    { icon: '⚙️', name: 'FreeRTOS', desc: 'Industry-standard real-time operating system for embedded devices — enables true multitasking on microcontrollers.', link: 'https://www.freertos.org' },
    { icon: '📮', name: 'MQTT Protocol', desc: 'Lightweight messaging protocol designed for IoT — enables efficient machine-to-machine communication.', link: 'https://mqtt.org' },
    { icon: '💻', name: 'C / C++ / Python', desc: 'The core programming languages of embedded systems — from bare-metal firmware to high-level IoT scripts.', link: 'https://www.cprogramming.com' },
  ];

  return (
    <div className="domain-page">
      <DomainParticles />

      {/* Hero */}
      <section className="dp-hero">
        <div className="dp-hero-content">
          <p className="dp-hero-subtitle-line">Build connected hardware using</p>
          <h1 className="dp-hero-title">
            <span className="dp-rotating-wrapper">
              <RotatingText
                texts={['Arduino', 'Raspberry Pi', 'ESP32', 'FreeRTOS', 'MQTT']}
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
            Bridge the gap between the digital and physical worlds. From blinking LEDs to cloud-connected sensor networks — master embedded systems and IoT at Elabs.
          </p>
          <div className="dp-hero-ctas">
            <button className="dp-btn dp-btn-primary" onClick={() => document.getElementById('iot-what')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Now
            </button>
            <button className="dp-btn dp-btn-secondary">Join IoT @ Elabs</button>
          </div>
        </div>
        <div className="dp-hero-fade" />
      </section>

      {/* What is IoT */}
      <div className="dp-section-bg">
        <section id="iot-what" className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">IoT & Embedded Systems — Intelligence at the Edge</h2>
          <p className="dp-section-subtitle scroll-anim">Giving the physical world a digital brain</p>
          <div className="dp-what-grid">
            <div className="dp-what-text scroll-anim slide-left">
              <h3>Where Hardware Meets Software</h3>
              <p><strong>IoT (Internet of Things)</strong> connects everyday physical devices — sensors, actuators, machines — to the internet, enabling data collection, remote control, and intelligent automation at massive scale.</p>
              <p><strong>Embedded Systems</strong> are specialized computer systems designed to perform dedicated functions within a larger device — from the chip inside your microwave to the ECU in a car engine.</p>
              <p>At Elabs, we build real hardware projects — smart monitoring systems, robotics, automation circuits — and connect them to cloud backends and mobile apps.</p>
            </div>
            <div className="dp-feature-cards scroll-anim slide-right">
              <div className="dp-feature-card"><strong>Microcontroller Programming</strong>Write firmware in C/C++ for Arduino, ESP32, and STM32 platforms from scratch.</div>
              <div className="dp-feature-card"><strong>Sensor Integration</strong>Interact with temperature, pressure, gyroscope, ultrasonic, and dozens of other sensor types.</div>
              <div className="dp-feature-card"><strong>Wireless Connectivity</strong>Build WiFi, Bluetooth, LoRa, and MQTT-based communication between devices.</div>
              <div className="dp-feature-card"><strong>Cloud & App Integration</strong>Connect hardware to Firebase, AWS IoT, or custom REST APIs and visualize data live.</div>
            </div>
          </div>
        </section>
      </div>

      {/* Tools */}
      <div className="dp-section-bg">
        <section className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Tools & Technologies We Use</h2>
          <p className="dp-section-subtitle scroll-anim">The modern embedded systems and IoT toolkit</p>
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
          <h2 className="dp-section-title scroll-anim zoom-in">IoT at Elabs — Impact</h2>
          <p className="dp-section-subtitle scroll-anim">Why embedded systems are the backbone of modern technology</p>
          <div className="dp-stats-grid">
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">30+</div><h4>Projects Built</h4><p>Real IoT and embedded systems projects built by Elabs members</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">30B</div><h4>IoT Devices</h4><p>Connected IoT devices projected to be active worldwide by 2030</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">10+</div><h4>Hackathon Wins</h4><p>National competition victories using embedded systems projects</p></div>
            <div className="dp-stat-card scroll-anim"><div className="dp-stat-number">SIH</div><h4>Ready</h4><p>Members trained and prepared for Smart India Hackathon challenges</p></div>
          </div>
          <div className="dp-impact-box scroll-anim zoom-in">
            <h3>The Real Impact</h3>
            <p>Embedded systems power everything — from medical devices to spacecraft, from factory automation to the smart devices in your pocket. At Elabs, IoT is not just a learning exercise. Members deploy real monitoring systems on campus, build hardware that solves actual problems, and develop the cross-disciplinary thinking that makes them invaluable engineers.</p>
          </div>
        </section>
      </div>

      {/* 3D Model Viewer */}
      <div className="dp-section-bg">
        <section className="dp-section">
          <h2 className="dp-section-title scroll-anim zoom-in">Interactive 3D Hardware Explorer</h2>
          <p className="dp-section-subtitle scroll-anim">Rotate, zoom, and explore the Raspberry Pi Compute Module 5 IO Board in 3D</p>
          <div className="scroll-anim zoom-in" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '100%',
              maxWidth: '900px',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '2px solid var(--dp-border)',
              boxShadow: '0 8px 40px var(--dp-glow-soft)',
              background: 'var(--dp-bg-card)',
            }}>
              <iframe
                title="Raspberry pi Compute Module 5 IO Board"
                frameBorder="0"
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking="true"
                execution-while-out-of-viewport="true"
                execution-while-not-rendered="true"
                web-share="true"
                src={`https://sketchfab.com/models/e9eff70e6afb4498a50e72d6fa564bdb/embed?autostart=1&ui_theme=${isLightMode ? 'light' : 'dark'}&ui_infos=0&ui_controls=1&ui_watermark=0`}
                style={{
                  width: '100%',
                  height: '520px',
                  background: isLightMode ? '#ffedde' : '#000',
                  display: 'block',
                }}
              />
              <p style={{ fontSize: 12, padding: '8px 16px', margin: 0, color: 'var(--dp-text-gray)', background: 'var(--dp-bg-card)', borderTop: '1px solid var(--dp-border)' }}>
                <a href="https://sketchfab.com/3d-models/raspberry-pi-compute-module-5-io-board-e9eff70e6afb4498a50e72d6fa564bdb" target="_blank" rel="nofollow" style={{ color: '#ff6b00' }}>
                  Raspberry Pi CM5 IO Board
                </a>{' '}by{' '}
                <a href="https://sketchfab.com/Fa_Sketch" target="_blank" rel="nofollow" style={{ color: '#ff6b00' }}>F2A</a>
                {' '}on Sketchfab
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IoTEmbedded;
