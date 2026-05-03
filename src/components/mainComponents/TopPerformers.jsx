import Particles from "./Particles";

/* ============================
   DATA
============================ */
const performers = [
  {
    name: "Rishikesh Kumar",
    role: "2405600",
    image: "/Images/members/rishikesh.jpg",
  },
  {
    name: "Satwik Chandra",
    role: "2405900",
    image: "/Images/members/satwik.jpg",
  },
  {
    name: "Rajneesh Roy",
    role: "2405599",
    image: "/Images/members/rajneesh.jpg",
  },
  {
    name: "Prajjwal Patel",
    role: "24155637",
    image: "/Images/members/prajjwal.jpg",
  },
  {
    name: "Shubham Shah",
    role: "24155739",
    image: "/Images/members/shubhan.jpg",
  },
  {
    name: "Vinayak",
    role: "23051233",
    image: "/Images/members/vinayak.jpeg",
  },
  {
    name: "Asmit Sahu",
    role: "23052231",
    image: "/Images/members/asmit.jpg",
  },
  {
    name: "Swoasti Bhattacharjee",
    role: "24051821",
    image: "/Images/members/swoasti.jpg",
  },
  {
    name: "Omm Tripathi",
    role: "23051606",
    image: "/Images/members/omm.jpg",
  },
  {
    name: "Saroj Sen",
    role: "24051429",
    image: "/Images/members/saroj.jpg",
  },
  {
    name: "Drishti Singh",
    role: "24156186",
    image: "/Images/members/drishti.png",
  },
  {
    name: "Niraj Jha",
    role: "23053838",
    image: "/Images/members/niraj.jpeg",
  },
  {
    name: "Soham Chatterjee",
    role: "24051437",
    image: "/Images/members/soham.jpg",
  },
  {
    name: "Ayub Abdisalan",
    role: "2428059",
    image: "/Images/members/ayub.jpg",
  },
  {
    name: "Hamza Patel",
    role: "2305215",
    image: "/Images/members/hamza.jpeg",
  },
  {
    name: "Harshpreet Singh Gambhir",
    role: "23053395",
    image: "/Images/members/harshpreet.jpg",
  },
  {
    name: "Ananya Yadav",
    role: "24158039",
    image: "/Images/members/ananya.jpg",
  },
  {
    name: "Mandita Ghosh",
    role: "—",
    image: "/Images/members/mandita.jpeg",
  },
  {
    name: "Aneesha Goswami",
    role: "24051830",
    image: "/Images/members/aneesha.png",
  },
  {
    name: "Ambika Kumari",
    role: "2305681",
    image: "/Images/members/ambika.jpeg",
  },
];

/* ============================
   CARD
============================ */
function SmallMemberCard({ name, role, image }) {
  return (
    <div
      className="
        group
        w-[220px] h-[360px]
        rounded-[38px]
        border border-[#ff9a33]
        bg-gradient-to-b from-[#ff9a33] via-[#ff7b1a] to-[#1a0b03]
        shadow-[0_0_18px_rgba(255,154,51,0.35)]
        flex flex-col items-center pt-8 pb-6
        transition-all duration-300 ease-out
        hover:-translate-y-3
        hover:shadow-[0_0_85px_rgba(255,154,51,1)]
      "
    >
      {/* AVATAR */}
      <div
        className="
          w-36 h-36
          rounded-full
          border-[5px] border-black
          mb-8
          overflow-hidden
          bg-black
          transition-transform duration-300 ease-out
          group-hover:scale-110
        "
      >
        <img
          src={image}
          alt={name}
          onError={(e) =>
            (e.currentTarget.src = "/Images/members/default.jpg")
          }
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* NAME */}
      <p className="text-[14px] font-semibold text-white text-center leading-tight">
        {name}
      </p>

      {/* ROLL / ID */}
      <p className="text-[12px] text-orange-100/80 text-center mt-1">
        {role}
      </p>

      {/* STARS */}
      <div className="mt-auto flex gap-1 text-[13px] text-white">
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
    </div>
  );
}

/* ============================
   PAGE
============================ */
export default function TopPerformers() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Particles />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 pt-16 pb-20">
        {/* HEADING */}
        <h1 className="text-center text-2xl md:text-3xl font-bold tracking-wider text-[#ff9a33] mb-4">
          TOP CONTRIBUTORS
        </h1>

        {/* QUOTE */}
        <p className="text-center text-base md:text-lg text-orange-100/90 mb-14 max-w-4xl mx-auto">
          Hard work is their daily recipe — E Labs members don’t just work,
          they cook excellence with late nights, sharp minds, and relentless
          passion. 🔥
        </p>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            gap-x-10 gap-y-14
            justify-items-center
          "
        >
          {performers.map((member, index) => (
            <SmallMemberCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
