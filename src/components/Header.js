import React from "react"

import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <h1 className="header-title"> Lauro Aranha </h1>
            <div className="header-container-sections">
                <a> home </a>
                <a> about Me </a>
                <a> professional experience </a>
                <a> personal projects </a>
                <a> contact </a>
            </div>
        </div >
    )
}

export default Header;