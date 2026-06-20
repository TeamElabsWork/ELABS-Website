import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import EventDetails from "../subComponents/EventDetails";
// import { useSelector } from "react-redux";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import "../../styles/Slider.css";
import { Image } from "@heroui/react";
import { useEffect, useState, useRef } from "react";
import { supabase } from "../../lib/supabase-client";

// const CustomNextArrow = ({ className, onClick }) => (
//   <div
//     className="
//       hidden md:flex 
//       absolute top-1/2 -translate-y-1/2 -right-12 lg:-right-16
//       justify-center items-center z-10 cursor-pointer"
//     onClick={onClick}
//   >
//     <FiArrowRightCircle className="text-3xl text-textColor1 transition-all duration-250 ease-in-out hover:scale-110" />
//   </div>
// );

// const CustomPrevArrow = ({ className, onClick }) => (
//   <div
//     className="
//       hidden md:flex 
//       absolute top-1/2 -translate-y-1/2 -left-12 lg:-left-16
//       justify-center items-center z-10 cursor-pointer"
//     onClick={onClick}
//   >
//     <FiArrowLeftCircle className="text-3xl font-bold text-textColor1 transition-all duration-250 ease-in-out hover:scale-110" />
//   </div>
// );

const Events = () => {
  const [events, setEvents] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const {data: eventsData, error: eventsError} = await supabase.from("event_cards").select("*");

        if (eventsError) throw new Error("Events fetch failed!")

        // Combine static events with API events
        setEvents(eventsData);
      } catch (error) {
        // If API fails, use only static events
        console.error("Failed to fetch events:", error);
        setEvents(staticEvents);
      }
    };
    fetchEvents();
  }, []);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  let settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    cssEase: 'cubic-bezier(0.87, 0, 0.13, 1)',
    arrows: false,
  };

  return (
    <div className="relative w-full max-w-6xl px-4 mt-20 mx-auto mb-24 dark:bg-[radial-gradient(circle_at_center,#fff_1%,#ffedde_15%,#ffd4b3_40%)]">
      <h1 className="sm:text-5xl text-4xl font-black mb-8 text-textColor1 mx-5 text-balance text-center">
        Our Past and Upcoming Events
      </h1>
      <Slider ref={sliderRef} {...settings}>
        {events.map((el) => (
          <div
            key={el.id}
            className="w-full flex flex-col md:flex-row items-center justify-evenly px-4 lg:px-10"
          >
            <EventDetails eventInfo={el} />
          </div>
        ))}
      </Slider>

      {/* External Navigation Arrows */}
      <div className="flex justify-center items-center gap-12 mt-8">
        <div onClick={previous} className="cursor-pointer transition-transform hover:scale-110">
          <FiArrowLeftCircle className="text-4xl text-textColor1" />
        </div>
        <div onClick={next} className="cursor-pointer transition-transform hover:scale-110">
          <FiArrowRightCircle className="text-4xl text-textColor1" />
        </div>
      </div>
    </div>
  );
}

export default Events;
