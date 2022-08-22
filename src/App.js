// App css
import "./App.css";
// React imports
import React from "react";
// Components
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import Categories from "./components/Categories/Categories";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Header />
        <Courses>
        </Courses>
        <Categories>
        </Categories>
      </div>
    </div>
  );
}

export default App;
