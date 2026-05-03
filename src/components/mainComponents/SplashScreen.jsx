import { useEffect, useState } from "react";

const SplashScreen = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const fadeTimer = setTimeout(() => setFadeOut(true), 4000);
    const splashTimer = setTimeout(() => onComplete(), 6000);

    return () => {
      document.body.style.overflow = "unset";
      clearTimeout(fadeTimer);
      clearTimeout(splashTimer);
    };
  }, [onComplete]);

  return (
    <>
      {/* 🔥 Animation Definitions */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        @keyframes ringPulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.2); opacity: 0; }
        }

        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(251,146,60,0.8)); }
          50% { filter: drop-shadow(0 0 60px rgba(251,146,60,1)); }
        }

        @keyframes letterBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes dotPulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }

        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-progress-fill { animation: progress 6s linear forwards; }
        .animate-pulse-ring { animation: ringPulse 2.5s infinite; }
        .animate-pulse-ring-delay { animation: ringPulse 2.5s infinite 1.2s; }
        .animate-logo-glow { animation: glow 2.5s ease-in-out infinite; }
        .animate-letter-bounce { animation: letterBounce 1.2s infinite; }
        .animate-dot-pulse { animation: dotPulse 1.4s infinite; }
      `}</style>

      <div
        className={`
          fixed inset-0 w-screen h-screen
          flex items-center justify-center
          bg-black z-[9999]
          transition-opacity duration-1000
          ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        <div className="relative z-10 flex flex-col items-center gap-12">
          {/* Logo + Rings */}
          <div className="relative w-[300px] h-[300px] flex items-center justify-center">
            <div className="absolute w-[280px] h-[280px] rounded-full border-4 border-orange-400 animate-pulse-ring" />
            <div className="absolute w-[320px] h-[320px] rounded-full border-4 border-orange-400 animate-pulse-ring-delay" />

            <div className="relative z-10 animate-float">
              <img
                src="/Images/E LABS LOGO.png"
                alt="E LABS Logo"
                className="w-[200px] h-[200px] object-contain animate-logo-glow"
                onError={(e) =>
                  (e.target.src =
                    "/Images/E-Labs_Update_Logo_SVG.svg")
                }
              />
            </div>
          </div>

          {/* Loading Text */}
          <div className="flex items-center text-3xl font-semibold text-orange-400 tracking-[4px]">
            {"Loading".split("").map((l, i) => (
              <span
                key={i}
                className="animate-letter-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {l}
              </span>
            ))}
            <span className="ml-2 flex">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="animate-dot-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  .
                </span>
              ))}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-[300px] h-1 bg-orange-400/30 rounded-full overflow-hidden">
            <div className="h-full bg-orange-400 animate-progress-fill" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SplashScreen;
