import React from "react";

export default function VerticalStep({ title, description, number, isLast }) {
  return (
    <div className="flex items-start">
      {/* Step Indicator */}
      <div className="flex flex-col items-center mr-6">
        <div className="w-12 h-12 rounded-full bg-orange-600/60 border-2 border-orange-500 flex items-center justify-center text-xl font-bold text-white shadow-[0_0_18px_rgba(255,140,0,0.7)] z-10 flex-shrink-0">
          {number}
        </div>

        {!isLast && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-orange-400/60 to-orange-500/20 mt-2 mb-2"></div>
        )}
      </div>

      {/* Content */}
      <div className={`flex-grow pb-12 ${isLast ? "pb-0" : ""}`}>
        <h3 className="text-2xl font-semibold text-orange-400 mb-2 drop-shadow-[0_0_6px_rgba(255,140,0,0.35)]">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed tracking-wide">
          {description}
        </p>
      </div>
    </div>
  );
}
