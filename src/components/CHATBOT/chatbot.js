import React, {useState} from "react";
import Message from "./Message";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (text) => {
    const userMessage = {text, sender: "user"};
    setMessages([...messages, userMessage]);
    try {
      const response = await fetch("http://localhost:5000/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({question: text}),
      });

      if (response.ok) {
        const data = await response.json();
        const botMessage = {text: data.response.result, sender: "bot"}; // Update this line
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else {
        console.error("Failed to receive bot response");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
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
