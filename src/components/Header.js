import { useState, useEffect } from "react";
import gsap from "gsap";
// import Menu from "./Menu";
import "../style/header.css";
import "../style/reuseable.css";
import "../style/menu.css";
import Hamburger from 'hamburger-react';
import {Link} from "react-router-dom";


function Header() {

    const [menuIsToggled, setMenuIsToggled] = useState(false);

    const closeMenuAndNavigate = () => {
    setMenuIsToggled(false);
    }

    useEffect(() => {
        if(menuIsToggled === false){
            gsap.to("#menu", {
                duration: 0.8,
                ease: "power3.inOut",
                stagger: {
                  amount: 0.07
                },
                css: {
                    opacity: "0"
                },
            })
        } if (menuIsToggled === true) {
            gsap.to("#menu", {
                duration: 0.8,
                ease: "power3.inOut",
                stagger: {
                  amount: 0.1
                },

                css: {
                    opacity: "1"
                },
            })

            gsap.from(".links", {
                duration: 0.5,
                opacity: 0,
                x: 150,
                stagger: 0.25
            })

        }
    })

    
    const handleContent = (event) => {
        let positionX = event.clientX / window.innerWidth - 0.55;
        let positionY = event.clientY / window.innerHeight - 0.55;
        const maintl = gsap.timeline();
    
        maintl.to(".link-container", 1, {
          rotationY: positionX * 100,
          rotationX: positionY * 100,
          ease: "none",
        });
      }
    
    const reverseContent = () => {
        const maintl = gsap.timeline();
        maintl.to(".link-container", 1, {
          rotationY: 0,
          rotationX: 0,
          ease: "power1.out",
        });
      }

    return(
        <>
        <div className="header flex centerY centerH">
            <div className="nav-container flex centerY space-between">
                <h1>PORTFOLIO.</h1>
                <Hamburger toggled={menuIsToggled} toggle={setMenuIsToggled} />
            </div>

        </div>

        <ul 
            id="menu"
            onMouseMove={handleContent}
            onMouseLeave={reverseContent}
            >
            <div className="flex column align-start link-container">
                <Link 
                    className="links" 
                    onClick={closeMenuAndNavigate} 
                    to="/">
                        <span>GO BACK TO&nbsp;</span>
                        HOME
                </Link>
                <Link 
                    className="links" 
                    onClick={closeMenuAndNavigate} 
                    to="/projects">
                        <span>CHECK OUT MY&nbsp;</span>
                        PROJECTS
                </Link>
                <Link 
                    className="links" 
                    onClick={closeMenuAndNavigate} 
                    to="/about">
                        <span>READ MORE&nbsp;</span>
                        ABOUT ME
                </Link>
                <Link 
                    className="links" 
                    onClick={closeMenuAndNavigate}
                    to="/contact">
                        <span>YES, YOU CAN&nbsp;</span>
                        CONTACT ME
                </Link>

            </div>
   
        </ul>

        {/* <Menu  /> */}


        </>

    )
}

export default Header;