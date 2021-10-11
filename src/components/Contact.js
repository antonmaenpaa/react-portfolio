import {useEffect} from 'react';
import gsap from 'gsap';
import '../style/reuseable.css';
import Header from "./Header";

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
        zIndex: -1,
        display: "flex",
      });
    });


    return(
      <>
        <Header headline="CONTACT." />
        <div className="head-container flex full-width full-height centerH centerY">
            <div className="transition-container"></div>
            <div className="wrapper full-height centerH centerY">
                <h1 className="content">CONTACT</h1>

            </div>

        </div>

      </>
    )
}

export default Contact;