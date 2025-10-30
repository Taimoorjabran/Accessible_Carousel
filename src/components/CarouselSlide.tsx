import React from "react";
import type { Slide } from "../data/slidesData";

interface CarouselSlideProps {
  slide: Slide;
  index: number;
  total: number;
  isActive: boolean;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({
  slide,
  index,
  total,
  isActive,
}) => {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${total}`}
      className="outline-none focus:outline-none"
      aria-hidden={!isActive}
    >
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl bg-slate-900 transition-all duration-300">
        <div className="relative h-48 xs:h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[410px] w-full">
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10">
          <div className="max-w-4xl">
            <h2
              id={`slide-${slide.id}-heading`}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight drop-shadow-lg"
            >
              {slide.title}
            </h2>
            {slide.description && (
              <p className="text-slate-100 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-3xl drop-shadow-md">
                {slide.description}
              </p>
            )}
            <div className="mt-3 sm:mt-4 md:mt-5 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-white">
                {index + 1} / {total}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;