import React, { useEffect, useRef } from 'react';
import './photography.css';

// --- IMAGE IMPORTS ---
// Ensure these files exist in src/Images/
import photologo from "./Images/PhotoVideoEditing.png";
import photo from "./Images/photo_logo.png";
import photobg from "./Images/photo.png";
import tech from "./Images/tech_stack.png";
import coreimg from "./Images/core.png";
import workflow from "./Images/workflow.png";
import appImg from "./Images/application.png";

const PhotographyElabs = () => {
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
            src={photologo}
            id="javalogoo"
            alt="Photo Logo"
            ref={logoRef}
          />
        </div>
        <div className="front-box">
          <h1 className="hero-title">
             Photography and Video Editing at E Labs
          </h1>
          <p>
             Welcome to the <span>Photography and Video Editing domain</span> of <span>E Labs!</span> This domain focuses on <b><u>capturing moments, telling stories, and creating visually compelling content</u></b> through images and videos. 
             In today's digital era, visual media plays a crucial role in <u><b>communication, branding, and storytelling.</b></u>
             This domain equips students with practical skills in <span>camera handling, composition, lighting, color grading, and editing techniques</span> used in real-world projects. 
             Members gain <u><b>hands-on exposure</b></u> to industry-relevant tools and software to edit photos and videos with <u>professional quality.</u>
          </p>
          <p> 
             At <span>E Labs,</span> we nurture creative storytellers to design <span>engaging, high-quality, and impactful visual content</span> using <b><u>modern Photography and Video Editing technologies.</u></b>
          </p>
        </div>
      </section>  

      {/* Info Section */}
      <section className="java-info-section" id="java-info">
        <div className="info-box fade-left">
          <div className="info-content">
            <h2>What is Photography & Video Editing?</h2>
            <p>
              <strong>Photography & Video Editing</strong> is the art of capturing images and videos and enhancing them through <u>creative editing techniques.</u> 
              It focuses on <b>visual storytelling</b> using <u>composition, lighting, effects, and transitions.</u> 
              These skills help create <u><b>engaging and professional visual content</b></u> for digital platforms.
            </p>
            <h3 className="rr"><span><u>Core Features:</u></span></h3>
            <p>
              • Captures high-quality photos and videos<br />
              • Enhances visuals using professional editing techniques<br />
              • Ensures proper lighting, composition, and color balance<br />
              • Creates engaging visual stories and narratives<br />
              • Improves content quality through effects and transitions<br />
              • Prepares visuals for social media, films, and digital platforms
            </p>
          </div>
          <div className="info-image">
            <img src={photo} alt="What is Photography?" />
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools-section slide-up" id="java-tools">
        <h2>Popular Photography & Video Editing Tools and Technologies</h2>
        <div className="tools-grid">
          <div className="tool-card">
            <h3>Adobe Photoshop</h3>
            <p>Used for advanced photo editing, retouching, and image manipulation.</p>
          </div>
          <div className="tool-card">
            <h3>DSLR & Mirrorless Cameras</h3>
            <p>Capture high-quality images with manual control over focus, exposure, and lighting.</p>
          </div>
          <div className="tool-card">
            <h3>Adobe Lightroom</h3>
            <p>Helps in photo enhancement, color correction, and photo management.</p>
          </div>
          <div className="tool-card">
            <h3>DaVinci Resolve</h3>
            <p>Widely used for professional color grading and video post-production.</p>
          </div>
          <div className="tool-card">
            <h3>Final Cut Pro</h3>
            <p>High-performance video editing tool optimized for macOS users.</p>
          </div>
        </div>
      </section>

      {/* Technical Manifesto */}
      <div className="info-box reverse slide-left">
        <div className="info-content">
          <h2>Technical Manifesto</h2>
          <p className="rr">
            Position your work as a blend of creative vision and technical mastery.
            In an era of AI-driven imagery, we prioritize optical integrity and precision post-processing. 
            Our workflow is built on a foundation of color science, dynamic range management, and pixel-perfect composition. 
            We don't just take pictures; we engineer visual assets.
          </p>
        </div>
        <div className="info-image1">
          <img src={photobg} alt="Photography in E Labs" />
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="info-box fade-down zoom-in">
        <div className="info-content">
          <h2>Tech Stack (Gear & Software)</h2>
          <p>
            Tech audiences love specs. Highlighting your kit builds instant credibility. </p>
            <p><b><u>Capture Hardware:</u></b> Utilizing high-resolution full-frame sensors (45MP+) for maximum crop flexibility and large-format printing.</p>
          <p><b><u>Optics:</u></b> A curated selection of prime lenses with wide apertures (f/1.2 - f/1.4) for superior bokeh and low-light performance.</p>
          <p><b><u>Post-Processing:</u></b> 14-bit RAW processing via Adobe Lightroom and Photoshop, utilizing calibrated IPS displays for 100% sRGB/Adobe RGB color accuracy.</p> 
          <p><b><u>Delivery:</u></b> Cloud-based, high-bandwidth galleries with metadata-rich files for easy organization.</p>
        </div>
        <div className="info-image">
          <img src={tech} alt="Tech Image" />
        </div>
      </div>  

      {/* Core Specializations */}
      <div className="info-box reverse slide-left">
        <div className="info-content">
          <h2>Core Specializations</h2>
          <p className="rr">
            <b><u>A. Macro & Product Engineering :</u></b> Focusing on the intricate details of hardware, PCBs, and industrial design. We use focus-stacking techniques to ensure edge-to-edge sharpness.</p>
            <p><b><u>B. Architecture & Interior Geometry :</u></b> Utilizing tilt-shift movements and HDR bracketing to maintain vertical lines and balance extreme contrast ratios in modern tech environments.</p>
            <p><b><u>C. Corporate Tech Portraits :</u></b> Professional headshots and "in-action" team shots that reflect a modern, innovative culture. Clean lighting setups designed to look natural yet high-end.</p>
        </div>
        <div className="info-image1">
          <img src={coreimg} alt="Core Specialization" />
        </div>
      </div>

      {/* Digital Workflow Section */}
      <div className="info-box fade-down zoom-in">
        <div className="info-content">
          <h2>The Digital Workflow</h2>
          <p><b><u>A step-by-step breakdown of your technical pipeline:-</u></b></p>
          <p><b>Acquisition:</b> Tethered shooting for real-time image verification and client collaboration.</p>
          <p><b>Culling:</b> AI-assisted sorting to identify the sharpest frames and best expressions instantly.</p>
          <p><b>Correction:</b> Manual adjustment of exposure, white balance, and lens distortion profiles.</p>
          <p><b>Final Polish:</b> Frequency separation for skin retouching and local adjustment layers for depth.</p>
          <p><b>Deployment:</b> Optimized export settings for Web (WebP/JPEG) and Print (TIFF).</p>
        </div>
        <div className="info-image">
          <img src={workflow} alt="workflow" />
        </div>
      </div>  

      

      {/* Applications Section */}
      <section className="applications-section fade-up zoom-in" id="applications">
        <h2>Applications of Photography & Video-Editing</h2>
        <div className="applications-header">
          <div className="app-image">
           <img src={appImg} alt="Applications of Photography" />
          </div>
          <div className="app-content">
            <p>
              The<strong> Photography & Video Editing domain</strong>  plays a crucial role in applying visual creativity to real-world scenarios. 
              It helps transform ideas into engaging visual content for <b><u>communication, branding, education, and entertainment.</u></b> 
              These applications enable effective storytelling <b>across digital and media platforms.</b>
            </p>
          </div>
        </div>
        
        <h3 className="rr"><span>Application of Photography & Video Editing:</span></h3>
          <p>
            • Used in marketing and advertising for creating promotional images and videos<br />
            • Plays a key role in film, media, and entertainment industries<br />
            • Widely applied in social media content creation and influencer branding<br />
            • Enhances business presentations and digital branding<br />
            • Supports education and training through visual learning content
          </p>
      </section>
    </>
  );
};

export default PhotographyElabs;