import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ElectricBorder from "../ui/ElectricBorder";
import "./Recruitment.css";

const domains = [
    {
        id: "marketing-pr-event-management",
        name: "Marketing PR & Event Management",
        icon: "/Images/Logo/Marketing.png",
        category: "non-tech"
    },
    {
        id: "web-development",
        name: "Web Development",
        icon: "/Images/Logo/WebDevelopment.png",
        category: "tech"
    },
    {
        id: "cloud-computing",
        name: "Cloud Computing",
        icon: "/Images/Logo/CloudComputing.png",
        category: "tech"
    },
    {
        id: "iot-embedded-systems",
        name: "IoT & Embedded Systems",
        icon: "/Images/Logo/IoT&Embedded.png",
        category: "tech"
    },
    {
        id: "content-writing",
        name: "Content Writing",
        icon: "/Images/Logo/ContentWriting.png",
        category: "non-tech"
    },
    {
        id: "android-development",
        name: "Android Development",
        icon: "/Images/Logo/AppDevelopment.png",
        category: "tech"
    },
    {
        id: "data-analytics",
        name: "Data Analytics",
        icon: "/Images/Logo/DataAnalytics.png",
        category: "tech"
    },
    {
        id: "photography-video",
        name: "Photography & Video",
        icon: "/Images/Logo/PhotoVideoEditing.png",
        category: "non-tech"
    },
    {
        id: "java",
        name: "Java",
        icon: "/Images/Logo/Java.png",
        category: "tech"
    },
    {
        id: "ai-ml",
        name: "AI/ML",
        icon: "/Images/Logo/AIML.png",
        category: "tech"
    },
    {
        id: "cyber-security",
        name: "Cyber Security",
        icon: "/Images/Logo/CyberSecurity.png",
        category: "tech"
    },
    {
        id: "graphics-designing-ui-ux",
        name: "Graphics Designing & UI/UX",
        icon: "/Images/Logo/UIUX.png",
        category: "non-tech"
    },
    {
        id: "game-development",
        name: "Game Development",
        icon: "/Images/Logo/gamedev.png",
        category: "tech"
    },
];

const Recruitment = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Initialize particles.js with retry logic
        const initParticles = () => {
            if (window.particlesJS) {
                window.particlesJS('particles-js', {
                    "particles": {
                        "number": { "value": 60 },
                        "color": { "value": "#F7941D" },
                        "shape": { "type": "circle" },
                        "opacity": { "value": 0.5 },
                        "size": { "value": 3 },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#F7941D",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": { "enable": true, "speed": 2 }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": { "enable": true, "mode": "repulse" }
                        }
                    }
                });
                console.log('Particles.js initialized successfully');
            } else {
                console.log('Waiting for particles.js to load...');
                setTimeout(initParticles, 100);
            }
        };

        const timer = setTimeout(initParticles, 100);

        // Intersection Observer for scroll animations
        const animatedElements = document.querySelectorAll(
            ".fade-up, .fade-down, .zoom-in, .slide-up"
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        animatedElements.forEach((el) => observer.observe(el));

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, []);

    const handleApplyNow = () => {
        alert("Application form coming soon! Please check back later.");
    };

    const handleDomainClick = (domainId) => {
        navigate(`/recruitment/${domainId}`);
    };

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    // Separate domains by category
    const techDomains = domains.filter(d => d.category === 'tech');
    const nonTechDomains = domains.filter(d => d.category === 'non-tech');

    return (
        <div className="min-h-screen w-full px-4 py-8 md:py-12" style={{ position: 'relative' }}>
            {/* Particles.js Background */}
            <div id="particles-js" style={{
                position: 'fixed',
                width: '100%',
                height: '100%',
                zIndex: 0,
                top: 0,
                left: 0,
                pointerEvents: 'none'
            }}></div>

            <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
                {/* Hero Section - Prominent Join E-Labs Box */}
                <div className="hero-section">
                    <div className="hero-box fade-down zoom-in">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="hero-content"
                        >
                            <h1 className="hero-title">
                                Join E-Labs
                            </h1>
                            <div className="divider-line"></div>
                            <p className="hero-subtitle">
                                Explore our domains and discover where your passion meets opportunity
                            </p>

                            {/* Buttons Container */}
                            <div className="hero-buttons">
                                {/* Apply Now Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleApplyNow}
                                    className="apply-btn"
                                >
                                    APPLY NOW
                                </motion.button>

                                {/* Navigation Buttons */}
                                <div className="nav-buttons">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => scrollToSection('tech-domains')}
                                        className="nav-btn"
                                    >
                                        <span>Tech Domains</span>
                                        <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                        </svg>
                                    </motion.button>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => scrollToSection('non-tech-domains')}
                                        className="nav-btn"
                                    >
                                        <span>Non-Tech Domains</span>
                                        <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                        </svg>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Tech Domains Section */}
                <div id="tech-domains" className="domains-section">
                    <h2 className="section-heading fade-up">
                        Tech Domains
                    </h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
                    >
                        {techDomains.map((domain, index) => (
                            <motion.div
                                key={domain.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleDomainClick(domain.id)}
                                className="cursor-pointer fade-up"
                            >
                                <ElectricBorder
                                    color="#F7941D"
                                    speed={0.5}
                                    chaos={0.05}
                                    thickness={3}
                                    borderRadius={16}
                                >
                                    <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/10 dark:bg-white/30">
                                        <div className="text-center">
                                            <div className="flex items-center justify-center mb-3 h-20">
                                                <img
                                                    src={domain.icon}
                                                    alt={domain.name}
                                                    className="w-16 h-16 object-contain"
                                                />
                                            </div>
                                            <h3 className="text-lg font-semibold text-textColor1 dark:text-black">
                                                {domain.name}
                                            </h3>
                                        </div>
                                    </div>
                                </ElectricBorder>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Non-Tech Domains Section */}
                <div id="non-tech-domains" className="domains-section">
                    <h2 className="section-heading fade-up">
                        Non-Tech Domains
                    </h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
                    >
                        {nonTechDomains.map((domain, index) => (
                            <motion.div
                                key={domain.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleDomainClick(domain.id)}
                                className="cursor-pointer fade-up"
                            >
                                <ElectricBorder
                                    color="#F7941D"
                                    speed={0.5}
                                    chaos={0.05}
                                    thickness={3}
                                    borderRadius={16}
                                >
                                    <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/10 dark:bg-white/30">
                                        <div className="text-center">
                                            <div className="flex items-center justify-center mb-3 h-20">
                                                <img
                                                    src={domain.icon}
                                                    alt={domain.name}
                                                    className="w-16 h-16 object-contain"
                                                />
                                            </div>
                                            <h3 className="text-lg font-semibold text-textColor1 dark:text-black">
                                                {domain.name}
                                            </h3>
                                        </div>
                                    </div>
                                </ElectricBorder>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Instruction Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center text-lg dark:text-black/70 text-white/70 mt-8"
                >
                    Click on any domain to view recruitment criteria and contact information
                </motion.p>
            </div>
        </div>
    );
};

export default Recruitment;
