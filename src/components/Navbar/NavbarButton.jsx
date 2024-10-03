import React from "react";

const NavbarButton = ({name}) => {
  return (
    <li>
      <a
        href={`#${name}`}
        className=" text-gray-300 text-center hover:border-solid hover:border-purple-600 hover:border-b-[3px] hover:text-white transition-all"
      >
        {name}
      </a>
    </li>
  );
};

export default NavbarButton;
