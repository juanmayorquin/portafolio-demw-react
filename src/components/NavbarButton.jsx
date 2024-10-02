import React from "react";

const NavbarButton = ({name}) => {
  return (
    <li>
      <a
        href="#"
        className="block text-gray-300 hover:border-solid hover:border-purple-600 hover:border-b-4 hover:text-purple-600 transition-all"
      >
        {name}
      </a>
    </li>
  );
};

export default NavbarButton;
