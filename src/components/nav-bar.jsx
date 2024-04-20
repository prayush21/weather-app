import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-5">
        <button className=" underline">today</button>
        <button>week</button>
      </div>
      <div className="flex gap-5">
        <button className="p-1 h-10 w-10 bg-white rounded-full flex justify-center items-center">
          &deg; C
        </button>
        <button className="p-1 h-10 w-10 bg-black text-white rounded-full flex justify-center items-center">
          &deg; F
        </button>
        <div className="h-10 w-10  rounded-lg bg-indigo-700"></div>
      </div>
    </div>
  );
}

export default Navbar;
