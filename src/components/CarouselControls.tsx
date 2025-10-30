import React from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface Props {
  onPrev: () => void;
  onNext: () => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

const CarouselControls: React.FC<Props> = ({
  onPrev,
  onNext,
  isPlaying,
  onTogglePlay
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
      <button
        onClick={onPrev}
        aria-label="Previous Slide"
        className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 bg-slate-700/90 hover:bg-slate-600 active:bg-slate-500 text-white rounded-lg sm:rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 font-medium text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 backdrop-blur-sm border border-slate-600/50"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
        <span className="hidden xs:inline">Previous</span>
        <span className="xs:hidden">Prev</span>
      </button>
      <button
        onClick={onTogglePlay}
        aria-label={isPlaying ? "Stop automatic slide rotation" : "Start automatic slide rotation"}
        className="flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-7 md:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:from-blue-700 active:to-indigo-700 text-white rounded-lg sm:rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 font-semibold text-xs sm:text-sm md:text-base min-w-[90px] sm:min-w-[100px] md:min-w-[110px] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
      >
        {isPlaying ? (
          <>
            <Pause className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            <span>Pause</span>
          </>
        ) : (
          <>
            <Play className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            <span>Play</span>
          </>
        )}
      </button>
      <button
        onClick={onNext}
        aria-label="Next Slide"
        className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 bg-slate-700/90 hover:bg-slate-600 active:bg-slate-500 text-white rounded-lg sm:rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 font-medium text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 backdrop-blur-sm border border-slate-600/50"
      >
        <span className="hidden xs:inline">Next</span>
        <span className="xs:hidden">Next</span>
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default CarouselControls;