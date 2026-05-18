import { useEffect } from 'react';

const useDomainScrollAnimations = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-anim');
    elements.forEach((el) => observer.observe(el));

    // Mouse glow effect on tool cards
    const cards = document.querySelectorAll('.dp-tool-card');
    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--glow-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--glow-y', `${e.clientY - rect.top}px`);
    };
    const handleMouseLeave = (e) => {
      e.currentTarget.style.setProperty('--glow-x', '50%');
      e.currentTarget.style.setProperty('--glow-y', '50%');
    };

    cards.forEach((card) => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
      cards.forEach((card) => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
};

export default useDomainScrollAnimations;
