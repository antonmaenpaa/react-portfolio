"use client";

import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-poppins text-gray-800 bg-gray-50">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop showScrollTop={showScrollTop} />
    </div>
  );
}
