import { ChevronDown, ArrowRight } from "lucide-react"
import ParticleNetwork from "./ParticleNetwork"

export default function HeroSection({ scrollToSection }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 via-black to-black" />
      <ParticleNetwork />
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* <div className="animate-slide-down mb-6">
          <span className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/50 rounded-full text-orange-400 text-sm font-semibold">
            🚀 Elabs AIML
          </span>
        </div> */}

        <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-slide-up">
          <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
            Artificial Intelligence
          </span>
          <br />
          <span className="text-white">& Machine Learning</span>
          <br />
          <span className="text-orange-500">@ Elabs</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-slide-up max-w-2xl mx-auto">
          Empowering innovation through data, logic, and intelligence. Building the future of AI.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group animate-glow"
          >
            Explore Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="https://elabskiit.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-orange-500 text-orange-400 hover:bg-orange-500/10 font-bold rounded-lg transition-all duration-300"
          >
            Join AIML ELabs
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-orange-500" />
      </div>
    </section>
  )
}



