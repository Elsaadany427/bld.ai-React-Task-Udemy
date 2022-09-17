import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

// App css
import "./App.css";
// React imports
import React from "react";
// Components
import {Navbar} from "./components/index";
import {Home, Course} from "./pages/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/course/:courseId" element={<Course />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
