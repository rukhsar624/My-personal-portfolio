import React, { useState, useContext } from "react";
import { FaGreaterThan } from "react-icons/fa";
import context from './context';
import $ from 'jquery'
import "./header-style.css";
import { FaBarcode, FaLessThan, FaTimes } from "react-icons/fa";
const Header = () => {
    const [sideBar, setSideBar] = useState(false)
    const userData = useContext(context)
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $("#navbar-fixed-top").css("background", "#FFFFFF");
            $("#navbar-fixed-top").css("box-shadow", "rgb(0 0 0 / 46%) 8px 8px 33px");
        }
        else {
            $("#navbar-fixed-top").css("background", "none");
            $("#navbar-fixed-top").css("box-shadow", "none");

        }
    })
    return (
        <>
            <header className="header" id="navbar-fixed-top">
                <div className="container">
                    <nav className="nav" >
                        <div className="d-flex justify-content-between w-100">
                            <div className="logo">
                                <a className="logo-name">
                                    <span className=""><FaLessThan /></span>
                                    <span className="logo-name">Rukhsar anwar/</span>
                                    <span className=""><FaGreaterThan /></span>
                                </a>
                            </div>
                            <div className="link d-flex justify-content-end">
                                <div className="d-flex justify-content-center link-color" >
                                    <a href="" style={{ color: userData.FontColor }}>Home</a>
                                    <a href="#services" style={{ color: userData.FontColor }}>Services</a>
                                    <a href="#portfolio" style={{ color: userData.FontColor }}>Portfolio</a>
                                    <a href="#skill" style={{ color: userData.FontColor }}>Skill</a>
                                    <a href="#testimonial" style={{ color: userData.FontColor }}>Testimonial</a>
                                    <a href="#Blog" style={{ color: userData.FontColor }}>Blog</a>
                                    <a href="#contact" style={{ color: userData.FontColor }}>contact</a>
                                    <input
                                        className="react-switch-checkbox"
                                        id={`react-switch-new`}
                                        type="checkbox"
                                        onChange={() => {
                                            if (userData.CurrentMode === "#FFF") {
                                                userData.setCurrentMode("#000")
                                                userData.setFontColor("#FFF")
                                            }
                                            else {
                                                userData.setCurrentMode("#FFF")
                                                userData.setFontColor("#000")
                                            }

                                        }}
                                    />
                                    <label
                                        className="react-switch-label"
                                        htmlFor={`react-switch-new`}

                                    >
                                        <span className={`react-switch-button`} />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </nav>

                </div>
            </header>
            <header className="mob-nav">
                <div id="main-content">
                    <div id="title">
                        <a className="logo-name">
                            <span className=""><FaLessThan /></span>
                            <span className="logo-name">Rukhsar anwar/</span>
                            <span className=""><FaGreaterThan /></span>
                        </a>
                    </div>
                </div>
                <button id="btn" onClick={() => {

                    setSideBar(!sideBar)
                }}
                    title="Press Me">
                    <div id="top"></div>
                    <div id="middle"></div>
                    <div id="bottom"></div>
                </button>
                {sideBar ? (<>
                    <div>
                        <div id="items">
                            <div className="imglogo">
                                <a className="logo-name">
                                    <span className=""><FaLessThan /></span>
                                    <span className="logo-name">Rukhsar anwar/</span>
                                    <span className=""><FaGreaterThan /></span>
                                </a>
                            </div>
                            <div className="item"><a href="./index.html" className="header_links active">Home</a></div>
                            <div className="item"><a href="./assets/pages/about.html" className="header_links">About</a></div>
                            <div className="item"><a href="./index.html?box=menu" className="header_links">menu</a></div>
                            <div className="item"><a href="./assets/pages/blog.html" className="header_links">blog</a></div>
                            <div className="item"><a href="./assets/pages/contact.html" className="header_links">contact us</a></div>

                        </div>
                    </div></>) : (null)

                }
            </header>
        </>
    )
}
export default Header






// import Navbar from "./navbar"
// const Header = () => {
//     return(
//         <>
//         <Navbar/>
//         </>
//     );

// }
// export default Header
