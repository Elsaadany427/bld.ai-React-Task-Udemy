import React from "react";
import { useLocation } from "react-router-dom";
import { CourseProvider } from "../../Context/courseContext";
import {
  Header,
  Learn,
  Accordion,
  Requirements,
  Description,
  Instructors,
  Feedback,
  Review,
  Card,
  NavOverride,
} from "./components/index";

export default function Course() {
  const location = useLocation();
  const course = location.state;

  return (
    <>
      <CourseProvider value={course}>
        <NavOverride />
        <section className="course">
          <Header course={course} />
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
