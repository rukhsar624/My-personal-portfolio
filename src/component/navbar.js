import React from "react";
import { useRef } from "react";
import "./navbar-style.css";
import { FaGreaterThan } from "react-icons/fa";
import { FaBarcode, FaLessThan, FaTimes } from "react-icons/fa";
function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <div className="d-flex justify-content-between w-100">
                             <div className="logo">
                                 <a className="logo-name">
                                     <span className=""><FaLessThan /></span>
                                     <span className="logo-name">Rukhsar anwar/</span>
                                     <span className=""><FaGreaterThan /></span>
                                </a>
                            </div>
            </div>
            <nav ref={navRef} className="d-flex responsive-nav">
                <a href="">Home</a>
                <a href="#services">Services</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#skill">Skill</a>
                <a href="#testimonial">Testimonial</a>
                <a href="#Blog">Blog</a>
                <a href="#contact">Contact</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    {/* <faTimes/> */}
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                {/* <faBars/> */}
            </button>
        </header>
    );
}
export default Navbar