import React, { useState } from "react";
import styles from "../style";
import { linkedin_logo, email_logo } from "../assets";
import { motion } from "framer-motion";

const LinkedIn_Link = () => {
  window.location.replace("https://www.linkedin.com/in/andybaeck/");
};

const Contact_Modal = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="relative group">
        {" "}
        <div className="absolute inset-0 bg-indigo-500 rounded-lg blur group-hover:bg-violet-500 transition duration-1000 group-hover:duration-100"></div>
        <button
          className="flex items-center relative bg-talktome-gradient rounded-lg p-2"
          onClick={toggleModal}
        >
          <span className="grid place-items-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 font-poppins font-bold opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
            Business Card
          </span>
          <span className="relative flex justify-end h-1.5 w-1.5 mb-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
          </span>
        </button>
      </div>

      {modal && (
        <div className="modal font-poppins z-10">
          <div className="overlay" onClick={toggleModal}></div>

          <div className="flex flex-col modal-content text-white overflow-hidden">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <div className="wave -one" />
              <div className="wave -two" />
              <div className="wave -three" />
              <p className="flex text-xs">Business Card</p>
              <p className="text-lg">Andy Baeck</p>
              <p className="">Junior Software Engineer</p>
              <br />
              <div>
                <div
                  className="flex hover:scale-105 p-1"
                  onClick={LinkedIn_Link}
                >
                  <img
                    src={linkedin_logo}
                    alt="LinkedIn"
                    className="w-5 h-5"
                    onClick={LinkedIn_Link}
                  />

                  <p className="ml-1 text-blue-200">
                    Click to visit my LinkedIn Profile
                  </p>
                </div>
                <div className="flex p-1">
                  {/* mailbox icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                    />
                  </svg>
                  <p className="ml-1"> Email : andybaeck22@gmail.com</p>
                </div>
              </div>
              <button className="close-modal text-white" onClick={toggleModal}>
                Close
              </button>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact_Modal;
