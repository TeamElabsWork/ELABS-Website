import { Link } from "react-router-dom";

export default function ButtonOne({ text, to }) {
  return (
    <Link
      to={to}
      className="
        min-w-[260px] h-[56px]
        px-6
        rounded-full
        bg-gradient-to-r from-[#2b2b3c] to-[#303048]
        text-white
        font-semibold
        tracking-wide
        uppercase
        flex items-center justify-between
        hover:scale-105 transition
        no-underline
      "
    >
      {/* TEXT */}
      <span className="pl-2">{text}</span>

      {/* ORIGINAL ICON (same as before) */}
      <span
        className="
          w-9 h-9
          bg-white
          rounded-full
          flex items-center justify-center
        "
      >
        {/* ORIGINAL ORANGE ICON */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ff9a33"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* screen */}
          <rect x="3" y="4" width="18" height="14" rx="2" ry="2" />
          {/* stand */}
          <path d="M8 22h8" />
          <path d="M12 18v4" />
        </svg>
      </span>
    </Link>
  );
}
