import { gsap } from "gsap";
import React, { useEffect } from "react";
import "../style/reuseable.css";
import "../style/projects.css";
import "../style/tablet.css";
import "../style/mobile.css";
import Header from "../components/Header";
import { projects } from "../projectsList";
import ProjectCard from "../components/ProjectCard";
import Swipe from "../components/swipe";

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

            <Swipe count={projects.length} showArrows={false} showBars={false} className="justify-center">
              {projects.map((project, index) => (
                <React.Fragment key={index}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    img={project.img}
                    href={project.href}
                  />

                </React.Fragment>
              ))}
            </Swipe>
        </div>
      </div>
    </>
  );
}

export default Projects;
