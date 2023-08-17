import React, {useState} from "react";
import Message from "./Message";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [utterance, setUtterance] = useState(null);
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
        const synth = window.speechSynthesis;
        const data = await response.json();
        const botText = data.response.result;
        const botMessage = {text: botText, sender: "bot"};
        const u = new SpeechSynthesisUtterance(botText);
        setUtterance(u);
        synth.speak(u); // Pass the 'u' utterance object to the 'speak' method
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
