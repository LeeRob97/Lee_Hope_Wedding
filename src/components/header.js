import React, { useState, useEffect } from "react";

import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Header = ({ color }) => {
    const [awayFromTop, toggleBackgroundColor] = useState(false);

    function scrollChange(e) {
        const scrollTop =
            window.pageYOffset !== undefined
                ? window.pageYOffset
                : (
                      document.documentElement ||
                      document.body.parentNode ||
                      document.body
                  ).scrollTop;

        toggleBackgroundColor(scrollTop > 10);
    }

    useEffect(_ => {
        window.addEventListener("scroll", scrollChange);

        return _ => {
            window.removeEventListener("scroll", scrollChange);
        };
    }, []);

    return (
        <header className={`${awayFromTop ? "fillBackground" : ""}`}>
            <NavDesktop color={color} />
            <NavMobile color={color} />
        </header>
    );
};

export default Header;
