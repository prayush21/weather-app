import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-5 font-medium">
        <button className=" text-gray-400">Today</button>
        <button className="border-b border-black">Week</button>
      </div>
      <div className="flex gap-5">
        <button className="p-1 h-8 w-8 bg-black text-white rounded-full flex justify-center items-center">
          &deg; C
        </button>
        <button className="p-1 h-8 w-8 bg-white rounded-full flex justify-center items-center">
          &deg; F
        </button>
        <div className="h-8 w-8  rounded-lg bg-indigo-700"></div>
      </div>
    </div>
  );
}

export default Navbar;
