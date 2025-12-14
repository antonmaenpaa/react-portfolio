import RevealOnScroll from "./RevealOnScroll";
import { projects } from "../projectsList";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
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
                      <div className="w-full aspect-video relative">
                        <Image 
                          src={project.img} 
                          alt={project.title} 
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                        />
                      </div>
                    </a>
                    
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-teal-primary transition-colors duration-300">{project.title}</h3>
                        <p className="text-lg text-gray-500 font-light leading-relaxed max-w-xl">
                          {project.description}
                        </p>
                        
                        <Link
                          href={project.href} 
                          target="_blank" 
                          rel="noreferrer"
                          className="md:hidden mt-6 inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                        >
                          Visit Website
                          <svg className="w-4 h-4 text-teal-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                      <Link 
                        href={project.href} 
                        target="_blank" 
                        rel="noreferrer"
                        className="hidden md:flex shrink-0 ml-4 items-center justify-center w-14 h-14 rounded-full border border-gray-200 group-hover:bg-teal-primary group-hover:border-teal-primary group-hover:text-white transition-all duration-300"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
         </div>
      </div>
    </section>
  );
};

export default Projects;
