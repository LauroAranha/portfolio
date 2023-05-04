import React from "react"

import './Header.css'

const Header = () => {
    return (
        <nav className="header-container">
            <h1 className="header-title"> Lauro's Portfolio </h1>
            <div className="header-container-sections">
                <a> home </a>
                <a> about </a>
                <a> skills </a>
                <a> experience </a>
                <a> projects </a>
                <a> education </a>
                <a> contact </a>
            </div>
        </nav>
    )
}

export default Header;