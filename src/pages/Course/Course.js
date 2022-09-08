import React from "react";
import Header from "./components/Header";
import Learn from "./components/Learn";
import Accordion from "./components/Accordion";

export default function Course() {
  return (
    <>
      <section className="course">
        <Header />
        <div className="content mt-5">
          <Learn />
          <Accordion />
        </div>
      </section>
    </>
  );
}
