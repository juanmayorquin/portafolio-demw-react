import React from "react";

const Skill = ({ icon, title, description }) => {
  return (
    <div className="flex w-[80vw] h-96 flex-col md:flex-row gap-6 md:w-[30rem] md:h-52 justify-center items-center bg-gradient-to-br from-slate-900 to-gray-900 border-2 border-slate-800 transition-all shadow-md rounded-xl p-4 snap-center hover:scale-[1.02] m-2">
      <div className="h-1/3 md:w-1/4 p-1 md:p-0 m-auto">
        {icon}
      </div>
      <div className="h-2/3 md:w-3/4 flex flex-col justify-center items-center md:items-start">
        <h3 className="font-bold text-base md:text-xl mb-2">{title}</h3>
        <p className="text-gray-500 text-justify md:text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Skill;
