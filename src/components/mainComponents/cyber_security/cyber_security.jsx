import React, { useEffect, useRef } from 'react';
import './cyber_security.css';

// --- IMAGE IMPORTS ---
// Ensure these files exist in src/Images/
import cyberlogo from "./Images/CyberSecurity.png";
import appliImg from "./Images/applications-logo.jpeg"
import cyberl from "./Images/cyber-logo.jpeg";
import kaliImg from "./Images/kali-logo.jpeg";
import ethicalImg from "./Images/ethical-logo.jpeg";
import nftImg from "./Images/nft-logo.jpeg";
import techImg from "./Images/tech-stack-logo.jpeg";

const CyberElabs = () => {
  const canvasRef = useRef(null);
  const logoRef = useRef(null);

  const openInfo = (url) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    // --- 1. Page Load Animation Logic ---
    document.body.classList.add('java-page-loading');
    
    // Trigger animation shortly after mount
    const timer = setTimeout(() => {
      document.body.classList.add('java-page-loaded');
    }, 100);

    // --- 2. 3D Logo Tilt Logic ---
    const logo = logoRef.current;
    const handleLogoMove = (e) => {
      if (!logo) return;
      const x = (window.innerWidth / 2 - e.pageX) / 25;
      const y = (window.innerHeight / 2 - e.pageY) / 25;
      logo.style.transform = `rotateY(${x}deg) rotateX(${y}deg) scale(1.05)`;
    };

    const handleLogoLeave = () => {
      if (!logo) return;
      logo.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
    };

    if (logo) {
      logo.addEventListener("mousemove", handleLogoMove);
      logo.addEventListener("mouseleave", handleLogoLeave);
    }

    // --- 3. Intersection Observer (Scroll Animations) ---
    const animatedSections = document.querySelectorAll(
      ".fade-up, .fade-left, .fade-right, .fade-down, .zoom-in, .slide-left, .slide-up, .tools-grid"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            if (entry.target.classList.contains("tools-grid")) {
              entry.target.querySelectorAll(".tool-card").forEach((card, i) => {
                setTimeout(() => card.classList.add("visible"), i * 120);
              });
            }
          } else {
            entry.target.classList.remove("visible");
            entry.target.querySelectorAll(".tool-card").forEach((card) =>
              card.classList.remove("visible")
            );
          }
        });
      },
      { threshold: 0.2 }
    );
    animatedSections.forEach((section) => observer.observe(section));

    // --- 4. Particle Canvas Logic ---
    const canvas = canvasRef.current;
    let animationFrameId;
    let resizeHandler;

    if (canvas) {
      const ctx = canvas.getContext("2d");
      
      const getDimensions = () => ({
        width: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight
      });

      let { width, height } = getDimensions();
      const NUM_PARTICLES = 250;
      const GLOW_COLOR = "rgba(255, 165, 0, 0.9)";
      const PARTICLE_COLOR = "rgba(255, 165, 0, 0.7)";

      class Particle {
        constructor() {
          this.reset();
        }
        reset() {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.radius = Math.random() * 1.2 + 0.8;
          this.vx = (Math.random() - 0.5) * 0.2;
          this.vy = (Math.random() - 0.5) * 0.2;
        }
        update() {
          this.x += this.vx;
          this.y += this.vy;
          if (this.x < 0 || this.x > width) this.vx *= -1;
          if (this.y < 0 || this.y > height) this.vy *= -1;
        }
        draw() {
          ctx.beginPath();
          ctx.shadowBlur = this.radius * 15;
          ctx.shadowColor = GLOW_COLOR;
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          ctx.fillStyle = PARTICLE_COLOR;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      let particles = [];
      const initParticles = () => {
        canvas.width = width;
        canvas.height = height;
        particles = Array.from({ length: NUM_PARTICLES }, () => new Particle());
      };

      const animateParticles = () => {
        animationFrameId = requestAnimationFrame(animateParticles);
        ctx.fillStyle = "#0d0a10";
        ctx.fillRect(0, 0, width, height);
        particles.forEach((p) => {
          p.update();
          p.draw();
        });
      };

      resizeHandler = () => {
        const dims = getDimensions();
        width = dims.width;
        height = dims.height;
        canvas.width = width;
        canvas.height = height;
        initParticles();
      };

      window.addEventListener("resize", resizeHandler);
      initParticles();
      animateParticles();
    }

    // --- Cleanup ---
    return () => {
      clearTimeout(timer);
      document.body.classList.remove('java-page-loading', 'java-page-loaded');

      if (logo) {
        logo.removeEventListener("mousemove", handleLogoMove);
        logo.removeEventListener("mouseleave", handleLogoLeave);
      }
      
      observer.disconnect();

      if (resizeHandler) window.removeEventListener("resize", resizeHandler);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas id="particleCanvas" ref={canvasRef}></canvas>
      
      {/* Hero Section */}
      <section className="front">
        <div className="javalogo">
          <img 
            src={cyberlogo}
            id="javalogoo"
            alt="Cyber Logo"
            ref={logoRef}
          />
        </div>
        <div className="front-box">
          <h1 className="hero-title">
             Cyber Security at E Labs
          </h1>
          <p>
             Welcome to the <span>Cyber Security domain</span> of <span>E Labs! </span> 
             <u><b>The Cyber Security</b></u> domain focuses on <span>protecting systems, networks, and data from digital attacks. </span> 
             With the rapid growth of technology, <b><u>cyber threats are increasing every day. </u></b> 
             This domain equips students with practical skills to identify <span>vulnerabilities, secure systems, and respond to real-world cyber incidents. </span> 
             <b><u>Members gain hands-on exposure to <span>industry-relevant tools</span> and <span>techniques</span> used by security professionals worldwide.</u></b>
          </p>
          <p> 
             At <span>E Labs</span>, we train <span>innovators</span> to build <span>secure</span>, and <span>scalable systems </span>  
              with <span>Cyber Security Technologies</span>.
          </p>
        </div>
      </section>  

      {/* Info Section */}
      <section className="java-info-section" id="java-info">
        <div className="info-box fade-left">
          <div className="info-content">
            <h2>What is Cyber Security?</h2>
            <p>
              <strong>Cyber Security</strong> is the practice of protecting computers, networks, systems, and data from digital attacks, unauthorized access, and damage. 
              It ensures that information remains safe, reliable, and accessible.
            </p>
            <h3 className="rr"><span><u>Core Features:</u></span></h3>
            <p>
              • Protects data from unauthorized access<br />
              • Ensures data is accurate and not altered<br />
              • Keeps systems and data accessible when needed<br />
              • Verifies user identities<br />
              • Controls access to resources<br />
              • Identifies and prevents cyber attacks
            </p>
            <button className="more-btn" onClick={() => openInfo('https://www.w3schools.com/cybersecurity/')}>Know More</button>
          </div>
          <div className="info-image">
            <img src={cyberlogo} alt="What is Cyber-Security" />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools-section slide-up" id="java-tools">
        <h2>Popular Cyber Security Tools and Technologies</h2>
        <div className="tools-grid">
          <div className="tool-card">
            <h3>Kali Linux</h3>
            <p>A powerful penetration-testing Linux distribution used for ethical hacking and security assessments.</p>
          </div>
          <div className="tool-card">
            <h3>Nmap</h3>
            <p>A network scanning tool used to discover hosts, services, and vulnerabilities.</p>
          </div>
          <div className="tool-card">
            <h3>Wireshark</h3>
            <p>A packet-analyzing tool for monitoring and troubleshooting network traffic.</p>
          </div>
          <div className="tool-card">
            <h3>Burp Suite</h3>
            <p>A web security testing tool used to find vulnerabilities in web applications.</p>
          </div>
          <div className="tool-card">
            <h3>NFT (Network Forensics Tools) Hunting</h3>
            <p>Techniques and tools used to detect, analyze, and trace malicious network activities.</p>
          </div>
          <div className="tool-card">
            <h3>John the Ripper</h3>
            <p>A password-cracking tool used to test password strength.</p>
          </div>
          <div className="tool-card">
            <h3>Hydra</h3>
            <p>A fast network login cracking tool supporting multiple protocols.</p>
          </div>
          <div className="tool-card">
            <h3>Metasploit Framework</h3>
            <p>A penetration-testing platform for developing and executing exploits.</p>
          </div>
        </div>
      </section>

      {/* Cyber Security in E Labs Section */}
      <div className="info-box reverse slide-left">
        <div className="info-content">
          <h2>Cyber Security in E Labs</h2>
          <p className="rr">
            At E Labs, students get <b><u>hands-on experience</u></b> with <span><b>real security tools</b></span> along with a <b><u>strong foundation</u></b> in <b>ethical hacking and defense strategies.</b>
          </p>
          <h3 className="rr"><span><b>Advantages</b> of joining <b><u>Cyber Security </u></b> Domain <b>at E labs:</b></span></h3>
          <p>
            • Exposure to real-world cyber attack scenarios<br />
            • Opportunities to participate in CTFs (Capture The Flag) and hackathons<br />
            • Improves problem-solving and analytical thinking<br />
            • Builds a strong profile for internships and placements<br />
            • Prepares students for certifications like CEH, Security+, and OSCP
          </p>
          <button className="more-btn" onClick={() => openInfo('elabs')}>Know More</button>
        </div>
        <div className="info-image1">
          <img src={cyberl} alt="Cyber-Sec in E Labs" />
        </div>
      </div>

      {/* Kali Linux Section */}
      <div className="info-box fade-down zoom-in">
        <div className="info-content">
          <h2>Kali Linux</h2>
          <p>
            <b><u>Kali Linux</u></b> is a powerful, open-source operating system specifically designed for penetration testing and ethical hacking. 
            It comes preloaded with hundreds of security tools used for vulnerability assessment, network analysis, and digital forensics.
          </p>
          <h3 className="rr"><span>What you'll learn:</span></h3>
          <p>
            • Penetration testing fundamentals<br />
            • Network scanning and enumeration<br />
            • Password cracking techniques<br />
            • Wireless security testing<br />
            • Web application security testing
          </p>
          <button className="more-btn" onClick={() => openInfo('https://www.geeksforgeeks.org/linux-unix/introduction-to-kali-linux/')}>Know More</button>
        </div>
        <div className="info-image">
          <img src={kaliImg} alt="Kali Image" />
        </div>
      </div>  

      {/* Ethical Hacking & Vulnerability Assessment Section */}
      <div className="info-box reverse slide-left">
        <div className="info-content">
          <h2>Ethical Hacking & Vulnerability Assessment</h2>
          <p className="rr">
            <b><u>Ethical hacking</u></b> involves legally testing systems to find security weaknesses before malicious hackers can exploit them. 
            Members learn how attackers think and how to defend against them effectively.
          </p>
          <h3 className="rr"><span>What you'll learn:</span></h3>
          <p>
            • Footprinting and reconnaissance<br />
            • Vulnerability scanning<br />
            • Exploitation techniques<br />
            • Privilege escalation<br />
            • Security reporting and mitigation
          </p>
          <button className="more-btn" onClick={() => openInfo('https://www.geeksforgeeks.org/computer-networks/what-is-vulnerability-assessment/')}>Know More</button>
        </div>
        <div className="info-image1">
          <img src={ethicalImg} alt="Ethical Hacking" />
        </div>
      </div>

      {/* NFT Hunting (Network & Threat Hunting) Section */}
      <div className="info-box fade-down zoom-in">
        <div className="info-content">
          <h2>NFT Hunting (Network & Threat Hunting)</h2>
          <p>
            <b><u>NFT (Network & Forensic Threat)</u></b> hunting focuses on proactively detecting suspicious activities within networks and systems. 
            This domain trains members to identify hidden threats and analyze cyber attacks.
          </p>
          <h3 className="rr"><span>What skills you'll develop:</span></h3>
          <p>
            • Network traffic analysis<br />
            • Log monitoring and investigation<br />
            • Malware behavior analysis<br />
            • Incident response techniques<br />
            • Digital forensics basics
          </p>
          <button className="more-btn" onClick={() => openInfo('https://www.geeksforgeeks.org/ethical-hacking/what-is-threat-hunting-in-cyber-security/')}>Know More</button>
        </div>
        <div className="info-image">
          <img src={nftImg} alt="NFT Hunting" />
        </div>
      </div>  

      {/* Tech Stack & Tools Used Section */}
      <section className="applications-section fade-up zoom-in" id="applications">
        <h2>Tech Stack & Tools Used in Cyber Security</h2>
        <div className="applications-header">
          <div className="app-image">
           <img src={techImg} alt="Tech Stack in Cyber" />
          </div>
          <div className="app-content">
            <p>
              <b><u>Cyber security</u></b> uses a combination of technologies, tools, and frameworks to protect systems, networks, and data from cyber threats. 
              These tools help in detecting <b>vulnerabilities, preventing attacks, monitoring activities, and responding to security incidents. </b> 
              Together, they ensure safe and reliable digital operations.
            </p>
          </div>
        </div>
        <div className="applications-grid">
          <div className="app-card">
            <h3>Operating Systems:</h3>
            <p><b><u>Kali Linux, Ubuntu, and Windows</u></b> are used as platforms for penetration testing, system administration, and security analysis.</p>
          </div>
          <div className="app-card">
            <h3>Security Tools:</h3>
            <p><b><u>Nmap, Metasploit, Burp Suite, Wireshark, and John the Ripper</u></b> are used to scan networks, find vulnerabilities, test web security, analyze traffic, and assess password strength.</p>
          </div>
          <div className="app-card">
            <h3>Programming Languages:</h3>
            <p><b><u>Python, Bash, and JavaScript</u></b> are used for scripting, automation, tool development, and exploit creation.</p>
          </div>
          <div className="app-card">
            <h3>Web Technologies:</h3>
            <p><b><u>HTML, CSS, and JavaScript</u></b> form the foundation of web applications and are analyzed for web security vulnerabilities.</p>
          </div>
          <div className="app-card">
            <h3>Networking Concepts:</h3>
            <p><b><u>TCP/IP, DNS, HTTP/HTTPS, and Firewalls</u></b> are core networking components essential for understanding and securing data communication.</p>
          </div>
          <div className="app-card">
            <h3>Cloud & Security Basics:</h3>
            <p><b><u>IAM, encryption, and authentication</u></b> are used to control access, protect data, and verify identities in digital and cloud environments.</p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="applications-section fade-up zoom-in" id="applications">
        <h2>Applications of Cyber Security</h2>
        <div className="applications-header">
          <div className="app-image">
           <img src={appliImg} alt="Applications of Cyber-Security" />
          </div>
          <div className="app-content">
            <p>
              <strong>Cyber security</strong> is applied to protect <u>digital systems, networks, and data from unauthorized access and cyber attacks.</u> 
              It plays a crucial role in <b>securing online transactions, business operations, government systems, and personal information.</b> 
              These applications help ensure <u>privacy, trust, and continuity</u> in the digital world.
            </p>
            <button className="more-btn" onClick={() => openInfo('https://www.geeksforgeeks.org/computer-networks/applications-of-cybersecurity/')}>Know More</button>
          </div>
        </div>
        {/* <div className="applications-grid">
          <div className="app-card">
            <h3>Android Application Development</h3>
            <p>Java powers Android apps, offering stability and seamless performance across devices.</p>
          </div>
          <div className="app-card">
            <h3>Web Applications & APIs</h3>
            <p>Frameworks like Spring Boot make Java perfect for secure, scalable, and fast web backends.</p>
          </div>
          <div className="app-card">
            <h3>Cloud & Enterprise Systems</h3>
            <p>Used for developing distributed and enterprise-level systems supporting millions of users.</p>
          </div>
          <div className="app-card">
            <h3>IoT Device Management</h3>
            <p>Java enables IoT gateways, device communication, and smart automation in connected systems.</p>
          </div>
          <div className="app-card">
            <h3>Game Development</h3>
            <p>Libraries like LibGDX allow developers to create cross-platform games efficiently.</p>
          </div>
          <div className="app-card">
            <h3>AI/ML Integrations</h3>
            <p>Java integrates with AI & ML tools for building intelligent, data-driven applications.</p>
          </div>
        </div> */}
        <h3 className="rr"><span>Application of Cyber-Security:</span></h3>
          <p>
            • Protecting personal data and privacy<br />
            • Securing online banking and financial transactions<br />
            • Preventing cyber crimes like hacking, phishing, and malware attacks<br />
            • Ensuring safe communication over the internet<br />
            • Protecting healthcare records and hospital systems<br />
            • Protecting business networks and confidential information<br />
            • Safeguarding government and defense systems<br />
            • Securing e-commerce platforms and digital payments
          </p>
      </section>
    </>
  );
};

export default CyberElabs;