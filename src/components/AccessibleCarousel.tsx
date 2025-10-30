import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import CarouselSlide from "./CarouselSlide";
import CarouselControls from "./CarouselControls";
import { slides } from "../data/slidesData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AccessibleCarousel: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const autoplayTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPlaying) {
      autoplayTimerRef.current = window.setInterval(() => {
        sliderRef.current?.slickNext();
      }, 3000);
    } else {
      if (autoplayTimerRef.current !== null) {
        clearInterval(autoplayTimerRef.current);
        autoplayTimerRef.current = null;
      }
    }

    return () => {
      if (autoplayTimerRef.current !== null) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isPlaying]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseEnter = () => {
      if (isPlaying && autoplayTimerRef.current !== null) {
        clearInterval(autoplayTimerRef.current);
        autoplayTimerRef.current = null;
      }
    };

    const handleMouseLeave = () => {
      if (isPlaying && autoplayTimerRef.current === null) {
        autoplayTimerRef.current = window.setInterval(() => {
          sliderRef.current?.slickNext();
        }, 3000);
      }
    };

    const handleFocusIn = () => {
      if (isPlaying && autoplayTimerRef.current !== null) {
        clearInterval(autoplayTimerRef.current);
        autoplayTimerRef.current = null;
      }
    };

    const handleFocusOut = () => {
      if (isPlaying && autoplayTimerRef.current === null) {
        autoplayTimerRef.current = window.setInterval(() => {
          sliderRef.current?.slickNext();
        }, 3000);
      }
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("focusin", handleFocusIn);
    container.addEventListener("focusout", handleFocusOut);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("focusin", handleFocusIn);
      container.removeEventListener("focusout", handleFocusOut);
    };
  }, [isPlaying]);

  const handlePrevious = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleBeforeChange = (_current: number, next: number) => {
    setCurrentSlide(next);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    accessibility: true,
    swipe: true,
    draggable: true,
    adaptiveHeight: false,
    beforeChange: handleBeforeChange,
    appendDots: (dots: React.ReactNode) => (
      <div className="custom-dots">
        <ul className="flex items-center justify-center gap-2 mt-4 sm:mt-5 md:mt-6">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <button
        aria-label={`Go to slide ${i + 1}`}
        className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
        style={{
          backgroundColor: currentSlide === i ? '#3b82f6' : '#475569',
        }}
      >
        <span className="sr-only">Slide {i + 1}</span>
      </button>
    ),
  };

  return (
    <section
      ref={containerRef}
      aria-roledescription="carousel"
      aria-label="Travel destinations carousel"
      className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto"
    >
      <div className="relative">
        
        <CarouselControls
          onPrev={handlePrevious}
          onNext={handleNext}
          isPlaying={isPlaying}
          onTogglePlay={handleTogglePlay}
        />

        <div className="carousel-wrapper">
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide, idx) => (
              <CarouselSlide
                key={slide.id}
                slide={slide}
                index={idx}
                total={slides.length}
                isActive={idx === currentSlide}
              />
            ))}
          </Slider>
        </div>

        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {`Slide ${currentSlide + 1} of ${slides.length}. ${
            isPlaying ? "Carousel is auto-rotating" : "Carousel rotation is paused"
          }.`}
        </div>

        <div
          className="text-center mt-3 sm:mt-4 text-slate-300 text-xs sm:text-sm md:text-base font-medium"
          aria-hidden="true"
        >
          <span className="inline-block bg-slate-800/60 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-slate-700/50">
            Viewing: <span className="text-blue-400 font-semibold">{currentSlide + 1}</span> of {slides.length}
          </span>
        </div>
      </div>

      <style>{`
        .slick-dots {
          position: static !important;
        }
        
        .slick-dots li {
          margin: 0 !important;
        }
        
        .slick-dots li button:before {
          display: none !important;
        }
        
        .carousel-wrapper .slick-slide {
          padding: 0 2px;
        }
        
        .carousel-wrapper .slick-list {
          margin: 0 -2px;
        }
        
        @media (max-width: 640px) {
          .carousel-wrapper .slick-slide {
            padding: 0 1px;
          }
          .carousel-wrapper .slick-list {
            margin: 0 -1px;
          }
        }
      `}</style>
    </section>
  );
};

export default AccessibleCarousel;