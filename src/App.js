import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

// App css
import "./App.css";
// React imports
import React from "react";
// Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Course from "./pages/Course";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/courses" element={<Course />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
