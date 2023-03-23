import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
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

const Sendme_Message = () => {
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
    <div className="flex flex-col text-white mt-2 font-poppins bg-banner-gradient rounded-lg p-2">
      <span className="text-gray-400 font-bold">Send public message</span>
      <form className="flex-col " onSubmit={handleSend}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex rounded-lg bg-gray-900 w-25"
        ></input>
        <label>Message:</label>
        <input
          type="text"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex rounded-lg bg-gray-900 w-25"
        ></input>
        <button
          className="mt-2 p-2 bg-indigo-800 rounded-lg font-bold"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Sendme_Message;
