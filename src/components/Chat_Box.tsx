import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { motion } from "framer-motion";

const firebaseConfig = {
  apiKey: "AIzaSyDmex83-Fbpv8UXbcyqQ2CzJpe-lciisTA",
  authDomain: "blog-node-a90e4.firebaseapp.com",
  databaseURL:
    "https://blog-node-a90e4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blog-node-a90e4",
  storageBucket: "blog-node-a90e4.appspot.com",
  messagingSenderId: "1073436504555",
  appId: "1:1073436504555:web:a2c04b4b752cb4c0cbe9ae",
  measurementId: "G-J74XW53WJP",
};

firebase.initializeApp(firebaseConfig);
// Reference to the database root
const databaseRef = firebase.database().ref();

// Reference to the specific location you want to fetch data from
const dataRef = databaseRef.child("path/to/data");

// Foul words to be implimented... with best practice
const foulWords = ["badword1", "badword2", "badword3"];
const containsFoulWord = (text: string) => {
  const lowercasedText = text.toLowerCase();
  return foulWords.some((word) => lowercasedText.includes(word));
};

interface Message {
  name: string;
  message: string;
  timestamp: string;
}

const Message_Box = () => {
  const [data, setData] = useState<Message[]>([]);

  useEffect(() => {
    fetch("https://us-central1-blog-node-a90e4.cloudfunctions.net/getData")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  if (!data) return null; // added conditional statement

  const messageElements: JSX.Element[] = [];
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const item = data[key];
      const timestampDate = new Date(item.timestamp);
      messageElements.push(
        <div key={key} className="flex flex-col rounded-lg font-poppins">
          <h2 className="font-bold bg-gradient-to-r from-blue-800 to-violet-800 w-min px-2 text-center rounded-lg">
            {item.name}
          </h2>
          <p className="inline-flex flex-wrap px-1 mt-1 text-gray-100 py-1">
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg px-2">
              Message: {item.message}
            </span>
          </p>
          <p className="grid justify-items-end text-xs h-min">
            {timestampDate.toLocaleDateString() +
              " " +
              timestampDate.toLocaleTimeString()}
          </p>
          <br />
        </div>
      );
    }
  }
  messageElements.reverse();

  return (
    <div className="relative bg-banner-gradient rounded-lg px-1 ml-5 w-[400px] text-white h-[500px] overflow-y-auto">
      <div className="text-gray-400 font-bold sticky top-0 bg-banner-gradient py-1">
        Message Box (refresh to view your message)
      </div>
      <div className="mt-1">{messageElements}</div>
    </div>
  );
};

const Chat_Box = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedMessage = message.trim();
    const trimmedName = name.trim();
    if (!(trimmedMessage && trimmedName)) {
      // message is empty or contains only whitespace characters
      return;
    }
    const timestamp = firebase.database.ServerValue.TIMESTAMP;
    const filteredName = containsFoulWord(name) ? "***" : name;
    const filteredMessage = containsFoulWord(message) ? "***" : message;
    const data = { name, message, timestamp };
    firebase
      .database()
      .ref("messages")
      .push(data)
      .then(() => {
        console.log("Message sent successfully");
        setName("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending message: ", error);
      });
  };
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-indigo-600 rounded-lg blur group-hover:bg-violet-400 transition duration-1000 group-hover:duration-100"></div>
      <div className="relative flex flex-col items-center ms:flex-row bg-banner-gradient rounded-lg">
        <Message_Box />
        <div className="relative flex flex-row grid w-full">
          <div className="flex flex-col text-white mt-2 font-poppins p-2">
            <form
              className="flex-col bg-messagebox-gradient rounded-lg p-1"
              onSubmit={handleSend}
            >
              <div className="flex flex-1">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex ml-2 rounded-lg bg-gray-800"
                ></input>
              </div>
              <div className="flex flex-1 mt-1">
                <label>Message:</label>
                <input
                  type="text"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex ml-2 rounded-lg bg-gray-800 w-full"
                ></input>
              </div>
            </form>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className="mt-2 ml-3 mb-2 mr-2 p-2 bg-gradient-to-r from-blue-800 to-violet-700 rounded-lg font-bold h-min"
            type="submit"
          >
            SEND MESSAGE
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Chat_Box;