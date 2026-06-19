import React from "react";
import HPCard from "../subComponents/HPCard";

const desc =
  "E-Labs is a student-run peer-to-peer technical engagement platform designed to empower learners. We go beyond the confines of traditional academic curricula, offering a diverse range of courses and projects that cater to your unique interests and professional aspirations. Our platform provides a dynamic and collaborative learning environment where you can connect with fellow students, share knowledge, and work together on challenging projects.";

const cardData = {
  review:
    "Student‑run, peer‑to‑peer technical platform for ambitious learners.",
};

const About = () => {

  return (
    <>
      <div className="about-layout dark:bg-[radial-gradient(circle_at_center,#fff_1%,#ffedde_20%,#ffd4b3_40%)]">
        <figure className="about-video-wrapper">
          <div className="about-video-card">
            <img src="/Images/Trasnparent12 1.png" alt="E LABS Logo" className="h-full w-full object-contain p-6" />
          </div>
        </figure>

        <HPCard
          heading="About Us"
          userClass="text-textColor1 font-extrabold text-6xl font-black about-heading-enhanced"
          description={desc}
        />
      </div>

      {/*
      <div className="smooth-line-container">
        <div className="smooth-line-x" />
        <div className="smooth-line-y" />
      </div>
      */}
    </>
  );
};

export default About;
