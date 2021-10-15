import gsap from "gsap";
import Header from "../components/Header";
import { useEffect } from "react";
import "../style/reuseable.css";
import "../style/mobile.css";
import "../style/main.css";
import bg from "../images/Bakgrund2.mp4";
import instagram from "../images/instagram.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";

function Main() {
  useEffect(() => {


    gsap.from(".wrapper", 2, {
      delay: 0.5,
      opacity: 0,
      ease: "power3.inOut",
    });
    gsap.to(".wrapper", 0, {
      delay: 1,
      opacity: 1,
      display: 'flex'
    });

    setTimeout(() => {
      document.querySelector(".wrapper").style.display = "flex";
    }, 2000);
  });

  return (
    <>
    <Header />
      <div className="head-container flex full-width full-height centerH centerY">
        <div className="mobile-bg flex full-width full-height centerH centerY">
          <div className="wrapper full-height full-width">
            <video autoPlay muted loop className="myVideo">
              <source src={bg} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
            <div className="flex column social-div" id="mobile-social-main">
              <a 
                className="alink"
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/antonmaenpaa/">

                <img src={instagram} alt="instagram" />
              </a>
              <a 
                className="alink"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/anton-m%C3%A4enp%C3%A4%C3%A4-6124b4190/">
              <img src={linkedin} alt="linkedin" />
              </a>
              <a 
                className="alink"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/antonmaenpaa">
              <img src={github} alt="github" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Main;
