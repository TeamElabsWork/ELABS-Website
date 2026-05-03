"use client"

import { useEffect, useState } from "react"
import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import ProjectsSection from "./ProjectsSection"
import EventsSection from "./EventsSection"
import TeamSection from "./TeamSection"
import CTASection from "./CTASection"

export default function Aiml() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {

    window.scrollTo(0, 0)

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="bg-black text-white overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 122, 0, 0.5); }
          50% { box-shadow: 0 0 40px rgba(255, 122, 0, 0.8); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-slide-up { animation: slideInUp 0.8s ease-out; }
        .animate-slide-down { animation: slideInDown 0.8s ease-out; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
      `}</style>

      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ProjectsSection />
      <EventsSection />
      <TeamSection />
      <CTASection />

    </div>
  )
}
