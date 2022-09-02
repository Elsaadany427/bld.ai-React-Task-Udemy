import React from "react";
import Header from "../components/Header/Header";
import Courses from "../components/Courses/Courses";
import Categories from "../components/Categories/Categories";

export default function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <Courses />
        <Categories />
      </div>
    </>
  );
}
