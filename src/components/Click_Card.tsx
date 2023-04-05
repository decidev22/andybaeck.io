import Contact_Modal from "./Contact_Modal";
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { linkedin_logo, email_logo } from "../assets";

const CardButton = styled.button`
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 9999;
  width: 65px;
  height: 50px;
  border-radius: 20%;
  color: white;
  font-size: 12px;
  cursor: pointer;
`;

const CardContainer = styled.div`
  position: fixed;
  bottom: 150px;
  right: -70px;
  z-index: 9998;
`;

interface Props {}

const LinkedIn_Link = () => {
  window.location.replace("https://www.linkedin.com/in/andybaeck/");
};

const Click_Card: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <CardButton
        onClick={handleCardButtonClick}
        className="bg-gradient-to-r from-blue-800 to-violet-700 font-poppins"
      >
        BUSINESS CARD
      </CardButton>
      {isOpen && (
        <CardContainer className="mb-10">
          <div className="flex flex-col modal-content text-white overflow-hidden h-[230px]">
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
            </motion.div>
          </div>
        </CardContainer>
      )}
    </>
  );
};

export default Click_Card;
