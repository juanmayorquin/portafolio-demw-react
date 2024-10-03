import React from "react";

const Skill = ({ icon, title, description }) => {
  return (
    <div className="grid grid-cols-3 w-[30rem] h-52 justify-center items-center bg-gradient-to-br from-slate-900 to-gray-900 shadow-md rounded-xl overflow-hidden gap-6 p-6 snap-center">
      <div className="w-20 p-1 m-auto">
        {icon}
      </div>
      <div className="col-span-2">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Skill;
