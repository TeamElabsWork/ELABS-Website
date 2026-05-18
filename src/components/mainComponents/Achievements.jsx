import React, { useEffect } from "react";
import { motion } from "framer-motion";

const achievementsData = [
  {
    name: "Saumyajeet Chatterjee",
    role: "Coordinator",
    achievement: "Successfully led the ELABS community to new heights, orchestrating major events, driving unprecedented engagement, and fostering a collaborative environment that empowered students to innovate and excel.",
    image: "https://placehold.co/600x600/000000/f97316?text=Saumyajeet+Chatterjee",
    color: "from-orange-500 to-orange-700"
  },
  {
    name: "Swayam Mishra",
    role: "Cyber Lead",
    achievement: "Pioneered advanced cybersecurity workshops, significantly enhancing the community's defense skillsets. Played a critical role in securing internal platforms and mentoring the next generation of ethical hackers.",
    image: "https://placehold.co/600x600/121212/f97316?text=Swayam+Mishra",
    color: "from-orange-600 to-neutral-900"
  },
  {
    name: "Abinash Mohanty",
    role: "Android Lead",
    achievement: "Spearheaded the development of the cutting-edge mobile applications, bringing modern UI/UX principles to life in Kotlin and Flutter, and vastly improving the digital campus experience.",
    image: "https://placehold.co/600x600/1a1a1a/f97316?text=Abinash+Mohanty",
    color: "from-orange-400 to-orange-600"
  },
  {
    name: "Prabodh Bal",
    role: "Asst Coordinator",
    achievement: "Instrumental in the smooth execution of daily operations and large-scale hackathons. A core pillar in management, ensuring seamless communication and resource allocation across all domains.",
    image: "https://placehold.co/600x600/000000/f97316?text=Prabodh+Bal",
    color: "from-orange-500 to-black"
  },
  {
    name: "Megha Rege",
    role: "Asst Coordinator",
    achievement: "Played a vital role in expanding the community outreach and streamlining administrative processes. Her dedication to organizing interactive sessions drastically boosted member retention and satisfaction.",
    image: "https://placehold.co/600x600/121212/f97316?text=Megha+Rege",
    color: "from-orange-600 to-orange-800"
  }
];

const Achievements = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 pb-20 overflow-x-hidden">
      {/* Decorative Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-orange-500/10 to-orange-700/10 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-orange-400/10 to-black/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
            Hall of Fame
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium">
            Celebrating the remarkable individuals who have shaped our community, broken boundaries, and led with passion.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {achievementsData.map((person, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
              >
                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full lg:w-1/2"
                >
                  <div className="bg-[#121212] p-8 md:p-12 rounded-3xl border border-orange-500/20 shadow-[0_10px_40px_rgba(249,115,22,0.15)] backdrop-blur-sm relative transition-all hover:border-orange-500/50">
                    <div className={`absolute top-0 left-0 w-2 h-full rounded-l-3xl bg-gradient-to-b ${person.color}`} />
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {person.name}
                    </h2>
                    <h3 className={`text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${person.color}`}>
                      {person.role}
                    </h3>
                    
                    <div className="relative">
                      <svg className="absolute -top-4 -left-4 w-10 h-10 text-orange-500/20" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                      </svg>
                      <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic relative z-10">
                        {person.achievement}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Image Section */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, rotate: isEven ? -5 : 5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full lg:w-1/2 relative group perspective-1000"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${person.color} opacity-30 group-hover:opacity-50 blur-3xl transition-opacity duration-500 rounded-full`} />
                  
                  <div className="relative rounded-[3rem] overflow-hidden border border-orange-500/30 shadow-[0_20px_50px_rgba(249,115,22,0.2)] transform-gpu transition-transform duration-700 group-hover:scale-[1.02]">
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="w-full h-auto aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
