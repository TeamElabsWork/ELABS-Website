import { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";

export default function MemberFlipCard({ member }) {
  const [flipped, setFlipped] = useState(false);

  if (!member) return null;

  const { name, designation, domains, photo, socials, intro } = member;

  const displayRole =
    designation && designation !== "Member"
      ? designation
      : domains?.[0] ?? "Member";

  return (
    <div
      className="relative w-64 h-96 cursor-pointer group"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ── FRONT (Photo, Name, Role Only) ──────────────── */}
        <div
          className="absolute inset-0 rounded-xl p-6 flex flex-col items-center justify-center gap-4"
          style={{
            backfaceVisibility: "hidden",
            background:
              "linear-gradient(180deg,#FF6A00 0%,#FF8C1A 25%,#C2410C 60%,#000 100%)",
            boxShadow:
              "0 0 20px rgba(255,106,0,0.6), inset 0 0 15px rgba(255,140,26,0.4)",
          }}
        >
          {photo ? (
            <img
              src={photo}
              alt={name}
              className="w-32 h-32 rounded-full border-4 border-black object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling && (e.target.nextSibling.style.display = "flex");
              }}
            />
          ) : null}
          <div
            className="w-32 h-32 rounded-full border-4 border-black bg-orange-300/30 items-center justify-center text-3xl font-bold text-white"
            style={{ display: photo ? "none" : "flex" }}
          >
            {name?.charAt(0)?.toUpperCase()}
          </div>

          <div className="flex flex-col items-center mt-2">
            <h3 className="text-white font-bold text-center text-xl leading-tight">
              {name}
            </h3>
            <p className="text-orange-300 tracking-widest text-sm text-center mt-2">
              {displayRole}
            </p>
          </div>
        </div>

        {/* ── BACK (Intro & Socials) ──────────────────────── */}
        <div
          className="absolute inset-0 rounded-xl p-6 flex flex-col items-center justify-between"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(180deg,#7C2D12 0%,#000 100%)",
            boxShadow:
              "0 0 20px rgba(255,106,0,0.6), inset 0 0 15px rgba(255,140,26,0.4)",
          }}
        >
          {/* Top: Introduction (Fixed Scrolling & Font Size) */}
          <div 
            className="flex-1 flex flex-col w-full overflow-y-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {intro ? (
              <p className="text-orange-100/90 text-xs italic leading-relaxed text-center m-auto py-2">
                "{intro}"
              </p>
            ) : (
              <p className="text-orange-300/40 text-xs italic text-center m-auto">
                No introduction provided.
              </p>
            )}
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-orange-500/40 my-4 shrink-0"></div>

          {/* Bottom: Socials */}
          <div className="flex flex-col items-center gap-4 shrink-0 pb-2">
            <h3 className="text-orange-300 font-bold text-sm tracking-widest uppercase">
              Connect
            </h3>
            
            <div className="flex gap-5">
              {socials?.instagram && (
                <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} className="text-white transition transform hover:scale-110 hover:text-orange-400" />
                </a>
              )}
              {socials?.linkedin && (
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} className="text-white transition transform hover:scale-110 hover:text-orange-400" />
                </a>
              )}
              {socials?.github && (
                <a href={socials.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={24} className="text-white transition transform hover:scale-110 hover:text-orange-400" />
                </a>
              )}
              {!socials?.instagram && !socials?.linkedin && !socials?.github && (
                <span className="text-orange-300/50 text-xs">No socials available</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

MemberFlipCard.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string,
    designation: PropTypes.string,
    domains: PropTypes.arrayOf(PropTypes.string),
    photo: PropTypes.string,
    intro: PropTypes.string,
    socials: PropTypes.shape({
      instagram: PropTypes.string,
      linkedin: PropTypes.string,
      github: PropTypes.string,
    }),
  }),
};