import { gsap } from "gsap";
import { useEffect } from "react";
import "../style/reuseable.css";
import "../style/projects.css";
import "../style/tablet.css";
import "../style/mobile.css";
import Header from "../components/Header";
import { projects } from "../projectsList";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  useEffect(() => {
    document.querySelector(".wrapper").style.display = "none";
    document.querySelector(
      ".transition-container"
    ).style.right = `-${window.innerWidth}px`;

    gsap.to(".transition-container", 2, {
      delay: 0.5,
      right: `${window.innerWidth}px`,
      ease: "power3.inOut",
      stagger: {
        amount: 0.2,
      },
    });
    gsap.to(".transition-container", 2, {
      delay: 3,
      css: {
        display: "none",
      },
    });

    gsap.from(".wrapper", 2, {
      delay: 0.75,
      x: "2000px",
      ease: "power3.inOut",
    });
    gsap.to(".wrapper", 0, {
      display: "flex",
    });
  });


  return (
    <>
      <Header headline="PROJECTS." />
      <div className="project-container flex full-width full-height">
        <div className="transition-container"></div>
        <div className="wrapper flex full-height full-width centerH centerY">
          <div className="project-div flex full-height full-width centerH centerY">

            <div className="tablet-scroll" id="mobile-scroll">
               SWIPE FOR MORE
               </div>
            {projects.map((project) => (
              <ProjectCard
                title={project.title}
                description={project.description}
                img={project.img}
                href={project.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
