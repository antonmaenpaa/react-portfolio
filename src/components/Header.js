import { useState, useEffect } from "react";
import gsap from "gsap";
import "../style/header.css";
import "../style/reuseable.css";
import "../style/mobile.css";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

function Header({ headline }) {
  const [menuIsToggled, setMenuIsToggled] = useState(false);

  const closeMenuAndNavigate = () => {
    setMenuIsToggled(false);
  };

  useEffect(() => {
    if (menuIsToggled === false) {
      gsap.to("#menu", {
        duration: 0.8,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
        css: {
          opacity: "0",
          display: "none",
        },
      });
    }
    if (menuIsToggled === true) {
      gsap.to("#menu", {
        duration: 0.8,
        ease: "power3.inOut",
        stagger: {
          amount: 0.1,
        },

        css: {
          opacity: "1",
          display: "flex",
        },
      });

      gsap.from(".links", {
        duration: 0.5,
        opacity: 0,
        x: 150,
        stagger: 0.25,
      });
    }
  });

  const handleContent = (event) => {
    let positionX = event.clientX / window.innerWidth - 0.55;
    let positionY = event.clientY / window.innerHeight - 0.55;
    const maintl = gsap.timeline();

    maintl.to(".link-container", 1, {
      rotationY: positionX * 100,
      rotationX: positionY * 100,
      ease: "none",
    });
  };

  const reverseContent = () => {
    const maintl = gsap.timeline();
    maintl.to(".link-container", 1, {
      rotationY: 0,
      rotationX: 0,
      ease: "power1.out",
    });
  };


  return (
    <>
      <div className="header flex centerY centerH">
        <div className="nav-container flex centerY space-between">
          {menuIsToggled ? (
            <Link className="h1-link" onClick={closeMenuAndNavigate} to="/">
              <h1>HOME.</h1>{" "}
            </Link>
          ) : (
            <h1>{headline}</h1>
          )}

          <div className="burger-div">
            <Hamburger toggled={menuIsToggled} toggle={setMenuIsToggled} />
          </div>
        </div>
      </div>

      <ul id="menu" onMouseMove={handleContent} onMouseLeave={reverseContent}>
        <div className="flex column centerY centerH link-container">
          <Link className="links flex" onClick={closeMenuAndNavigate} to="/">
            <div className="mobile">
              <span>GO BACK TO&nbsp;</span>
            </div>
            HOME
          </Link>
          <Link
            className="links flex"
            onClick={closeMenuAndNavigate}
            to="/projects"
          >
            <div className="mobile">
              <span>CHECK OUT MY&nbsp;</span>
            </div>
            PROJECTS
          </Link>
          <Link
            className="links flex"
            onClick={closeMenuAndNavigate}
            to="/about"
          >
            <div className="mobile">
              <span>READ MORE&nbsp;</span>
            </div>
            ABOUT ME
          </Link>
          <Link
            className="links flex"
            onClick={closeMenuAndNavigate}
            to="/contact"
          >
            <div className="mobile">
              <span>YES, YOU CAN&nbsp;</span>
            </div>
            CONTACT ME
          </Link>

          </div>
          <div className="flex nav-social space-between">
            <a className="social-links" target="_blank" rel="noreferrer" href="https://www.instagram.com/antonmaenpaa/">
              INSTAGRAM
            </a>
            <a className="social-links" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/anton-m%C3%A4enp%C3%A4%C3%A4-6124b4190/">
              LINKEDIN
            </a>
            <a className="social-links" target="_blank" rel="noreferrer" href="https://github.com/antonmaenpaa">
              GIHUB
            </a>
        </div>
      </ul>
    </>
  );
}

export default Header;
