import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import Card from "./components/Card/Card";
import Categories from "./components/Categories/Categories";
import Category from "./components/Category/Category";
import { CardDate } from "./Database/CardData";
import { CategoryData } from "./Database/CategoryData";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Header />
        <Courses>
          {CardDate.map((card) => (
            <Card CardData={card} />
          ))}
        </Courses>
        <Categories>
        {CategoryData.map((categoty) => (
            <Category CategoryDate={categoty} />
          ))}
        </Categories>
      </div>
    </div>
  );
}

export default App;
