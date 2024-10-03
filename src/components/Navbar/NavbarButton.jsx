import React from "react";
import { Link, animateScroll } from "react-scroll";

const NavbarButton = ({name}) => {
  return (
    <li>
      <Link
        to={name}
        smooth={true}
        duration={500}
        activeClass="border-b-[3px] border-purple-600 text-white transition-all"
        spy={true}
        className="hover:cursor-pointer text-gray-300 text-center hover:border-solid hover:border-purple-600 hover:border-b-[3px] hover:text-white transition-all"
      >
        {name}
      </Link>
    </li>
  );
};

export default NavbarButton;
