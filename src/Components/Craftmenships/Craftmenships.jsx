import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hero from "../Hero";
import CircularProgress from "./CircularProgess";
import Img1 from "../../assets/craft/Mark.png";
import Img2 from "../../assets/craft/Vector0.png";
import Img3 from "../../assets/craft/Vector1.png";
import Img4 from "../../assets/craft/Vector2.png";
import Img5 from "../../assets/craft/Vector.png";

import Polygon from "../../assets/craft/Polygon.png";
import firebase_svg from "../../assets/svg/firebase-svgrepo-com.svg";
import rider from "../../assets/svg/rider.svg";
import AI from "../../assets/svg/Adobe Illustrator.svg";
import photon_svg from "../../assets/svg/photon.jpeg";
import { motion } from "framer-motion";
import { BsUnity } from "react-icons/bs";
import { Link } from "react-router-dom";
const Craftmenships = () => {
  const data = [
    {
      text: "I have created a set of achievements for myself and I use this page to track them.",
    },
    {
      text: "If you want to give me a challenge and rate it, please feel free to submit it with the button below!",
    },
  ];

  let cardData = [
    {
      img: Img1,
      title: "Gameplay Programming",
      text: "Design and implement core gameplay systems, ensuring responsive controls, engaging mechanics, and smooth player interactions.",
      delay: 0.3,
    },
    {
      img: Img2,
      title: "Game Mechanics Design",
      text: "Create, balance, and refine in-game systems like combat, progression, and puzzles to deliver a fun and engaging player experience.",
      delay: 0.6,
    },
    {
      img: Img3,
      title: "Performance Optimization",
      text: "Analyze and enhance game performance by reducing memory usage, improving frame rates, and optimizing assets and code.",
      delay: 0.9,
    },
    {
      img: Img4,
      title: "Multiplayer Systems Integration",
      text: "Develop and integrate multiplayer features including networking, matchmaking, and real-time synchronization for seamless online play.",
      delay: 1.2,
    },
    {
      img: Img1, // Replace with another image if available
      title: "Cross-Platform Development",
      text: "Build and deploy games across various platforms such as PC, consoles, and mobile, ensuring consistency and quality across devices.",
      delay: 1.5,
    },
  ];

  return (
    <div id="Craftmanships" className="bg-black">
      <Header />
      <Hero>
        <div
          id="craftmanshps-main-id"
          className="craftmanshps-main  block  w-[90%]"
        >
          <div className="Craftmanships flex  items-start w-full gap-5 px-4 py-5 flex-grow-0 justify-center ">
            <div id="progress-component" className="md:w-full">
              <div className=" flex flex-col">
                <div className="progress flex flex-col items-center  gap-2 border border-[#ffffff38] px-4 py-4">
                  <CircularProgress />
                  <p className="text-[#7A7A7A]">Progress</p>
                </div>
                <div className="craftemanships-first-text-data flex flex-col w-full gap-3 pt-4">
                  {data.map((item, index) => (
                    <p key={index} className="text-[#7A7A7A]  text-sm">
                      {item.text}
                    </p>
                  ))}
                </div>
                <Link to={"/ContactUS"}>
                  <button className="text-center px-5 w-full py-2 text-[#E84A4A] border border-[#E84A4A] hover:shadow-lg mt-3 hover:shadow-[#E84A4A] transition-all duration-100">
                    <h1>Challenge me</h1>
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex gap-9 flex-col w-full">
              {cardData.map((item, index) => (
                <motion.div
                  key={index}
                  className="card flex items-center border border-[#ffffff48]  rounded-tl-xl"
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: item.delay,
                  }}
                >
                  <div className="card-img py-4 px-5 border-r border-[#1D1D20]">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="card-text flex flex-col py-1   px-2 pl-5">
                    <h1 className="text-[#E84A4A] font-bold pt-3">
                      {item.title}
                    </h1>
                    <p className="text-[#7A7A7A] leading-[18px] w-full pb-2">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div className="pt-2">
                <h2 className="text-[white] py-2">In Pipeline:</h2>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3,
                  }}
                  className="card flex items-center border border-[#ffffff48]  rounded-tl-xl"
                >
                  <div className="card-img py-4 px-8 border-r border-[#1D1D20]">
                    <img src={Img5} alt="" />
                  </div>
                  <div className="card-text flex flex-col   w-96 px-2 pl-5">
                    <h1 className="text-[#53CC60] font-bold pt-3 ">
                      Level Design
                    </h1>
                    <p className="text-[#7A7A7A] leading-[18px] w-full pb-2">
                      Craft immersive game environments by designing layouts,
                      pacing, and player flow to support gameplay mechanics and
                      narrative goals.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="skills-icons py-2 px-2 pt-7 flex flex-col w-full gap-5">
              <h2 className="w-36 py-0 px-1 text-[white]">Forged Arsenal</h2>
              <div className="flex items-center gap-0 m-0 flex-col ">
                <div className="flex gap-1">
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -100,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "anticipate",
                    }}
                    className="text-white relative text-[30px]"
                  >
                    <img src={Polygon} alt="" />
                    <img
                      className="w-[35px] absolute rounded-full top-[22%] left-[18%]"
                      src={photon_svg}
                      alt=""
                    />
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 100,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "anticipate",
                    }}
                    className="text-white relative text-[30px]"
                  >
                    <img src={Polygon} alt="" />
                    <img
                      className="w-[35px] absolute top-[22%] left-[18%]"
                      src={firebase_svg}
                      alt=""
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -100,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    ease: "anticipate",
                  }}
                  className="text-white relative text-[30px]"
                >
                  <img src={Polygon} alt="" />
                  <BsUnity className="absolute top-[25%] left-[20%] " />
                </motion.div>
                <div className="flex gap-1">
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -100,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 1,
                      ease: "anticipate",
                    }}
                    className="text-white relative text-[30px]"
                  >
                    <img src={Polygon} alt="" />
                    <img
                      className="w-[35px] absolute rounded-full top-[22%] left-[18%]"
                      src={AI}
                      alt=""
                    />
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 100,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 1,
                      ease: "anticipate",
                    }}
                    className="text-white relative text-[30px]"
                  >
                    {" "}
                    <img src={Polygon} alt="" />
                    <img
                      className="w-[35px] absolute top-[22%] left-[18%]"
                      src={rider}
                      alt=""
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Hero>
      <Footer />
    </div>
  );
};

export default Craftmenships;
