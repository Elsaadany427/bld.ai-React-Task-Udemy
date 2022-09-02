// App css
import "./App.css";
// React imports
import React from "react";
// Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
