import RevealOnScroll from "./RevealOnScroll";

const About = () => {
  return (
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
                  I create digital experiences that are purposeful and precise.
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
  );
};

export default About;
