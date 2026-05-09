import React, { useEffect, useRef } from 'react';
import './android.css';
import androidLogo from "./Images/and11.png";
import mobileImg from "./Images/and2.png";
import kotlinImg from "./Images/and3.png";
import appImg from "./Images/and4.png";
const AndroidELabs = () => {
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
      // Changed Glow color to Green-ish for Android vibe, or keep Orange if preferred
      const GLOW_COLOR = "rgba(61, 220, 132, 0.9)"; 
      const PARTICLE_COLOR = "rgba(61, 220, 132, 0.7)";

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
        {/* <div className="javalogo">
          <img 
            src={androidLogo}
            id="javalogoo"
            alt="Android Logo"
            ref={logoRef}
          />
        </div> */}
        <div className="front-box">
          <h1 className="hero-title">
             Android Dev at E Labs
          </h1>
          <p>
              Welcome to the <span>Android domain</span> of <span>E Labs</span>!  
              Here, we craft the future of <span>mobile technology</span> using <span>Kotlin</span> and <span>Java</span>.  
              <span>E Labs</span> provides an immersive environment to master <span>native app development</span>,  
              from designing intuitive <span>UIs</span> to integrating complex <span>backend APIs</span>.
          </p>
          <p> 
              At <span>E Labs</span>, we transform <span>ideas</span> into deployed <span>Play Store applications</span>,  
              building the next generation of <span>smart mobile solutions</span>.
          </p>
        </div>
      </section>  

      {/* Info Section */}
      <section className="java-info-section" id="java-info">
        <div className="info-box fade-left">
          <div className="info-content">
            <h2>What is Android Dev?</h2>
            <p>
              <strong>Android Development</strong> is the process of creating applications for devices running the Android operating system. 
              With over 3 billion active devices, it is the most widely used mobile OS in the world, powering phones, tablets, watches, and cars.
            </p>
            <h3 className="rr"><span>Core Ecosystem:</span></h3>
            <p>
              • Native Development (Kotlin & Java)<br />
              • Material Design Systems<br />
              • Jetpack Libraries<br />
              • Google Play Services<br />
              • Firebase Integration<br />
              • AR & VR Mobile Experiences
            </p>
            <button className="more-btn" onClick={() => openInfo('https://developer.android.com/')}>Know More</button>
          </div>
          <div className="info-image">
            <img src={androidLogo} alt="Android Ecosystem" />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools-section slide-up" id="java-tools">
        <h2>Android Tech Stack</h2>
        <div className="tools-grid">
          <div className="tool-card">
            <h3>Android Studio</h3>
            <p>The official Integrated Development Environment (IDE) for Android, providing code editing, debugging, and performance tooling.</p>
          </div>
          <div className="tool-card">
            <h3>Kotlin</h3>
            <p>The modern, concise, and safe programming language recommended by Google for all new Android development.</p>
          </div>
          <div className="tool-card">
            <h3>Jetpack Compose</h3>
            <p>Android's modern toolkit for building native UI. It simplifies and accelerates UI development with less code.</p>
          </div>
          <div className="tool-card">
            <h3>Firebase</h3>
            <p>A comprehensive app development platform that provides backend services like databases, authentication, and analytics.</p>
          </div>
          <div className="tool-card">
            <h3>Retrofit</h3>
            <p>A type-safe HTTP client for Android and Java, making it easy to consume RESTful web services and APIs.</p>
          </div>
          <div className="tool-card">
            <h3>Gradle</h3>
            <p>The powerful build automation tool used to manage dependencies, customized build logic, and app packaging.</p>
          </div>
        </div>
      </section>

      {/* Android in E Labs Section */}
      <div className="info-box reverse slide-left">
        <div className="info-content">
          <h2>Android in E Labs</h2>
          <p>
            At E Labs, we don't just write code; we solve real-world problems through mobile innovation. Our projects range from campus utilities to smart-home controllers.
          </p>
          <h3 className="rr"><span>Android at E Labs is used for:</span></h3>
          <p>
            • Campus utility applications<br />
            • IoT device controllers via Bluetooth/WiFi<br />
            • Event management systems<br />
            • Real-time chat and collaboration tools
          </p>
          <button className="more-btn" onClick={() => openInfo('elabs')}>Know More</button>
        </div>
        <div className="info-image1">
          <img src={mobileImg} alt="Android in E Labs" />
        </div>
      </div>

      {/* Modern Android Section */}
      <div className="info-box fade-down zoom-in">
        <div className="info-content">
          <h2>Modern Android (Kotlin)</h2>
          <p>
            E Labs has shifted focus to <strong>Kotlin-first</strong> development. We leverage modern architecture patterns like MVVM and Clean Architecture to ensure our apps are robust and maintainable.
          </p>
          <h3 className="rr"><span>Why We Choose Kotlin:</span></h3>
          <p>
            • Null Safety (No more NullPointerExceptions)<br />
            • Coroutines for asynchronous programming<br />
            • Concise syntax reduces boilerplate<br />
            • Seamless interoperability with Java
          </p>
          <button className="more-btn" onClick={() => openInfo('https://kotlinlang.org/')}>Know More</button>
        </div>
        <div className="info-image">
          <img src={kotlinImg} alt="Modern Android Development" />
        </div>
      </div>  

      {/* Applications Section */}
      <section className="applications-section fade-up zoom-in" id="applications">
        <h2>Scope of Android</h2>
        <div className="applications-header">
          <div className="app-image">
           <img src={appImg} alt="Scope of Android" />
          </div>
          <div className="app-content">
            <p>
              The <strong>Android</strong> platform extends far beyond just smartphones. 
              Developers today are building experiences for wrist (Wear OS), 
              living room (Android TV), car (Android Auto), and even custom 
              hardware implementations. It is a gateway to the entire ecosystem of smart devices.
            </p>
            <button className="more-btn" onClick={() => openInfo('https://developer.android.com/about/dashboards')}>Know More</button>
          </div>
        </div>
        <div className="applications-grid">
          <div className="app-card">
            <h3>Smartphones & Tablets</h3>
            <p>The primary target for most apps, reaching billions of users globally with diverse form factors.</p>
          </div>
          <div className="app-card">
            <h3>Wear OS</h3>
            <p>Building fitness trackers, health monitors, and companion apps for smartwatches.</p>
          </div>
          <div className="app-card">
            <h3>Android Auto</h3>
            <p>Extending apps to the car dashboard for navigation, media, and safe messaging.</p>
          </div>
          <div className="app-card">
            <h3>Android TV</h3>
            <p>Creating immersive media and gaming experiences for the big screen.</p>
          </div>
          <div className="app-card">
            <h3>Internet of Things (IoT)</h3>
            <p>Using Android Things (or standard Android) to power kiosks, smart displays, and industrial panels.</p>
          </div>
          <div className="app-card">
            <h3>Chromebooks</h3>
            <p>Optimizing Android applications to run seamlessly on Chrome OS laptops.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AndroidELabs;