import Image from "next/image";
import React from "react";
import NewYork from "../../public/new-york.avif";
function City() {
  return (
    <div className=" relative w-full rounded-3xl">
      <Image
        className="object-cover w-72 h-32 rounded-3xl brightness-50"
        src={NewYork}
        alt="city"
        width={280}
        height={200}
      />
      <div className=" w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        New York, NY, USA
      </div>
    </div>
  );
}

export default City;
