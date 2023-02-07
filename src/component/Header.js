import React from "react";
import './Header.css'
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="https://nuskoreasociety.org/static/media/logo.ee0d6410d133d3d44a05.png"></img>
            </Link>
            <div className="header_nav">
                <div className="header_option">
                    <Link to="/">
                        <span className="header_option_line">Home</span>
                    </Link>
                </div>
                <div className="header_option">
                    <span className="header_option_line">About Us</span>
                </div>
                <div className="header_option">
                    <Link to="/board">
                        <span className="header_option_line">Boards</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;