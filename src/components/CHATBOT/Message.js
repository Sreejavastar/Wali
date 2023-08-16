// src/components/Message.js
import React from 'react';
import "./Chatbot.css";

const Message = ({ message }) => {
  return (
    <div className={`message ${message.sender}`}>
      <span>{message.text}</span>
    </div>
  );
};

export default Message;
