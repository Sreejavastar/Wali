import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import NewPage from "./components/newpage"; // Import NewPage component
import Service1 from "./components/service1"; // Import NewPage component
import Chatbot from "./components/CHATBOT/chatbot"; // Import NewPage component
import CreateAccount from "./components/CreateAccount";
import Transaction from "./components/transaction"; // Import NewPage component
import Policy from "./components/Policy";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/newpage" element={<NewPage />} />{" "}
        {/* Define the route for NewPage */}
        <Route path="/service1" element={<Service1 />} />{" "}
        {/* Define the route for NewPage */}
        <Route path="/createaccount" element={<CreateAccount />}></Route>
        {/* Define the route for Create Account */}
        <Route path="/chatbot" element={<Chatbot/>} />{" "}
        {/* Define the route for NewPage */}
        <Route path="/transaction" element={<Transaction/>} />{" "}
        {/* Define the route for NewPage */}
        <Route path="/Policy" element={<Policy/>} />{" "}
        {/* Define the route for NewPage */}
      </Routes>
    </Router>
  );
}

export default App;
