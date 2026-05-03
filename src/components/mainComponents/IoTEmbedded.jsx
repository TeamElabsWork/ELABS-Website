import React from "react";
import { Link } from "react-router-dom";

function IoTEmbedded() {
  const features = [
    {
      title: "Hands-On Workshops",
      description: "Learn Arduino, ESP32, and Raspberry Pi through practical sessions conducted by seniors and mentors",
      icon: "�️"
    },
    {
      title: "Project Development",
      description: "Build real-world IoT projects from smart home automation to environmental monitoring systems",
      icon: "�"
    },
    {
      title: "Sensor & Hardware Labs",
      description: "Get access to our lab with sensors, microcontrollers, and development boards for your projects",
      icon: "�"
    },
    {
      title: "Team Collaborations",
      description: "Work with fellow students on exciting group projects and participate in hackathons",
      icon: "👥"
    },
    {
      title: "Industry Mentorship",
      description: "Learn from industry professionals and alumni working in IoT and embedded systems",
      icon: "🎓"
    },
    {
      title: "Competition Preparation",
      description: "Get trained for national-level competitions like Smart India Hackathon and tech fests",
      icon: "🏆"
    }
  ];

  const technologies = [
    { name: "Arduino", color: "bg-[#00979D]" },
    { name: "Raspberry Pi", color: "bg-[#C51A4A]" },
    { name: "ESP32/ESP8266", color: "bg-[#E7352C]" },
    { name: "STM32", color: "bg-[#03234B]" },
    { name: "MQTT", color: "bg-[#660066]" },
    { name: "Sensors & Modules", color: "bg-[#8F0000]" },
    { name: "FreeRTOS", color: "bg-[#00A98F]" },
    { name: "C/C++ & Python", color: "bg-[#A8B9CC]" },
  ];

  const projects = [
    {
      title: "Smart Classroom System",
      description: "IoT-enabled attendance system with automatic lighting and climate control for classrooms",
      difficulty: "Intermediate",
      tags: ["College Project", "Popular"]
    },
    {
      title: "Campus Air Quality Monitor",
      description: "Real-time air quality monitoring system deployed across campus with data visualization",
      difficulty: "Beginner",
      tags: ["Environmental", "Social Impact"]
    },
    {
      title: "Automated Plant Watering",
      description: "Smart irrigation system using soil moisture sensors for the college garden",
      difficulty: "Beginner",
      tags: ["Beginner Friendly", "Fun"]
    },
    {
      title: "Smart Library Management",
      description: "RFID-based book tracking and student entry system with real-time availability updates",
      difficulty: "Advanced",
      tags: ["Hackathon Ready", "Complex"]
    },
    {
      title: "Health Monitoring Band",
      description: "Wearable device for tracking heart rate, steps, and sleep patterns with mobile app",
      difficulty: "Intermediate",
      tags: ["Wearables", "Healthcare"]
    },
    {
      title: "Voice-Controlled Home",
      description: "Build a smart home prototype with voice commands using Alexa/Google Assistant",
      difficulty: "Intermediate",
      tags: ["AI Integration", "Popular"]
    }
  ];

  const learningPath = [
    {
      step: 1,
      title: "Getting Started",
      topics: ["Introduction to Electronics", "Arduino Basics", "First LED Project", "Join Our Discord"]
    },
    {
      step: 2,
      title: "Core Concepts",
      topics: ["Sensor Interfacing", "Motor Control", "Serial Communication", "Build Mini Projects"]
    },
    {
      step: 3,
      title: "IoT Development",
      topics: ["WiFi & Bluetooth", "Cloud Connectivity", "Mobile App Integration", "Team Projects"]
    },
    {
      step: 4,
      title: "Advanced & Beyond",
      topics: ["PCB Design", "Low Power Design", "Participate in Hackathons", "Mentor Juniors"]
    }
  ];

  return (
    <div className="w-full min-h-screen font-verna bg-gradient-to-b from-[#0B1215] to-[#1a2328] dark:from-[#fff5eb] dark:to-[#ffd4b3]">
      {/* Hero Section */}
      <div className="w-full pt-20 pb-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-black mb-4 text-[#F7941D] animate-fade-in">
              IoT & Embedded Systems
            </h1>
            <p className="text-xl md:text-2xl text-[#FFFAFA] dark:text-[#0B1215] mb-6 max-w-3xl mx-auto">
              Learn, Build, and Innovate with Hardware & Software
            </p>
            <div className="w-full max-w-4xl h-1 mx-auto bg-gradient-to-r from-transparent via-[#F7941D] to-transparent"></div>
          </div>

          {/* Introduction Card */}
          <div className="bg-[#1a2328] dark:bg-white/80 backdrop-blur-sm rounded-3xl border-4 border-[#F7941D] p-8 mb-12 shadow-2xl">
            <p className="text-lg text-[#FFFAFA] dark:text-[#0B1215] leading-relaxed text-center">
              Welcome to the IoT & Embedded Systems domain! Join our vibrant community of student makers and innovators. 
              Whether you're a complete beginner or already tinkering with circuits, our society provides the perfect platform 
              to explore the fascinating world of connected devices. Get hands-on experience, work on exciting projects, 
              participate in hackathons, and learn from seniors and industry experts. Let's build the future together! 🚀
            </p>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-[#1a2328] dark:bg-white/70 rounded-2xl border-2 border-[#F7941D] p-6 text-center">
              <div className="text-4xl font-black text-[#F7941D] mb-2">50+</div>
              <div className="text-sm text-[#FFFAFA] dark:text-[#0B1215]">Active Members</div>
            </div>
            <div className="bg-[#1a2328] dark:bg-white/70 rounded-2xl border-2 border-[#F7941D] p-6 text-center">
              <div className="text-4xl font-black text-[#F7941D] mb-2">30+</div>
              <div className="text-sm text-[#FFFAFA] dark:text-[#0B1215]">Projects Completed</div>
            </div>
            <div className="bg-[#1a2328] dark:bg-white/70 rounded-2xl border-2 border-[#F7941D] p-6 text-center">
              <div className="text-4xl font-black text-[#F7941D] mb-2">15+</div>
              <div className="text-sm text-[#FFFAFA] dark:text-[#0B1215]">Workshops/Year</div>
            </div>
            <div className="bg-[#1a2328] dark:bg-white/70 rounded-2xl border-2 border-[#F7941D] p-6 text-center">
              <div className="text-4xl font-black text-[#F7941D] mb-2">10+</div>
              <div className="text-sm text-[#FFFAFA] dark:text-[#0B1215]">Hackathon Wins</div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-[#F7941D]">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#1a2328] dark:bg-white/70 rounded-2xl border-4 border-[#F7941D] p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-[#ff9933]"
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-[#F7941D] mb-3">{feature.title}</h3>
                  <p className="text-[#FFFAFA] dark:text-[#0B1215] leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-[#F7941D]">
              Technologies & Platforms
            </h2>
            <div className="bg-[#1a2328] dark:bg-white/70 rounded-3xl border-4 border-[#F7941D] p-8">
              <div className="flex flex-wrap gap-4 justify-center">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`${tech.color} text-white px-6 py-3 rounded-full font-bold text-lg hover:scale-110 transition-transform duration-300 shadow-lg cursor-pointer`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 3D Model Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-[#F7941D]">
              Interactive 3D Model
            </h2>
            <p className="text-center text-[#FFFAFA] dark:text-[#0B1215] mb-6 max-w-2xl mx-auto text-lg">
              Explore the Raspberry Pi Compute Module 5 IO Board in 3D. Rotate, zoom, and interact with the model below!
            </p>
            <div className="flex justify-center items-center">
              <div className="sketchfab-embed-wrapper w-full md:w-2/3 rounded-3xl overflow-hidden border-4 border-[#F7941D] bg-gradient-to-br from-[#1a2328] to-[#23272e] dark:bg-white/80 shadow-2xl p-4">
                <iframe
                  title="Raspberry pi Compute Module 5 IO Board"
                  frameBorder="0"
                  allowFullScreen
                  mozallowfullscreen="true"
                  webkitallowfullscreen="true"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  xr-spatial-tracking="true"
                  execution-while-out-of-viewport="true"
                  execution-while-not-rendered="true"
                  web-share="true"
                  src="https://sketchfab.com/models/e9eff70e6afb4498a50e72d6fa564bdb/embed?autostart=1&ui_theme=dark&ui_infos=0&ui_controls=1&ui_watermark=0"
                  className="w-full h-[400px] md:h-[500px] bg-black"
                  style={{ minHeight: 320, borderRadius: '1.5rem', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)' }}
                ></iframe>
                <p style={{fontSize:13, fontWeight:'normal', margin:5, color:'#4A4A4A'}}>
                  <a href="https://sketchfab.com/3d-models/raspberry-pi-compute-module-5-io-board-e9eff70e6afb4498a50e72d6fa564bdb?utm_medium=embed&utm_campaign=share-popup&utm_content=e9eff70e6afb4498a50e72d6fa564bdb" target="_blank" rel="nofollow" style={{fontWeight:'bold', color:'#1CAAD9'}}>Raspberry pi Compute Module 5 IO Board</a> by <a href="https://sketchfab.com/Fa_Sketch?utm_medium=embed&utm_campaign=share-popup&utm_content=e9eff70e6afb4498a50e72d6fa564bdb" target="_blank" rel="nofollow" style={{fontWeight:'bold', color:'#1CAAD9'}}>F2A</a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=e9eff70e6afb4498a50e72d6fa564bdb" target="_blank" rel="nofollow" style={{fontWeight:'bold', color:'#1CAAD9'}}>Sketchfab</a>
                </p>
              </div>
            </div>
          </div>

          {/* Learning Path Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-[#F7941D]">
              Your Learning Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningPath.map((path, index) => (
                <div
                  key={index}
                  className="relative bg-[#1a2328] dark:bg-white/70 rounded-2xl border-4 border-[#F7941D] p-6 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#F7941D] rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">
                    {path.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#F7941D] mb-4 mt-2">{path.title}</h3>
                  <ul className="space-y-2">
                    {path.topics.map((topic, idx) => (
                      <li key={idx} className="text-[#FFFAFA] dark:text-[#0B1215] flex items-center">
                        <span className="text-[#F7941D] mr-2">▸</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-[#F7941D]">
              Student Projects & Ideas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-[#1a2328] dark:bg-white/70 rounded-2xl border-4 border-[#F7941D] p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-[#F7941D] flex-1">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ml-2 ${
                      project.difficulty === 'Beginner' ? 'bg-green-500' :
                      project.difficulty === 'Intermediate' ? 'bg-yellow-500' :
                      'bg-red-500'
                    } text-white`}>
                      {project.difficulty}
                    </span>
                  </div>
                  <p className="text-[#FFFAFA] dark:text-[#0B1215] leading-relaxed mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-[#F7941D]/20 text-[#F7941D] dark:bg-[#F7941D]/30 dark:text-[#0B1215] rounded-full text-xs font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Opportunities Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-[#F7941D]">
              Skills You'll Gain & Opportunities
            </h2>
            <div className="bg-[#1a2328] dark:bg-white/70 rounded-3xl border-4 border-[#F7941D] p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#F7941D] mb-4">🎯 Skills You'll Master</h3>
                  <ul className="space-y-3">
                    {[
                      "Circuit Design & Analysis",
                      "Microcontroller Programming (C/C++/Python)",
                      "PCB Design & Prototyping",
                      "Wireless Communication Protocols",
                      "Cloud & Mobile App Integration",
                      "Problem Solving & Debugging"
                    ].map((role, index) => (
                      <li key={index} className="text-[#FFFAFA] dark:text-[#0B1215] flex items-center">
                        <span className="text-2xl mr-3">✓</span>
                        <span className="font-semibold">{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#F7941D] mb-4">💼 Career Paths</h3>
                  <ul className="space-y-3">
                    {[
                      "Embedded Systems Engineer",
                      "IoT Solutions Developer",
                      "Firmware Engineer",
                      "Hardware Design Engineer",
                      "Robotics Engineer",
                      "Research & Development"
                    ].map((industry, index) => (
                      <li key={index} className="text-[#FFFAFA] dark:text-[#0B1215] flex items-center">
                        <span className="text-2xl mr-3">🚀</span>
                        <span className="font-semibold">{industry}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose This Domain Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-[#F7941D]">
              Why Join Our IoT Domain?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1a2328] dark:bg-white/70 rounded-2xl border-4 border-[#F7941D] p-6 text-center">
                <div className="text-5xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-[#F7941D] mb-3">Learn from Seniors</h3>
                <p className="text-[#FFFAFA] dark:text-[#0B1215]">
                  Get mentored by experienced seniors who have won hackathons and interned at top companies
                </p>
              </div>
              <div className="bg-[#1a2328] dark:bg-white/70 rounded-2xl border-4 border-[#F7941D] p-6 text-center">
                <div className="text-5xl mb-4">🛠️</div>
                <h3 className="text-xl font-bold text-[#F7941D] mb-3">Hands-On Experience</h3>
                <p className="text-[#FFFAFA] dark:text-[#0B1215]">
                  Access to our fully equipped electronics lab with all the components you need for projects
                </p>
              </div>
              <div className="bg-[#1a2328] dark:bg-white/70 rounded-2xl border-4 border-[#F7941D] p-6 text-center">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-[#F7941D] mb-3">Competition Ready</h3>
                <p className="text-[#FFFAFA] dark:text-[#0B1215]">
                  Prepare for Smart India Hackathon, tech fests, and represent our college nationally
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#F7941D] to-[#ff9933] rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready to Start Your IoT Journey?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Join our IoT domain and start building amazing projects with your fellow students!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/courses/iot"
                className="bg-white text-[#F7941D] px-8 py-4 rounded-full font-bold text-lg hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                📚 Study Materials
              </Link>
              <Link
                to="/projects"
                className="bg-[#0B1215] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                💡 View Projects
              </Link>
              <Link
                to="/members"
                className="bg-[#0B1215] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                👥 Meet the Team
              </Link>
              <Link
                to="/events"
                className="bg-[#0B1215] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                🎉 Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IoTEmbedded;
