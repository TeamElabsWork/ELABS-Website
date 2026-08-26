import React, { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase-client";
import { fallbackLeads } from "../../constants/fallbackData";

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

function LeaderCard({ name, photoUrl }) {
  if (!name) return null;

  const parts = name.trim().split(" ");
  const firstName = parts[0];
  const lastName = parts.slice(1).join(" ");

  const initialsUrl = `https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=ff6a00&color=fff&size=200`;
  const finalPhotoUrl = photoUrl ? convertGoogleDriveUrl(photoUrl) : initialsUrl;

  return (
    <div className="flex flex-col items-center text-center w-[8.5rem] sm:w-40 lg:w-auto">
      <img
        src={finalPhotoUrl}
        alt={name}
        loading="lazy"
        className="w-24 h-24 sm:w-36 sm:h-36 lg:w-[220px] lg:h-[220px] rounded-full object-cover border-[3px] sm:border-4 lg:border-[6px] border-[#ff6a00] mb-3 sm:mb-5 lg:mb-8 drop-shadow-[0_10px_30px_rgba(255,106,0,0.5)]"
      />
      <div className="max-w-full px-3 py-1.5 sm:px-5 sm:py-2 lg:px-9 lg:py-3 rounded-full bg-gradient-to-r from-[#ff6a00] to-[#ff9500] shadow-[0_6px_15px_rgba(0,0,0,0.3)]">
        <span className="block font-bold text-[0.7rem] sm:text-sm lg:text-base uppercase text-black tracking-[0.05em] leading-tight break-words">
          {firstName}
        </span>
        {lastName && (
          <span className="block font-bold text-[0.7rem] sm:text-sm lg:text-base uppercase text-black tracking-[0.05em] leading-tight break-words">
            {lastName}
          </span>
        )}
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

        if (domainError || !domainsData) throw domainError || new Error("Empty domains data");

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
          .from("members")
          .select("*")
          .eq("domain_id", matchedDomain.id)
          .in("designation", ["lead", "asst_lead"]);

        if (leadsError || !leadsData) throw leadsError || new Error("Empty leads data");

        const leads = leadsData.filter(
          (lead) => normalize(lead.designation) === "lead"
        );

        const assistantLeads = leadsData.filter(
          (lead) => normalize(lead.designation) === "asst_lead"
        );

        setLeadsList(leads);
        setAsstLeadsList(assistantLeads);
      } catch (err) {
        console.warn("Supabase fetch failed in RunningText.jsx, using fallback mock data:", err.message);
        
        // Filter from fallbackLeads
        const leads = fallbackLeads.filter(
          (lead) => normalize(lead.domain) === normalize(domain) && normalize(lead.designation) === "lead"
        );

        const assistantLeads = fallbackLeads.filter(
          (lead) => normalize(lead.domain) === normalize(domain) && normalize(lead.designation) === "asst_lead"
        );

        setLeadsList(leads);
        setAsstLeadsList(assistantLeads);
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
    <section
      className="w-full flex items-center justify-center bg-transparent text-white select-none py-8 sm:py-14 lg:py-20"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="w-full max-w-[1100px] mx-auto flex flex-col gap-10 sm:gap-14 lg:gap-[60px] px-2 sm:px-6 lg:px-8">
        {/* DOMAIN LEADS */}
        {leadsList.length > 0 && (
          <div className="w-full flex flex-col items-center">
            <div className="flex items-center justify-center w-full gap-3 sm:gap-6 mb-6 sm:mb-10 lg:mb-12">
              <div className="flex-1 h-px" style={labelLineStyle} />
              <span className="text-[0.65rem] sm:text-[0.8rem] font-extrabold uppercase tracking-[0.25em] sm:tracking-[0.4em] text-[#ff6a00] whitespace-nowrap">
                DOMAIN LEADS
              </span>
              <div className="flex-1 h-px" style={labelLineStyle} />
            </div>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-8 sm:gap-x-10 sm:gap-y-10 lg:gap-20 w-full">
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
          <div className="w-full flex flex-col items-center">
            <div className="flex items-center justify-center w-full gap-3 sm:gap-6 mb-6 sm:mb-10 lg:mb-12">
              <div className="flex-1 h-px" style={labelLineStyle} />
              <span className="text-[0.65rem] sm:text-[0.8rem] font-extrabold uppercase tracking-[0.25em] sm:tracking-[0.4em] text-[#ff6a00] whitespace-nowrap">
                ASSISTANT LEADS
              </span>
              <div className="flex-1 h-px" style={labelLineStyle} />
            </div>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-8 sm:gap-x-10 sm:gap-y-10 lg:gap-20 w-full">
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
// The only rule kept inline: a three-stop gradient with no plain Tailwind
// equivalent. Every other value is now a responsive utility class.
const labelLineStyle = {
  background:
    "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,106,0,0.6) 50%, rgba(255,255,255,0) 100%)",
};
