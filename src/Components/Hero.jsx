import React, { useState } from "react";
import profile from "../assets/home/hadi.jpg";
import vector1 from "../assets/home/ProfileVectors/Vector 6.png";
import vector2 from "../assets/home/ProfileVectors/Vector 7.png";
import vector3 from "../assets/home/ProfileVectors/Vector 8.png";
import vector4 from "../assets/home/ProfileVectors/Vector 9.png";
import reward0 from "../assets/home/ProfileVectors/reward.png";
import reward1 from "../assets/home/ProfileVectors/reward1.png";
import reward2 from "../assets/home/ProfileVectors/reward2.png";
import { GrAggregate } from "react-icons/gr";

import Login from "./Auth/Login";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaItchIo } from "react-icons/fa6";

const Hero = ({ children }) => {
  const [showLogin, Setshowlogin] = useState(false);

  return (
    <div id="Hero" className="flex items-center justify-center pt-5">
      <div className="flex gap-5 items-start w-full max-w-[1500px] px-3 mx-auto">
        <Profile_Data Setshowlogin={Setshowlogin} />
        {children}
        <Active_Quest />
        {showLogin && <Login Setshowlogin={Setshowlogin} />}
      </div>
    </div>
  );
};

export default Hero;

// ---------------- Profile Data ----------------

const Profile_Data = () => {
  const profileItems = [
    { label: "Name", value: "Muhammad Hadi Naeem" },
    { label: "Occupation", value: "Game Developer" },
    { label: "Corporation", value: "Freelancing" },
  ];

  const socialLinks = [
    {
      icon: <IoLogoLinkedin />,
      href: "https://www.linkedin.com/in/muhammad-hadi-naeem-5b1678260/",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/Hadi0603",
    },
    {
      icon: <FaItchIo />,
      href: "https://ha-digd.itch.io",
    },
  ];

  return (
    <motion.div
      className="w-[200px]"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ ease: "backOut", duration: 0.7 }}
    >
      <div className="relative px-3 py-3 bg-black border rounded-md">
        <img
          src={profile}
          alt="Profile"
          className="object-cover z-10 rounded-md"
        />
        <img src={vector1} className="absolute top-0 left-0" alt="" />
        <img src={vector2} className="absolute top-0 right-0" alt="" />
        <img src={vector3} className="absolute bottom-0 right-0" alt="" />
        <img src={vector4} className="absolute bottom-0 left-0" alt="" />
      </div>

      <div className="uppercase pt-5 text-white">
        <ul className="flex flex-col gap-3">
          {profileItems.map(({ label, value }) => (
            <li key={label}>
              <label className="tracking-[1.5px]">{label}</label>
              <h1 className="text-[#E84A4A] text-sm font-bold tracking-[1px]">
                {value}
              </h1>
            </li>
          ))}

          <li>
            <label className="tracking-[1.5px]">Availability</label>
            <Link to={"/ContactUS"}>
              <h1 className="text-black bg-[#E84A4A] w-[170px] font-bold px-2 py-1 relative text-xl flex items-center">
                Open For Hire
                <GrAggregate className="absolute top-1 right-1 text-3xl" />
              </h1>
            </Link>
          </li>

          <li>
            <label className="tracking-[1.5px]">Social</label>
            {socialLinks.map(({ icon, href }, i) => (
              <div
                key={i}
                className="mt-2 mb-2 border border-[#E84A4A] shadow-lg hover:shadow-[#E84A4A]"
              >
                <a href={href} target="_blank" rel="noreferrer">
                  <h1 className="text-[#E84A4A] text-xl font-bold px-2 py-1 w-[170px] flex items-center relative">
                    Open Connection
                    <span className="absolute top-[15%] right-0 pr-1 text-2xl">
                      {icon}
                    </span>
                  </h1>
                </a>
              </div>
            ))}
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

// ---------------- Active Quest ----------------

const Active_Quest = () => {
  const rewards = [
    { img: reward0, points: "+5" },
    { img: reward1, points: "+25" },
    { img: reward2, points: "+53" },
  ];

  return (
    <motion.div
      className="flex flex-col gap-10"
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ ease: "backOut", duration: 0.7 }}
    >
      <div className="uppercase border-l-4 border-[#E84A4A] w-[200px] bg-black/80">
        <h1 className="text-white bg-[#E84A4A] text-2xl px-1 flex justify-between items-center">
          Active Quest <GrAggregate className="text-black" />
        </h1>

        <h1 className="text-[#ffffffa6] bg-[#e84a4a2d] text-lg px-2 py-2">
          SYSTEM DESIGN & GAMEPLAY TUNING
        </h1>

        <div className="px-3">
          <h1 className="text-xl text-[#ffffffa6]">Quest Name</h1>
          <p className="text-md text-[#E84A4A] leading-tight">
            Forge of Interactivity
          </p>
        </div>

        <div className="pt-7 px-3">
          <h4 className="text-xl text-[#ffffffa6]">Mission</h4>
          <p className="text-[#adadad]">
            Design and develop gameplay systems that feel responsive, intuitive,
            and deeply satisfying. Every mechanic should not only function—it
            should spark engagement, reward curiosity, and make players feel in
            control of their world.
          </p>
        </div>

        <div className="pt-3 px-3">
          <h4 className="text-xl text-[#ffffffa6]">Rewards</h4>
          <div className="flex gap-5 pt-5 text-center">
            {rewards.map(({ img, points }, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={img} alt={`Reward ${index}`} />
                <span className="text-[#7A7A7A]">{points}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
