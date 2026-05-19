import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Particles from "./Particles";
import FuzzyText from "./FuzzyText";

/* ── DATA ── */
const kiitoMembers = [
  { name: "Aryan Sharma",   image: "https://placehold.co/300x300/1a0d00/ff9a33?text=A" },
  { name: "Priya Nair",     image: "https://placehold.co/300x300/0d1a00/ff9a33?text=P" },
  { name: "Rohan Verma",    image: "https://placehold.co/300x300/001a1a/ff9a33?text=R" },
  { name: "Sneha Gupta",    image: "https://placehold.co/300x300/1a001a/ff9a33?text=S" },
  { name: "Kabir Das",      image: "https://placehold.co/300x300/1a1a00/ff9a33?text=K" },
  { name: "Meera Pillai",   image: "https://placehold.co/300x300/001a0d/ff9a33?text=M" },
];

const blazeMembers = [
  { name: "Ankit Raj",  image: "https://placehold.co/300x300/0d0d1a/ff9a33?text=A" },
  { name: "Riya Patel", image: "https://placehold.co/300x300/1a0000/ff9a33?text=R" },
];

const websiteMembers = [
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

const initiatives = [
  { name: "KIITO App", img: "https://placehold.co/120x120/1a1a1a/ff9a33?text=KIITO" },
  { name: "Blaze Bit", img: "https://placehold.co/120x120/1a1a1a/ff9a33?text=Blaze" },
  { name: "Renora",    img: "https://placehold.co/120x120/1a1a1a/ff9a33?text=Renora" },
  { name: "Artico",   img: "https://placehold.co/120x120/1a1a1a/ff9a33?text=Artico" },
];

/* ── CARD ── */
function Card({ name, image, index, big, blaze }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.animationDelay = `${index * 55}ms`;
    el.classList.add("tp-card-pop");
  }, [index]);
  const cls = blaze ? "tp-blaze-card" : big ? "tp-big-card" : "tp-sm-card";
  const photoWrapCls = blaze ? "tp-blaze-photo-wrap" : big ? "tp-big-photo-wrap" : "tp-sm-photo-wrap";
  const nameCls = blaze ? "tp-blaze-name" : big ? "tp-big-name" : "tp-sm-name";
  return (
    <div ref={ref} className={cls}>
      <div className="tp-card-glow" />
      <div className={photoWrapCls}>
        <img src={image} alt={name} onError={(e) => (e.currentTarget.src = "/Images/members/default.jpg")} className="tp-card-img" loading="lazy" />
        <div className="tp-card-shimmer" />
      </div>
      <p className={nameCls}>{name}</p>
    </div>
  );
}

/* ── SECTION BLOCK ── */
function SectionBlock({ badge, title, desc, link }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="tp-divider" />
      {badge && <p className="tp-badge">{badge}</p>}
      <div className="tp-section-header">
        <h2 className="tp-section-title">{title}</h2>
        {link && (
          <button className="tp-view-btn" onClick={() => navigate(link)}>
            View Project →
          </button>
        )}
      </div>
      {desc && <p className="tp-section-desc">{desc}</p>}
    </>
  );
}

/* ── PAGE ── */
export default function TopPerformers() {
  return (
    <div className="tp-page">
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}><Particles /></div>

      <div className="tp-inner">
        {/* ── FUZZY TITLE (responsive, no overflow) ── */}
        <div className="tp-fuzzy-wrap">
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={0.5}
            enableHover
            fontSize="clamp(1.6rem, 4.5vw, 4.2rem)"
            fontWeight={900}
            color="#ff9a33"
          >
            TOP CONTRIBUTORS
          </FuzzyText>
        </div>

        <p className="tp-main-sub">
          Hard work is their daily recipe — E Labs members don't just work,
          they cook excellence with late nights, sharp minds, and relentless passion. 🔥
        </p>

        {/* ── KIITO APP ── */}
        <SectionBlock badge="📦 Project" title="KIITO APP" desc="The team behind your ultimate campus companion." link="/initiatives/kiito-app" />
        <div className="tp-grid-6">{kiitoMembers.map((m, i) => <Card key={i} index={i} {...m} big />)}</div>

        {/* ── BLAZE BIT ── */}
        <SectionBlock badge="📦 Project" title="BLAZE BIT" desc="Smart study tools built by passionate engineers." link="/initiatives/blaze-bit" />
        <div className="tp-grid-blaze">{blazeMembers.map((m, i) => <Card key={i} index={i} {...m} blaze />)}</div>

        {/* ── ELABS WEBSITE ── */}
        <SectionBlock badge="📦 Project" title="ELABS WEBSITE" desc="The crew that designed and developed the site you're on right now." />
        <div className="tp-grid-7">{websiteMembers.map((m, i) => <Card key={i} index={i} {...m} />)}</div>

        {/* ── LEAD / PROJECT MANAGER ── */}
        <div className="tp-divider" />
        <h2 className="tp-section-title" style={{ marginBottom: "28px" }}>LEAD / PROJECT MANAGER</h2>

        <div className="tp-lead-card">
          {/* Photo — LEFT column, stretches full height */}
          <div className="tp-lead-photo-col">
            <img
              src="/Images/members/default.jpg"
              alt="Abinash Mohanty"
              className="tp-lead-side-img"
              onError={(e) => (e.currentTarget.src = "https://placehold.co/400x600/1a1a1a/ff9a33?text=Abinash")}
            />
          </div>

          {/* Text — RIGHT column */}
          <div className="tp-lead-body">
            <h3 className="tp-lead-name">Abinash Mohanty</h3>
            <span className="tp-lead-role">Web Dev / Android Dev Lead</span>
            <p className="tp-lead-desc">
              Leading the E Labs tech division has been an extraordinary journey. From architecting the <strong>E Labs Website</strong> ground-up, to spearheading the <strong>KIITO App</strong> that streamlines campus life for thousands of students, and building <strong>Blaze Bit App</strong> — a cutting-edge study companion — every project pushed me to grow as an engineer and a leader.
            </p>
            <p className="tp-lead-desc">
              Managing cross-functional teams, mentoring junior developers, and shipping production-grade products taught me that great software is never built alone. It's the result of relentless collaboration, code reviews at midnight, and a shared obsession with craft. Grateful for every team member who made it all possible. 🚀
            </p>
            <p className="tp-init-label">Initiatives &amp; Startups</p>
            <div className="tp-init-row">
              {initiatives.map((it, i) => (
                <div className="tp-init-circle" key={i}>
                  <img src={it.img} alt={it.name} />
                  <span>{it.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
.tp-page{position:relative;min-height:100vh;background:#000;color:#fff;overflow:hidden}
.tp-inner{position:relative;z-index:10;max-width:1400px;margin:0 auto;padding:80px 24px 80px;display:flex;flex-direction:column;align-items:center}

/* fuzzy title wrapper — clips overflow on small screens */
.tp-fuzzy-wrap{display:flex;justify-content:center;width:100%;max-width:100%;overflow:hidden;margin-bottom:10px}

.tp-badge{font-size:.72rem;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:#ff9a33;background:rgba(255,154,51,.08);border:1px solid rgba(255,154,51,.25);padding:4px 18px;border-radius:999px;margin-bottom:14px}

.tp-section-header{display:flex;align-items:center;gap:16px;flex-wrap:wrap;justify-content:center;margin-bottom:8px}
.tp-section-title{font-size:clamp(1.3rem,3vw,2.2rem);font-weight:800;letter-spacing:.04em;text-align:center;background:linear-gradient(135deg,#ff9a33,#ff6b00,#ff9a33);background-size:200% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:tpSheen 4s ease-in-out infinite;line-height:1.1}
@keyframes tpSheen{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}

.tp-view-btn{font-size:.78rem;font-weight:700;color:#000;background:#ff9a33;border:none;padding:6px 18px;border-radius:999px;cursor:pointer;letter-spacing:.04em;transition:background .25s,transform .25s,box-shadow .25s;white-space:nowrap}
.tp-view-btn:hover{background:#ffb347;transform:translateY(-2px);box-shadow:0 0 20px rgba(255,154,51,.5)}

.tp-main-sub,.tp-section-desc{font-size:clamp(.8rem,1.4vw,.96rem);color:rgba(255,220,170,.8);text-align:center;max-width:650px;margin-bottom:36px;line-height:1.7}

.tp-divider{width:100%;max-width:550px;height:1px;background:linear-gradient(90deg,transparent,rgba(255,154,51,.35),transparent);margin:50px 0 40px}

/* 7-col grid (website) */
.tp-grid-7{display:grid;grid-template-columns:repeat(7,1fr);gap:10px;width:100%;justify-items:center}
@media(max-width:1100px){.tp-grid-7{grid-template-columns:repeat(5,1fr)}}
@media(max-width:760px){.tp-grid-7{grid-template-columns:repeat(4,1fr)}}
@media(max-width:500px){.tp-grid-7{grid-template-columns:repeat(3,1fr)}}

/* 6-col grid (kiito) */
.tp-grid-6{display:grid;grid-template-columns:repeat(6,1fr);gap:14px;width:100%;justify-items:center}
@media(max-width:900px){.tp-grid-6{grid-template-columns:repeat(4,1fr)}}
@media(max-width:600px){.tp-grid-6{grid-template-columns:repeat(3,1fr)}}

/* blaze — 2 cards centered */
.tp-grid-blaze{display:flex;gap:24px;justify-content:center;width:100%}

/* card pop animation */
.tp-card-pop{animation:tpPop .55s cubic-bezier(.34,1.56,.64,1) forwards}
@keyframes tpPop{0%{opacity:0;transform:translateY(26px) scale(.84)}100%{opacity:1;transform:translateY(0) scale(1)}}

/* small card */
.tp-sm-card{position:relative;width:100%;max-width:130px;aspect-ratio:1/1;border-radius:16px;overflow:hidden;cursor:pointer;opacity:0;transform:translateY(26px) scale(.84);transition:transform .32s cubic-bezier(.34,1.56,.64,1),box-shadow .32s ease;border:1.5px solid rgba(255,154,51,.5);background:linear-gradient(145deg,#1a0d00,#0d0d0d 60%,#1a0800);box-shadow:0 0 10px rgba(255,130,30,.12),0 4px 16px rgba(0,0,0,.7)}
.tp-sm-card:hover{transform:translateY(-7px) scale(1.07) rotate(-1deg);border-color:rgba(255,154,51,.9);box-shadow:0 0 0 1.5px #ff9a33,0 0 38px rgba(255,154,51,.6),0 18px 36px rgba(0,0,0,.7);z-index:10}

/* big card (kiito) */
.tp-big-card{position:relative;width:100%;max-width:190px;aspect-ratio:1/1;border-radius:20px;overflow:hidden;cursor:pointer;opacity:0;transform:translateY(26px) scale(.84);transition:transform .35s cubic-bezier(.34,1.56,.64,1),box-shadow .35s ease;border:1.5px solid rgba(255,154,51,.5);background:linear-gradient(145deg,#1a0d00,#0d0d0d 60%,#1a0800);box-shadow:0 0 14px rgba(255,130,30,.15),0 6px 24px rgba(0,0,0,.7)}
.tp-big-card:hover{transform:translateY(-10px) scale(1.06) rotate(-1deg);border-color:rgba(255,154,51,.95);box-shadow:0 0 0 1.5px #ff9a33,0 0 50px rgba(255,154,51,.65),0 24px 48px rgba(0,0,0,.75);z-index:10}

/* blaze card — bigger, centered pair */
.tp-blaze-card{position:relative;width:220px;height:220px;border-radius:22px;overflow:hidden;cursor:pointer;opacity:0;transform:translateY(26px) scale(.84);transition:transform .35s cubic-bezier(.34,1.56,.64,1),box-shadow .35s ease;border:1.5px solid rgba(255,154,51,.5);background:linear-gradient(145deg,#1a0d00,#0d0d0d 60%,#1a0800);box-shadow:0 0 14px rgba(255,130,30,.15),0 6px 24px rgba(0,0,0,.7);flex-shrink:0}
.tp-blaze-card:hover{transform:translateY(-10px) scale(1.06) rotate(-1deg);border-color:rgba(255,154,51,.95);box-shadow:0 0 0 1.5px #ff9a33,0 0 50px rgba(255,154,51,.65),0 24px 48px rgba(0,0,0,.75);z-index:10}

/* glow ring */
.tp-card-glow{position:absolute;inset:-3px;border-radius:22px;background:conic-gradient(from var(--angle,0deg),#ff6b00,#ff9a33,#ffcc00,#ff9a33,#ff6b00);opacity:0;transition:opacity .3s;z-index:0;animation:tpConic 3s linear infinite}
.tp-sm-card:hover .tp-card-glow,.tp-big-card:hover .tp-card-glow,.tp-blaze-card:hover .tp-card-glow{opacity:1}
@property --angle{syntax:"<angle>";inherits:false;initial-value:0deg}
@keyframes tpConic{to{--angle:360deg}}

/* photo wrappers */
.tp-sm-photo-wrap{position:absolute;inset:3px;border-radius:13px;overflow:hidden;z-index:1;background:#111}
.tp-big-photo-wrap{position:absolute;inset:3px;border-radius:17px;overflow:hidden;z-index:1;background:#111}
.tp-blaze-photo-wrap{position:absolute;inset:3px;border-radius:19px;overflow:hidden;z-index:1;background:#111}
.tp-card-img{width:100%;height:100%;object-fit:cover;object-position:center top;display:block;transition:transform .4s ease}
.tp-sm-card:hover .tp-card-img,.tp-big-card:hover .tp-card-img,.tp-blaze-card:hover .tp-card-img{transform:scale(1.1)}

/* shimmer */
.tp-card-shimmer{position:absolute;inset:0;background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,.12) 50%,transparent 70%);background-size:200% 100%;background-position:-100% 0;transition:background-position .6s ease}
.tp-sm-card:hover .tp-card-shimmer,.tp-big-card:hover .tp-card-shimmer,.tp-blaze-card:hover .tp-card-shimmer{background-position:200% 0}

/* name overlays */
.tp-sm-name{position:absolute;bottom:0;left:0;right:0;z-index:3;padding:18px 5px 6px;background:linear-gradient(to top,rgba(0,0,0,.88) 60%,transparent);font-size:.62rem;font-weight:700;text-align:center;color:#fff;letter-spacing:.03em;line-height:1.3;opacity:.85;transition:opacity .3s,transform .3s;transform:translateY(3px)}
.tp-big-name{position:absolute;bottom:0;left:0;right:0;z-index:3;padding:26px 8px 8px;background:linear-gradient(to top,rgba(0,0,0,.88) 60%,transparent);font-size:.76rem;font-weight:700;text-align:center;color:#fff;letter-spacing:.03em;line-height:1.3;opacity:.85;transition:opacity .3s,transform .3s;transform:translateY(3px)}
.tp-blaze-name{position:absolute;bottom:0;left:0;right:0;z-index:3;padding:30px 8px 10px;background:linear-gradient(to top,rgba(0,0,0,.88) 60%,transparent);font-size:.82rem;font-weight:700;text-align:center;color:#fff;letter-spacing:.03em;line-height:1.3;opacity:.85;transition:opacity .3s,transform .3s;transform:translateY(3px)}
.tp-sm-card:hover .tp-sm-name,.tp-big-card:hover .tp-big-name,.tp-blaze-card:hover .tp-blaze-name{opacity:1;transform:translateY(0);color:#ffcc88}

/* ── LEAD CARD (side by side) ── */
.tp-lead-card{display:flex;flex-direction:row;width:100%;max-width:1000px;border:1px solid rgba(255,154,51,.2);border-radius:24px;overflow:hidden;background:rgba(255,154,51,.03);backdrop-filter:blur(12px);min-height:420px}
@media(max-width:700px){.tp-lead-card{flex-direction:column}}

/* LEFT: photo column — fixed width, stretches full height */
.tp-lead-photo-col{flex:0 0 280px;position:relative;overflow:hidden}
.tp-lead-side-img{width:100%;height:100%;object-fit:cover;object-position:center top;display:block;transition:transform .5s}
.tp-lead-card:hover .tp-lead-side-img{transform:scale(1.04)}
@media(max-width:700px){.tp-lead-photo-col{flex:0 0 260px;width:100%}}

/* RIGHT: text column */
.tp-lead-body{flex:1;padding:32px 36px;overflow-y:auto}
@media(max-width:700px){.tp-lead-body{padding:24px 20px}}

.tp-lead-name{font-size:1.6rem;font-weight:900;color:#ff9a33;margin-bottom:4px}
.tp-lead-role{display:inline-block;font-size:.8rem;font-weight:600;color:#000;background:#ff9a33;padding:3px 14px;border-radius:999px;margin-bottom:16px}
.tp-lead-desc{font-size:.92rem;line-height:1.75;color:rgba(255,255,255,.82);margin-bottom:12px}
.tp-lead-desc strong{color:#ff9a33}

.tp-init-label{font-size:.72rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#ff9a33;margin:20px 0 12px;opacity:.8}
.tp-init-row{display:flex;gap:20px;flex-wrap:wrap}
.tp-init-circle{display:flex;flex-direction:column;align-items:center;gap:6px;transition:transform .3s}
.tp-init-circle:hover{transform:translateY(-5px) scale(1.08)}
.tp-init-circle img{width:64px;height:64px;border-radius:50%;border:1.5px solid rgba(255,154,51,.5);object-fit:cover;transition:border-color .3s,box-shadow .3s}
.tp-init-circle:hover img{border-color:#ff9a33;box-shadow:0 0 20px rgba(255,154,51,.5)}
.tp-init-circle span{font-size:.65rem;font-weight:600;color:rgba(255,220,170,.85);letter-spacing:.04em;text-align:center}
      `}</style>
    </div>
  );
}
