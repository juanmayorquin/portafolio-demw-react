import React from "react";

const HeroButton = ({ icon, text, href }) => {
  return (
    <a
      className="flex gap-2 items-center justify-center bg-gradient-to-b from-purple-700 to-purple-900 border-2 border-purple-950 p-4 w-auto rounded-full hover:text-white hover:bg-none hover:bg-slate-800 hover:border-2 hover:border-purple-700 transition-all"
      href={href}
      target="_blank"
    >
      {icon ? icon : null}
      {text ? <p>{text}</p> : null}
    </a>
  );
};

export default HeroButton;
