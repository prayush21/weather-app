import React from "react";

function SunHighlightCard({ id, title }) {
  return (
    <div
      key={id}
      className="col-span-1 min-h-36 row-span-6 bg-white rounded-2xl p-4 flex flex-col justify-between"
    >
      <div className=" text-gray-400 font-normal text-sm">{title}</div>
      <div className="font-normal text-4xl">Wake up</div>
    </div>
  );
}

export default SunHighlightCard;
