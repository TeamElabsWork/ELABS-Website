import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import VerticalStep from "./VerticalStep";
import Particles from "./Particles";
import './Particles.css';

export default function Graphicdesign() {
  const materialsData = useSelector((state) =>
    state.studyMaterials.find(
      (item) => item.domain.toLowerCase().includes("graphic")
    )
  );

  const themeColors=[
    "#ff9900",
    "#fde047",
    "#fb923c",
    "#0a0a0a",
  ];
  if (!materialsData){
    return (
      <main className="min-h-screen bg-[#0a0a0a] text-gray-200 flex items-center justify-center pt-24">
        <div className="text-2xl text-gray-300">
          No materials found for this course.
        </div>
      </main>
    );
  }

  const { domain, img } = materialsData;
    useEffect(() => {
        // Smooth scrolling logic
        const linkHandler = (e) => {
            e.preventDefault();
            const target = document.querySelector(e.currentTarget.getAttribute("href"));
            target?.scrollIntoView({ behavior: "smooth" });
        };
        
        const links = document.querySelectorAll(".LocalNavBox a");
        links.forEach((link) => link.addEventListener("click", linkHandler));

        // Fade-in animation logic
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("opacity-100", "translate-y-0");
                    }
                });
            },
            { threshold: 0.1 }
        );
        const fadeSections = document.querySelectorAll(".fade-section");
        fadeSections.forEach((el) => {
            el.classList.remove("opacity-100", "translate-y-0"); // Reset for new page
            observer.observe(el);
        });

        // Cleanup
        return () => {
            links.forEach((link) => link.removeEventListener("click", linkHandler));
            fadeSections.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans overflow-x-hidden relative isolate scroll-smooth">
            
            {/* 🚨 PARTICLES BACKGROUND LAYER - MAXIMUM DENSITY SETTINGS */}
            <div className="fixed inset-0 w-full h-full opacity-80 pointer-events-none z-[0]">
                <Particles
                    particleCount={3000} // Increased to 3000 for maximum density
                    particleSpread={15}
                    speed={0.15}
                    particleColors={themeColors}
                    alphaParticles={true}
                    particleBaseSize={500}
                    cameraDistance={30}
                />
            </div>

            {/* 🔶 Orange Glowing Background (Z-index 1 - Below particles) */}
            <div className="absolute inset-0 z-[1] pointer-events-none">
                <div className="absolute top-24 left-16 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-20 right-16 w-[30rem] h-[30rem] bg-orange-500/20 rounded-full blur-[150px] animate-pulse"></div>
            </div>

            {/* Wrap all content in a div with z-index 10 to layer it over the backgrounds */}
            <div className="relative z-10"> 
                {/* 1️⃣ Intro Section */}
                <section
                    id="intro"
                    className="fade-section opacity-0 translate-y-10 transition-all duration-1000 flex flex-col items-center justify-center min-h-screen px-6 pt-24 text-center"
                >
                    <img
                        src={img} 
                        alt={domain}
                        className="w-40 h-40 rounded-2xl border-4 border-orange-500/30 shadow-[0_0_40px_rgba(255,115,0,0.3)] hover:scale-105 transition-transform duration-500 mb-8"
                    />
                    <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300 drop-shadow-[0_0_8px_rgba(255,115,0,0.5)]">
                        {domain}
                    </h1>
                    <p className="max-w-3xl mx-auto text-gray-100 mt-6 text-xl leading-relaxed tracking-wide font-medium">
                        Graphic Design is the universal language of visuals. It is where creativity and purpose meet, transforming raw ideas into compelling visual narratives. Master the art of strategic storytelling—blending imagination with technical skill to design for every platform, from print to social media.
                    </p>
                </section>
                

                {/* 2️⃣ What It Offers - STANDARD GRID LAYOUT */}
                <section
                    id="offers"
                    className="fade-section opacity-0 translate-y-10 transition-all duration-1000 py-28 px-8 text-center"
                >
                    <h2 className="text-4xl font-bold text-orange-400 mb-12 tracking-wide drop-shadow-[0_0_8px_rgba(255,115,0,0.5)]">
                        What Graphic Design Offers
                    </h2>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Visual Storytelling",
                                desc: "Connect emotionally and inspire action. Craft compelling illustrations and visuals that convey clear messages without needing text.",
                            },
                            {
                                title: "Creative Branding",
                                desc: "Define a unique identity. Design impactful logos, brand guides, and marketing assets that distinguish and elevate any brand.",
                            },
                            {
                                title: "Digital Aesthetics",
                                desc: "Master the digital canvas. Create optimized designs for web interfaces, social media campaigns, and interactive digital experiences.",
                            },
                            {
                                title: "Typography & Layout",
                                desc: "The art of the word. Develop expertise in selecting typefaces and arranging layouts for maximum readability and visual impact in all formats.",
                            },
                            {
                                title: "Print & Production",
                                desc: "Designs in the physical world. Learn technical requirements for print, including color, bleed, and production workflows for magazines and packaging.",
                            },
                            {
                                title: "Motion Graphics Basics",
                                desc: "Adding dynamic movement. Understand simple animation and motion graphics to create engaging logos and video intros that capture modern audiences.",
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className={`fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-${i * 150} bg-[#151515]/90 border border-orange-500/20 p-8 rounded-2xl text-left hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(255,115,0,0.4)]`}
                            >
                                <h3 className="text-2xl font-semibold text-orange-400 mb-3 drop-shadow-[0_0_6px_rgba(255,115,0,0.4)]">
                                    {card.title}
                                </h3>
                                <p className="text-gray-200 leading-relaxed tracking-wide">
                                    {card.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3️⃣ Tools Section - STANDARD FLEX/FLOW LAYOUT */}
                <section
                    id="tools"
                    className="fade-section opacity-0 translate-y-10 transition-all duration-1000 py-28 px-8 text-center"
                >
                    <h2 className="text-4xl font-bold text-orange-400 mb-10 tracking-wide drop-shadow-[0_0_8px_rgba(255,115,0,0.5)]">
                        Tools & Software We Master
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-100 mb-12 text-xl leading-relaxed tracking-wide font-medium">
                        Our focus is on industry-standard tools—the backbone of professional design. We cover everything from pixel-perfect image manipulation and scalable vector creation to rapid prototyping.
                    </p>

                    <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                name: "Adobe Photoshop",
                                url: "https://www.adobe.com/products/photoshop.html",
                                img: "https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png",
                            },
                            {
                                name: "Canva",
                                url: "https://www.canva.com/",
                                img: "/Images/Logo/canva-icon.webp",
                            },
                            {
                                name: "Adobe Illustrator",
                                url: "https://www.adobe.com/products/illustrator.html",
                                img: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
                            },
                            {
                                name: "Adobe InDesign",
                                url: "https://www.adobe.com/products/indesign.html",
                                img: "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg",
                            },
                            {
                                name: "Figma",
                                url: "https://www.figma.com/",
                                img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
                            },
                        ].map((tool, i) => (
                            <a
                                key={i}
                                href={tool.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`fade-section opacity-0 translate-y-10 transition-all duration-1000 delay-${i * 150} group relative w-48 h-48 bg-[#111]/90 border border-orange-500/30 rounded-2xl flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,115,0,0.45)]`}
                            >
                                <img
                                    src={tool.img}
                                    alt={tool.name}
                                    className="w-20 h-20 mb-3 transition-transform duration-500 group-hover:scale-110"
                                />
                                <h3 className="text-lg font-bold text-orange-400 tracking-wide">
                                    {tool.name}
                                </h3>
                                <p className="text-sm text-gray-300 group-hover:text-gray-100">
                                    Click to Explore →
                                </p>
                            </a>
                        ))}
                    </div>
                </section>

                {/* 4️⃣ Learning Curve */}
                <section
                    id="learning"
                    className="fade-section opacity-0 translate-y-10 transition-all duration-1000 py-28 px-8 text-center bg-[#0f0f0f]/80"
                >
                    <h2 className="text-4xl font-bold text-orange-400 mb-10 tracking-wide drop-shadow-[0_0_8px_rgba(255,115,0,0.5)]">
                        Learning Curve: Beginner → Advanced
                    </h2>
                    <div className="max-w-3xl mx-auto text-left">
                        {[
                            {
                                title: "Foundation & Theory (Weeks 1-4)",
                                desc: "Start with basic design principles, color theory, and composition. Understand the psychological impact of visuals and design critique.",
                            },
                            {
                                title: "Tool Mastery & Core Skills (Weeks 5-12)",
                                desc: "Master typography, layout design, and core software like Photoshop and Illustrator. Focus on raster vs. vector graphics.",
                            },
                            {
                                title: "Practical Projects & Branding (Weeks 13-20)",
                                desc: "Work on real-world projects: brand identity, posters, and UI/UX mockups. Learn to integrate client feedback and iterative design.",
                            },
                            {
                                title: "Advanced Workflow & Portfolio (Weeks 21-24)",
                                desc: "Advance to complex design systems, motion graphics basics, and creating a professional, job-ready portfolio.",
                            },
                        ].map((step, i, arr) => (
                            <VerticalStep
                                key={i}
                                number={i + 1}
                                title={step.title}
                                description={step.desc}
                                isLast={i === arr.length - 1}
                            />
                        ))}
                    </div>
                </section>

                {/* 5️⃣ Why It Matters */}
                <section
                    id="matters"
                    className="fade-section opacity-0 translate-y-10 transition-all duration-1000 py-28 px-8 text-center bg-[#0f0f0f]/80"
                >
                    <h2 className="text-4xl font-bold text-orange-400 mb-8 tracking-wide drop-shadow-[0_0_8px_rgba(255,115,0,0.5)]">
                        Why Graphic Design Matters
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-100 text-2xl leading-relaxed tracking-wide font-medium">
                        Design is not decoration—it's a critical engine for growth. It transforms confusing data into clear, actionable information, builds instant trust through compelling branding, and connects people with ideas that drive action.
                    </p>
                    <p className="max-w-3xl mx-auto text-gray-200 mt-6 text-lg leading-relaxed tracking-wide font-medium">
                        In a visually saturated world, the ability to create strategic, high-quality content is an indispensable skill. Professional graphic designers are key players in any successful organization.
                    </p>
                </section>

                {/* 6️⃣ E-Labs Section */}
                <section
                    id="elabs"
                    className="fade-section opacity-0 translate-y-10 transition-all duration-1000 py-28 px-8 text-center"
                >
                    <h2 className="text-4xl font-bold text-orange-400 mb-8 tracking-wide drop-shadow-[0_0_8px_rgba(255,115,0,0.5)]">
                        Graphic Design at E-Labs
                    </h2>
                    <div className="max-w-3xl mx-auto text-left">
                        {[
                            {
                                title: "Real-World Impact",
                                desc: "Design with purpose: creating event posters, professional UI/UX layouts, and promotional visuals for E-Labs.",
                            },
                            {
                                title: "Brand Shaping",
                                desc: "Actively shaping the visual identity of E-Labs through innovative projects and a consistent creative vision.",
                            },
                            {
                                title: "Collaborative Teams",
                                desc: "Collaborate closely with our creative and web development teams on high-impact, real-world projects.",
                            },
                            {
                                title: "Industry Workflow",
                                desc: "Learning and implementing industry-standard design workflows, feedback loops, and project management techniques.",
                            },
                        ].map((step, i, arr) => (
                            <VerticalStep
                                key={i}
                                number={i + 1}
                                title={step.title}
                                description={step.desc}
                                isLast={i === arr.length - 1}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}