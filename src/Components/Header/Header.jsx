import React, { useEffect, useState } from "react";
import { RiAddFill } from "react-icons/ri";
import MobileNav from "./MobileNav";
import bgCorner from "../../assets/Logs/Corner shadow.png";
import DOB from "../DOB";

const Header = () => {
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
      <div
        id="top"
        className="navbar    bg-transparent w-full  py-5 m-auto overflow-hidden "
      >
        <nav className="max-w-[90%] m-auto flex justify-between">
          <div className="header-left-nav flex gap-10 uppercase">
            <div className="flex items-center gap-1 font-bold">
              <h1 className="text-[#7DFF68] text-2xl space-x-2">
                <DOB />
              </h1>
              <span className="text-[#ffffffc9] mt-2 tracking-[1.1px] text-md">
                AGE
              </span>
            </div>
            <div
              className="flex items-center  font-bold gap-4
                  "
            >
              <button className="p-1 px-2 py-2 text-xl bg-black text-[#E84A4A] border border-[#ffffff81]">
                <RiAddFill />
              </button>{" "}
              <h1 className="text-[#7DFF68] text-2xl space-x-2">6,191</h1>
              <span className="text-[#ffffffc9]  tracking-[2px] text-md mt-2">
                COINS AWARDED
              </span>
            </div>
          </div>
          <div className="header-right-nav text-[white] flex items-center gap-8 uppercase">
            <span className="text-sm tracking-[0.1rem]">creidts</span>
            <span className="text-sm mt-1  tracking-[0.1rem] text-[#ffffff9a]">
              Server time:{"9.34 "}
            </span>
            <span className="text-sm  mt-1 tracking-[0.1rem] text-[#ffffff9a]">
              Local time:{time}
            </span>
          </div>
        </nav>
        <div className="header-bg-corner absolute top-0 right-4">
          <img src={bgCorner} alt="" />
        </div>
      </div>
      <MobileNav />
    </>
  );
};

export default Header;
