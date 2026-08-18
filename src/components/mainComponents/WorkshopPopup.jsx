import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Sparkles } from "lucide-react";

const WorkshopPopup = ({ delay = 1800 }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            className="relative w-full max-w-lg sm:max-w-xl z-10 my-auto"
            initial={{ opacity: 0, scale: 0.85, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 24,
            }}
          >
            {/* Outer Glow & Glass Card */}
            <div className="relative rounded-3xl bg-[#0B1215]/95 border border-[#F7941D]/35 shadow-[0_0_60px_rgba(247,148,29,0.25)] backdrop-blur-xl overflow-hidden p-5 sm:p-7 text-white">
              {/* Background ambient lighting effects */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#F7941D]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#ff7a00]/15 rounded-full blur-3xl pointer-events-none" />

              {/* Header: Badge & Close Button */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7941D]/15 border border-[#F7941D]/40 text-[#F7941D] text-xs font-semibold uppercase tracking-wider shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#F7941D] animate-pulse" />
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Exclusive Workshop</span>
                </div>

                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close popup"
                  className="p-2 rounded-full bg-white/5 hover:bg-[#F7941D]/20 text-gray-300 hover:text-white border border-white/10 hover:border-[#F7941D]/50 transition-all duration-200 hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#F7941D]/60"
                >
                  <X className="w-5 h-5 transition-transform group-hover:rotate-90 duration-200" />
                </button>
              </div>

              {/* Workshop Banner Image */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#131b20] shadow-xl group mb-5">
                <img
                  src="/events/matlab-workshop.jpeg"
                  alt="MATLAB Workshop Announcement"
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://elabs-registration-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl font-bold text-white text-base text-center bg-gradient-to-r from-[#F7941D] to-[#ff7a00] hover:from-[#ff9e2c] hover:to-[#f7941d] shadow-[0_4px_22px_rgba(247,148,29,0.4)] hover:shadow-[0_6px_30px_rgba(247,148,29,0.65)] transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-250 flex items-center justify-center gap-2.5 no-underline group"
                >
                  <span>Register Now</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full sm:w-auto py-3.5 px-5 rounded-xl text-sm font-semibold text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 text-center"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WorkshopPopup;
