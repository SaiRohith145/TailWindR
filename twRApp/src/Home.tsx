import { useState, useMemo } from "react";

const Home = () => {
  return (
    <div className="bg-shadowBlue w-screen h-screen">
      <div className="w-screen flex flex-1 h-14 lg:h-20 md:h-14 sm:h-14 items-center justify-around px-5">
        <div className="">
          <samp className="text-white font-serif">
            R-<samp className="text-sky-500">Web</samp>
          </samp>
        </div>
        <div className=" flex flex-1 justify-center">
          <button>
            <samp
              onClick={() => {}}
              className="text-white border-b-2 align-middle mx-2.5">
              Home
            </samp>
          </button>
          <button>
            <samp className="text-white align-middle mx-2.5">About</samp>
          </button>
          <button>
            <samp className="text-white align-middle mx-2.5">Apps</samp>
          </button>
        </div>
        <div className="">
          <samp className="text-white">Settings</samp>
        </div>
      </div>
    </div>
  );
};

export default Home;
