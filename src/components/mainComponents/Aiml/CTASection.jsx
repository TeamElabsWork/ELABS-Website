import { ArrowRight } from "lucide-react"
export default function CTASection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,140,0,0.15)_0%,transparent_70%)] blur-3xl" />

      <div className="relative max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">build the future</span> with us?
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          Join the <span className="text-orange-400 font-semibold">AIML Wing</span> and become part of groundbreaking research and innovation.
          Collaborate, create, and make an impact.
        </p>

        <div className="flex justify-center">
          <button
            className="relative px-8 py-4 text-lg font-medium text-white rounded-full
            bg-gradient-to-r from-orange-500 to-orange-600 shadow-[0_0_25px_rgba(255,140,0,0.3)]
            hover:shadow-[0_0_35px_rgba(255,140,0,0.6)] hover:scale-105 transition-all duration-300"
          >
            Connect with AIML Elabs 🚀
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
    </section>

  )
}
