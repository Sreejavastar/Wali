import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import LoginPage from './components/LoginPage';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/login" component={LoginPage} />
    //     {/* <Route path="/main" component={MainPage} />
    //     <Route path="/option1" component={Option1Page} />
    //     <Route path="/option2" component={Option2Page} />
    //     <Route path="/option3" component={Option3Page} /> */}
    //   </  Routes>
    // </Router>
    <div>
    <LoginPage/>
   
    </div>
  );
    
}

export default App;
