import { useEffect } from "react";
import gsap from "gsap";
import "../style/mobile.css";
import "../style/reuseable.css";
import "../style/contact.css";
import mail from '../images/mail.png'
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
            <h1 className="content">Get in touch!</h1>
            <p className="contact-p" id="mobile-p">
              Send me an email if you just want to say hi, or if you have some
              business enquiries. Also, check out my socials!
            </p>
            <a href="mailto:antonmaenpaa@gmail.com"><img src={mail} alt="mail anton" className="mail-icon" />
                    </a>
                <p class="mail-p" id="contact-p">
                    antonmaenpaa@gmail.com
                </p>
            <div className="flex social-contact-div centerH space-between" id="mobile-social">
              <a href="https://www.instagram.com/antonmaenpaa/" rel="noreferrer" target="_blank" id="mobile-a" className="first-a">
                <span>Instagram</span>
              </a>
              <a href="https://www.linkedin.com/in/anton-m%C3%A4enp%C3%A4%C3%A4-6124b4190/" rel="noreferrer" target="_blank" id="mobile-a" className="middle-a">
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/antonmaenpaa" rel="noreferrer" target="_blank" id="mobile-a" className="third-a">
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
