import React, { useState } from "react"

import './Header.css'

import { Twirl as Hamburger } from 'hamburger-react'
import { useRef } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const sidebarRef = useRef();

    const handleToggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="header-container">
            <h1 className="header-title"> Lauro's Portfolio </h1>
            <div className="header-container-sections">
                <a href="#home"> home </a>
                <a href="#about"> about </a>
                <a href="#skills"> skills </a>
                <a> experience </a>
                <a> projects </a>
                <a> education </a>
                <a> contact </a>
            </div>
            <div className="phone-vertical-sidebar">
                <div className="hamburger-container ">
                    <Hamburger
                        toggled={isOpen}
                        toggle={handleToggleSidebar}
                        color={'#fff'}
                        size={24}
                    />
                </div>
                <div className={`sidebar ${isOpen ? "open" : ""}`} ref={sidebarRef}>
                    <h1>Menu</h1>
                    <a href="#home"><p> home </p></a>
                    <a href="#about"> <p>about</p> </a>
                    <a href="#skills"> <p>skills</p> </a>
                    <a> <p>experience</p> </a>
                    <a> <p>projects</p> </a>
                    <a><p>education</p> </a>
                    <a> <p>contact</p></a>

                </div>
            </div>
        </nav >
    )
}

export default Header;