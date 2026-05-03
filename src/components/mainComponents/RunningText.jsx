import React, { useState, useEffect } from "react";

// Helper component to render a single, clean circular leader card
function LeaderCard({ name, photoUrl }) {
  if (!name) return null;

  // Split name for two-line design
  const parts = name.trim().split(" ");
  const firstName = parts[0];
  const lastName = parts.slice(1).join(" ");

  // Generate dynamic initial avatar fallback if real photo is missing
  const initialsUrl = `https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=ff6a00&color=fff&size=200`;
  const finalPhotoUrl = photoUrl ? photoUrl : initialsUrl;

  return (
    <div style={leaderCardStyle}>
      <img src={finalPhotoUrl} alt={name} style={leaderImageStyle} />
      <div style={nameTagStyle}>
        <span style={nameStyle}>{firstName}</span>
        <span style={nameStyle}>{lastName}</span>
      </div>
    </div>
  );
}

export default function LeadHero({ domain }) {
  const [leadsList, setLeadsList] = useState([]);
  const [asstLeadsList, setAsstLeadsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const DOMAIN_MAP = {
    webdev: "Web Development",
    "web development": "Web Development",
    "iot&embedded": "IoT & Embedded Systems",
    "iot & embedded": "IoT & Embedded Systems",
    android: "Android Development",
    "android development": "Android Development",
    "coud computing": "Cloud Computing",
    "cloud computing": "Cloud Computing",
    "ai/ml": "AI/ML",
    "cyber security": "Cyber Security",
    "data analytics": "Data Analytics",
    java: "Java",
    "game development": "Game Development",
    gamedev: "Game Development",
    "graphic designing": "Graphics Designing & UI/UX",
    "ui/ux": "Graphics Designing & UI/UX",
    "graphics designing": "Graphics Designing & UI/UX",
    photofgraphy: "Photography & Video",
    photography: "Photography & Video",
    "vido editing": "Photography & Video",
    "video editing": "Photography & Video",
    "content writing": "Content Writing",
    "marketing and pr": "Marketing PR & Event Management",
    "event management": "Marketing PR & Event Management",
    marketing: "Marketing PR & Event Management",
  };

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    fetch("http://127.0.0.1:5000/api/leadership")
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;

        const normalizedTarget = DOMAIN_MAP[domain?.toLowerCase().trim()] || domain;

        // Find the matching department from your Excel data
        const matchedDept = data.find((dept) => {
          if (!dept.domain) return false;
          const cleanExcelDomain = dept.domain.toLowerCase().replace("domain", "").trim();
          const mappedExcelDomain = DOMAIN_MAP[cleanExcelDomain] || cleanExcelDomain;
          return (
            mappedExcelDomain.toLowerCase().includes(normalizedTarget.toLowerCase()) ||
            normalizedTarget.toLowerCase().includes(cleanExcelDomain)
          );
        });

        if (matchedDept) {
          // --- DYNAMIC DATA PROCESSING ---
          // Scan the API keys for all valid leads and assistant leads
          const leads = [];
          const asstLeads = [];

          Object.keys(matchedDept).forEach((key) => {
            // Check for Leads (e.g., lead_1, lead_2)
            if (key.startsWith("lead_") && !key.endsWith("_ph") && !key.endsWith("_photo") && matchedDept[key]) {
              const photoKey = `${key}_photo`;
              leads.push({
                name: matchedDept[key],
                photo: matchedDept[photoKey] || null,
              });
            }
            // Check for Assistant Leads (e.g., asst_lead_1, asst_lead_2)
            if (key.startsWith("asst_lead_") && !key.endsWith("_ph") && !key.endsWith("_photo") && matchedDept[key]) {
              const photoKey = `${key}_photo`;
              asstLeads.push({
                name: matchedDept[key],
                photo: matchedDept[photoKey] || null,
              });
            }
          });

          setLeadsList(leads);
          setAsstLeadsList(asstLeads);
        }
      })
      .catch((err) => console.error("Error fetching leadership:", err))
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [domain]);

  if (loading) return null;
  if (leadsList.length === 0 && asstLeadsList.length === 0) return null;

  return (
    <section style={wrapperStyle}>
      <div style={containerStyle}>
        
        {/* LEADS GROUP */}
        {leadsList.length > 0 && (
          <div style={groupStyle}>
            {/* Fashionable centered section label */}
            <div style={labelContainerStyle}>
              <div style={labelLineStyle} />
              <span style={labelTextStyle}>DOMAIN LEADS</span>
              <div style={labelLineStyle} />
            </div>
            {/* Center the cards in a clean grid */}
            <div style={cardsCentererStyle}>
              {leadsList.map((lead, index) => (
                <LeaderCard key={`lead-${index}`} name={lead.name} photoUrl={lead.photo} />
              ))}
            </div>
          </div>
        )}

        {/* ASSISTANT LEADS GROUP */}
        {asstLeadsList.length > 0 && (
          <div style={groupStyle}>
            <div style={labelContainerStyle}>
              <div style={labelLineStyle} />
              <span style={labelTextStyle}>ASSISTANT LEADS</span>
              <div style={labelLineStyle} />
            </div>
            <div style={cardsCentererStyle}>
              {asstLeadsList.map((asst, index) => (
                <LeaderCard key={`asst-${index}`} name={asst.name} photoUrl={asst.photo} />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

// --- NEW FASHIONABLE STYLES ---

const wrapperStyle = {
  width: "100%",
  background: "linear-gradient(180deg, #000 0%, #0c0c0c 100%)", // Black with subtle gradient
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontFamily: "'Montserrat', sans-serif",
  userSelect: "none",
  padding: "80px 0",
};

const containerStyle = {
  width: "100%",
  maxWidth: "1100px", // Pulls them slightly inward for better focus
  margin: "0 auto",
  display: "flex",
  flexDirection: "column", // Stack groups vertically
  gap: "60px", // Space between Leads and Asst Leads
  padding: "0 2rem",
};

// Section grouping styles
const groupStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

// Label/Header styles (Fashionable centered label with lines)
const labelContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  gap: "1.5rem",
  marginBottom: "3rem",
};

const labelLineStyle = {
  flex: 1,
  height: "1px",
  background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,106,0,0.6) 50%, rgba(255,255,255,0) 100%)", // Glowing orange line
};

const labelTextStyle = {
  fontSize: "0.85rem",
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "0.4em", // High letter spacing for luxury look
  color: "#ff6a00", // Bright ELabs Orange
  whiteSpace: "nowrap",
};

const cardsCentererStyle = {
  display: "flex",
  justifyContent: "center", // Center all cards in this group
  flexWrap: "wrap", // If you have 3+ leads, they wrap cleanly to next line
  gap: "5rem", // Generous fashionable space between leaders
  width: "100%",
};

// --- SINGLE LEADER CARD STYLES ---

const leaderCardStyle = {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  zIndex: 10,
};

const leaderImageStyle = {
  width: "220px", // Reduced size for fashion/balance
  height: "220px",
  borderRadius: "50%", // Circular photos
  objectFit: "cover",
  // Sleek ELabs Orange glow outline
  border: "6px solid #ff6a00",
  filter: "drop-shadow(0 10px 30px rgba(255,106,0,0.5))", // Glowing orange shadow below
  marginBottom: "2rem",
};

const nameTagStyle = {
  padding: "0.8rem 2.2rem",
  background: "linear-gradient(90deg, #ff6a00, #ff9500)", // ELabs gradient
  borderRadius: "999px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
};

const nameStyle = {
  display: "block",
  fontWeight: 700,
  fontSize: "1.0rem",
  textTransform: "uppercase",
  color: "#000", // High contrast black text on orange
  letterSpacing: "0.05em",
};