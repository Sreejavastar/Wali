// src/components/Chatbot.js
import React, { useState } from 'react';
import Message from './Message';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text) => {
    setMessages([...messages, { text, sender: 'user' }]);
    // Implement bot response logic here
    
    // Simulate bot response after a delay
    setTimeout(() => {
      setMessages([...messages, { text: 'This is a bot response.', sender: 'bot' }]);
    }, 1000);
  };


  return (
    <div className="parent-chat">
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
          if (e.key === 'Enter') {
            handleSendMessage(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </div>
    </div>
  );
};

export default Chatbot;
