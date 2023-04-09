import Chat_Box from "./Chat_Box";
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ChatButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: white;
  font-size: 15px;
  cursor: pointer;
`;

const ChatContainer = styled.div`
  position: fixed;
  z-index: 9998;
  @media screen and (max-width: 639px) {
    bottom: 120px;
    right: -10px;
  }
  bottom: 20px;
  right: 100px;
`;

interface Props {}

const ClickChat: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChatButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="fixed bottom-0 right-0 z-50 w-60 h-60
          "
      >
        <div className="mainwave -one" />
        <div className="mainwave -two" />
        <div className="mainwave -three" />

        <ChatButton
          onClick={handleChatButtonClick}
          className="bg-gradient-to-r from-blue-800 to-violet-700 font-poppins"
        >
          CHAT
        </ChatButton>
      </motion.div>
      {isOpen && (
        <ChatContainer className="mb-10">
          <Chat_Box />
        </ChatContainer>
      )}
    </>
  );
};

export default ClickChat;
