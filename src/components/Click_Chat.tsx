import Chat_Box from "./Chat_Box";
import React, { useState } from "react";
import styled from "styled-components";

const ChatButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

const ChatContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 100px;
  z-index: 9998;
`;

interface Props {}

const ClickChat: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChatButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ChatButton
        onClick={handleChatButtonClick}
        className="bg-gradient-to-r from-blue-800 to-violet-700 font-poppins"
      >
        Chat
      </ChatButton>
      {isOpen && (
        <ChatContainer className="mb-10">
          <Chat_Box />
        </ChatContainer>
      )}
    </>
  );
};

export default ClickChat;
