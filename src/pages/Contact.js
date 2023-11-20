import { useEffect } from "react";
import gsap from "gsap";
import "../style/mobile.css";
import "../style/reuseable.css";
import "../style/contact.css";
import mail from '../assets/icons/mail.svg'
import Header from "../components/Header";

function Contact() {
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
      // zIndex: -1,
      display: "flex",
    });
  });

  return (
    <>
      <Header headline="CONTACT." />
      <div className="head-container flex full-width full-height centerH centerY">
        <div className="transition-container"></div>
        <div className="wrapper full-height centerH centerY">
          <div className="flex column centerY contact-div">
            <h2 className="content">get in touch!</h2>
            <p className="contact-p" id="mobile-p">
              Send me an email if you just want to say hi, or if you have some
              business enquiries. Also, check out my socials!
            </p>
            <div className="flex space-x-2">
              <a href="mailto:antonmaenpaa@gmail.com"><img src={mail} alt="mail anton" className="mail-icon" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
