import useGoogleSheetMembers, {
  groupByDomain,
} from "../../hooks/useGoogleSheetMembers";
import MemberFlipCard from "./MemberFlipCard";
import LeadHero from "./RunningText";

function MembersPage() {
  const { members, loading, error } = useGoogleSheetMembers();
  const grouped = groupByDomain(members);


  if (loading)
    return (
      <div className="flex items-center justify-center py-24 min-h-screen bg-black">
        <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-orange-500" />
      </div>
    );

  if (error)
    return (
      <div className="text-center py-20 min-h-screen bg-black text-red-400">
        <p className="text-xl font-semibold">Failed to load members</p>
        <p className="text-sm mt-2 opacity-70">{error}</p>
      </div>
    );

  return (
  <div className="min-h-screen bg-black py-12">

    <div className="max-w-7xl mx-auto px-4 md:px-8">

      <h1 className="text-4xl font-black text-center text-orange-500 tracking-wide mb-12">
        OUR TEAM MEMBERS
      </h1>

      {grouped.map(({ domain, members: domainMembers }) => (
        <section key={domain} className="mb-20">

          {/* Domain Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-10 border-l-4 border-orange-500 pl-4">
            {domain}
          </h2>

          {/* Lead Hero (Centered) */}
          <div className="max-w-6xl mx-auto mb-14">
            <LeadHero domain={domain} />
          </div>

          {/* Members Grid (Centered + Proper Width) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {domainMembers.map((member) => (
              <MemberFlipCard
                key={`${domain}-${member.id}`}
                member={member}
              />
            ))}
          </div>

        </section>
      ))}

      {grouped.length === 0 && (
        <p className="text-center text-orange-300 text-lg py-20">
          No members found.
        </p>
      )}

    </div>
  </div>
);

}

export default MembersPage;
