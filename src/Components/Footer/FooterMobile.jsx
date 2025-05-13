import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const FooterMobile = () => {
  const [navopen, setnavopen] = useState(false);

  const links = [
    { title: "Beginning", description: "Introduction.", path: "/" },
    {
      title: "Logs",
      description: "Degrees, Internships, and On Job Training.",
      path: "/logs",
    },
    {
      title: "Craftsmanships",
      description: "Skill sets and Future Goals.",
      path: "/craftmenships",
    },
    {
      title: "Creations",
      description:
        "Personal Projects, Wireframes, Mockups, Prototypes, Animations.",
      path: "/creations",
    },
    { title: "About Me", description: "Overview.", path: "/about" },
  ];

  return (
    <div id="MobileNav" className="fixed bottom-0 left-4 right-4 z-[9999]">
      {/* Open Menu Button */}
      {!navopen && (
        <motion.button
          animate={{ rotate: navopen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={() => setnavopen(true)}
          className="w-full px-4 py-2 rounded-md bg-black text-[#E84A4A] text-3xl shadow-md flex justify-center items-center"
        >
          <RiMenu2Fill />
        </motion.button>
      )}

      {/* Mobile Nav Panel */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black text-white transition-transform duration-300 ease-in-out z-[10000] ${
          navopen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setnavopen(false)}
          className="absolute top-4 right-4 text-3xl text-white z-[10001]"
        >
          <IoMdClose />
        </button>

        {/* Nav Links */}
        <div className="mt-20 px-6">
          <ul className="flex flex-col gap-5">
            {links.map((link, index) => (
              <NavLink
                to={link.path}
                key={index}
                className="block"
                onClick={() => setnavopen(false)} // auto-close on link click
              >
                {({ isActive }) => (
                  <li
                    className={`border-l-4 pl-3 py-2 transition-all ${
                      isActive ? "border-[#E84A4A]" : "border-transparent"
                    }`}
                  >
                    <h2
                      className={`text-lg font-semibold ${
                        isActive ? "text-[#E84A4A]" : "text-white"
                      }`}
                    >
                      {link.title}
                    </h2>
                    <p className="text-sm text-gray-400 mt-1">
                      {link.description}
                    </p>
                  </li>
                )}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
