import React from "react";
import Header from "./components/Header";
import Learn from "./components/Learn";
import Accordion from "./components/Accordion";
import Requirements from "./components/Requirements";
import Description from "./components/Description";
import Instructors from "./components/Instructors";
import Feedback from "./components/Feedback";
import Review from "./components/Review";
import Card from "./components/Card";
import { useLocation } from "react-router-dom";
import { CourseProvider } from "../../State/courseContext";

export default function Course() {
  const location = useLocation();
  const course = location.state;

  return (
    <>
      <CourseProvider value={course}>
        <section className="course">
          <Header course={course}/>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="content mt-5">
                  <Learn />
                  <Accordion />
                  <Requirements />
                  <Description />
                  <Instructors />
                  <Feedback />
                  <Review />
                </div>
              </div>
              <div className="col-lg-4">
                <Card />
              </div>
            </div>
          </div>
        </section>
      </CourseProvider>
    </>
  );
}
