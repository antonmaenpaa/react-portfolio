import RevealOnScroll from "./RevealOnScroll";

const Contact = () => {
  return (
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
  );
};

export default Contact;
