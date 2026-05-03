"use client"
import { useState } from "react"

export default function TeamSection() {
  const [hoveredTeam, setHoveredTeam] = useState(null)

  const team = [
    { name: "Saumyajeet Chaterjee", role: "Coordinator", expertise: "Deep Learning, NLP", initials: "AC" },
    { name: "ABC", role: "ML Engineer", expertise: "Computer Vision, PyTorch", initials: "SK" },
    { name: "DEF", role: "Data Scientist", expertise: "Statistics, Analytics", initials: "MJ" },
    { name: "GHI", role: "AI Architect", expertise: "System Design, LLMs", initials: "ER" },
    { name: "JKL", role: "ML Ops Engineer", expertise: "Deployment, Scaling", initials: "JL" },
    { name: "MNO", role: "Research Scientist", expertise: "Reinforcement Learning", initials: "PP" },
  ]

  return (
    <section id="team" className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-black via-orange-900/5 to-black">
      <div className="max-w-6xl mx-auto text-center mb-16 animate-slide-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          Our Team
        </h2>
        <p className="text-gray-400 text-lg">Meet the brilliant minds behind the innovation</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {team.map((member, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHoveredTeam(idx)}
            onMouseLeave={() => setHoveredTeam(null)}
            className="group relative animate-slide-up"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl hover:border-orange-500/50 transition-all duration-300 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4 border-2 border-orange-400/50 group-hover:border-orange-400 transition-all duration-300">
                  <span className="text-white font-bold text-lg">{member.initials}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-orange-400 text-sm font-semibold mb-3">{member.role}</p>
                <div className={`transition-all duration-300 ${hoveredTeam === idx ? "opacity-100" : "opacity-0"}`}>
                  <p className="text-gray-400 text-sm">{member.expertise}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
