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

export default function MemberFlipCard({ member }) {
  const [flipped, setFlipped] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

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
    designation && designation !== "Member"
      ? designation
      : domain || "Member";

  const showFallback = !imageUrl || imageFailed;

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
        {/* FRONT */}
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
          {!showFallback && (
            <img
              src={imageUrl}
              alt={name}
              className="w-32 h-32 rounded-full border-4 border-black object-cover"
              referrerPolicy="no-referrer"
              onError={() => setImageFailed(true)}
            />
          )}

          {showFallback && (
            <div className="w-32 h-32 rounded-full border-4 border-black bg-orange-300/30 flex items-center justify-center text-3xl font-bold text-white">
              {name?.charAt(0)?.toUpperCase()}
            </div>
          )}

          <div className="flex flex-col items-center mt-2">
            <h3 className="text-white font-bold text-center text-xl leading-tight">
              {name}
            </h3>
            <p className="text-orange-300 tracking-widest text-sm text-center mt-2">
              {displayRole}
            </p>
          </div>
        </div>

        {/* BACK */}
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
          <div
            className="flex-1 flex flex-col w-full overflow-y-auto"
            style={{ scrollbarWidth: "none" }}
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

          <div className="w-16 h-px bg-orange-500/40 my-4 shrink-0"></div>

          <div className="flex flex-col items-center gap-4 shrink-0 pb-2">
            <h3 className="text-orange-300 font-bold text-sm tracking-widest uppercase">
              Connect
            </h3>

            <div className="flex gap-5">
              {socials.instagram && (
                <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} className="text-white hover:text-orange-400" />
                </a>
              )}

              {socials.linkedin && (
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} className="text-white hover:text-orange-400" />
                </a>
              )}

              {socials.github && (
                <a href={socials.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={24} className="text-white hover:text-orange-400" />
                </a>
              )}

              {!socials.instagram &&
                !socials.linkedin &&
                !socials.github && (
                  <span className="text-orange-300/50 text-xs">
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