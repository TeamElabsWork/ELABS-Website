import { useEffect, useRef } from "react";
import Particles from "./Particles";

/* ============================
   DATA  (removed: Mandita, Aneesha, Ambika, Ananya, Harshpreet)
============================ */
const performers = [
  { name: "Rishikesh Kumar",      image: "/Images/members/rishikesh.jpg" },
  { name: "Satwik Chandra",       image: "/Images/members/satwik.jpg" },
  { name: "Rajneesh Roy",         image: "/Images/members/rajneesh.jpg" },
  { name: "Prajjwal Patel",       image: "/Images/members/prajjwal.jpg" },
  { name: "Shubham Shah",         image: "/Images/members/shubhan.jpg" },
  { name: "Vinayak",              image: "/Images/members/vinayak.jpeg" },
  { name: "Asmit Sahu",           image: "/Images/members/asmit.jpg" },
  { name: "Swoasti Bhattacharjee",image: "/Images/members/swoasti.jpg" },
  { name: "Omm Tripathi",         image: "/Images/members/omm.jpg" },
  { name: "Saroj Sen",            image: "/Images/members/saroj.jpg" },
  { name: "Drishti Singh",        image: "/Images/members/drishti.png" },
  { name: "Niraj Jha",            image: "/Images/members/niraj.jpeg" },
  { name: "Soham Chatterjee",     image: "/Images/members/soham.jpg" },
  { name: "Ayub Abdisalan",       image: "/Images/members/ayub.jpg" },
  { name: "Hamza Patel",          image: "/Images/members/hamza.jpeg" },
];

/* ============================
   CARD
============================ */
function MemberCard({ name, image, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const delay = index * 60;
    el.style.animationDelay = `${delay}ms`;
    el.classList.add("card-pop-in");
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="member-card group"
      style={{ "--i": index }}
    >
      {/* Glowing ring on hover */}
      <div className="card-glow-ring" />

      {/* Photo */}
      <div className="card-photo-wrap">
        <img
          src={image}
          alt={name}
          onError={(e) => (e.currentTarget.src = "/Images/members/default.jpg")}
          className="card-photo"
          loading="lazy"
        />
        {/* shimmer overlay */}
        <div className="card-shimmer" />
      </div>

      {/* Name */}
      <p className="card-name">{name}</p>
    </div>
  );
}

/* ============================
   PAGE
============================ */
export default function TopPerformers() {
  return (
    <div className="tp-page">
      <Particles />

      <div className="tp-inner">
        {/* ── SITE LABEL ── */}
        <p className="tp-site-label">⚡ ELabs Official Website</p>

        {/* ── TITLE ── */}
        <h1 className="tp-title">TOP CONTRIBUTORS</h1>

        {/* ── SUB ── */}
        <p className="tp-sub">
          Hard work is their daily recipe — E Labs members don't just work,
          they cook excellence with late nights, sharp minds, and relentless passion. 🔥
        </p>

        {/* ── GRID ── */}
        <div className="tp-grid">
          {performers.map((m, i) => (
            <MemberCard key={i} index={i} name={m.name} image={m.image} />
          ))}
        </div>
      </div>

      <style>{`
        /* ─── PAGE ─── */
        .tp-page {
          position: relative;
          min-height: 100vh;
          background: #000;
          color: #fff;
          overflow: hidden;
        }

        .tp-inner {
          position: relative;
          z-index: 10;
          max-width: 1600px;
          margin: 0 auto;
          padding: 80px 24px 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ─── LABEL ─── */
        .tp-site-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #ff9a33;
          background: rgba(255,154,51,0.08);
          border: 1px solid rgba(255,154,51,0.25);
          padding: 4px 18px;
          border-radius: 999px;
          margin-bottom: 18px;
        }

        /* ─── TITLE ─── */
        .tp-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 900;
          letter-spacing: 0.06em;
          text-align: center;
          background: linear-gradient(135deg, #ff9a33 0%, #ff6b00 50%, #ff9a33 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: titleSheen 4s ease-in-out infinite;
          margin-bottom: 12px;
          line-height: 1.1;
        }

        @keyframes titleSheen {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }

        /* ─── SUB ─── */
        .tp-sub {
          font-size: clamp(0.85rem, 1.5vw, 1rem);
          color: rgba(255,220,170,0.85);
          text-align: center;
          max-width: 700px;
          margin-bottom: 48px;
          line-height: 1.7;
        }

        /* ─── GRID ─── */
        .tp-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 18px;
          width: 100%;
          justify-items: center;
        }

        @media (max-width: 1100px) { .tp-grid { grid-template-columns: repeat(5, 1fr); } }
        @media (max-width: 860px)  { .tp-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (max-width: 640px)  { .tp-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 420px)  { .tp-grid { grid-template-columns: repeat(2, 1fr); } }

        /* ─── CARD ─── */
        .member-card {
          position: relative;
          width: 100%;
          max-width: 150px;
          aspect-ratio: 1 / 1;
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          opacity: 0;
          transform: translateY(30px) scale(0.88);
          transition:
            transform 0.35s cubic-bezier(.34,1.56,.64,1),
            box-shadow 0.35s ease;
          box-shadow: 0 0 0 1px rgba(255,154,51,0.2),
                      0 4px 20px rgba(0,0,0,0.6);
        }

        .card-pop-in {
          animation: popIn 0.55s cubic-bezier(.34,1.56,.64,1) forwards;
        }

        @keyframes popIn {
          0%   { opacity: 0; transform: translateY(30px) scale(0.85); }
          100% { opacity: 1; transform: translateY(0)    scale(1); }
        }

        /* hover lift */
        .member-card:hover {
          transform: translateY(-8px) scale(1.06) rotate(-1deg);
          box-shadow:
            0 0 0 2px #ff9a33,
            0 0 40px rgba(255,154,51,0.7),
            0 20px 40px rgba(0,0,0,0.7);
          z-index: 10;
        }

        /* ─── GLOW RING (revealed on hover) ─── */
        .card-glow-ring {
          position: absolute;
          inset: -3px;
          border-radius: 20px;
          background: conic-gradient(from var(--angle, 0deg),
            #ff6b00, #ff9a33, #ffcc00, #ff9a33, #ff6b00);
          opacity: 0;
          transition: opacity 0.3s;
          z-index: 0;
          animation: rotateConic 3s linear infinite;
        }

        .member-card:hover .card-glow-ring { opacity: 1; }

        @property --angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }

        @keyframes rotateConic {
          to { --angle: 360deg; }
        }

        /* ─── PHOTO WRAPPER ─── */
        .card-photo-wrap {
          position: absolute;
          inset: 2px;
          border-radius: 16px;
          overflow: hidden;
          z-index: 1;
          background: #111;
        }

        .card-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.4s ease;
        }

        .member-card:hover .card-photo {
          transform: scale(1.1);
        }

        /* shimmer sweep on hover */
        .card-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent 30%,
            rgba(255,255,255,0.12) 50%,
            transparent 70%
          );
          background-size: 200% 100%;
          background-position: -100% 0;
          transition: background-position 0.6s ease;
        }

        .member-card:hover .card-shimmer {
          background-position: 200% 0;
        }

        /* ─── BOTTOM NAME OVERLAY ─── */
        .card-name {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 3;
          padding: 22px 6px 7px;
          background: linear-gradient(to top, rgba(0,0,0,0.88) 60%, transparent);
          font-size: 0.67rem;
          font-weight: 700;
          text-align: center;
          color: #fff;
          letter-spacing: 0.03em;
          line-height: 1.3;
          transform: translateY(4px);
          opacity: 0.85;
          transition: opacity 0.3s, transform 0.3s;
        }

        .member-card:hover .card-name {
          opacity: 1;
          transform: translateY(0);
          color: #ffcc88;
        }
      `}</style>
    </div>
  );
}
