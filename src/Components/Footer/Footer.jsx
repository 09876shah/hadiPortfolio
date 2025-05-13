import React from "react";
import { NavLink } from "react-router-dom";
import FooterMobile from "./FooterMobile";
import { motion } from "framer-motion";
const Footer = () => {
  const links = [
    { title: "beginning", description: "Introduction.", path: "/", delay: "0" },
    {
      title: "Logs",
      description: "Degrees, Internships, and On Job Training.",
      path: "/logs",
      delay: "0.3",
    },
    {
      title: "Craftsmanships",
      description: "Skill sets and Future Goals.",
      path: "/Craftmenships",
      delay: "0.6",
    },
    {
      title: "creations",
      description:
        "Personal Projects, Wireframes, Mockups, Prototypes, Animations.",
      path: "/Creations",
      delay: "0.9",
    },
    {
      title: "About Me",
      description: "Overview.",
      path: "/About",
      delay: "1.4",
    },
  ];

  return (
    <div className="relative  ">
      <div id="footer">
        <div className="footer-cont uppercase w-screen flex items-center justify-center">
          <ul className="flex gap-5 flex-wrap max-w-5xl md:w-full">
            {links.map((link, index) => (
              <NavLink to={link.path} key={index}>
                {({ isActive }) => (
                  <a
                    href="#top"
                    className="hover:scale-110 transition-all duration-100"
                  >
                    {" "}
                    <motion.li
                      initial={{
                        y: 100,
                      }}
                      animate={{
                        y: 0,
                      }}
                      transition={{
                        ease: "easeInOut",
                        duration: 0.4,
                        delay: `${link.delay}`,
                      }}
                      className={`flex flex-col h-fit w-44 border-l-4  ${
                        isActive ? "active-border" : "footer-tag-li"
                      }`}
                    >
                      <h2
                        className={`footer-tag-h2  text-white pl-1 text-lg ${
                          isActive ? "active-footer-tag" : "footer-tag-h2"
                        }`}
                      >
                        {link.title}
                      </h2>
                      <span className="bg-[#000000a4] tracking-[1px] text-white text-[11px] pt-1 pb-4 pl-1 pr-2">
                        {link.description}
                      </span>
                    </motion.li>
                  </a>
                )}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
      <FooterMobile className="MobileFooter " />
    </div>
  );
};

export default Footer;
