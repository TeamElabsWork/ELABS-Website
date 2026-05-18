import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { firstpg } from "../../constants";
import ButtonOne from "../subComponents/ButtonOne";

gsap.registerPlugin(useGSAP);

const FirstPage = ({ prefersReducedMotion = false }) => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  /* autoplay video */
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    el.play().catch((err) => {
      console.warn("Autoplay was prevented or video failed to load:", err);
    });
  }, []);

  /* animations */
  useGSAP(
    () => {
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // 1. Entry Animations
      tl.fromTo(
        ".hero-left",
        { x: -70, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2 }
      )
        .fromTo(
          ".hero-right",
          { x: 70, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4 },
          "<"
        )
        .fromTo(
          ".hero-heading-main, .hero-text",
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.2"
        )
        .fromTo(
          ".hero-subtext, .hero-subtext1, .hero-ctas",
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.15"
        );

      // 2. Slider Animation (cycles through the words)
      // Assuming .hero-slider-inner holds multiple items in a column
      if (firstpg.length > 1) {
        gsap.to(".hero-slider-inner", {
          yPercent: -100 * ((firstpg.length - 1) / firstpg.length),
          ease: "none",
          duration: firstpg.length * 2, // 2 seconds per item
          repeat: -1,
          yoyo: true, // Slides back down when it reaches the bottom
          delay: 1.5, // Waits for the entry animation to finish
        });
      }
    },
    {
      scope: sectionRef,
      dependencies: [prefersReducedMotion] // Added missing dependency
    }
  );

  return (
    <section className="hero-section home-hero1" ref={sectionRef}>
      {/* LEFT SIDE */}
      <div className="hero-left">
        <div className="hero-media-card">
          <video
            ref={videoRef}
            src="https://ik.imagekit.io/tm5te9cjl/Elabs%20web/InShot.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="hero-video h-full w-full object-contain"
            aria-hidden="true" // Added for accessibility if this is purely decorative
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <header className="hero-right">
        <div className="hero-text-wrapper">
          <div className="hero-text-block">
            <h1 className="hero-heading-main">
              Empowering{" "}
              <span className="hero-inline-slider">
                <span className="hero-slider-window" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
                  <span className="hero-slider-inner" style={{ display: "flex", flexDirection: "column" }}>
                    {firstpg.map((item, index) => (
                      <span key={item.id || index} className="hero-slider-row">
                        <img
                          src={item.imgPath}
                          alt={item.text}
                          className="hero-slider-icon"
                        />
                        <span className="hero-slider-text">
                          {item.text}
                        </span>
                      </span>
                    ))}
                  </span>
                </span>
              </span>
            </h1>

            <h2 className="hero-text">
              Through Collaboration Peer-to-peer Learning
            </h2>
          </div>

          <p className="hero-subtext collab-tex">
            Fostering collaboration
          </p>
          <p className="hero-subtext1 collab-subtex">
            Building Leaders
          </p>

          {/* CTA BUTTONS */}
          <div className="hero-ctas flex gap-6 items-start">
            <div className="flex flex-col gap-4">
              <ButtonOne
                text="Explore initiative"
                to="/domain"
              />
              <ButtonOne
                text="Top Contributors"
                to="/top-performers"
              />
            </div>

            <Link to="/achievements" className="cta-wrapper">
              <div className="cta-button group">
                <span className="cta-text">Achievements</span>
                <span className="arrow-wrapper">
                  <img
                    src="/Images/Logo/WebDevelopment.png"
                    alt="arrow"
                  />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </header>
    </section>
  );
};

export default FirstPage;