import React, { useRef, useEffect } from 'react';

const DomainParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const particleCount = 60;
    const baseSpeed = 0.4;
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
        this.size = Math.random() * 2.8 + 0.8;
        this.vx = (Math.random() - 0.5) * baseSpeed;
        this.vy = (Math.random() - 0.5) * baseSpeed;
        this.density = (Math.random() * 30) + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Scroll parallax — moves particles up when scrolling down
        this.y -= scrollSpeed * (this.density / 10);

        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.shadowBlur = 12;
        ctx.shadowColor = 'rgba(255, 100, 0, 1)';
        ctx.fillStyle = 'rgba(255, 165, 0, 0.9)';
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
      // Decay scroll speed each frame
      scrollSpeed *= 0.92;
      particles.forEach(p => { p.update(); p.draw(); });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
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
        background: '#0d0d0d',
        pointerEvents: 'none',
      }}
    />
  );
};

export default DomainParticles;
