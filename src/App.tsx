import React from "react";
import AccessibleCarousel from "./components/AccessibleCarousel";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-6 lg:py-6">
        <header className="text-center mb-2 sm:mb-6 md:mb-4 lg:mb-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-3 md:mb-4 tracking-tight leading-tight">
            Accessible Carousel
          </h1>
        </header>
        <AccessibleCarousel />
      </div>
    </div>
  );
};

export default App;