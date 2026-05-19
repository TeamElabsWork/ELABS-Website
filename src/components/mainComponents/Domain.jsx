import { useNavigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

function Domain() {
  let stdmt = useSelector((state) => state.studyMaterials);
  const navigate = useNavigate();

  return (
    <div className="w-full font-verna mt-12 h-full flex flex-col items-center justify-center">
      <h1 className="text-4xl text-balance md:text-5xl font-black mb-8 text-textColor1 mx-3 text-center">
        Introducing Our Domains
      </h1>

      <div className="rounded-[32px] border-[3px] border-[#F7941D] mt-[4%] bg-[#0B1215] dark:bg-[radial-gradient(circle_at_center,#fff_1%,#ffedde_15%,#ffd4b3_60%)] w-[90%] h-full flex flex-col items-center justify-evenly mb-20 domain-glass-container">
        <div className="flex gap-7 px-4 items-center flex-wrap w-full justify-center py-10">
          {stdmt.map((element) => (
            <div
              onClick={() => {
                const domain = element.domain.toLowerCase();

                if (domain === "java") {
                  navigate("/java");
                  return;
                }
                if (domain === "cyber" || domain.includes("cyber")) {
                  navigate("/cyber");
                  return;
                }
                if (domain === "android" || domain.includes("android")) {
                  navigate("/android");
                  return;
                }
                if (domain === "cloud" || domain.includes("cloud")) {
                  navigate("/cloud");
                  return;
                }
                if (domain.includes("graphic")) {
                  navigate("/graphic");
                  return;
                }
                if (domain.includes("web")) {
                  navigate("/web");
                  return;
                }

                if (domain.includes("ui") || domain.includes("ux")) {
                  navigate("/uiux");
                  return;
                }

                if (domain.includes("photograpgy")) {
                  navigate("/photography");
                  return;
                }

                if (domain.includes("iot")) {
                  navigate("/iotembedded");
                  return;
                }

                if (domain.includes("ai") || domain.includes("ml")) {
                  navigate("/aiml");
                  return;
                }

                if (domain.includes("data") || domain.includes("analytics")) {
                  navigate("/data");
                  return;
                }

                if (domain === "cyber" || domain.includes("cyber")) {
                  navigate("/cyber");
                  return;
                }
                

                if (domain === "game" || domain.includes("game")) {
                  navigate("/gamedev");
                  return;
                }

                if (domain.includes("marketing") || domain.includes("pr")) {
                  navigate("/marketing");
                  return;
                }

                if (domain.includes("content") || domain.includes("writing")) {
                  navigate("/content-writing");
                  return;
                }

                if (domain.includes("entrepreneur") || domain.includes("startup")) {
                  navigate("/entrepreneurship");
                  return;
                }

              }}
              className="flex hover:scale-105 transition-all ease-in-out duration-300 w-full sm:w-[45%] md:w-[30%] max-w-[350px] cursor-pointer"
              key={element.domain}
            >
              <div className="flex font-verna flex-col items-center justify-center rounded-[15px] border-[4px] border-[#F7941D] bg-[#0B1215] dark:bg-[#ffccaa]/60 h-52 gap-2.5 w-full p-2 domain-glass-card">
                <div className="flex items-end justify-center w-full">
                  <img
                    src={element.img}
                    alt={element.domain}
                    className="w-[25%]"
                  />
                </div>
                <div className="flex items-start justify-center w-full">
                  <p className="text-center h-[50%] font-bold text-[22px] w-full text-wrap leading-normal text-[#FFFAFA] dark:text-black">
                    {element.domain}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Domain;