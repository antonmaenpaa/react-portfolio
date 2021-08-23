import { useState, useEffect } from "react";
import gsap from "gsap";
// import Menu from "./Menu";
import "../style/header.css";
import "../style/reuseable.css";
import "../style/menu.css";
import Hamburger from 'hamburger-react';
import {Link} from "react-router-dom";


function Header() {

    // const [isOpen, setOpen] = useState(false);

    // const toggle = () => {
    //     setOpen(!isOpen);
    // }
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

            gsap.from(".li-links", {
                duration: 0.5,
                opacity: 0,
                x: 150,
                stagger: 0.25
            })
        }
    })

    // console.log(isOpen)
    return(
        <>
        <div className="header flex centerY centerH">
            <div className="nav-container flex centerY space-between">
                <h1>PORTFOLIO</h1>
                {/* <Hamburger onToggle={toggle} /> */}
                <Hamburger toggled={menuIsToggled} toggle={setMenuIsToggled} />
            </div>

        </div>

        <ul id="menu">
            <Link onClick={closeMenuAndNavigate} to="/"><li className="li-links">HOME</li></Link>
            <Link onClick={closeMenuAndNavigate} to="/projects"><li className="li-links">PROJECTS</li></Link>
            <Link onClick={closeMenuAndNavigate} to="/about"><li className="li-links">ABOUT</li></Link>
            <Link onClick={closeMenuAndNavigate} to="/contact"><li className="li-links">CONTACT</li></Link>
   
        </ul>

        {/* <Menu  /> */}


        </>

    )
}

export default Header;