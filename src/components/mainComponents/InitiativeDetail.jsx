import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

// Using the same data structure as in Initiative.jsx for consistency
const initiativesData = {
  "kiito-app": {
    title: "KIITO App",
    tagline: "Your Ultimate Digital Companion",
    description: "KIITO App revolutionizes the campus experience by bringing all essential tools into one unified platform. From real-time attendance tracking to seamless assignment submissions, this application is designed to make student life effortlessly digital.",
    longDescription: "Built with modern mobile frameworks, the KIITO App provides a highly responsive and intuitive user interface. It integrates deeply with university systems to provide accurate and timely information. Features include a personalized dashboard, notifications for important events, a digital library portal, and a dedicated communication channel for peer-to-peer and student-to-faculty interactions. Our goal was to create a digital ecosystem that feels less like a utility and more like a companion.",
    image: "https://placehold.co/1200x600/000000/f97316?text=KIITO+App+Hero",
    features: ["Real-time Sync", "Push Notifications", "Offline Mode", "Biometric Auth"],
    color: "from-orange-500 to-orange-700",
    shadow: "shadow-orange-500/50"
  },
  "leet-verse": {
    title: "Leet Verse",
    tagline: "Conquer The Code",
    description: "A competitive programming universe where you solve algorithms, climb leaderboards, and conquer challenges. Leet Verse gamifies the learning process of data structures and algorithms.",
    longDescription: "Leet Verse is designed to make coding interviews less daunting and more engaging. It features a vast repository of problems categorized by difficulty and topic. The platform includes a real-time multiplayer arena where users can race against each other to solve problems. With its sleek dark mode interface, built-in code editor supporting multiple languages, and detailed analytics on your performance, Leet Verse is the perfect training ground for aspiring software engineers.",
    image: "https://placehold.co/1200x600/121212/f97316?text=Leet+Verse+Hero",
    features: ["Multiplayer Arena", "Code Execution Engine", "Performance Analytics", "Global Leaderboard"],
    color: "from-orange-600 to-neutral-900",
    shadow: "shadow-orange-500/40"
  },
  "artico": {
    title: "Artico",
    tagline: "Where Creativity Lives",
    description: "Unleash your creativity. Artico is a digital canvas and community for artists to showcase their masterpieces, get feedback, and collaborate on projects.",
    longDescription: "Artico breaks down the barriers between different art forms. Whether you're into digital painting, 3D modeling, or traditional sketching, Artico provides a beautiful, minimalist platform to curate your portfolio. The platform features an AI-powered recommendation engine that connects artists with similar styles or complementary skills. It also includes an integrated marketplace for users to sell prints or digital assets directly to their audience.",
    image: "https://placehold.co/1200x600/1a1a1a/f97316?text=Artico+Hero",
    features: ["Portfolio Builder", "AI Matchmaking", "Integrated Marketplace", "High-Res Uploads"],
    color: "from-orange-400 to-orange-600",
    shadow: "shadow-orange-400/50"
  },
  "renora": {
    title: "Renora",
    tagline: "The Future of Web Development",
    description: "Next-gen web framework simplifying the creation of highly interactive and performant web applications with unparalleled developer experience.",
    longDescription: "Renora was born out of the frustration with complex configuration files and bloated dependencies. It offers a zero-config setup, blazing-fast hot module replacement, and built-in optimization for assets. It embraces edge computing and serverless architectures out of the box. With its intuitive file-based routing and seamless integration with modern state management solutions, Renora allows developers to focus on writing code rather than wrestling with tooling.",
    image: "https://placehold.co/1200x600/000000/f97316?text=Renora+Hero",
    features: ["Zero Configuration", "Edge Ready", "Asset Optimization", "File-based Routing"],
    color: "from-orange-500 to-black",
    shadow: "shadow-orange-500/50"
  },
  "blaze-bit": {
    title: "Blaze Bit",
    tagline: "Your Ultimate Study Companion",
    description: "Your ultimate study app offering a comprehensive suite of tools designed to maximize your learning efficiency.",
    longDescription: "Blaze Bit helps students organize their study sessions, track their progress, and stay focused. Featuring built-in Pomodoro timers, flashcard generation, and collaborative study rooms, it's the all-in-one platform for academic success.",
    image: "https://placehold.co/1200x600/121212/f97316?text=Blaze+Bit+Hero",
    features: ["Pomodoro Timer", "Flashcard Generator", "Study Rooms", "Progress Analytics"],
    color: "from-orange-600 to-orange-800",
    shadow: "shadow-orange-600/50"
  },
  "code-nexus": {
    title: "Code Nexus",
    tagline: "Connect and Code Together",
    description: "A collaborative hub for developers to share snippets, review code, and build projects together.",
    longDescription: "Code Nexus bridges the gap between individual coders by providing a seamless platform for real-time collaboration. Whether you are debugging a complex issue or architecting a new application, Code Nexus allows you to work together effortlessly.",
    image: "https://placehold.co/1200x600/1a1a1a/f97316?text=Code+Nexus+Hero",
    features: ["Real-time Collaboration", "Snippet Sharing", "Code Review Tools", "Project Boards"],
    color: "from-orange-400 to-black",
    shadow: "shadow-orange-500/40"
  }
};

const InitiativeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate fetching data based on ID
    if (initiativesData[id]) {
      setData(initiativesData[id]);
      window.scrollTo(0, 0);
    } else {
      // Handle not found
      navigate('/#initiatives');
    }
  }, [id, navigate]);

  if (!data) return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#1a1a1a]">
      <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className={`absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br ${data.color} opacity-20 blur-[120px] mix-blend-screen`}></div>
        <div className={`absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr ${data.color} opacity-10 blur-[150px] mix-blend-screen`}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Back Button */}
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate('/#initiatives')}
          className="flex items-center text-gray-400 hover:text-orange-500 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          <span>Back to Initiatives</span>
        </motion.button>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full lg:w-1/2"
          >
            <h1 className={`text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${data.color}`}>
              {data.title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-200 mb-6">
              {data.tagline}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              {data.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className={`px-8 py-3 rounded-full bg-gradient-to-r ${data.color} text-white font-semibold flex items-center shadow-lg ${data.shadow} hover:shadow-xl hover:scale-105 transition-all duration-300`}>
                View Live Site
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
              <button className="px-8 py-3 rounded-full bg-gray-800 text-white border border-gray-700 font-semibold flex items-center hover:bg-gray-700 hover:border-orange-500/50 transition-colors duration-300">
                <Github className="w-5 h-5 mr-2" />
                Source Code
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-1/2 perspective-1000"
          >
            <div className={`relative rounded-3xl overflow-hidden shadow-2xl ${data.shadow} border border-gray-200 dark:border-gray-800 transform-gpu hover:rotate-y-6 transition-transform duration-700 ease-out`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img src={data.image} alt={data.title} className="w-full h-auto object-cover relative z-0" />
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2 prose prose-lg dark:prose-invert max-w-none"
          >
            <h3 className="text-3xl font-bold mb-6 text-white">About the Project</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              {data.longDescription}
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-[#121212] rounded-2xl p-8 border border-orange-500/20 backdrop-blur-sm transition-colors hover:border-orange-500/50">
              <h4 className="text-xl font-bold mb-6 text-white border-b border-gray-800 pb-4">Key Features</h4>
              <ul className="space-y-4">
                {data.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className={`mt-1 mr-3 w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-r ${data.color}`}>
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#121212] rounded-2xl p-8 border border-orange-500/20 backdrop-blur-sm flex flex-col items-center text-center transition-colors hover:border-orange-500/50">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-700/20 mb-4 flex items-center justify-center border border-orange-500/30">
                <span className="text-2xl font-bold text-orange-500">Team</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">ELABS Core Team</h4>
              <p className="text-sm text-gray-400 mb-4">Developed with passion</p>
              <button className="w-full py-2 rounded-lg border border-orange-500/30 text-gray-300 font-medium hover:bg-orange-500/10 hover:text-orange-400 transition-colors">
                View Contributors
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* 3D Transform utility class */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-6 {
          transform: rotateY(-6deg) rotateX(2deg);
        }
      `}</style>
    </div>
  );
};

export default InitiativeDetail;
