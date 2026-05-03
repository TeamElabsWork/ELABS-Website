import React, { useEffect, useRef } from 'react';
import './JavaELabs.css';

// --- IMAGE IMPORTS ---
// Ensure these files exist in src/Images/
import javaLogo from "./Images/icons8-java-500.png";
import doinImg from "./Images/doin.png";
import springImg from "./Images/springbootblack.png";
import appImg from "./Images/javaapplication.png";

const JavaELabs = () => {
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
            src={javaLogo}
            id="javalogoo"
            alt="Java Logo"
            ref={logoRef}
          />
        </div>
        <div className="front-box">
          <h1 className="hero-title">
             Java at E Labs
          </h1>
          <p>
             Welcome to the <span>Java domain</span> of <span>E Labs</span>!  
             Here, we explore <span>Java</span> as a powerful language driving <span>enterprise systems</span>,  
             <span>backend scalability</span>, and <span>innovation</span>.  
             <span>E Labs</span> provides hands-on exposure to <span>Java’s core</span> and <span>advanced concepts</span>,  
             integrating <span>real-world projects</span> powered by <span>Spring Boot</span> and other <span>modern frameworks</span>.
          </p>
          <p> 
             At <span>E Labs</span>, we train <span>innovators</span> to build <span>efficient</span>, <span>secure</span>, and <span>scalable systems</span>  
             with <span>Java technology</span>.
          </p>
        </div>
      </section>  

      {/* Info Section */}
      <section className="java-info-section" id="java-info">
        <div className="info-box fade-left">
          <div className="info-content">
            <h2>What is Java?</h2>
            <p>
              <strong>Java</strong> is a high-level, object-oriented programming language developed by Sun Microsystems and now owned by Oracle.
              Known for its platform independence and strong community support, Java powers millions of apps globally.
            </p>
            <h3 className="rr"><span>Core Features:</span></h3>
            <p>
              • Android Application Development<br />
              • Web Applications & APIs<br />
              • Cloud & Enterprise Systems<br />
              • IoT Device Management<br />
              • Game Development<br />
              • AI/ML Integrations
            </p>
            <button className="more-btn" onClick={() => openInfo('https://www.w3schools.com/java/default.asp')}>Know More</button>
          </div>
          <div className="info-image">
            <img src={javaLogo} alt="What is Java" />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools-section slide-up" id="java-tools">
        <h2>Popular Java Tools & Frameworks</h2>
        <div className="tools-grid">
          <div className="tool-card">
            <h3>Spring Boot</h3>
            <p>Powerful framework for building production-ready backend applications and microservices quickly with minimal setup.</p>
          </div>
          <div className="tool-card">
            <h3>Hibernate</h3>
            <p>ORM tool simplifying database operations by mapping Java objects to relational databases seamlessly.</p>
          </div>
          <div className="tool-card">
            <h3>Maven</h3>
            <p>Project management tool used for dependency management, build automation, and standardized project structures.</p>
          </div>
          <div className="tool-card">
            <h3>Jenkins</h3>
            <p>Automation server enabling continuous integration and delivery pipelines for Java-based projects.</p>
          </div>
          <div className="tool-card">
            <h3>JUnit</h3>
            <p>Framework for writing repeatable unit tests ensuring reliable and maintainable Java applications.</p>
          </div>
          <div className="tool-card">
            <h3>Apache Tomcat</h3>
            <p>Lightweight web server and servlet container for deploying Java web applications efficiently.</p>
          </div>
        </div>
      </section>

      {/* Java in E Labs Section */}
      <div className="info-box reverse slide-left">
        <div className="info-content">
          <h2>Java in E Labs</h2>
          <p>
            At E Labs, Java is used for building real-time, cloud-connected systems and backend APIs, driving research and innovation in IoT and automation.
          </p>
          <h3 className="rr"><span>Java at E Labs is used for:</span></h3>
          <p>
            • Backend APIs & web platforms<br />
            • Secure IoT communication<br />
            • Cloud-connected systems<br />
            • Real-time analytics & visualization tools
          </p>
          <button className="more-btn" onClick={() => openInfo('elabs')}>Know More</button>
        </div>
        <div className="info-image1">
          <img src={doinImg} alt="Java in E Labs" />
        </div>
      </div>

      {/* Spring Boot Section */}
      <div className="info-box fade-down zoom-in">
        <div className="info-content">
          <h2>Java Backend (Spring Boot)</h2>
          <p>
            E Labs utilizes the Spring Boot framework for creating scalable, production-ready backend systems with RESTful APIs and microservices architecture.
          </p>
          <h3 className="rr"><span>Why E Labs Chooses Spring Boot:</span></h3>
          <p>
            • Embedded servers (Tomcat, Jetty)<br />
            • Auto configuration & dependency management<br />
            • Easy integration with databases & APIs<br />
            • High scalability for enterprise-level systems
          </p>
          <button className="more-btn" onClick={() => openInfo('https://spring.io/projects/spring-boot')}>Know More</button>
        </div>
        <div className="info-image">
          <img src={springImg} alt="Java Backend" />
        </div>
      </div>  

      {/* Applications Section */}
      <section className="applications-section fade-up zoom-in" id="applications">
        <h2>Applications of Java</h2>
        <div className="applications-header">
          <div className="app-image">
           <img src={appImg} alt="Applications of Java" />
          </div>
          <div className="app-content">
            <p>
              From Android development to enterprise-grade cloud systems, 
              <strong>Java</strong> continues to be one of the most reliable, secure, 
              and scalable languages in modern software engineering. 
              Its platform independence and rich ecosystem make it ideal for 
              building diverse and high-performance applications across industries.
            </p>
            <button className="more-btn" onClick={() => openInfo('https://www.geeksforgeeks.org/blogs/top-applications-of-java-in-real-world/')}>Know More</button>
          </div>
        </div>
        <div className="applications-grid">
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
        </div>
      </section>
    </>
  );
};

export default JavaELabs;