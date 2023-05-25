import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { motion, AnimateSharedLayout } from "framer-motion";
import Title_Array from "./Title_Array";
import Contact_Modal from "./Contact_Modal";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay,
          type: "spring",
          duration: 0.5,
          bounce: 0,
        },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const Nav_Bar = () => {
  const [toggle, setToggle] = useState(false);
  {
    /* Initially false */
  }
  return (
    <nav className="w-full flex py-2 justify-between items-center navbar">
      <span className="flex flex-1 absolute font-poppins font-bold text-white -mt-4 ml-7 text-[22px]">
        <Title_Array />
      </span>

      <motion.div layout>
        <motion.div
          className="flex flex-row relative -ml-5"
          animate={{
            x: [-15, 5, -5, 0],
            rotate: [0, 10, 5, 15],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            transition: {
              duration: 5,
              yoyo: Infinity,
            },
          }}
        >
          <img
            src={logo}
            alt="jogger"
            className="w-[40px] h-[40px]"
          />
        </motion.div>
      </motion.div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 bg-primary">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        {" "}
        {/* This is for mobile view */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? "mr-0" : "mb-4"
              } text-white`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav_Bar;
