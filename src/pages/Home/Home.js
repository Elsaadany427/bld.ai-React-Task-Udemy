import React from "react";
import {Header, Courses, Categories}  from '../../components/index' 

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
