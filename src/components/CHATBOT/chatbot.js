// src/components/Chatbot.js
import React, {useState} from "react";
import Message from "./Message";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text) => {
    const userMessage = {text, sender: "user"};
    setMessages([...messages, userMessage]);

    // Simulate bot response after a delay
    setTimeout(() => {
      const botMessage = {text: "This is a bot response.", sender: "bot"};
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };
  

  return (
    <div className="parent-chat">
      <h5>Hi this is Wall-E!</h5>
      <div className="chatbot">
        <div className="message-container">
          {messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage(e.target.value);
              e.target.value = "";
            }
          }}
        />
      </div>
    </div>
  );
};

export default Chatbot;
