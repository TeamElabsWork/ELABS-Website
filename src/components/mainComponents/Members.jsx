import "../../styles/Slider.css";
import { useState, useEffect, useCallback } from "react";
import MemberCard from "../subComponents/MemberCard";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Button, Select, SelectItem } from "@heroui/react";
import { supabase } from "../../lib/supabase-client";

function Members({ isHomePage = false }) {
  const [selectedDomain, setSelectedDomain] = useState("coordinator");
  const [allMembers, setAllMembers] = useState([]);
  const [domains, setDomains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const { data: domainsData } = await supabase.from("domains").select("*");
        const { data: membersData } = await supabase.from("members").select("*");
        const { data: leadsData } = await supabase.from("leads").select("*");

        const domainMap = {};
        domainsData.forEach((d) => {
          domainMap[d.id] = d.name;
        });

        setDomains(domainsData.map((d) => d.name));

        const members = membersData.map((m) => ({
          _id: m.id,
          name: m.name,
          image: m.photo_url,
          designation: "Member",
          domain: [domainMap[m.domain_id]],
          github: m.github || "",
          linkedin: m.linkedin || "",
          instagram: m.instagram || "",
        }));

        const leads = leadsData.map((l) => ({
          _id: l.id,
          name: l.name,
          image: l.photo_url,
          designation: l.designation,
          domain: [domainMap[l.domain_id]],
          github: "",
          linkedin: "",
          instagram: "",
        }));

        setAllMembers([...leads, ...members]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const updateVisibleCards = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) setVisibleCards(1);
    else if (width < 768) setVisibleCards(2);
    else if (width < 1024) setVisibleCards(3);
    else setVisibleCards(4);
  }, []);

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, [updateVisibleCards]);

  const coordinators = allMembers.filter((m) =>
    m.designation.toLowerCase().includes("coordinator")
  );

  const leads = allMembers.filter(
    (m) =>
      m.designation.toLowerCase() === "lead" ||
      m.designation.toLowerCase() === "asst_lead"
  );

  const regularMembers = allMembers.filter(
    (m) =>
      !m.designation.toLowerCase().includes("lead") &&
      !m.designation.toLowerCase().includes("coordinator")
  );

  const filteredMembers =
    selectedDomain === "coordinator"
      ? coordinators
      : [...regularMembers, ...leads].filter((m) =>
          m.domain.includes(selectedDomain)
        );

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  if (isHomePage) {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: visibleCards,
      autoplay: true,
      autoplaySpeed: 2500,
    };

    return (
      <div className="w-full flex flex-col items-center mt-36 mb-36">
        <h1 className="text-5xl font-black mb-14 text-textColor1">
          Meet With Our Team
        </h1>

        <Slider {...settings} className="w-[90%]">
          {[...coordinators, ...leads].map((member) => (
            <MemberCard
              key={member._id}
              name={member.name}
              imgSource={member.image}
              position={member.designation}
              domain={member.domain.join(", ")}
            />
          ))}
        </Slider>

        <Link to="/members">
          <Button color="warning" className="mt-12">
            View More
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center py-12">
      <h1 className="text-5xl font-black mb-8">OUR TEAM MEMBERS</h1>

      <Select
        defaultSelectedKeys={["coordinator"]}
        onSelectionChange={(keys) =>
          setSelectedDomain(Array.from(keys)[0])
        }
      >
        {["coordinator", ...domains].map((domain) => (
          <SelectItem key={domain}>
            {domain === "coordinator" ? "Coordinators" : domain}
          </SelectItem>
        ))}
      </Select>

      <div className="flex flex-wrap gap-10 mt-12 justify-center">
        {filteredMembers.map((member) => (
          <MemberCard
            key={member._id}
            imgSource={member.image}
            name={member.name}
            position={member.designation}
            github={member.github}
            linkedin={member.linkedin}
            instagram={member.instagram}
            membersPage
          />
        ))}
      </div>
    </div>
  );
}

export default Members;