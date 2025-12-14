"use client";

import RevealOnScroll from "./RevealOnScroll";
import Image from "next/image";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative flex flex-col lg:flex-row items-center justify-center overflow-hidden bg-white pt-16 md:pt-0 pb-8">
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-teal-primary/5 rounded-full blur-3xl"></div>
         <div className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-20 mb-10 md:mb-0">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
             <RevealOnScroll>
              <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold text-gray-900 tracking-tight leading-tight mb-4 md:mb-6">
                Building <br/>
                <span className="text-teal-primary">Digital</span> <span className="text-gray-400 italic font-serif">Experiences</span>
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-gray-500 font-light max-w-lg mx-auto lg:mx-0 mb-6 md:mb-10">
                I'm Anton, a frontend developer bridging the gap between aesthetics and performance.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-center lg:justify-start w-full">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-teal-primary transition-colors duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto text-lg"
                >
                  View My Work
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-medium hover:border-teal-primary hover:text-teal-primary transition-colors duration-300 w-full sm:w-auto text-lg"
                >
                  Contact Me
                </button>
              </div>
            </RevealOnScroll>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative order-1 lg:order-2 flex justify-center lg:justify-end w-full">
            <RevealOnScroll>
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[32rem] lg:h-[32rem]">
                <div className="absolute inset-0 bg-teal-primary/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] md:border-[8px] border-white shadow-2xl">
                  <Image 
                    src="/avatar.webp" 
                    alt="Anton Maenpaa" 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-[center_80%] scale-110"
                    unoptimized
                    priority
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>

      {/* Bottom Elements Container */}
      <div className="hidden lg:flex lg:absolute lg:bottom-8 left-0 right-0 flex-col items-center gap-4 z-20 pointer-events-none animate-bounce">
        {/* Status Badge */}
        <div className="bg-white px-6 py-3 rounded-full shadow-xl border border-gray-100 pointer-events-auto">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-bold text-gray-900">Open for work</span>
            </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')} 
          className="text-gray-400 hover:text-teal-primary transition-colors pointer-events-auto p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
