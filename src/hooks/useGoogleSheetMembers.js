import { useState, useEffect } from "react";

// ── Domain normalisation (Kept exactly as it) ────────────────
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

const DESIGNATION_KEYWORDS = [
  "coordinator",
  "associate coordinator",
  "assistant coordinator",
  "assistant lead",
  "lead",
  "member",
];

export const DOMAIN_ORDER = [
  "Web Development",
  "IoT & Embedded Systems",
  "Android Development",
  "Cloud Computing",
  "AI/ML",
  "Cyber Security",
  "Data Analytics",
  "Java",
  "Game Development",
  "Graphics Designing & UI/UX",
  "Photography & Video",
  "Content Writing",
  "Marketing PR & Event Management",
];

// ── Helpers ──────────────────────────────────────────────────────────
function normalizeDomain(raw) {
  const key = raw.toLowerCase().trim();
  return DOMAIN_MAP[key] || null;
}

function parseDomains(rawDomainField) {
  if (!rawDomainField) return { domains: [], designation: "Member" };

  const parts = rawDomainField
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const domains = [];
  let designation = "Member";

  for (const part of parts) {
    const lower = part.toLowerCase().trim();
    if (DESIGNATION_KEYWORDS.includes(lower)) {
      designation = part.trim();
    } else {
      const normalized = normalizeDomain(lower);
      if (normalized && !domains.includes(normalized)) {
        domains.push(normalized);
      }
    }
  }

  return { domains, designation };
}

function cleanSocialUrl(value, platform) {
  if (!value) return "";
  let val = value.trim();
  if (
    !val ||
    ["na", "n.a", "n.a.", "n/a", "-", "currently inactive", "nil"].includes(
      val.toLowerCase()
    )
  )
    return "";

  const urlMatch = val.match(/(https?:\/\/\S+)/);
  if (urlMatch) val = urlMatch[1];

  if (platform === "instagram") {
    if (val.startsWith("http")) return val;
    return `https://www.instagram.com/${val.replace(/^@/, "")}`;
  }
  if (platform === "linkedin") {
    if (val.startsWith("http")) return val;
    if (val.startsWith("www.") || val.startsWith("linkedin.com"))
      return `https://${val}`;
    return val;
  }
  if (platform === "github") {
    if (val.startsWith("http")) return val;
    if (val.startsWith("www.")) return `https://${val}`;
    return `https://github.com/${val}`;
  }
  return val;
}

// ── Flask JSON → member object ───────────────────────────────────────
// This maps your Python JSON keys to the React Component props
function mapApiToMember(apiData) {
  if (!apiData || !apiData.name) return null;

  // Convert the array of domains from Flask back into a string so their parsing function still works perfectly
  const rawDomain = Array.isArray(apiData.domain) ? apiData.domain.join(",") : (apiData.domain || "");
  const { domains, designation } = parseDomains(rawDomain);

  return {
    id: apiData.roll_no?.toString() || `${apiData.name}-${Date.now()}`,
    name: apiData.name.trim(),
    rollNo: apiData.roll_no?.toString() || "",
    domains: domains,
    designation: designation,
    email: apiData.email || "",
    photo: apiData.photo_url || null, // Your Flask app already converts this!
    intro: apiData.intro?.trim() || "",
    socials: {
      linkedin: cleanSocialUrl(apiData.linkedin, "linkedin"),
      github: cleanSocialUrl(apiData.github, "github"),
      instagram: cleanSocialUrl(apiData.instagram, "instagram"),
    },
  };
}

function deduplicateMembers(members) {
  const seen = new Map();
  for (const m of members) {
    const key = m.rollNo || m.name;
    if (!seen.has(key)) {
      seen.set(key, m);
    }
  }
  return [...seen.values()];
}

export function groupByDomain(members) {
  const groups = {};

  for (const domain of DOMAIN_ORDER) {
    groups[domain] = [];
  }

  for (const member of members) {
    for (const domain of member.domains) {
      if (groups[domain]) {
        groups[domain].push(member);
      }
    }
  }

  return DOMAIN_ORDER.filter((d) => groups[d].length > 0).map((domain) => ({
    domain,
    members: groups[domain],
  }));
}

// ── React Hook (Updated to fetch from your Flask API) ────────────────
export default function useGoogleSheetMembers() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    // Call your local Flask API!
    fetch("http://127.0.0.1:5000/api/members")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to connect to Flask API");
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        
        // Handle potential error from Flask
        if (data.error) throw new Error(data.error);

        // Map the Flask data to the React format
        const parsed = data.map(mapApiToMember).filter(Boolean);
        const unique = deduplicateMembers(parsed);
        
        setMembers(unique);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error("API fetch error:", err);
        setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { members, loading, error };
}