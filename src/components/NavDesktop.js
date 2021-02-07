import React from "react";
import { Link } from "gatsby";

const NavDesktop = ({ color }) => {
    return (
        <div className="wrapper full">
            <ul className="menuList">
                <li>
                    <Link to="/shower">Shower</Link>
                </li>
                <li>
                    <Link to="/registry">Registry</Link>
                </li>
            </ul>
            <div className={`Title`}>
                <Link to="/">Lee & Hope</Link>
            </div>
            <ul className="menuList">
                <li>
                    <Link to="/wedding">Wedding</Link>
                </li>
                <li>
                    <Link to="/rsvp">RSVP</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavDesktop;
