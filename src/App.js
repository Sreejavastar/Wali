import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import NewPage from "./components/newpage"; // Import NewPage component
import Service1 from "./components/service1"; // Import NewPage component
import Chatbot from "./components/CHATBOT/chatbot"; // Import NewPage component
import Transaction from "./components/transaction"; // Import NewPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/newpage" element={<NewPage />} />{" "}
        {/* Define the route for NewPage */}
        <Route path="/service1" element={<Service1 />} />{" "}
        {/* Define the route for NewPage */}
        <Route path="/chatbot" element={<Chatbot/>} />{" "}
        {/* Define the route for NewPage */}
        <Route path="/chatbot" element={<Transaction/>} />{" "}
        {/* Define the route for NewPage */}
      </Routes>
    </Router>
  );
}

export default App;
