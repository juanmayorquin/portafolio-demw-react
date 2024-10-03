import React from "react";

const HeroButton = ({ icon, text, href }) => {
  return (
    <a
            className="flex gap-2 items-center justify-center bg-gradient-to-b from-purple-700 to-purple-900 p-4 w-auto rounded-full hover:text-white transition-all"
            href={href}
          >
            {icon}
            {text ? <p>{text}</p> : null}
          </a>
  );
};

export default HeroButton;
