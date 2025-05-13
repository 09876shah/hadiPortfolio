import React, { useEffect, useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { RiAddFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import DOB from "../DOB";

const MobileNav = () => {
  const [navopen, setnavopen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateLocalTime = () => {
      const currentTime = new Date();
      const formattedTime =
        currentTime.getHours().toString().padStart(2, "0") +
        " : " +
        currentTime.getMinutes().toString().padStart(2, "0") +
        " : " +
        currentTime.getSeconds().toString().padStart(2, "0");
      setTime(formattedTime);
    };

    updateLocalTime(); // Initial call
    const interval = setInterval(updateLocalTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <>
      <div id="MobileNav" className="absolute top-0 right-0 w-full z-[9999]">
        {/* Open Button */}
        <button
          onClick={() => setnavopen(true)}
          className="absolute text-4xl text-[#E84A4A] top-2 right-4"
        >
          <AiOutlineAppstore />
        </button>

        {/* Mobile Nav */}
        <div
          className={`fixed top-0  right-0 w-full h-screen bg-white shadow-lg transition-transform duration-300 ${
            navopen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setnavopen(false)}
            className="absolute top-4 right-4 text-3xl text-black"
          >
            <IoMdClose />
          </button>

          {/* Level Info */}
          <div className="flex items-center gap-1 border-b-2 p-2 border-[#00000065] shadow-md w-full font-bold mt-12">
            <h1 className="text-[#7DFF68] text-2xl space-x-2">
              <DOB />
            </h1>
            <span className="text-[#ffffffc9] mt-2 tracking-[1.1px] text-md">
              AGE
            </span>
          </div>

          {/* Coins Awarded */}
          <div className="flex items-center font-bold gap-4 border-b-2 p-2 border-[#00000065] shadow-md w-full">
            <button className="p-1 px-2 py-2 text-xl bg-black text-[#E84A4A] border border-[#ffffff81]">
              <RiAddFill />
            </button>
            <h1 className="text-[#7DFF68] text-2xl space-x-2">6,191</h1>
            <span className="text-black tracking-[2px] text-md mt-2">
              COINS AWARDED
            </span>
          </div>

          {/* Other Info */}
          <div className="flex flex-col">
            <span className="text-sm tracking-[0.1rem] border-b-2 p-2 border-[#00000065] shadow-md w-full">
              credits
            </span>
            <span className="text-sm mt-1 border-b-2 p-2 border-[#00000065] shadow-md w-full tracking-[0.1rem] text-black">
              Server time: 9.34
            </span>
            <span className="text-sm p-2 border-[#00000065] border-b-2 shadow-md w-full mt-1 tracking-[0.1rem] text-black">
              Local time:{time}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
