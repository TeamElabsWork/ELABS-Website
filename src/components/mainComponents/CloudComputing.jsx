import React, { useState, useEffect, useContext, createContext } from 'react';

// TODO: Please replace this with the correct import to your ThemeContext
// For example: import { ThemeContext } from '../../context/ThemeContext';
// The context is created here temporarily to resolve the compilation error and provide a default.
const ThemeContext = createContext({ theme: 'dark' }); 

// --- SVG Icon Components (Replacement for lucide-react) ---

const CloudIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
  </svg>
);

const ServerIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);

const GlobeIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const BriefcaseIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const TrendingUpIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const ZapIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const ShieldIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const UsersIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const BookOpenIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const CodeIcon = ({ size = 24, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
);

const AwardIcon = ({ size = 24, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 22 12 17 17 22 15.79 13.88"></polyline>
    </svg>
);

// --- Architecture Animation Components ---
const ClientPC = ({ x, y, className }) => (
    <g transform={`translate(${x}, ${y})`}>
        <rect x="0" y="0" width="80" height="50" rx="4" fill="currentColor" opacity="0.5"/>
        <path d="M15 50h50v6H15z" fill="currentColor"/>
        <rect x="5" y="5" width="70" height="40" fill="currentColor" opacity="0.3"/>
    </g>
);
const ControlNode = ({ x, y, className }) => (
    <g transform={`translate(${x}, ${y})`}>
        <rect x="0" y="0" width="100" height="25" rx="4" fill="currentColor" opacity="0.8"/>
        <circle cx="10" cy="12.5" r="3" fill="currentColor" opacity="0.5"/>
        <circle cx="20" cy="12.5" r="3" fill="currentColor" opacity="0.5"/>
    </g>
);
const Database = ({ x, y, className }) => (
     <g transform={`translate(${x}, ${y})`}>
        <ellipse cx="40" cy="12" rx="40" ry="12" fill="currentColor" opacity="0.8"/>
        <path d="M0 12v40c0 6.62 17.91 12 40 12s40-5.38 40-12V12" fill="currentColor" opacity="0.6"/>
        <ellipse cx="40" cy="12" rx="40" ry="12" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8"/>
    </g>
);
const AppServer = ({ x, y, className }) => (
    <g transform={`translate(${x}, ${y})`}>
        <rect x="0" y="0" width="100" height="20" rx="3" fill="currentColor" opacity="0.8"/>
        <circle cx="8" cy="10" r="2" fill="currentColor" opacity="0.5"/>
        <circle cx="16" cy="10" r="2" fill="currentColor" opacity="0.5"/>
    </g>
);
const NetworkPC = ({ x, y, className }) => (
    <g transform={`translate(${x}, ${y})`}>
        <rect x="0" y="0" width="30" height="20" rx="2" fill="currentColor" opacity="0.5"/>
        <path d="M5 20h20v2H5z" fill="currentColor"/>
        <rect x="2" y="2" width="26" height="16" fill="currentColor" opacity="0.3"/>
    </g>
);


export default function CloudComputingIntro() {
  const { theme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState('about');
  const [floatingClouds, setFloatingClouds] = useState([]);

  useEffect(() => {
    const clouds = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: 20 + Math.random() * 30,
      delay: Math.random() * 5
    }));
    setFloatingClouds(clouds);
  }, []);

  const sections = [
    { id: 'about', label: 'About', icon: CloudIcon },
    { id: 'industry', label: 'Industry Relevancy', icon: GlobeIcon },
    { id: 'future', label: 'Future Impact', icon: TrendingUpIcon },
    { id: 'career', label: 'Career Options', icon: BriefcaseIcon },
    { id: 'getstarted', label: 'Get Started', icon: BookOpenIcon }
  ];

  const careers = [
    { title: 'Cloud Architect', salary: '$120k - $180k', demand: 'Very High' },
    { title: 'Cloud Engineer', salary: '$100k - $150k', demand: 'High' },
    { title: 'DevOps Engineer', salary: '$110k - $160k', demand: 'Very High' },
    { title: 'Cloud Security Specialist', salary: '$115k - $170k', demand: 'High' },
    { title: 'Solutions Architect', salary: '$125k - $190k', demand: 'Very High' }
  ];

  const cloudProviders = [
        {
      name: 'Amazon Web Services (AWS)',
      logo: '☁️',
      color: 'from-orange-600 to-yellow-600',
      description: 'Industry leader with 200+ services',
      keyServices: ['EC2 (Virtual Servers)', 'S3 (Storage)', 'Lambda (Serverless)', 'RDS (Databases)'],
      certifications: ['AWS Certified Cloud Practitioner', 'AWS Solutions Architect Associate', 'AWS Developer Associate'],
      learningPath: 'Start with AWS Free Tier → Complete AWS Cloud Practitioner → Build projects → Get certified'
    },
    {
      name: 'Microsoft Azure',
      logo: '⚡',
      color: 'from-blue-600 to-cyan-600',
      description: 'Best for enterprises using Microsoft stack',
      keyServices: ['Virtual Machines', 'Azure Storage', 'Azure Functions', 'Azure SQL Database'],
      certifications: ['Azure Fundamentals (AZ-900)', 'Azure Administrator (AZ-104)', 'Azure Developer (AZ-204)'],
      learningPath: 'Explore Azure Portal → Complete AZ-900 → Practice with free account → Specialize in area'
    },
    {
      name: 'Google Cloud Platform (GCP)',
      logo: '🌐',
      color: 'from-red-600 to-yellow-500',
      description: 'Leading in AI/ML and data analytics',
      keyServices: ['Compute Engine', 'Cloud Storage', 'Cloud Functions', 'BigQuery'],
      certifications: ['Cloud Digital Leader', 'Associate Cloud Engineer', 'Professional Cloud Architect'],
      learningPath: 'Use GCP Free Tier → Learn with Qwiklabs → Get Associate certification → Build ML projects'
    }
  ];

    const industries = [
    {
      name: 'Healthcare',
      icon: '🏥',
      example: 'Hospitals use the cloud for secure patient records and AI-assisted diagnostics, enabling instant access for doctors.',
      impact: 'Reduced data retrieval time from hours to seconds, improved patient care'
    },
    {
      name: 'Finance & Banking',
      icon: '💰',
      example: 'Banks process millions of transactions per second, relying on the cloud for mobile banking, real-time updates, and fraud detection.',
      impact: 'Enhanced security, 24/7 availability, instant transaction processing'
    },
    {
      name: 'E-commerce',
      icon: '🛒',
      example: 'Retailers scale servers during sales to handle traffic spikes, while cloud-based ML powers personalized product recommendations.',
      impact: 'Handle 100x traffic during sales, zero downtime, personalized shopping'
    },
    {
      name: 'Education',
      icon: '📚',
      example: 'Online platforms host millions of video courses, and virtual classrooms connect students globally for real-time learning.',
      impact: 'Global accessibility, interactive learning, cost-effective education delivery'
    },
    {
      name: 'Entertainment',
      icon: '🎬',
      example: 'Streaming services deliver 4K video to millions, and gaming companies host multiplayer games for a lag-free experience.',
      impact: 'Seamless streaming, global content delivery, reduced buffering'
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      example: 'IoT sensors in factories send data to the cloud for predictive maintenance and to track supply chains globally.',
      impact: 'Reduced downtime, optimized production, smart inventory management'
    }
  ];

  const textFillColor = theme === 'dark' ? 'fill-gray-300' : 'fill-gray-600';
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white' : 'bg-gradient-to-br from-gray-100 to-white text-gray-800'} overflow-hidden relative transition-colors duration-500`}>
      {/* Animated Background Clouds */}
      {floatingClouds.map(cloud => (
        <div
          key={cloud.id}
          className={`absolute ${theme === 'dark' ? 'opacity-5 text-white' : 'opacity-20 text-gray-400'}`}
          style={{
            left: `${cloud.x}%`,
            top: `${cloud.y}%`,
            animation: `float ${cloud.speed}s ease-in-out infinite`,
            animationDelay: `${cloud.delay}s`
          }}
        >
          <CloudIcon size={60} />
        </div>
      ))}

      {/* Header */}
      <header className="relative z-10 pt-12 sm:pt-16 pb-8 sm:pb-12 px-4 md:px-6 text-center">
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="relative">
            <CloudIcon size={80} className="text-orange-500" style={{ filter: theme === 'dark' ? 'drop-shadow(0 0 20px rgba(249, 115, 22, 0.5))' : 'drop-shadow(0 0 10px rgba(249, 115, 22, 0.3))' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <ServerIcon size={32} className="text-orange-400" />
            </div>
          </div>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold mb-4" style={{ color: '#f97316', textShadow: theme === 'dark' ? '0 0 30px rgba(249, 115, 22, 0.5)' : 'none' }}>
          CLOUD COMPUTING
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold mb-6" style={{ color: '#fb923c' }}>
          Empowering Through Innovation
        </h2>
        <p className={`text-lg sm:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
          Join us as we foster a community-driven approach to cloud technology.
        </p>
      </header>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-center gap-2 sm:gap-4 px-4 md:px-6 mb-12 sm:mb-16 flex-wrap">
        {sections.map(section => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-300 border-2 font-semibold text-sm sm:text-base ${
                activeSection === section.id
                  ? 'bg-orange-500 border-orange-500 text-white shadow-lg scale-105'
                  : theme === 'dark'
                  ? 'bg-transparent border-orange-500/50 text-gray-200 hover:border-orange-500 hover:bg-orange-500/10'
                  : 'bg-transparent border-gray-300 text-gray-700 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-600'
              }`}
              style={activeSection === section.id && theme === 'dark' ? { boxShadow: '0 0 20px rgba(249, 115, 22, 0.5)' } : {}}
            >
              <Icon size={20} />
              {section.label}
            </button>
          );
        })}
      </nav>

      {/* Content Sections */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 pb-16">
        {/* About Section */}
        {activeSection === 'about' && (
          <div className="animate-fadeIn">
            <div className={`${theme === 'dark' ? 'bg-gray-800/50 border-orange-500/30' : 'bg-white/60 border-gray-200 shadow-sm'} backdrop-blur-md rounded-2xl p-8 border-2`}>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#fb923c' }}>
                <CloudIcon className="text-orange-500" />
                About Cloud Computing
              </h2>
              <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
                <div>
                  <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    Cloud computing is the delivery of computing services including servers, storage, databases, networking, software, analytics, and intelligence over the Internet ("the cloud") to offer faster innovation, flexible resources, and economies of scale.
                  </p>
                  <div className="space-y-4 mt-6">
                    <div className={`flex items-start gap-3 p-4 rounded-lg border transition-all duration-300 ${theme === 'dark' ? 'bg-gray-900/50 border-orange-500/20 hover:border-orange-500/60 hover:bg-gray-900/70 hover:scale-105' : 'bg-orange-500/5 border-gray-200 hover:border-orange-400/50 hover:bg-orange-500/10 hover:scale-105'}`}>
                      <ServerIcon className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3 className={`font-semibold text-lg ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>On-Demand Resources</h3>
                        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Access computing power whenever you need it</p>
                      </div>
                    </div>
                    <div className={`flex items-start gap-3 p-4 rounded-lg border transition-all duration-300 ${theme === 'dark' ? 'bg-gray-900/50 border-orange-500/20 hover:border-orange-500/60 hover:bg-gray-900/70 hover:scale-105' : 'bg-orange-500/5 border-gray-200 hover:border-orange-400/50 hover:bg-orange-500/10 hover:scale-105'}`}>
                      <ZapIcon className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3 className={`font-semibold text-lg ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>Scalability</h3>
                        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Scale resources up or down based on demand</p>
                      </div>
                    </div>
                    <div className={`flex items-start gap-3 p-4 rounded-lg border transition-all duration-300 ${theme === 'dark' ? 'bg-gray-900/50 border-orange-500/20 hover:border-orange-500/60 hover:bg-gray-900/70 hover:scale-105' : 'bg-orange-500/5 border-gray-200 hover:border-orange-400/50 hover:bg-orange-500/10 hover:scale-105'}`}>
                      <ShieldIcon className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3 className={`font-semibold text-lg ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>Security</h3>
                        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Enterprise-grade security and compliance</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Architecture Animation */}
                <div className="flex items-center justify-center p-4 order-first md:order-last">
                    <svg viewBox="0 0 400 250" className="w-full max-w-md h-auto">
                        {/* Components */}
                        <ClientPC x="0" y="95" className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} />
                        <ControlNode x="110" y="108" className={theme === 'dark' ? 'text-green-400' : 'text-green-600'} />
                        <Database x="120" y="10" className={theme === 'dark' ? 'text-red-400' : 'text-red-600'} />
                        <g transform="translate(110, 160)">
                            <AppServer x="0" y="0" className={theme === 'dark' ? 'text-green-400' : 'text-green-600'} />
                            <AppServer x="0" y="25" className={theme === 'dark' ? 'text-green-400' : 'text-green-600'} />
                            <AppServer x="0" y="50" className={theme === 'dark' ? 'text-green-400' : 'text-green-600'} />
                        </g>
                        <rect x="250" y="80" width="150" height="80" rx="5" className={theme === 'dark' ? 'fill-gray-700/50' : 'fill-gray-200'} />
                        <g transform="translate(260, 90)">
                            <NetworkPC x="0" y="0" className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} />
                            <NetworkPC x="40" y="0" className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} />
                            <NetworkPC x="80" y="0" className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} />
                            <NetworkPC x="0" y="30" className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} />
                            <NetworkPC x="40" y="30" className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} />
                            <NetworkPC x="80" y="30" className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} />
                        </g>

                        {/* Labels */}
                        <text x="40" y="160" textAnchor="middle" className={`text-xs ${textFillColor}`}>Client</text>
                        <text x="160" y="100" textAnchor="middle" className={`text-xs ${textFillColor}`}>Control Node</text>
                        <text x="160" y="80" textAnchor="middle" className={`text-xs ${textFillColor}`}>Database</text>
                        <text x="160" y="245" textAnchor="middle" className={`text-xs ${textFillColor}`}>App Servers</text>
                        <text x="325" y="70" textAnchor="middle" className={`text-xs ${textFillColor}`}>Computer Network</text>

                        {/* Connection Lines */}
                        <path d="M 80 120 L 110 120" className="dashed-line" />
                        <path d="M 160 108 L 160 82" className="dashed-line" />
                        <path d="M 160 133 L 160 160" className="dashed-line" />
                        <path d="M 210 120 L 250 120" className="dashed-line" />

                        {/* Animated Packets */}
                        <circle r="3.5" className={theme === 'dark' ? 'fill-purple-400' : 'fill-purple-600'}>
                            <animateMotion dur="3s" repeatCount="indefinite" path="M 85 120 L 110 120" />
                        </circle>
                         <circle r="3.5" className={theme === 'dark' ? 'fill-green-400' : 'fill-green-600'}>
                            <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" path="M 110 120 L 85 120" />
                        </circle>
                        <circle r="3.5" className={theme === 'dark' ? 'fill-green-400' : 'fill-green-600'}>
                            <animateMotion dur="2.5s" repeatCount="indefinite" path="M 160 108 L 160 82" />
                        </circle>
                        <circle r="3.5" className={theme === 'dark' ? 'fill-red-400' : 'fill-red-600'}>
                            <animateMotion dur="2.5s" begin="1.25s" repeatCount="indefinite" path="M 160 82 L 160 108" />
                        </circle>
                        <circle r="3.5" className={theme === 'dark' ? 'fill-green-400' : 'fill-green-600'}>
                            <animateMotion dur="2s" repeatCount="indefinite" path="M 160 133 L 160 160" />
                        </circle>
                         <circle r="3.5" className={theme === 'dark' ? 'fill-green-400' : 'fill-green-600'}>
                            <animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M 160 160 L 160 133" />
                        </circle>
                        <circle r="3.5" className={theme === 'dark' ? 'fill-green-400' : 'fill-green-600'}>
                            <animateMotion dur="3.5s" repeatCount="indefinite" path="M 210 120 L 250 120" />
                        </circle>
                        <circle r="3.5" className={theme === 'dark' ? 'fill-purple-400' : 'fill-purple-600'}>
                            <animateMotion dur="3.5s" begin="1.75s" repeatCount="indefinite" path="M 250 120 L 210 120" />
                        </circle>
                    </svg>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Industry Relevancy Section */}
        {activeSection === 'industry' && (
          <div className="animate-fadeIn">
            <div className={`${theme === 'dark' ? 'bg-gray-800/50 border-orange-500/30' : 'bg-white/60 border-gray-200 shadow-sm'} backdrop-blur-md rounded-2xl p-8 border-2`}>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#fb923c' }}>
                <GlobeIcon className="text-orange-500" />
                Industry Relevancy
              </h2>
              <div className="space-y-6">
                {industries.map((industry, idx) => (
                  <div key={idx} className={`rounded-xl p-6 border transition-all duration-300 ${theme === 'dark' ? 'bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50' : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm'}`}>
                    <div className="flex items-start gap-4">
                      <div className="text-5xl">{industry.icon}</div>
                      <div className="flex-1">
                        <h3 className={`font-bold text-2xl mb-3 ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>{industry.name}</h3>
                        <div className={`rounded-lg p-4 mb-3 border-l-4 border-orange-500 ${theme === 'dark' ? 'bg-orange-500/10' : 'bg-orange-500/5'}`}>
                          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>{industry.example}</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <TrendingUpIcon className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                          <p className={`${theme === 'dark' ? 'text-orange-300' : 'text-orange-500'} font-semibold`}>Impact: {industry.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Future Impact Section */}
        {activeSection === 'future' && (
          <div className="animate-fadeIn">
            <div className={`${theme === 'dark' ? 'bg-gray-800/50 border-orange-500/30' : 'bg-white/60 border-gray-200 shadow-sm'} backdrop-blur-md rounded-2xl p-8 border-2`}>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#fb923c' }}>
                <TrendingUpIcon className="text-orange-500" />
                Future Impact
              </h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: 'Edge Computing Integration', desc: 'Processing data closer to source for reduced latency. Self-driving cars and IoT devices will rely on edge cloud computing for instant decision-making.', icon: ZapIcon },
                    { title: 'AI & Machine Learning', desc: 'Cloud-powered AI services becoming mainstream. ChatGPT-like models, image generation, and predictive analytics accessible to everyone via cloud APIs.', icon: ServerIcon },
                    { title: 'Quantum Computing', desc: 'Cloud-based quantum computing accessibility. Companies like IBM and Google offering quantum computers through cloud, solving complex problems in seconds.', icon: CloudIcon },
                    { title: 'Sustainability Focus', desc: 'Green cloud initiatives and carbon-neutral data centers. Major providers committed to 100% renewable energy by 2030, reducing global carbon footprint.', icon: GlobeIcon }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className={`rounded-xl p-6 border transition-all duration-300 ${theme === 'dark' ? 'bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50' : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm'}`}>
                        <Icon className="text-orange-500 mb-3" size={32} />
                        <h4 className={`font-bold text-lg mb-2 ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>{item.title}</h4>
                        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Career Options Section */}
        {activeSection === 'career' && (
          <div className="animate-fadeIn">
            <div className={`${theme === 'dark' ? 'bg-gray-800/50 border-orange-500/30' : 'bg-white/60 border-gray-200 shadow-sm'} backdrop-blur-md rounded-2xl p-8 border-2`}>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#fb923c' }}>
                <BriefcaseIcon className="text-orange-500" />
                Career Options
              </h2>
              <div className="space-y-4 mb-8">
                {careers.map((career, idx) => (
                  <div
                    key={idx}
                    className={`rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/30 hover:border-orange-500/60' : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'}`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex-1 min-w-[200px]">
                        <h3 className={`font-bold text-xl mb-2 ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>{career.title}</h3>
                        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Salary Range: {career.salary}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <UsersIcon className="text-orange-500" size={20} />
                        <span className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Demand: <span className="font-bold text-orange-500">{career.demand}</span></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`rounded-xl p-6 border ${theme === 'dark' ? 'bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/30' : 'bg-white border-gray-200'}`}>
                <h3 className={`font-bold text-xl mb-4 ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>Essential Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {['AWS/Azure/GCP', 'Docker & Kubernetes', 'Python/Java', 'CI/CD', 'Networking', 'Security', 'Infrastructure as Code', 'Monitoring'].map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 border rounded-lg transition-all duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-gray-900/50 border-orange-500/30 text-gray-300 hover:border-orange-500 hover:bg-orange-500/10' : 'bg-gray-100 border-gray-300 text-gray-700 hover:border-orange-500 hover:bg-orange-500/10'}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Get Started Section */}
        {activeSection === 'getstarted' && (
          <div className="animate-fadeIn">
            <div className={`${theme === 'dark' ? 'bg-gray-800/50 border-orange-500/30' : 'bg-white/60 border-gray-200 shadow-sm'} backdrop-blur-md rounded-2xl p-8 border-2`}>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#fb923c' }}>
                <BookOpenIcon className="text-orange-500" />
                How to Start Your Cloud Journey
              </h2>
              
              <div className={`mb-8 rounded-xl p-6 border ${theme === 'dark' ? 'bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/30' : 'bg-white border-gray-200'}`}>
                <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>Roadmap for Beginners</h3>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Learn the Basics', desc: 'Understand cloud fundamentals, service models (IaaS, PaaS, SaaS), and deployment models' },
                    { step: '2', title: 'Choose a Platform', desc: 'Start with one cloud provider (AWS, Azure, or GCP) - don\'t try to learn all at once' },
                    { step: '3', title: 'Get Hands-On', desc: 'Create free tier accounts and build projects - deploy websites, databases, and applications' },
                    { step: '4', title: 'Get Certified', desc: 'Earn entry-level certification to validate your knowledge and boost your resume' },
                    { step: '5', title: 'Specialize', desc: 'Focus on specific areas like security, DevOps, architecture, or data engineering' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="bg-orange-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ boxShadow: theme === 'dark' ? '0 0 15px rgba(249, 115, 22, 0.5)' : '0 4px 10px rgba(249, 115, 22, 0.3)' }}>
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-bold text-lg ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'} mb-1`}>{item.title}</h4>
                        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>Major Cloud Platforms</h3>
              <div className="space-y-6">
                {cloudProviders.map((provider, idx) => (
                  <div key={idx} className={`rounded-xl p-6 border transition-all duration-300 ${theme === 'dark' ? 'bg-gray-900/50 border-orange-500/20 hover:border-orange-500/50' : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm'}`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-5xl">{provider.logo}</div>
                      <div className="flex-1">
                        <h4 className={`font-bold text-2xl ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'} mb-2`}>{provider.name}</h4>
                        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-lg mb-4`}>{provider.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <ServerIcon className="text-orange-500" size={20} />
                          <h5 className={`font-bold text-lg ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>Key Services</h5>
                        </div>
                        <ul className="space-y-2">
                          {provider.keyServices.map((service, sIdx) => (
                            <li key={sIdx} className={`flex items-center gap-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                              <div className="w-2 h-2 bg-orange-500 rounded-full" />
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <AwardIcon className="text-orange-500" size={20} />
                          <h5 className={`font-bold text-lg ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>Certifications</h5>
                        </div>
                        <ul className="space-y-2">
                          {provider.certifications.map((cert, cIdx) => (
                            <li key={cIdx} className={`flex items-center gap-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                              <div className="w-2 h-2 bg-orange-500 rounded-full" />
                              {cert}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className={`mt-6 ${theme === 'dark' ? `bg-gradient-to-r ${provider.color} bg-opacity-10` : 'bg-gray-50'} rounded-lg p-4 border-l-4 border-orange-500`}>
                      <div className="flex items-center gap-2 mb-2">
                        <CodeIcon className="text-orange-500" size={20} />
                        <h5 className={`font-bold ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>Learning Path</h5>
                      </div>
                      <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{provider.learningPath}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`mt-8 rounded-xl p-6 border ${theme === 'dark' ? 'bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/30' : 'bg-white border-gray-200'}`}>
                <h3 className={`font-bold text-xl mb-4 flex items-center gap-2 ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>
                  <ZapIcon className="text-orange-500" size={24} />
                  Free Resources to Get Started
                </h3>
                <div className={`grid md:grid-cols-2 gap-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <div>
                    <p className={`font-semibold ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'} mb-2`}>Free Learning Platforms:</p>
                    <ul className="space-y-1">
                      <li>• AWS Free Tier (12 months free)</li>
                      <li>• Microsoft Learn (Azure tutorials)</li>
                      <li>• Google Cloud Skills Boost</li>
                      <li>• YouTube channels & documentation</li>
                    </ul>
                  </div>
                  <div>
                    <p className={`font-semibold ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'} mb-2`}>Practice Projects:</p>
                    <ul className="space-y-1">
                      <li>• Deploy a personal website</li>
                      <li>• Create a serverless API</li>
                      <li>• Set up a database & backup</li>
                      <li>• Build CI/CD pipeline</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .dashed-line {
            stroke-dasharray: 4;
            stroke: ${theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)'};
            stroke-width: 1.5;
            fill: none;
        }
      `}</style>
    </div>
  );
}

