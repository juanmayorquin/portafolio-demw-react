import React from "react";
import HeroButton from "../Hero/HeroButton";
import GithubIcon from "../../assets/icons/GithubIcon";

const Project = ({ img, title, desc, href }) => {
  return (
    <div className="m-4 w-[80vw] md:w-auto h-90 snap-center flex flex-col bg-gradient-to-br from-slate-900 to-gray-900 border-2 border-slate-900 transition-all shadow-md rounded-xl hover:scale-[1.02]">
      <img
        className=" rounded-t-xl object-cover min-h-40 max-h-48 w-full"
        src={img}
        alt={title}
      />
      <div className="py-3 px-4 xl:py-6 xl:px-8 flex flex-col xl:flex-row items-center justify-between">
        <div className="w-3/4">
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-base text-gray-500">{desc}</p>
        </div>
        <div className="mt-4">
          <HeroButton icon={<GithubIcon />} href={href} />
        </div>
      </div>
    </div>
  );
};

export default Project;
