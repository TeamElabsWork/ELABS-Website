import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { supabase } from "../../lib/supabase-client";

const colors = [
  {
    gradient: "from-orange-500 to-orange-700",
    shadow: "shadow-orange-500/50",
  },
  {
    gradient: "from-orange-600 to-neutral-900",
    shadow: "shadow-orange-500/40",
  },
  {
    gradient: "from-orange-400 to-orange-600",
    shadow: "shadow-orange-400/50",
  },
  {
    gradient: "from-orange-500 to-black",
    shadow: "shadow-orange-500/50",
  },
];

const getTheme = (title = "") => {
  const index =
    [...title].reduce((sum, char) => sum + char.charCodeAt(0), 0) %
    colors.length;

  return colors[index];
};

const InitiativeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchInitiativeDetail();
    window.scrollTo(0, 0);
  }, [id]);

  const fetchInitiativeDetail = async () => {
    try {
      const { data: initiativeData, error } = await supabase
        .from("initiatives_detail")
        .select(
          `
          id,
          tagline,
          longdescription,
          features,
          detailimg,
          created_at,
          initiative (
            id,
            title,
            description
          )
        `,
        )
        .eq("initiative", Number(id))
        .single();

      if (error) {
        throw error;
      }

      setData(initiativeData);
    } catch (error) {
      console.error("Error fetching initiative:", error);
      navigate("/#initiatives");
    }
  };

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const theme = getTheme(data.initiative.title);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br ${theme.gradient} opacity-20 blur-[120px]`}
        />

        <div
          className={`absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr ${theme.gradient} opacity-10 blur-[150px]`}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/#initiatives")}
          className="flex items-center text-gray-400 hover:text-orange-500 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Initiatives
        </motion.button>

        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <div className="w-full lg:w-1/2">
            <h1
              className={`text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}
            >
              {data.initiative.title}
            </h1>

            <h2 className="text-2xl text-gray-200 mb-6">{data.tagline}</h2>

            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              {data.initiative.description}
            </p>

            <div className="flex gap-4">
              <button
                className={`px-8 py-3 rounded-full bg-gradient-to-r ${theme.gradient} text-white flex items-center shadow-lg ${theme.shadow}`}
              >
                View Live Site
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>

              <button className="px-8 py-3 rounded-full bg-gray-800 text-white flex items-center">
                <Github className="w-5 h-5 mr-2" />
                Source Code
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={data.detailimg}
                alt={data.initiative.title}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-6">
              About the Project
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              {data.longdescription}
            </p>
          </div>

          <div>
            <div className="bg-[#121212] rounded-2xl p-8 border border-orange-500/20">
              <h4 className="text-xl font-bold text-white mb-6">
                Key Features
              </h4>

              <ul className="space-y-4">
                {data.features?.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span
                      className={`w-5 h-5 rounded-full mr-3 bg-gradient-to-r ${theme.gradient}`}
                    />

                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitiativeDetail;
