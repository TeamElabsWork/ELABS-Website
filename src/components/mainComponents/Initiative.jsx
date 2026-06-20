import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { supabase } from "../../lib/supabase-client";

const colors = [
  "from-orange-500 to-orange-700",
  "from-orange-600 to-neutral-900",
  "from-orange-400 to-orange-600",
  "from-orange-500 to-black",
  "from-orange-600 to-orange-800",
  "from-orange-400 to-black",
];

function getColor(title) {
  const hash = [...title].reduce(
    (acc, char) => acc + char.charCodeAt(0),
    0
  );

  return colors[hash % colors.length];
}

const Initiative = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchInitiatives();
  }, [])

  const fetchInitiatives = async () => {
    try {
      const { data: initiativesData, error: initiativesError } = await supabase.from("initiatives").select("*");

      if (initiativesError) {
        throw new Error("Error fetching initiatives!");
      }

      setCards(initiativesData);
    } catch (error) {
      throw new Error("Error fetching initiatives!");
    }
  }



  return (
    <section id="initiatives" className="py-20 w-full overflow-x-hidden overflow-y-visible relative bg-[#0a0a0a] dark:bg-[#ffedde]">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 dark:to-white/5 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-600 mb-4">
            Our Initiatives
          </h2>
          <p className="text-lg text-gray-300 dark:text-gray-700 max-w-2xl mx-auto">
            Discover the amazing projects and platforms built by our community, driving innovation and creativity forward.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="w-full pt-16 pb-24 px-4"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }}
          >
            {cards.map((item, index) => {
              return (
                <SwiperSlide key={item.id} className="max-w-[350px] sm:max-w-[400px]">
                  <Link to={`/initiatives/${item.id}`} className="block group">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(249,_115,_22,_0.5)] bg-[#121212] dark:bg-white border border-orange-500/20 dark:border-orange-500/10 group-hover:border-orange-500/50">
                      <div className="relative h-48 md:h-56 overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${getColor(item.title)} opacity-40 group-hover:opacity-70 transition-opacity duration-300 mix-blend-overlay z-10`}></div>
                        <img
                          src={item.cardimg}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6 relative z-20">
                        <h3 className="text-2xl font-bold mb-2 text-white dark:text-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-orange-600 transition-all">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 dark:text-gray-700 text-sm line-clamp-3">
                          {item.description}
                        </p>

                        <div className="mt-4 flex items-center text-orange-500 font-semibold text-sm">
                          <span>Explore Project</span>
                          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>

                      {/* Glowing border effect */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-500/50 transition-colors duration-300 pointer-events-none"></div>
                    </div>
                  </Link>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </motion.div>
      </div>

      {/* Custom styles to hide default swiper pagination and make it look better */}
      <style>{`
        .swiper {
          overflow: visible !important;
          padding-top: 60px !important;
          padding-bottom: 80px !important;
        }
        .swiper-pagination-bullet {
          background: #f97316 !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 12px;
        }
        .swiper-3d .swiper-slide-shadow-left,
        .swiper-3d .swiper-slide-shadow-right {
          background-image: none !important;
        }
      `}</style>
    </section>
  );
};

export default Initiative;
