import { Sparkles } from "lucide-react"

export default function EventsSection() {
  const events = [
    { title: "Game Development", date: "Sep 2024", description: "Industry leaders discuss Game trends" },
    { title: "AI Alchemist", date: "Nov 2025", description: "Ai pitch, Meme events" },
    { title: "IOT x ML", date: "Nov 2025", description: "48-hour AI/ML x IOT Workshops" },
    { title: "Code & Learn", date: "Feb 2025", description: "Hands-on ML workshops" },
  ]

  return (
    <section id="events" className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center mb-16 animate-slide-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          Events & Workshops
        </h2>
        <p className="text-gray-400 text-lg">Join us for learning and collaboration</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="group p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                <p className="text-orange-400 text-sm font-semibold">{event.date}</p>
              </div>
              <Sparkles className="w-5 h-5 text-orange-500 group-hover:animate-spin" />
            </div>
            <p className="text-gray-400">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
