import { useState, useEffect } from "react";

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
          <h2 className="font-bold bg-gradient-to-r from-blue-800 to-violet-800 w-20 text-center rounded-lg">
            {item.name}
          </h2>
          <p className="inline-flex flex-wrap px-1 mt-1 text-gray-100 py-1">
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg px-2">
              Message: {item.message}
            </span>
          </p>
          <p className="text-xs">
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
    <div className="bg-banner-gradient rounded-lg px-1 ml-5 w-[300px] text-white h-[200px] overflow-y-auto">
      <div className="text-gray-400 font-bold sticky top-0 bg-banner-gradient py-1">
        Message Box
      </div>
      {messageElements}
    </div>
  );
};

export default Message_Box;
