import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Header />

        <Courses />
      </div>
    </div>
  );
}

export default App;
