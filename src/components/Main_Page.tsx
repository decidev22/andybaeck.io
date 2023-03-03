import styles from "../style";
import React, { useState, useEffect } from "react";
import { JogR_mini_logo, SeeMyCode } from "../assets";
import { motion } from "framer-motion";
import { Title_Array, Greeting, My_Interest } from ".";

const Main_Page = () => (
  <section
    id="home"
    className={`flex items-start xs:flex-row flex-col ${styles.paddingY} min-h-screen`}
  >
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 whitespace-normal w-full`}
    >
      {/* <div className="absolute inset-0 rounded-lg"></div> */}
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <motion.div
          className="flex flex-row"
          animate={{
            rotate: [30, 35, 15, 20, 30],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            transition: {
              duration: 5,
              yoyo: Infinity,
            },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-purple-400 animate-bounce"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
            />
          </svg>
        </motion.div>
        <p className={`${styles.paragraph} ml-3`}>
          <span className="text-white">Open to work in</span> NZ, AU, TX, Remote{" "}
          <span className="text-white">Interested in:</span> BackEnd, FrontEnd,
          SWE
        </p>
      </div>
      <Greeting />
      <motion.div
        className="flex flex-row justify-between items-between w-full"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
      >
        <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          {/* <br className="sm:block hidden" /> {"  "} */}
          <span className="text-gradient">Software Engineer</span> {"  "}
        </h1>
        {/* <div className="ss:flex sm:mr-30 md:mr-80 my-5 lg:mr-130">
          <img
            src={SeeMyCode}
            alt="SeeMyCode"
            className="w-[100px] h-[100px]"
          />
        </div> */}
      </motion.div>

      <h1 className="font-poppins font-semibold ss:text-[65px] text-[50px] text-white ss:leading-[100px] leading-[75px] w-full">
        from New Zealand. <br /> {"  "}I am interested in...
      </h1>
      {/* <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px] leading-[55px]">
        <br className="sm:block hidden" /> {"  "}
      </h1> */}
      <My_Interest />
      <p className={`${styles.paragraph} max-w-[480px] mt-5 py-10`}></p>
    </div>
  </section>
);

export default Main_Page;
