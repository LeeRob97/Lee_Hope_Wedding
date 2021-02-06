import React, { useState } from "react";
import { Link } from "gatsby";

const NavMobile = _ => {
    const [menuActive, toggleMenu] = useState(false);

    return (
        <div className={`wrapper mini ${menuActive ? "borderActive" : ""}`}>
            <div className="menuIcon">
                <input
                    className="hamburger-trigger"
                    type="checkbox"
                    onClick={e => toggleMenu(!menuActive)}
                />
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <div className="Title">Lee & Hope</div>
            <div className={`menuList ${menuActive ? "display" : "hidden"}`}>
                <li>
                    <Link to="/shower">Shower</Link>
                </li>
                <li>
                    <Link to="/registry">Registry</Link>
                </li>
                <li>
                    <Link to="/wedding">Wedding</Link>
                </li>
                <li>
                    <Link to="/rsvp">RSVP</Link>
                </li>
            </div>
        </div>
    );
};

export default NavMobile;
