import React from "react";
import FooterCard from "../subComponents/FooterCard";
import ContactUs from "../subComponents/ContactUs";
import Social from "../subComponents/Social";

function Footer() {
  return (
    <div className="backdrop-blur-xl bg-white/1 dark:bg-white/1 border border-white/30 shadow-[0_0_15px_rgba(255,165,0,0.5)] rounded-t-3xl bottom-0 w-full min-h-64 gap-10 max-[467px]:gap-10 flex flex-col flex-wrap items-center justify-center mb-4 mx-auto max-w-[98%]">
      <div className="flex flex-wrap w-full items-center justify-evenly pt-8">

        <div className="flex flex-wrap items-start justify-evenly gap-8 mx-8 w-full">
          <Social />
          <ContactUs />
          <FooterCard
            heading={`Address`}
            array={[
              {
                desc: `KIIT UNIVERSITY, Campus 12\nOld Electronics Building,\nPatia, Bhubaneswar,\nOdisha India 751024`,
                url: `https://maps.app.goo.gl/h36RsZRuY5ng6a9o9`,
              },
            ]}
          />
        </div>
      </div>
      <div className="select-none flex gap-2 flex-col font-light items-center justify-center text-textColor2 dark:text-black tracking-wider text-sm md:text-base mb-6 mx-6 text-center">
        <p>&copy;2026. All Rights are Reserved by E LABS</p>
        <p>Made with ❤️ Team Jaadu</p>
      </div>
    </div>
  );
}

export default Footer;
