import { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";

function convertGoogleDriveUrl(url) {
  if (!url) return "";

  url = url.trim();

  let match = url.match(/\/file\/d\/([^/]+)/);
  if (match?.[1]) {
    return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`;
  }

  match = url.match(/[?&]id=([^&]+)/);
  if (match?.[1]) {
    return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`;
  }

  return url;
}

function normalizeUrl(url) {
  if (!url) return "";

  const trimmed = url.trim();

  if (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://")
  ) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

// Touch devices never fire hover, so the back of the card is unreachable there.
// Detect once and fall back to tap/keyboard toggling instead.
function detectHover() {
  if (typeof window === "undefined" || !window.matchMedia) return true;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export default function MemberFlipCard({ member }) {
  const [flipped, setFlipped] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const [canHover] = useState(detectHover);

  if (!member) return null;

  const {
    name,
    designation,
    domain,
    photo_url,
    github,
    linkedin,
    instagram,
    intro,
  } = member;

  const imageUrl = convertGoogleDriveUrl(photo_url);

  const socials = {
    github: normalizeUrl(github),
    linkedin: normalizeUrl(linkedin),
    instagram: normalizeUrl(instagram),
  };

  const displayRole =
    designation && designation !== "member"
      ? designation
      : domain || "member";

  const showFallback = !imageUrl || imageFailed;

  const toggleFlip = () => setFlipped((prev) => !prev);

  const hoverHandlers = canHover
    ? {
        onMouseEnter: () => setFlipped(true),
        onMouseLeave: () => setFlipped(false),
      }
    : {};

  return (
    <div
      className="relative w-full max-w-[16rem] h-64 sm:h-96 cursor-pointer group"
      style={{ perspective: "1200px" }}
      role="button"
      tabIndex={0}
      aria-label={`${name} — ${displayRole}. Show details`}
      aria-pressed={flipped}
      onClick={toggleFlip}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleFlip();
        }
      }}
      {...hoverHandlers}
    >
      <div
        className="w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-xl p-3 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-4"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            background:
              "linear-gradient(180deg,#FF6A00 0%,#FF8C1A 25%,#C2410C 60%,#000 100%)",
            boxShadow:
              "0 0 20px rgba(255,106,0,0.6), inset 0 0 15px rgba(255,140,26,0.4)",
          }}
        >
          {!showFallback && (
            <img
              src={imageUrl}
              alt={name}
              className="w-20 h-20 sm:w-32 sm:h-32 rounded-full border-2 sm:border-4 border-black object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
              onError={() => setImageFailed(true)}
            />
          )}

          {showFallback && (
            <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full border-2 sm:border-4 border-black bg-orange-300/30 flex items-center justify-center text-xl sm:text-3xl font-bold text-white">
              {name?.charAt(0)?.toUpperCase()}
            </div>
          )}

          <div className="flex flex-col items-center mt-1 sm:mt-2 w-full">
            <h3 className="text-white font-bold text-center text-sm sm:text-xl leading-tight break-words w-full">
              {name}
            </h3>
            <p className="text-orange-300 tracking-wide sm:tracking-widest text-[11px] sm:text-sm text-center mt-1 sm:mt-2 break-words w-full">
              {displayRole}
            </p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-xl p-3 sm:p-6 flex flex-col items-center justify-between"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(180deg,#7C2D12 0%,#000 100%)",
            boxShadow:
              "0 0 20px rgba(255,106,0,0.6), inset 0 0 15px rgba(255,140,26,0.4)",
          }}
        >
          <div
            className="flex-1 flex flex-col w-full overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {intro ? (
              <p className="text-orange-100/90 text-[11px] sm:text-xs italic leading-relaxed text-center m-auto py-2">
                &quot;{intro}&quot;
              </p>
            ) : (
              <p className="text-orange-300/40 text-[11px] sm:text-xs italic text-center m-auto">
                No introduction provided.
              </p>
            )}
          </div>

          <div className="w-12 sm:w-16 h-px bg-orange-500/40 my-2 sm:my-4 shrink-0"></div>

          <div className="flex flex-col items-center gap-2 sm:gap-4 shrink-0 pb-1 sm:pb-2">
            <h3 className="text-orange-300 font-bold text-[11px] sm:text-sm tracking-widest uppercase">
              Connect
            </h3>

            <div className="flex gap-3 sm:gap-5">
              {socials.instagram && (
                <a
                  href={socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} on Instagram`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-orange-400" />
                </a>
              )}

              {socials.linkedin && (
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} on LinkedIn`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-orange-400" />
                </a>
              )}

              {socials.github && (
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} on GitHub`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-orange-400" />
                </a>
              )}

              {!socials.instagram &&
                !socials.linkedin &&
                !socials.github && (
                  <span className="text-orange-300/50 text-[11px] sm:text-xs">
                    No socials available
                  </span>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

MemberFlipCard.propTypes = {
  member: PropTypes.object,
};
