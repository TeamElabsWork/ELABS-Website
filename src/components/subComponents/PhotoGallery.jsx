import { useState, useEffect, useRef } from 'react';

const PhotoGallery = ({ events, photos = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const galleryImages = photos;

  // Auto-slide functionality
  const startSlider = () => {
    if (intervalRef.current) return; // Prevent multiple intervals
    
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds
  };

  const stopSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Start slider on mount
  useEffect(() => {
    if (galleryImages.length > 0 && !isPaused) {
      startSlider();
    }
    
    return () => stopSlider(); // Cleanup on unmount
  }, [isPaused, galleryImages.length]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
    stopSlider();
    if (!isPaused) {
      startSlider();
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (galleryImages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32">
        <div className="relative">
          <div className="w-32 h-32 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
            <svg className="w-16 h-16 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">No Photos Yet</h3>
        <p className="text-gray-400">Check back soon for amazing event memories!</p>
      </div>
    );
  }

  const currentImage = galleryImages[currentIndex];
  const eventName = events.find((event) => event._id === currentImage.event_id)?.name || "Event";
  const imageUrl = currentImage.url?.replace?.("/upload", "/upload/c_auto,g_auto,f_auto") || currentImage.url;

  return (
    <div className="px-4 max-w-7xl mx-auto">
      {/* Main Carousel Container */}
      <div 
        className="relative h-[600px] rounded-3xl overflow-hidden group"
        onMouseEnter={() => {
          setIsPaused(true);
          stopSlider();
        }}
        onMouseLeave={() => {
          setIsPaused(false);
          startSlider();
        }}
      >
        {/* Carousel Images */}
        <div className="relative w-full h-full">
          {galleryImages.map((img, index) => {
            const imgEventName = events.find((event) => event._id === img.event_id)?.name || "";
            const imgUrl = img.url?.replace?.("/upload", "/upload/c_auto,g_auto,f_auto") || img.url;
            
            return (
              <div
                key={img._id || index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={imgUrl}
                  alt={imgEventName || `photo-${index}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Orange Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/40 via-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Event Details - Visible on Hover */}
        <div className="absolute bottom-0 left-0 right-0 p-12 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="transform translate-y-20 group-hover:translate-y-0 transition-transform duration-700">
            

            {/* Event Name */}
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
              {eventName}
            </h2>

            {/* Event Details */}
            <p className="text-xl text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300">
              Photo {currentIndex + 1} of {galleryImages.length}
            </p>

            {/* View More Button */}
            <button className="flex items-center gap-3 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 delay-400 hover:scale-105">
              <span>View Full Gallery</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/50 hover:bg-orange-500 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 backdrop-blur-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/50 hover:bg-orange-500 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 backdrop-blur-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Pause Indicator */}
        {isPaused && (
          <div className="absolute top-6 right-6 px-4 py-2 bg-black/70 text-white text-sm rounded-full backdrop-blur-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
            Paused
          </div>
        )}
      </div>

      {/* Thumbnail Indicators */}
      <div className="flex justify-center gap-3 mt-8">
        {galleryImages.map((img, index) => (
          <button
            key={img._id || index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-12 h-3 bg-orange-500'
                : 'w-3 h-3 bg-gray-600 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
