import RevealOnScroll from "./RevealOnScroll";

const Skills = () => {
  return (
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
  );
};

export default Skills;
