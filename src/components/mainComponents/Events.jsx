import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import EventDetails from "../subComponents/EventDetails";
// import { useSelector } from "react-redux";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import "../../styles/Slider.css";
import { Image } from "@heroui/react";
import { useEffect, useState, useRef } from "react";

const CustomNextArrow = ({ className, onClick }) => (
  <div
    className="
      hidden md:flex 
      absolute top-1/2 -translate-y-1/2 -right-12 lg:-right-16
      justify-center items-center z-10 cursor-pointer"
    onClick={onClick}
  >
    <FiArrowRightCircle className="text-3xl text-textColor1 transition-all duration-250 ease-in-out hover:scale-110" />
  </div>
);

const CustomPrevArrow = ({ className, onClick }) => (
  <div
    className="
      hidden md:flex 
      absolute top-1/2 -translate-y-1/2 -left-12 lg:-left-16
      justify-center items-center z-10 cursor-pointer"
    onClick={onClick}
  >
    <FiArrowLeftCircle className="text-3xl font-bold text-textColor1 transition-all duration-250 ease-in-out hover:scale-110" />
  </div>
);

const Events = () => {
  const [events, setEvents] = useState([]);
  const sliderRef = useRef(null);

  // Static events data
  const staticEvents = [
    {
      _id: "dez-i-nin-2.0-2024",
      name: "DEZ-I-NIN 2.0",
      description: "The DEZ-I-NIN 2.0 event, held on August 4, 2024, introduced participants to UI/UX design fundamentals for web and mobile platforms. Through hands-on Figma sessions, attendees explored key concepts such as color theory and Fitts' Law. The session focused on practical application, allowing participants to refine their design skills in a structured learning environment.",
      image: "/events/web.png"
    },
    {
      _id: "datapool-2024",
      name: "DataPool",
      description: "The four-week DataPool Data Analysis Program attracted over 200 participants, offering a structured learning experience in key areas of data analytics. It covered Python for data manipulation, SQL for database management, and Power BI for creating interactive visualizations. Participants gained hands-on experience through real-world projects, including an end-to-end Power BI dashboard.",
      image: "/events/datapool.jpg"
    },
    {
      _id: "dsa-crash-course-2024",
      name: "DSA Crash Course",
      description: "The Crash Course on Data Structures and Algorithms (DSA) was designed to enhance students' problem-solving skills and exam readiness. The session covered fundamental data structures, algorithm design techniques, and hands-on practice with sample questions. Participants benefited from structured learning, interactive problem-solving sessions, and expert guidance tailored to their needs.",
      image: "/events/dsa.jpg"
    },
    {
      _id: "joffee-2.0-2024",
      name: "JOFFEE 2.0",
      description: "Joffee 2.0 was a comprehensive Java training program spanning four in-depth sessions, catering to learners of all levels. The curriculum covered core Java fundamentals, advanced concepts, and real-world applications. Interactive quizzes reinforced key topics, while a dedicated catch-up session ensured all participants stayed on track.",
      image: "/events/joffee2.0.jpg"
    },
    {
      _id: "star-hunt-orientation-2024",
      name: "Star Hunt Orientation",
      description: "The E-Labs Orientation Event introduced students to various tech and non-tech domains, including programming, AI/ML, Cybersecurity, UI/UX, Marketing, and more. Through live demos, Q&A sessions, and presentations, attendees engaged with domain experts and explored their interests. The event also featured vibrant dance performances, adding excitement to the experience.",
      image: "/events/star.jpg"
    },
    {
      _id: "cyberdoom-2024",
      name: "CyberDoom",
      description: "Cyberdoom was a cybersecurity event that featured an engaging speaker session followed by a Capture the Flag (CTF) competition. The session provided valuable insights into the fundamentals of cybersecurity, real-world threats, and best practices for staying secure in the digital age. Following the talk, participants tested their skills in the CTF event, solving challenges related to cryptography, web exploitation, and ethical hacking.",
      image: "/events/doom.jpg"
    },
    {
      _id: "iot-prodigy-2024",
      name: "IOT Prodigy",
      description: "This session introduced participants to the basics of Arduino UNO and IoT through simple projects like musical nodes. The hands-on approach familiarized attendees with Arduino and IoT concepts, showcasing practical examples to engage their interest. Participants gained a better understanding of these technologies, sparking curiosity for further exploration in the IoT domain.",

      image: "/events/blender-classes.jpg"
    },
    {
      _id: "game-dev-classes-2024",
      name: "Game Development Classes",
      description: "The session guided participants through the transition from developing a 2D endless runner game to creating a 3D game, covering advanced game development techniques. It included key concepts such as 3D modeling, lighting effects, and scene creation, with hands-on practical sessions to build immersive game environments.",
      image: "/events/game-dev-classes.jpg"
    },
    {
      _id: "blender-classes-2024",
      name: "Blender Classes",
      description: "Blender classes were organized to introduce students to the fundamentals of 3D modeling, animation, and digital design. The sessions covered essential topics such as navigating the Blender interface, object manipulation, basic modeling techniques, and rendering. Participants engaged in practical, hands-on activities to create simple 3D models and animations. The initiative helped students build a strong foundation in 3D design.",
      image: "/events/iot-prodigy.jpg"
    }
  ];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_GET_EVENT_URI);
        const data = await response.json();
        // Combine static events with API events
        setEvents([...staticEvents, ...(data.events || [])]);
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
        {events.map((el, index) => (
          <div
            key={index}
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
