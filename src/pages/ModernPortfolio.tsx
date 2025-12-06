import { useState, useEffect, useRef, ReactNode } from "react";
import { projects } from "../projectsList";
import meBg from "../assets/images/IMG_7205.webp";

const RevealOnScroll = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
};

function ModernPortfolio(): React.JSX.Element {
  const [activeSection, setActiveSection] = useState<string>("hero");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-poppins text-gray-800 bg-gray-50">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center ${
          isScrolled || isMobileMenuOpen ? "py-4" : "py-6"
        }`}
      >
        <div 
          className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300`}
        >
          <div className={`rounded-full transition-all duration-300 ${
            isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg border border-white/20 px-6 py-3" : "bg-transparent px-0 py-0"
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
              <div className="md:hidden">
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-gray-600 hover:text-teal-primary focus:outline-none"
                >
                  <div className="w-6 h-5 relative flex flex-col justify-between">
                    <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
                    <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
                  </div>
                </button>
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
          {/* Close Button for better UX */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-gray-600 hover:text-teal-primary focus:outline-none"
          >
            <div className="w-6 h-5 relative flex flex-col justify-center items-center">
              <span className="w-full h-0.5 bg-current rounded-full rotate-45 absolute" />
              <span className="w-full h-0.5 bg-current rounded-full -rotate-45 absolute" />
            </div>
          </button>

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

      {/* Hero Section - Sleek & Modern */}
      <section id="hero" className="min-h-screen relative flex flex-col md:flex-row items-center justify-center overflow-hidden bg-white pt-16 md:pt-0 pb-8">
        
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-teal-primary/5 rounded-full blur-3xl"></div>
           <div className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex flex-col justify-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20 mb-10 md:mb-0">
            
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left order-2 md:order-1 w-full">
               <RevealOnScroll>
                <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold text-gray-900 tracking-tight leading-tight mb-4 md:mb-6">
                  Building <br/>
                  <span className="text-teal-primary">Digital</span> <span className="text-gray-400 italic font-serif">Experiences</span>
                </h1>
                <p className="text-base sm:text-lg md:text-2xl text-gray-500 font-light max-w-lg mx-auto md:mx-0 mb-6 md:mb-10">
                  I'm Anton, a frontend developer bridging the gap between aesthetics and performance.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-center md:justify-start w-full">
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
            <div className="flex-1 relative order-1 md:order-2 flex justify-center md:justify-end w-full">
              <RevealOnScroll>
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[32rem] md:h-[32rem]">
                  <div className="absolute inset-0 bg-teal-primary/20 rounded-full blur-2xl animate-pulse"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] md:border-[8px] border-white shadow-2xl">
                    <img 
                      src={meBg} 
                      alt="Anton Maenpaa" 
                      className="w-full h-full object-cover object-[center_20%] scale-110"
                    />
                  </div>
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </div>

        {/* Bottom Elements Container */}
        <div className="hidden md:flex md:absolute md:bottom-8 left-0 right-0 flex-col items-center gap-4 z-20 pointer-events-none animate-bounce">
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

      {/* About Section - Sleek & Minimal */}
      <section id="about" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              {/* Sticky Title */}
              <div className="md:col-span-4 relative mb-6 md:mb-0">
                <div className="md:sticky md:top-32">
                  <h2 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter mb-4">
                    About<span className="text-teal-primary">.</span>
                  </h2>
                  <p className="text-lg text-gray-500 font-light max-w-xs">
                    Bridging the gap between <br className="hidden md:block"/> design & technology.
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-8 space-y-16">
                
                {/* Bio Paragraph */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-light leading-snug text-gray-800 mb-6">
                    I create digital experiences that are <span className="font-semibold text-gray-900 border-b-2 border-teal-primary pb-1">purposeful</span> and <span className="font-semibold text-gray-900 border-b-2 border-teal-primary pb-1">precise</span>.
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 leading-relaxed font-light">
                    <p>
                      Based in Barcelona, I specialize in frontend development with a focus on performance and user experience. My approach is rooted in the belief that technical excellence should never compromise design integrity.
                    </p>
                    <p>
                      I constantly explore new technologies to push the boundaries of what's possible on the web, ensuring every pixel serves a distinct purpose in the user journey.
                    </p>
                  </div>
                </div>

                {/* Experience Timeline - Sleek */}
                <div className="border-t border-gray-200 pt-12">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-12">Experience</h4>
                  
                  <div className="space-y-0">
                    {/* Biorce */}
                    <div className="group flex flex-col md:flex-row md:items-baseline justify-between py-8 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300 -mx-4 px-4 rounded-lg">
                      <div className="md:w-1/3 mb-2 md:mb-0">
                        <span className="text-sm font-medium text-teal-primary">Sep 2025 — Present</span>
                        <p className="text-xs text-gray-400 mt-1">Barcelona (Hybrid)</p>
                      </div>
                      <div className="md:w-2/3">
                        <div className="flex items-center justify-between mb-2">
                          <a href="https://biorce.com" target="_blank" rel="noreferrer" className="text-xl font-bold text-gray-900 group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center">
                            Biorce
                            <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                          </a>
                        </div>
                        <p className="text-gray-500 font-light leading-relaxed">
                          Developing <strong>AI AIKA</strong>, an intelligent platform transforming clinical trials. Building scalable frontend solutions with <strong>React, Next.js, and Tailwind CSS</strong> to integrate complex AI data into seamless user experiences.
                        </p>
                      </div>
                    </div>

                    {/* Rivercode */}
                    <div className="group flex flex-col md:flex-row md:items-baseline justify-between py-8 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300 -mx-4 px-4 rounded-lg">
                      <div className="md:w-1/3 mb-2 md:mb-0">
                        <span className="text-sm font-medium text-gray-400">Nov 2022 — Aug 2025</span>
                        <p className="text-xs text-gray-400 mt-1">Borås (Remote)</p>
                      </div>
                      <div className="md:w-2/3">
                         <div className="flex items-center justify-between mb-2">
                          <a href="https://rivercode.se" target="_blank" rel="noreferrer" className="text-xl font-bold text-gray-900 group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center">
                            Rivercode
                            <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                          </a>
                        </div>
                        <p className="text-gray-500 font-light leading-relaxed">
                          Built high-performance e-commerce experiences for clients like <strong>Axel Arigato</strong> and <strong>Morris</strong>. specialized in <strong>Next.js, TypeScript, and Storyblok</strong> CMS integrations.
                        </p>
                      </div>
                    </div>

                    {/* Acrowd */}
                    <div className="group flex flex-col md:flex-row md:items-baseline justify-between py-8 hover:bg-gray-50 transition-colors duration-300 -mx-4 px-4 rounded-lg">
                      <div className="md:w-1/3 mb-2 md:mb-0">
                        <span className="text-sm font-medium text-gray-400">May 2022 — Nov 2022</span>
                        <p className="text-xs text-gray-400 mt-1">Stockholm</p>
                      </div>
                      <div className="md:w-2/3">
                         <div className="flex items-center justify-between mb-2">
                          <a href="https://acrowd.se" target="_blank" rel="noreferrer" className="text-xl font-bold text-gray-900 group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center">
                            Acrowd
                            <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                          </a>
                        </div>
                        <p className="text-gray-500 font-light leading-relaxed">
                          Fullstack development managing end-to-end projects. Delivered solutions using <strong>React, WordPress/WooCommerce, and PHP</strong>, engaging directly with clients from concept to launch.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Personal / Offline */}
                <div className="border-t border-gray-200 pt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                   <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Lifestyle</h4>
                      <p className="text-gray-900 font-medium">Gym & Fitness</p>
                   </div>
                   <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Exploration</h4>
                      <p className="text-gray-900 font-medium">Travel & Culture</p>
                   </div>
                   <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Growth</h4>
                      <p className="text-gray-900 font-medium">Continuous Learning</p>
                   </div>
                </div>

              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Skills Section - Sleek */}
      <section id="skills" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
             {/* Sticky Title */}
             <div className="md:col-span-4 relative z-10 mb-6 md:mb-0">
                <div className="md:sticky md:top-32">
                  <h2 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter mb-4">
                    Skills<span className="text-teal-primary">.</span>
                  </h2>
                  <p className="text-lg text-gray-500 font-light max-w-xs">
                    The tools and technologies <br className="hidden md:block"/> I use to build.
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-8 relative z-0">
                <RevealOnScroll>
                  <div className="relative w-full py-4 md:py-12">
                    {/* First Row - Moving Left */}
                    <div className="flex space-x-4 md:space-x-8 animate-marquee whitespace-nowrap py-4">
                      {[
                        "HTML", "CSS", "JavaScript", "React", "TypeScript", "Next.js", 
                        "Tailwind CSS", "Node.js", "Git", "Figma", "Responsive Design", "UI/UX",
                        "Storybook", "Storyblok"
                      ].concat([
                        "HTML", "CSS", "JavaScript", "React", "TypeScript", "Next.js", 
                        "Tailwind CSS", "Node.js", "Git", "Figma", "Responsive Design", "UI/UX",
                        "Storybook", "Storyblok"
                      ]).map((skill, index) => (
                        <div key={`row1-${index}`} className="inline-block px-6 py-3 md:px-8 md:py-4 bg-white rounded-full shadow-sm border border-gray-100 text-gray-700 font-medium text-base md:text-lg min-w-max hover:border-teal-primary/50 hover:text-teal-primary transition-colors duration-300">
                          {skill}
                        </div>
                      ))}
                    </div>

                    {/* Second Row - Moving Right */}
                    <div className="flex space-x-4 md:space-x-8 animate-marqueeReverse whitespace-nowrap py-4 mt-4">
                      {[
                        "Web Performance", "Accessibility", "SEO", "Agile", "Scrum", "REST API", 
                        "GraphQL", "Bitbucket", "PHP", "Styled Components", "SASS", "Wordpress",
                        "Jira", "AI"
                      ].concat([
                        "Web Performance", "Accessibility", "SEO", "Agile", "Scrum", "REST API", 
                        "GraphQL", "Bitbucket", "PHP", "Styled Components", "SASS", "Wordpress",
                        "Jira", "AI"
                      ]).map((skill, index) => (
                        <div key={`row2-${index}`} className="inline-block px-6 py-3 md:px-8 md:py-4 bg-white rounded-full shadow-sm border border-gray-100 text-gray-700 font-medium text-base md:text-lg min-w-max hover:border-teal-primary/50 hover:text-teal-primary transition-colors duration-300">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Sleek */}
      <section id="projects" className="py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              {/* Sticky Title */}
              <div className="md:col-span-4 relative mb-6 md:mb-0">
                <div className="md:sticky md:top-32">
                  <h2 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter mb-4">
                    Work<span className="text-teal-primary">.</span>
                  </h2>
                  <p className="text-lg text-gray-500 font-light max-w-xs">
                    Selected projects that <br className="hidden md:block"/> showcase my expertise.
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-8 space-y-32">
                {projects.map((project, index) => (
                  <RevealOnScroll key={project.id}>
                    <div className="group">
                      <a 
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="block relative overflow-hidden rounded-lg mb-8 shadow-lg cursor-pointer"
                      >
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10 pointer-events-none"></div>
                        <img 
                          src={project.img} 
                          alt={project.title} 
                          className="w-full h-[28rem] object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                        />
                      </a>
                      
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-teal-primary transition-colors duration-300">{project.title}</h3>
                          <p className="text-lg text-gray-500 font-light leading-relaxed max-w-xl">
                            {project.description}
                          </p>
                          
                          <a 
                            href={project.href} 
                            target="_blank" 
                            rel="noreferrer"
                            className="md:hidden mt-6 inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                          >
                            Visit Website
                            <svg className="w-4 h-4 text-teal-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </a>
                        </div>
                        <a 
                          href={project.href} 
                          target="_blank" 
                          rel="noreferrer"
                          className="hidden md:flex shrink-0 ml-4 items-center justify-center w-14 h-14 rounded-full border border-gray-200 group-hover:bg-teal-primary group-hover:border-teal-primary group-hover:text-white transition-all duration-300"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Contact Section - Sleek */}
      <section id="contact" className="py-20 md:py-32 bg-gray-900 text-white relative overflow-hidden">
         {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-teal-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Let's Work Together<span className="text-teal-primary">.</span></h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="max-w-5xl mx-auto text-center">
                <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-[3rem] p-12 md:p-24 relative overflow-hidden group">
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-teal-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div className="relative z-10 space-y-16">
                    
                    {/* Main Action */}
                    <div className="space-y-6">
                      <p className="text-sm md:text-base text-teal-primary font-medium tracking-[0.2em] uppercase">Start a conversation</p>
                      <a 
                        href="mailto:antonmaenpaa@gmail.com" 
                        className="block text-3xl sm:text-4xl md:text-5xl font-bold text-white hover:text-teal-primary transition-colors duration-300 leading-none tracking-tight break-all sm:break-normal"
                      >
                        antonmaenpaa@gmail.com
                      </a>
                    </div>

                    {/* Status */}
                    <div>
                       <div className="inline-flex items-center gap-3 md:px-6 py-3 px-3 bg-white/5 rounded-full border border-white/10">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                          </span>
                          <span className="text-gray-300 font-light tracking-wide text-sm whitespace-nowrap">Available for new opportunities</span>
                       </div>
                    </div>

                    {/* Social Links - Clean Row */}
                    <div className="pt-8 border-t border-white/5">
                       <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                          {[
                            { name: "GitHub", url: "https://github.com/antonmaenpaa" },
                            { name: "LinkedIn", url: "https://www.linkedin.com/in/anton-m%C3%A4enp%C3%A4%C3%A4-6124b4190/" },
                            { name: "Instagram", url: "https://www.instagram.com/antonmaenpaa/" }
                          ].map((link) => (
                             <a 
                               key={link.name}
                               href={link.url} 
                               target="_blank" 
                               rel="noreferrer" 
                               className="text-lg md:text-xl text-gray-400 hover:text-white transition-colors duration-300 relative group/link"
                             >
                                {link.name}
                                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-teal-primary transition-all duration-300 group-hover/link:w-full"></span>
                             </a>
                          ))}
                       </div>
                    </div>

                  </div>
                </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer - Minimalist */}
      <footer className="bg-gray-900 text-white/40 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-dawning text-2xl text-white/60">Anton.</div>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-sm font-light tracking-wide">
             <p>© {new Date().getFullYear()} Anton Mäenpää</p>
             <p>Barcelona, Spain</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ModernPortfolio;

