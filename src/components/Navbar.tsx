"use client";

import { Dispatch, SetStateAction } from "react";
import { Squash as Hamburger } from "hamburger-react";

interface NavbarProps {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const Navbar = ({ 
  isScrolled, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen, 
  activeSection, 
  scrollToSection 
}: NavbarProps) => {
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center ${
        isScrolled || isMobileMenuOpen ? "py-4" : "py-6"
      }`}
    >
      <div 
        className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 relative z-[100000]`}
      >
        <div className={`rounded-full transition-all duration-300 ${
          isScrolled && !isMobileMenuOpen ? "bg-white/80 backdrop-blur-md shadow-lg border border-white/20 px-6 py-3" : "bg-transparent px-0 py-0"
        }`}>
          <div className="flex justify-between items-center">
            <div 
              className="text-3xl font-bold text-teal-primary font-dawning cursor-pointer hover:scale-105 transition-transform duration-300" 
              onClick={() => scrollToSection("hero")}
            >
              Anton.
            </div>
            
            {/* Desktop Navigation */}
            <div className={`hidden md:flex items-center rounded-full transition-all duration-300 ${isScrolled ? "" : "bg-white/50 backdrop-blur-sm border border-white/20 shadow-sm p-1"}`}>
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? "text-white bg-teal-primary shadow-md"
                      : "text-gray-600 hover:text-teal-primary hover:bg-white/50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-[100001] relative">
               <Hamburger 
                  toggled={isMobileMenuOpen} 
                  toggle={setIsMobileMenuOpen} 
                  color={isMobileMenuOpen ? "#005960" : "#4B5563"}
                  size={24}
                  rounded
               />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 w-screen h-screen bg-white z-[9999] transition-all duration-500 ease-in-out md:hidden flex flex-col justify-center items-center ${
          isMobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-8 relative z-50">
          {["About", "Skills", "Projects", "Contact"].map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-5xl font-bold transition-all duration-500 hover:text-teal-primary hover:scale-110 transform ${
                activeSection === item.toLowerCase()
                  ? "text-teal-primary"
                  : "text-gray-800"
              }`}
              style={{ 
                transitionDelay: `${isMobileMenuOpen ? index * 100 : 0}ms`,
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
