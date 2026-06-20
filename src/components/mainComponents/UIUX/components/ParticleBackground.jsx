import React, { useRef, useEffect } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const particleCount = 50;
    const baseSpeed = 0.5;
    const scrollFactor = 0.5;

    let scrollSpeed = 0;
    let lastScrollY = window.scrollY;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      
      scrollSpeed = delta * scrollFactor;
      
      lastScrollY = currentScrollY;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.baseX = (Math.random() - 0.5) * baseSpeed;
        this.baseY = (Math.random() - 0.5) * baseSpeed;
        this.density = (Math.random() * 30) + 1;
      }

      update() {
        this.x += this.baseX;
        this.y += this.baseY;

        this.y -= scrollSpeed * (this.density / 10); 

        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
        
        if (this.x < 0 || this.x > canvas.width) this.baseX *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(255, 100, 0, 1)";
        ctx.fillStyle = "rgba(255, 165, 0, 0.9)";
        
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      scrollSpeed *= 0.95; 

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        background: 'transparent',
        pointerEvents: 'none'
      }}
    />
  );
};

export default ParticleBackground;