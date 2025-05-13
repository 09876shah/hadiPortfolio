import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hero from "../Hero";
import Line from "../../assets/About/Vector.png";
import About_img from "../../assets/About/image.png";
const data = [
  {
    title: "THE SHORT INTRODUCTION OF MY LIFE",
    pg: "I’ve always been drawn to the creative and technical world of game development. What started as curiosity quickly became a passion for building interactive, engaging experiences using code and design.",
    delay: 0.3,
    position: -100,
  },
  {
    title: "CAREER AND DEVELOPMENT",
    pg: "I’ve developed a variety of 2D and 3D games, focusing on gameplay mechanics, system design, and performance optimization. My core tools include Unity and C#, along with plugins and services like Firebase and Photon Engine. I continuously explore new techniques and technologies to improve my craft and stay up-to-date with industry trends.",
    delay: 0.6,
    position: 100,
  },
  {
    title: "FOCUS",
    pg: "My focus is on crafting fun, functional, and user-centric games. I aim to grow as a developer who can take ideas from concept to completion while collaborating effectively and always improving.",
    delay: 0.9,
    position: -100,
  },
];
import { motion } from "framer-motion";
const About = () => {
  return (
    <div id="About" className="bg-[black] ">
      <Header />
      <Hero>
        <div className="about-cont relative flex flex-col z-[10] w-full justify-center overflow-hidden  py-4">
          <img
            className="line absolute top-2 sm:top-3 md:top-4 lg:top-5 left-[-50px] sm:left-[-100px] md:left-[-150px] lg:left-[-200px] w-auto h-auto max-w-[400px]"
            src={Line}
            alt=""
          />

          <div className="about-heading text-white tex-lg text-center">
            Who is Muhammad Hadi Naeem
          </div>
          <div className="about-text flex  justify-between px-10 py-3 w-full">
            <div className="flex flex-col gap-10">
              {data.map((item, index) => (
                <motion.div
                  initial={{
                    x: item.position,
                    opacity: 0,
                  }}
                  animate={{ x: 0, opacity: 1, offsetRotate: "auto" }}
                  transition={{
                    duration: 0.8,
                    delay: `${item.delay}`,
                    ease: "backOut",
                  }}
                  className="about-text-box flex text-white  gap-7 "
                  key={index}
                >
                  <p className="w-36 text-[#7A7A7A]  text-md text-end ">
                    {item.title}
                  </p>
                  <p className="w-80 text-md">{item.pg}</p>
                </motion.div>
              ))}
            </div>
            <div>
              <div className="about-img border border-[#ffffff1a] h-fit min-w-[40%] mt-2">
                <img src={About_img} className="h-fit" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Hero>
      <Footer />
    </div>
  );
};

export default About;
