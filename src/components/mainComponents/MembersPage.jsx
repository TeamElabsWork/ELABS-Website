import { useEffect, useState, useRef, useCallback } from "react";
import { supabase } from "../../lib/supabase-client";
import MemberFlipCard from "./MemberFlipCard";
import LeadHero from "./RunningText";
import { fallbackMembers, fallbackDomains } from "../../constants/fallbackData";

function MembersPage() {
  const [grouped, setGrouped] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentDomainIndex, setCurrentDomainIndex] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);
  const usingFallbackRef = useRef(false);

  const normalize = (value) =>
    value?.toLowerCase().trim().replace(/\s+/g, "_");

  // Fetch a single domain and its members at the specified index
  const fetchDomainAndMembers = useCallback(async (index, isInitial = false) => {
    if (isInitial) {
      setLoading(true);
    } else {
      setLoadingMore(true);
    }

    if (!usingFallbackRef.current) {
      try {
        // Fetch domain at specific index
        const { data: domainData, error: domainError } = await supabase
          .from("domains")
          .select("*")
          .order("name", { ascending: true })
          .range(index, index);

        if (domainError) throw domainError;

        if (!domainData || domainData.length === 0) {
          setHasMore(false);
          setLoadingMore(false);
          return;
        }

        const domainItem = domainData[0];
        // Fetch members for this domain
        const { data: membersData, error: membersError } = await supabase
          .from("members")
          .select("*")
          .eq("domain_id", domainItem.id);

        if (membersError) throw membersError;

        const newGroup = {
          domain: domainItem.name,
          members: (membersData || []).map(m => ({ ...m, domain: domainItem.name })),
        };

        if (isInitial) {
          setGrouped([newGroup]);
          setCurrentDomainIndex(0);
        } else {
          setGrouped(prev => [...prev, newGroup]);
          setCurrentDomainIndex(index);
        }
      } catch (err) {
        console.warn(`Supabase fetch failed for domain at index ${index}, trying fallback:`, err.message);
        
        if (isInitial) {
          usingFallbackRef.current = true;
          // In fallback mode, we use fallbackDomains list
          if (fallbackDomains.length === 0) {
            setHasMore(false);
            setLoading(false);
            return;
          }
          const domainName = fallbackDomains[0];
          const firstMembers = fallbackMembers
            .filter(m => m.domains.includes(domainName))
            .map(m => ({
              id: m.id,
              name: m.name,
              roll_no: m.roll_no,
              domain: domainName,
              email: m.email,
              photo_url: m.photo_url,
              github: m.github,
              linkedin: m.linkedin,
              instagram: m.instagram,
              intro: m.intro,
              designation: "Member"
            }));

          setGrouped([
            {
              domain: domainName,
              members: firstMembers,
            }
          ]);
          setCurrentDomainIndex(0);
        } else {
          // Fallback fetch for next index
          if (index >= fallbackDomains.length) {
            setHasMore(false);
            setLoadingMore(false);
            return;
          }
          const domainName = fallbackDomains[index];
          const nextMembers = fallbackMembers
            .filter(m => m.domains.includes(domainName))
            .map(m => ({
              id: m.id,
              name: m.name,
              roll_no: m.roll_no,
              domain: domainName,
              email: m.email,
              photo_url: m.photo_url,
              github: m.github,
              linkedin: m.linkedin,
              instagram: m.instagram,
              intro: m.intro,
              designation: "Member"
            }));

          // Add a small delay for smoother fallback pagination visual transition
          await new Promise(resolve => setTimeout(resolve, 700));
          setGrouped(prev => [
            ...prev,
            {
              domain: domainName,
              members: nextMembers,
            }
          ]);
          setCurrentDomainIndex(index);
        }
      } finally {
        if (isInitial) {
          setLoading(false);
        } else {
          setLoadingMore(false);
        }
      }
    } else {
      // Already in fallback mode
      if (index >= fallbackDomains.length) {
        setHasMore(false);
        setLoadingMore(false);
        return;
      }
      const domainName = fallbackDomains[index];
      const nextMembers = fallbackMembers
        .filter(m => m.domains.includes(domainName))
        .map(m => ({
          id: m.id,
          name: m.name,
          roll_no: m.roll_no,
          domain: domainName,
          email: m.email,
          photo_url: m.photo_url,
          github: m.github,
          linkedin: m.linkedin,
          instagram: m.instagram,
          intro: m.intro,
          designation: "Member"
        }));

      setTimeout(() => {
        setGrouped(prev => [
          ...prev,
          {
            domain: domainName,
            members: nextMembers,
          }
        ]);
        setCurrentDomainIndex(index);
        setLoadingMore(false);
      }, 700);
    }
  }, []);

  // Fetch initial domain and its members on mount
  useEffect(() => {
    fetchDomainAndMembers(0, true);
  }, [fetchDomainAndMembers]);

  // Intersection Observer to fetch next domain when loader is visible
  useEffect(() => {
    if (loading || !hasMore || loadingMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loadingMore) {
          fetchDomainAndMembers(currentDomainIndex + 1, false);
        }
      },
      {
        rootMargin: "250px 0px", // Trigger when the loader is 250px from entering viewport
        threshold: 0.1,
      }
    );

    const target = loaderRef.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [loading, hasMore, loadingMore, currentDomainIndex, fetchDomainAndMembers]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24 min-h-screen bg-black dark:bg-[#ffd4b3] transition-colors duration-300">
        <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-orange-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black dark:bg-[#ffd4b3] py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-black text-center mb-16 uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 drop-shadow-[0_2px_10px_rgba(249,115,22,0.3)]">
          OUR TEAM MEMBERS
        </h1>

        {grouped.map(({ domain, members }) => (
          <section key={domain} className="mb-24 animate-fade-in-up">
            <h2 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 mb-10 border-l-4 border-orange-500 pl-4 uppercase tracking-widest">
              {domain}
            </h2>

            <div className="max-w-6xl mx-auto mb-16">
              <LeadHero domain={domain} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 justify-items-center max-w-6xl mx-auto">
              {members.map((member) => (
                <MemberFlipCard
                  key={member.id}
                  member={member}
                />
              ))}
            </div>
          </section>
        ))}

        {hasMore && (
          <div
            ref={loaderRef}
            className="flex flex-col items-center justify-center py-12 w-full mt-10 border border-orange-500/10 rounded-2xl bg-white/5 dark:bg-black/5 backdrop-blur-sm"
          >
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-orange-500 mb-4" />
            <p className="text-orange-500/80 font-bold tracking-widest text-sm uppercase animate-pulse">
              Loading more members...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MembersPage;