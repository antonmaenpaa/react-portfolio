import { gsap } from "gsap";
import { useEffect } from "react";
import "../style/reuseable.css";
import "../style/projects.css";
import Header from "./Header";

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
      zIndex: -1,
      display: "flex",
    });

  });

  return (
    <>
    <Header headline="PROJECTS." />
      <div className="project-container flex full-width full-height">
        <div className="transition-container"></div>
        <div className="wrapper flex full-height full-width centerH centerY">
          <h2>HEJ KOMPIS, DU HAR KOMMIT TILL MIN PROJECT SIDA , HEJ TÅ</h2>
          </div>
      </div>
    </>
  );
}

export default Projects;
