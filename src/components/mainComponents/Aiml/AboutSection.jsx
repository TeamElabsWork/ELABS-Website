"use client"

import { Zap, Brain } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/10 via-black to-black" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                About the AIML Wing
              </span>
            </h2>

            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              We are a collective of passionate innovators, researchers, and engineers dedicated to pushing
              the boundaries of Artificial Intelligence and Machine Learning.
            </p>

            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              From cutting-edge research to real-world applications, we explore the intersection of data science,
              neural networks, and intelligent automation — shaping the future of technology through hands-on
              innovation.
            </p>

            <div className="flex gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">Innovation-Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-orange-500" />
                <span className="text-gray-300">Research-Focused</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-orange-600/20 via-orange-500/10 to-transparent rounded-full blur-3xl animate-pulse" />

            <div className="absolute w-72 h-72 md:w-88 md:h-88 rounded-full border border-orange-500/20 shadow-[0_0_40px_rgba(255,140,0,0.15)]" />

            <img
              // src="/Images/Logo/AIML.png"
              src="/Images/E-Labs_Update_Logo_SVG.svg"
              alt="AIML Logo"
              className="relative z-10 w-56 md:w-64 object-contain drop-shadow-[0_0_25px_rgba(255,140,0,0.5)] transition-transform duration-500 hover:scale-105 hover:drop-shadow-[0_0_35px_rgba(255,165,0,0.7)]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
