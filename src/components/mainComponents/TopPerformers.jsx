import { useEffect, useRef } from "react";
import Particles from "./Particles";

/* ============================
   DATA  (removed: Mandita, Aneesha, Ambika, Ananya, Harshpreet)
============================ */
const performers = [
  { name: "Rishikesh Kumar",       image: "/Images/members/rishikesh.jpg" },
  { name: "Satwik Chandra",        image: "/Images/members/satwik.jpg" },
  { name: "Rajneesh Roy",          image: "/Images/members/rajneesh.jpg" },
  { name: "Prajjwal Patel",        image: "/Images/members/prajjwal.jpg" },
  { name: "Shubham Shah",          image: "/Images/members/shubhan.jpg" },
  { name: "Vinayak",               image: "/Images/members/vinayak.jpeg" },
  { name: "Asmit Sahu",            image: "/Images/members/asmit.jpg" },
  { name: "Swoasti Bhattacharjee", image: "/Images/members/swoasti.jpg" },
  { name: "Omm Tripathi",          image: "/Images/members/omm.jpg" },
  { name: "Saroj Sen",             image: "/Images/members/saroj.jpg" },
  { name: "Drishti Singh",         image: "/Images/members/drishti.png" },
  { name: "Niraj Jha",             image: "/Images/members/niraj.jpeg" },
  { name: "Soham Chatterjee",      image: "/Images/members/soham.jpg" },
  { name: "Ayub Abdisalan",        image: "/Images/members/ayub.jpg" },
  { name: "Hamza Patel",           image: "/Images/members/hamza.jpeg" },
];

/* KIITO APP dummy contributors */
const kiitoMembers = [
  { name: "Aryan Sharma",   image: "https://placehold.co/300x300/1a0d00/ff9a33?text=A" },
  { name: "Priya Nair",     image: "https://placehold.co/300x300/0d1a00/ff9a33?text=P" },
  { name: "Rohan Verma",    image: "https://placehold.co/300x300/001a1a/ff9a33?text=R" },
  { name: "Sneha Gupta",    image: "https://placehold.co/300x300/1a001a/ff9a33?text=S" },
  { name: "Kabir Das",      image: "https://placehold.co/300x300/1a1a00/ff9a33?text=K" },
  { name: "Meera Pillai",   image: "https://placehold.co/300x300/001a0d/ff9a33?text=M" },
];

/* ============================
   SMALL CARD (Top Contributors)
============================ */
function MemberCard({ name, image, index, prefix = "mc" }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.animationDelay = `${index * 55}ms`;
    el.classList.add("card-pop-in");
  }, [index]);

  return (
    <div ref={cardRef} className="member-card" style={{ "--i": index }}>
      <div className="card-glow-ring" />
      <div className="card-photo-wrap">
        <img
          src={image}
          alt={name}
          onError={(e) => (e.currentTarget.src = "/Images/members/default.jpg")}
          className="card-photo"
          loading="lazy"
        />
        <div className="card-shimmer" />
      </div>
      <p className="card-name">{name}</p>
    </div>
  );
}

/* ============================
   BIGGER CARD (KIITO section)
============================ */
function BigCard({ name, image, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.animationDelay = `${index * 80}ms`;
    el.classList.add("card-pop-in");
  }, [index]);

  return (
    <div ref={cardRef} className="big-card" style={{ "--i": index }}>
      <div className="card-glow-ring" />
      <div className="big-card-photo-wrap">
        <img
          src={image}
          alt={name}
          onError={(e) => (e.currentTarget.src = "/Images/members/default.jpg")}
          className="card-photo"
          loading="lazy"
        />
        <div className="card-shimmer" />
      </div>
      <p className="big-card-name">{name}</p>
    </div>
  );
}

/* ============================
   PAGE
============================ */
export default function TopPerformers() {
  return (
    <div className="tp-page">
      {/* Particles pinned behind everything */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Particles />
      </div>

      <div className="tp-inner">
        {/* ── SITE LABEL ── */}
        <p className="tp-site-label">⚡ ELabs Official Website</p>

        {/* ── TOP CONTRIBUTORS ── */}
        <h1 className="tp-title">TOP CONTRIBUTORS</h1>
        <p className="tp-sub">
          Hard work is their daily recipe — E Labs members don't just work,
          they cook excellence with late nights, sharp minds, and relentless passion. 🔥
        </p>

        <div className="tp-grid">
          {performers.map((m, i) => (
            <MemberCard key={i} index={i} name={m.name} image={m.image} />
          ))}
        </div>

        {/* ── KIITO APP SECTION ── */}
        <div className="section-divider" />

        <p className="tp-site-label" style={{ marginTop: "0" }}>📱 Initiative Spotlight</p>
        <h2 className="tp-title" style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", marginBottom: "8px" }}>
          KIITO APP
        </h2>
        <p className="tp-sub" style={{ marginBottom: "40px" }}>
          The team behind KIITO — your ultimate campus companion for attendance, assignments, and everything in between.
        </p>

        <div className="kiito-grid">
          {kiitoMembers.map((m, i) => (
            <BigCard key={i} index={i} name={m.name} image={m.image} />
          ))}
        </div>
      </div>

      <style>{`
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
          max-width: 1400px;
          margin: 0 auto;
          padding: 80px 24px 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ─── LABEL ─── */
        .tp-site-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #ff9a33;
          background: rgba(255,154,51,0.08);
          border: 1px solid rgba(255,154,51,0.25);
          padding: 4px 18px;
          border-radius: 999px;
          margin-bottom: 16px;
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
          font-size: clamp(0.82rem, 1.4vw, 0.98rem);
          color: rgba(255,220,170,0.82);
          text-align: center;
          max-width: 680px;
          margin-bottom: 40px;
          line-height: 1.7;
        }

        /* ─── DIVIDER ─── */
        .section-divider {
          width: 100%;
          max-width: 600px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,154,51,0.4), transparent);
          margin: 56px 0 48px;
        }

        /* ─── TOP CONTRIBUTORS GRID (7 per row) ─── */
        .tp-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 10px;
          width: 100%;
          justify-items: center;
        }

        @media (max-width: 1100px) { .tp-grid { grid-template-columns: repeat(5, 1fr); } }
        @media (max-width: 760px)  { .tp-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (max-width: 560px)  { .tp-grid { grid-template-columns: repeat(3, 1fr); } }

        /* ─── KIITO GRID (6 per row) ─── */
        .kiito-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 14px;
          width: 100%;
          justify-items: center;
        }

        @media (max-width: 1000px) { .kiito-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (max-width: 640px)  { .kiito-grid { grid-template-columns: repeat(3, 1fr); } }

        /* ─── SHARED CARD ANIMATIONS ─── */
        .card-pop-in {
          animation: popIn 0.55s cubic-bezier(.34,1.56,.64,1) forwards;
        }

        @keyframes popIn {
          0%   { opacity: 0; transform: translateY(28px) scale(0.84); }
          100% { opacity: 1; transform: translateY(0)    scale(1); }
        }

        /* ─── SMALL CARD ─── */
        .member-card {
          position: relative;
          width: 100%;
          max-width: 130px;
          aspect-ratio: 1 / 1;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          opacity: 0;
          transform: translateY(28px) scale(0.84);
          transition: transform 0.32s cubic-bezier(.34,1.56,.64,1), box-shadow 0.32s ease;
          border: 1.5px solid rgba(255,154,51,0.5);
          background: linear-gradient(145deg, #1a0d00 0%, #0d0d0d 60%, #1a0800 100%);
          box-shadow: 0 0 10px rgba(255,130,30,0.12), 0 4px 16px rgba(0,0,0,0.7);
        }

        .member-card:hover {
          transform: translateY(-7px) scale(1.07) rotate(-1deg);
          border-color: rgba(255,154,51,0.9);
          box-shadow: 0 0 0 1.5px #ff9a33, 0 0 38px rgba(255,154,51,0.6), 0 18px 36px rgba(0,0,0,0.7);
          z-index: 10;
        }

        /* ─── BIG CARD ─── */
        .big-card {
          position: relative;
          width: 100%;
          max-width: 190px;
          aspect-ratio: 1 / 1;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          opacity: 0;
          transform: translateY(28px) scale(0.84);
          transition: transform 0.35s cubic-bezier(.34,1.56,.64,1), box-shadow 0.35s ease;
          border: 1.5px solid rgba(255,154,51,0.5);
          background: linear-gradient(145deg, #1a0d00 0%, #0d0d0d 60%, #1a0800 100%);
          box-shadow: 0 0 14px rgba(255,130,30,0.15), 0 6px 24px rgba(0,0,0,0.7);
        }

        .big-card:hover {
          transform: translateY(-10px) scale(1.06) rotate(-1deg);
          border-color: rgba(255,154,51,0.95);
          box-shadow: 0 0 0 1.5px #ff9a33, 0 0 50px rgba(255,154,51,0.65), 0 24px 48px rgba(0,0,0,0.75);
          z-index: 10;
        }

        /* ─── GLOW RING ─── */
        .card-glow-ring {
          position: absolute;
          inset: -3px;
          border-radius: 22px;
          background: conic-gradient(from var(--angle, 0deg), #ff6b00, #ff9a33, #ffcc00, #ff9a33, #ff6b00);
          opacity: 0;
          transition: opacity 0.3s;
          z-index: 0;
          animation: rotateConic 3s linear infinite;
        }

        .member-card:hover .card-glow-ring,
        .big-card:hover .card-glow-ring { opacity: 1; }

        @property --angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }

        @keyframes rotateConic { to { --angle: 360deg; } }

        /* ─── PHOTO WRAPPERS ─── */
        .card-photo-wrap {
          position: absolute;
          inset: 3px;
          border-radius: 13px;
          overflow: hidden;
          z-index: 1;
          background: #111;
        }

        .big-card-photo-wrap {
          position: absolute;
          inset: 3px;
          border-radius: 17px;
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

        .member-card:hover .card-photo,
        .big-card:hover .card-photo { transform: scale(1.1); }

        /* ─── SHIMMER ─── */
        .card-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%);
          background-size: 200% 100%;
          background-position: -100% 0;
          transition: background-position 0.6s ease;
        }

        .member-card:hover .card-shimmer,
        .big-card:hover .card-shimmer { background-position: 200% 0; }

        /* ─── NAME OVERLAYS ─── */
        .card-name {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          z-index: 3;
          padding: 20px 5px 6px;
          background: linear-gradient(to top, rgba(0,0,0,0.88) 60%, transparent);
          font-size: 0.63rem;
          font-weight: 700;
          text-align: center;
          color: #fff;
          letter-spacing: 0.03em;
          line-height: 1.3;
          transform: translateY(3px);
          opacity: 0.85;
          transition: opacity 0.3s, transform 0.3s;
        }

        .big-card-name {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          z-index: 3;
          padding: 28px 8px 9px;
          background: linear-gradient(to top, rgba(0,0,0,0.88) 60%, transparent);
          font-size: 0.78rem;
          font-weight: 700;
          text-align: center;
          color: #fff;
          letter-spacing: 0.03em;
          line-height: 1.3;
          transform: translateY(3px);
          opacity: 0.85;
          transition: opacity 0.3s, transform 0.3s;
        }

        .member-card:hover .card-name,
        .big-card:hover .big-card-name {
          opacity: 1;
          transform: translateY(0);
          color: #ffcc88;
        }
      `}</style>
    </div>
  );
}
