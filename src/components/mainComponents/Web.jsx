"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Web() {
  const webRef = useRef(null);
  const devRef = useRef(null);
  const bubbleContainerRef = useRef(null);
  const sectionsRef = useRef(null);

  // marquee refs
  const marqueeRef = useRef(null);
  const trackRef = useRef(null);
  const marqueeTween = useRef(null);

  // events ref
  const eventsRef = useRef(null);

  const domains = [
    {
      title: "Frontend Development",
      description: `Frontend is everything users see on the website or app. It uses HTML, CSS, JavaScript, and frameworks like React or Vue.

In practice a frontend developer focuses on: building responsive layouts, crafting accessible components, managing state, optimizing performance, and creating delightful UI interactions. Typical responsibilities: design implementation, animations, API integration (fetching/displaying data), client-side routing, form handling and validation, and cross-browser testing.

Learning path (example): HTML & semantics → CSS (Flexbox, Grid) → JavaScript (ES6+) → DOM & fetch → Build tools (Vite) → Framework (React) → Styling (Tailwind) → State management & testing.`,
      techs: ["HTML", "CSS", "Tailwind", "JavaScript", "React", "Vite"],
    },
    {
      title: "Backend Development",
      description: `Backend handles server, databases, and APIs. Languages include Node.js, Python, Java, and tools like Express, Django.

Backend tasks include authentication, database design, server-side business logic, API design (REST/GraphQL), background jobs, scaling and security hardening. Typical flow: design schema → build endpoints → connect DB → write auth & validation → optimize queries → deploy and monitor.`,
      techs: ["Node.js", "Express", "Python", "Django", "Postgres", "MongoDB"],
    },
    {
      title: "Fullstack Development",
      description: `Fullstack combines both frontend and backend skills. Fullstack developers can build complete web applications end-to-end by designing UIs and implementing servers and databases.

Common fullstack responsibilities: designing APIs used by the frontend, deploying apps (Docker, CI/CD), handling migrations, choosing databases, and connecting client-server securely.`,
      techs: ["React", "Node.js", "Postgres", "Docker", "REST / GraphQL"],
    },
  ];

  const techStack = [
    "HTML",
    "CSS",
    "Tailwind",
    "JavaScript",
    "React",
    "Vite",
    "Node.js",
    "Express",
    "Python",
    "Django",
    "Postgres",
    "MongoDB",
    "Docker",
    "Git",
    "GraphQL",
  ];

  const eventPics = ["Pic 1", "Pic 2", "Pic 3", "Pic 4", "Pic 5", "Pic 6"];

  // Heading Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      webRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    ).fromTo(
      devRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "+=0.15"
    );
    return () => tl.kill();
  }, []);

  // Bubble Background Animation
  useEffect(() => {
    const bubbleCount = 45;
    const container = bubbleContainerRef.current;
    if (!container) return;

    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      const size = Math.random() * 40 + 10;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.top = `${Math.random() * 100}%`;
      bubble.style.opacity = `${Math.random() * 0.45 + 0.15}`;
      container.appendChild(bubble);

      gsap.to(bubble, {
        x: gsap.utils.random(-120, 120),
        y: gsap.utils.random(-120, 120),
        duration: gsap.utils.random(8, 18),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
    return () => container.querySelectorAll(".bubble").forEach((b) => b.remove());
  }, []);

  // Sections scroll reveal
  useEffect(() => {
    if (typeof window === "undefined" || !ScrollTrigger) return;
    const sections = sectionsRef.current?.querySelectorAll(".domain-section");
    if (!sections || sections.length === 0) return;
    sections.forEach((sec) => {
      gsap.fromTo(
        sec,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 75%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  // Events animation
  useEffect(() => {
    if (!eventsRef.current) return;
    const pics = eventsRef.current.querySelectorAll(".event-pic");
    gsap.set(pics, { opacity: 0, y: 30 });
    pics.forEach((pic, i) => {
      gsap.to(pic, {
        scrollTrigger: {
          trigger: pic,
          start: "top 85%",
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: i * 0.15,
        ease: "power2.out",
      });
    });
  }, []);

  // Marquee animation
  useEffect(() => {
    const wrapper = marqueeRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    requestAnimationFrame(() => {
      const oldClone = track.querySelector(".marquee-clone");
      if (oldClone) oldClone.remove();
      const inner = track.querySelector(".marquee-items");
      if (!inner) return;
      const clone = inner.cloneNode(true);
      clone.classList.add("marquee-clone");
      track.appendChild(clone);

      const width = inner.offsetWidth || 1000;
      if (marqueeTween.current) marqueeTween.current.kill();

      marqueeTween.current = gsap.to(track, {
        x: `-=${width}px`,
        ease: "none",
        duration: Math.max(10, width / 60),
        repeat: -1,
        modifiers: {
          x: (x) => gsap.utils.wrap(-width, 0, parseFloat(x)) + "px",
        },
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center px-6 py-12 overflow-x-hidden">
      <div
        ref={bubbleContainerRef}
        className="absolute inset-0 z-0 pointer-events-none"
      ></div>

      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#f7941d] mb-8 text-center">
          <span ref={webRef}>Web</span> <span ref={devRef}>Development</span>
        </h1>

        <p className="text-center max-w-3xl mb-12 px-4">
          Web development is divided into frontend, backend, and fullstack development. Scroll down to explore each area — they will appear one after another.
        </p>

        {/* Sections */}
        <main ref={sectionsRef} className="w-full max-w-4xl space-y-20 mb-12">
          {domains.map((d, idx) => (
            <section key={d.title} className="domain-section">
              <h2 className="text-3xl font-semibold text-[#f7941d] mb-4">
                {d.title}
              </h2>
              <p className="whitespace-pre-line leading-relaxed text-lg opacity-90">
                {d.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {d.techs.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full border border-[#f7941d] text-sm text-[#f7941d]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </main>

        {/* Events Section */}
        <section ref={eventsRef} className="w-full max-w-6xl mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#f7941d] mb-6 text-center">
            Events
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {eventPics.map((pic, i) => (
              <div
                key={i}
                className="event-pic w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-[#1a1a1a] border border-[#f7941d] rounded-xl flex items-center justify-center text-[#f7941d] text-lg font-medium shadow-md hover:shadow-[0_0_30px_rgba(247,148,29,0.8)] transition-all duration-300"
              >
                {pic}
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="w-full max-w-6xl mt-6">
          <h3 className="text-xl font-semibold text-[#f7941d] mb-4">
            Tech Stack
          </h3>
          <div
            ref={marqueeRef}
            className="marquee-wrapper relative overflow-hidden w-full"
          >
            <div
              ref={trackRef}
              className="marquee-track inline-flex items-center gap-6 will-change-transform"
            >
              <div className="marquee-items inline-flex items-center gap-6">
                {techStack.map((tech) => (
                  <div
                    key={tech}
                    className="tech-pill inline-flex items-center justify-center px-6 py-3 rounded-2xl border border-[#f7941d] text-sm text-[#f7941d] shadow-sm transition-transform transform-gpu hover:scale-125 hover:shadow-[0_0_28px_rgba(247,148,29,0.95)]"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-70 text-center">
            Hover any tech to pause and highlight it.
          </p>
        </section>
      </div>

      {/* Styles */}
      <style jsx>{`
        .bubble {
          position: absolute;
          border-radius: 50%;
          background: rgb(247, 148, 29);
          box-shadow: 0 6px 24px rgba(247, 148, 29, 0.35),
            inset 0 0 8px rgba(255, 200, 150, 0.08);
          pointer-events: none;
          z-index: 0;
        }
        .domain-section {
          padding: 12px 8px;
        }
        .marquee-wrapper {
          height: 84px;
        }
        .marquee-track {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
        }
        .marquee-items > .tech-pill {
          min-width: 120px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
