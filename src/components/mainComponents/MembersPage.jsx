import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase-client";
import MemberFlipCard from "./MemberFlipCard";
import LeadHero from "./RunningText";

function MembersPage() {
  const [grouped, setGrouped] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      const { data: domainsData } = await supabase
        .from("domains")
        .select("*");

      const { data: membersData } = await supabase
        .from("members")
        .select("*");

      const domainMap = {};
      domainsData.forEach((d) => {
        domainMap[d.id] = d.name;
      });

      const groupedData = {};

      membersData.forEach((member) => {
        const domain = domainMap[member.domain_id] || "Other";

        if (!groupedData[domain]) groupedData[domain] = [];

        groupedData[domain].push({
          ...member,
          domain,
        });
      });

      setGrouped(
        Object.entries(groupedData).map(([domain, members]) => ({
          domain,
          members,
        }))
      );

      setLoading(false);
    };

    fetchMembers();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24 min-h-screen bg-black">
        <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-orange-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-black text-center text-orange-500 mb-12">
          OUR TEAM MEMBERS
        </h1>

        {grouped.map(({ domain, members }) => (
          <section key={domain} className="mb-20">
            <h2 className="text-3xl font-bold text-orange-500 mb-10 border-l-4 border-orange-500 pl-4">
              {domain}
            </h2>

            <div className="max-w-6xl mx-auto mb-14">
              <LeadHero domain={domain} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
              {members.map((member) => (
                <MemberFlipCard
                  key={member.id}
                  member={member}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default MembersPage;