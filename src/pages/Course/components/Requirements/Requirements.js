import React, { useContext } from "react";
import { CourseContext } from "../../../../Context/courseContext";
import "./Requirements.css";

export default function Requirements() {
  const course = useContext(CourseContext);
  return (
    <div className="container component-margin requirements">
      <div className="row">
        <div className="col-md-7">
          <h2 className="requirements-title"> Requirements </h2>
          <ul className="requirements-list">
            {course.requirements.body.map((item) => (
              <li className="mb-3" key={item.id}>
                {" "}
                <i className="fa fa-circle me-4" aria-hidden="true"></i>{" "}
                {item.item}{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
