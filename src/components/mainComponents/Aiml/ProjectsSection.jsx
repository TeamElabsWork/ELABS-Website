import { Card, CardHeader, CardContent } from "../../ui/card";
import { Brain, Code2, Layers, Cpu, Cloud } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI Chatbot Assistant",
      desc: "An intelligent chatbot powered by NLP and deep learning for contextual responses.",
      icon: <Brain className="w-8 h-8 text-orange-400" />,
      tech: ["Python", "Transformers", "Flask"],
    },
    {
      title: "Map_App",
      desc: "Cross-platform mobile app built with React Native and Firebase for real-time sync.",
      icon: <Code2 className="w-8 h-8 text-orange-400" />,
      tech: ["React Native", "Firebase", "Tailwind"],
    },
    {
      title: "Project3",
      desc: "An immersive educational platform blending augmented and virtual reality experiences.",
      icon: <Layers className="w-8 h-8 text-orange-400" />,
      tech: ["Unity", "C#", "Blender"],
    },
    {
      title: "Cloud Infra Monitor",
      desc: "Dashboard to monitor server health, usage analytics, and deployment metrics in real time.",
      icon: <Cloud className="w-8 h-8 text-orange-400" />,
      tech: ["AWS", "Node.js", "React"],
    },
    {
      title: "IoT Device Control",
      desc: "Smart automation system integrating sensor data with a real-time web dashboard.",
      icon: <Cpu className="w-8 h-8 text-orange-400" />,
      tech: ["Arduino", "MQTT", "Express.js"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 px-4 md:px-8 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/10 via-black to-black" />

      <div className="relative max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Our Projects
          </span>
        </h2>
        <p className="text-gray-400 text-lg">
          Innovative solutions crafted with AI, creativity, and cutting-edge technology.
        </p>
      </div>

      <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-zinc-900/70 to-zinc-800/40
                       border border-orange-500/10 hover:border-orange-400/30
                       transition-all duration-300 hover:scale-[1.02]
                       hover:shadow-[0_0_25px_rgba(255,140,0,0.3)] rounded-2xl"
          >
            <CardHeader className="flex flex-col items-center text-center space-y-3">
              <div className="p-4 rounded-full bg-orange-500/10 ring-1 ring-orange-500/30">
                {project.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
            </CardHeader>

            <CardContent className="text-gray-400 text-sm leading-relaxed">
              <p>{project.desc}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full
                               bg-orange-500/10 text-orange-300
                               border border-orange-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
                      bg-orange-500/10 rounded-full blur-3xl animate-pulse
                      pointer-events-none" />
    </section>
  );
}
