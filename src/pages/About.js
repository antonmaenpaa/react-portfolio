import Header from "../components/Header";
import gsap from "gsap";
import React, { useEffect } from "react";
import "../style/mobile.css";
import "../style/tablet.css";
import "../style/about.css";
import "../style/reuseable.css";
import me from '../images/me.jpg';

function About() {
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
    gsap.from(
      [
        ".html",
        ".css",
        ".javascript",
        ".react",
        ".bootstrap",
        ".angular",
        ".typescript",
      ],
      1,
      {
        delay: 2.5,
        css: {
          width: "0%",
        },
        ease: "power3.inOut",
        stagger: {
          amount: 0.6,
        },
      }
    );
  });

  return (
    <>
      <Header headline="ABOUT ME." />
      <div className="head-container flex full-width full-height centerH centerY">
        <div className="transition-container"></div>
        <div className="wrapper flex full-width full-height centerH centerY">
        <div className="container flex centerY centerH">
          <div className="aboutme-container flex column centerH" id="container">
            <div className="flex column contact-div">
              <h2 className="content">Hi! I'm Anton</h2>
              <p className="about-paragraph" id="mobile-about-p">
                I’m a guy who is into web development and web design. I am
                currently studying to become a frontend developer in Gothenburg,
                Sweden. <br /><br />I'm always up for new challenges and I really enjoy
                writing code and come up with nice and smooth designs. I strive
                to write elegant and efficient code, whether is HTML, CSS or
                JAVASCRIPT. <br /><br />When I'm not coding you'll find me in the gym, or
                exploring beautiful beaches around the world.
              </p>
            </div>
            <div className="skills">
              <li>
                <h3>HTML</h3>
                <span className="bar">
                  <span className="html"></span>
                </span>
              </li>

              <li>
                <h3>CSS</h3>
                <span className="bar">
                  <span className="css"></span>
                </span>
              </li>

              <li>
                <h3>JAVASCRIPT</h3>
                <span className="bar">
                  <span className="javascript"></span>
                </span>
              </li>

              <li>
                <h3>REACT</h3>
                <span className="bar">
                  <span className="react"></span>
                </span>
              </li>

              <li>
                <h3>TYPESCRIPT</h3>
                <span className="bar">
                  <span className="typescript"></span>
                </span>
              </li>
            </div>
          </div>
            <div className="absolute">
              <img src={me} className="me-img" alt="Anton frontend developer" />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
