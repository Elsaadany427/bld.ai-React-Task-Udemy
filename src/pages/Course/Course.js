import React from "react";
import Header from "./components/Header";
import Learn from "./components/Learn";
import Accordion from "./components/Accordion";
import Requirements from "./components/Requirements";
import Description from "./components/Description";
import Instructors from "./components/Instructors";
import Feedback from "./components/Feedback";
import Review from "./components/Review";

export default function Course() {
  return (
    <>
      <section className="course">
        <Header />
        <div className="content mt-5">
          <Learn />
          <Accordion />
          <Requirements />
          <Description />
          <Instructors />
          <Feedback />
          <Review />
        </div>
      </section>
    </>
  );
}
