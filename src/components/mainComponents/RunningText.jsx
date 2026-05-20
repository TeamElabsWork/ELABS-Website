import React, { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase-client";

function LeaderCard({ name, photoUrl }) {
  if (!name) return null;

  const parts = name.trim().split(" ");
  const firstName = parts[0];
  const lastName = parts.slice(1).join(" ");

  const initialsUrl = `https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=ff6a00&color=fff&size=200`;
  const finalPhotoUrl = photoUrl || initialsUrl;

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

  const normalize = (value) =>
    value?.toLowerCase().trim().replace(/\s+/g, "_");

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        setLoading(true);

        // Fetch domains
        const { data: domainsData, error: domainError } = await supabase
          .from("domains")
          .select("*");

        if (domainError) throw domainError;

        const matchedDomain = domainsData.find(
          (d) => normalize(d.name) === normalize(domain)
        );

        if (!matchedDomain) {
          setLeadsList([]);
          setAsstLeadsList([]);
          return;
        }

        // Fetch leads for that domain
        const { data: leadsData, error: leadsError } = await supabase
          .from("leads")
          .select("*")
          .eq("domain_id", matchedDomain.id);

        if (leadsError) throw leadsError;

        const leads = leadsData.filter(
          (lead) => normalize(lead.designation) === "lead"
        );

        const assistantLeads = leadsData.filter(
          (lead) => normalize(lead.designation) === "asst_lead"
        );

        setLeadsList(leads);
        setAsstLeadsList(assistantLeads);
      } catch (err) {
        console.error("Error fetching leadership:", err);
      } finally {
        setLoading(false);
      }
    };

    if (domain) {
      fetchLeads();
    }
  }, [domain]);

  if (loading) return null;
  if (leadsList.length === 0 && asstLeadsList.length === 0) return null;

  return (
    <section style={wrapperStyle}>
      <div style={containerStyle}>
        {/* DOMAIN LEADS */}
        {leadsList.length > 0 && (
          <div style={groupStyle}>
            <div style={labelContainerStyle}>
              <div style={labelLineStyle} />
              <span style={labelTextStyle}>DOMAIN LEADS</span>
              <div style={labelLineStyle} />
            </div>

            <div style={cardsCentererStyle}>
              {leadsList.map((lead) => (
                <LeaderCard
                  key={lead.id}
                  name={lead.name}
                  photoUrl={lead.photo_url}
                />
              ))}
            </div>
          </div>
        )}

        {/* ASSISTANT LEADS */}
        {asstLeadsList.length > 0 && (
          <div style={groupStyle}>
            <div style={labelContainerStyle}>
              <div style={labelLineStyle} />
              <span style={labelTextStyle}>ASSISTANT LEADS</span>
              <div style={labelLineStyle} />
            </div>

            <div style={cardsCentererStyle}>
              {asstLeadsList.map((lead) => (
                <LeaderCard
                  key={lead.id}
                  name={lead.name}
                  photoUrl={lead.photo_url}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Styles

const wrapperStyle = {
  width: "100%",
  background: "linear-gradient(180deg, #000 0%, #0c0c0c 100%)",
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
  maxWidth: "1100px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "60px",
  padding: "0 2rem",
};

const groupStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

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
  background:
    "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,106,0,0.6) 50%, rgba(255,255,255,0) 100%)",
};

const labelTextStyle = {
  fontSize: "0.85rem",
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "0.4em",
  color: "#ff6a00",
  whiteSpace: "nowrap",
};

const cardsCentererStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "5rem",
  width: "100%",
};

const leaderCardStyle = {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const leaderImageStyle = {
  width: "220px",
  height: "220px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "6px solid #ff6a00",
  filter: "drop-shadow(0 10px 30px rgba(255,106,0,0.5))",
  marginBottom: "2rem",
};

const nameTagStyle = {
  padding: "0.8rem 2.2rem",
  background: "linear-gradient(90deg, #ff6a00, #ff9500)",
  borderRadius: "999px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
};

const nameStyle = {
  display: "block",
  fontWeight: 700,
  fontSize: "1rem",
  textTransform: "uppercase",
  color: "#000",
  letterSpacing: "0.05em",
};