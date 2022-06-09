import React, { useState, useContext } from "react";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import context from './context';
// import { MdOutlineDarkMode } from "react-icons/md";
import "./header-style.css";
const Header = () => {
    const userData = useContext(context)
    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="nav">
                        <div className="d-flex justify-content-between w-100">
                            <div className="logo">
                                <a className="logo-name">
                                    <span className=""><FaLessThan /></span>
                                    <span className="logo-name">Rukhsar anwar/</span>
                                    <span className=""><FaGreaterThan /></span></a>
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
                                    {/* <a href=""><MdOutlineDarkMode /></a> */}
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
