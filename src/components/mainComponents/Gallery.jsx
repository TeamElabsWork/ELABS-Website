import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhotoGallery from "../subComponents/PhotoGallery";

function Gallery() {
  const [showElabs, setShowElabs] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowElabs((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

 
  const photos = [
  { _id: "photo1", url: "https://lh3.googleusercontent.com/d/1W4k9DPDNTXguI07FoiAihh3VX-MnfeIr", event_id: "event1" },
  { _id: "photo2", url: "https://lh3.googleusercontent.com/d/1aV2Nge2Nd5UPK7br6xJiRibBPbGNaN2-", event_id: "event1" },
  { _id: "photo3", url: "https://lh3.googleusercontent.com/d/10y_X2dlhY8N-3p9Lk7cJGmKSakeITKdM", event_id: "event2" },
  { _id: "photo4", url: "https://lh3.googleusercontent.com/d/1OIBGwFyRxDEkXj_1c1lZVNHBK07L9t8L", event_id: "event2" },
  { _id: "photo5", url: "https://lh3.googleusercontent.com/d/1yeYxb7yTJLCTIQWj6JdwH5bjUwpM9v2I", event_id: "event3" },
  { _id: "photo6", url: "https://lh3.googleusercontent.com/d/16w7ySrUUr0kZg8BAbwxmuH3bwLZMNpiJ", event_id: "event3" },
  { _id: "photo7", url: "https://lh3.googleusercontent.com/d/1-qa9_p0sdrktqrH2OsYxS9h7OdEvipfF", event_id: "event4" },
  { _id: "photo8", url: "https://lh3.googleusercontent.com/d/1ORVDkIQV_4h-lAF3-HQNNCBnrdl3t1c3", event_id: "event4" },
  { _id: "photo9", url: "https://lh3.googleusercontent.com/d/1r_QEWDcoXGMif79iVG2hbAdBj4Urn0dW", event_id: "event5" },
];



  const eventsList = [
    { _id: "event1", name: "Datapool" },
    { _id: "event2", name: "Game Development Classes" },
    { _id: "event3", name: "DEZ-I-NIN 2.0" },
    { _id: "event4", name: "Game Development Classes" },
    { _id: "event5", name: "Game Development Classes" },
    { _id: "event6", name: "DSA Crash Course" },
    { _id: "event7", name: "Datapool" },
    { _id: "event8", name: "Datapool" },
    { _id: "event9", name: "IOT Prodigy" },
  ];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_GET_EVENT_URI);
        const data = await response.json();
        setEvents(data.events || eventsList);
      } catch (error) {
        console.error("Failed to fetch events:", error);
        setEvents(eventsList);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 animate-gradient">
              Glimpses of Our Events
            </span>
          </h1>

          {/* Animated Tagline */}
          <div className="text-gray-400 text-lg max-w-2xl mx-auto h-7 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {showElabs ? (
                <motion.p
                  key="elabs"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-orange-400 font-bold text-3xl tracking-wider"
                >
                  ELABS...
                </motion.p>
              ) : (
                <motion.p
                  key="tagline"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  Building Memories, One Event at a Time
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Morse Code Decorative Line */}
          <div className="flex items-center justify-center mt-8 gap-6">
            {/* E = . */}
            <div className="relative group">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-orange-400 text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                E
              </div>
            </div>

            {/* L = .-.. */}
            <div className="relative group">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <div className="w-6 h-2 bg-orange-500 animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-200"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-300"></div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-orange-400 text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                L
              </div>
            </div>

            {/* A = .- */}
            <div className="relative group">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <div className="w-6 h-2 bg-orange-500 animate-pulse delay-100"></div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-orange-400 text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                A
              </div>
            </div>

            {/* B = -... */}
            <div className="relative group">
              <div className="flex gap-1">
                <div className="w-6 h-2 bg-orange-500 animate-pulse"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-200"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-300"></div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-orange-400 text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                B
              </div>
            </div>

            {/* S = ... */}
            <div className="relative group">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-200"></div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-orange-400 text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                S
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <PhotoGallery events={events} photos={photos} />
      </div>
    </div>
  );
}

export default Gallery;
