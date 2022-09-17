import React, { useContext } from "react";
import { CourseContext } from "../../../../Context/courseContext";
import "./Learn.css";

export default function Learn() {
  const course = useContext(CourseContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="learn">
            <h2 className="learn-title mb-4">What you'll learn</h2>
            <ul className="learn-list">
              {course.what_learn.map((learn, index) => (
                <li key={index}>
                  <div className="learn-list-main-div">
                    <i className="fa fa-check me-4" aria-hidden="true"></i>
                    <div>
                      <span>{learn}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
