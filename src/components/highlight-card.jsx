import React from "react";

function HighlightCard({ id, title }) {
  return (
    <div
      key={id}
      className="col-span-1 min-h-36 row-span-6 bg-white rounded-2xl p-4 flex flex-col justify-between"
    >
      <div className=" text-gray-400 font-normal text-sm">{title}</div>
      <div className="font-normal text-4xl">
        12<span className="text-lg">%</span>
      </div>
      <div className="font-normal text-sm">Normal &#128077;</div>
    </div>
  );
}

export default HighlightCard;
