import gsap from "gsap";
import Header from "./Header";
import { useEffect } from "react";
import "../style/reuseable.css";
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
    <Header headline />
      <div className="head-container flex full-width full-height centerH centerY">
        <div className="mobile-bg flex full-width full-height centerH centerY">
          <div className="wrapper full-height full-width">
            <video autoPlay muted loop className="myVideo">
              <source src={bg} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
            <div className="flex column social-div">
              <img src={instagram} alt="instagram" />
              <img src={linkedin} alt="linkedin" />
              <img src={github} alt="github" />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Main;
