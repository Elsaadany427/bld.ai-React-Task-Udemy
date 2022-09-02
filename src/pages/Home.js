import React from "react";
import Header from "../components/Header/Header";
import Courses from "../components/Courses/Courses";

export default function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <Courses />
      </div>
    </>
  );
}
