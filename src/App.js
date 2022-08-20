import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Header />
        <Courses>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Courses>
      </div>
    </div>
  );
}

export default App;
