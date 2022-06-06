import React from "react";
import "./header-style.css";
import Images from "../assets/images/images.png";
const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="nav">
                        <div className="d-flex justify-content-between w-100">
                            <div className="logo">
                                <a href=""><img src={Images} alt="" /> </a>
                            </div>
                            <div className="link d-flex justify-content-end">
                                <div className="d-flex justify-content-center">
                                    <a href="">Home</a>
                                    <a href="">Services</a>
                                    <a href="">Portfolio</a>
                                    <a href="">Skill</a>
                                    <a href="">Testimonial</a>
                                    <a href="">Blog</a>
                                    <a href="">contact</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header