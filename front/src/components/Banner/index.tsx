import React from "react";

const Banner = () => {
  return (
    <div className="border w-4/5 md:w-11/12 xl:w-10/12 flex justify-start items-center bg-hero h-36 md:h-64 lg:h-96 bg-cover md:bg-center mt-20 md:mt-24 rounded-lg">
      <div className="text-center w-1/5 md:w-1/4 font-bold text-sm md:text-xl lg:text-2xl xl:text-3xl p-1 md:p-2">
        <h1>
          Encontre o <span className="text-blue-500">instrumento</span> dos seus
          sonhos!
        </h1>
      </div>
    </div>
  );
};

export default Banner;
