import React from "react";
import Skeleton from "react-loading-skeleton";

function SkeletonCard() {
  return (
    <div className="col-span-1 min-h-36 row-span-6 bg-white rounded-2xl p-4 flex flex-col justify-between">
      <Skeleton count={1} width={30} />
      <Skeleton height={40} width={60} />
      <Skeleton count={1} width={70} />
    </div>
  );
}

export default SkeletonCard;
