import React, { useState, useContext } from "react";
import { CourseContext } from "../../../State/courseContext";
import "./Description.css";

export default function Description() {
  const [showMore, setShowMore] = useState(false);
  const course = useContext(CourseContext);
  const text = course.description.join();
  
  return (
    <div className="container component-margin description">
      <div className="row">
        <div className="col-md-12">
          <h2>Description</h2>
          <p className="description-content">
            {showMore ? text : `${text.substring(0, 250)}`}
            <button
              className="btn showMore ps-0 mt-2 d-block"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show less" : "Show more"}{" "}
              <i className={`fa fa-arrow-circle-${showMore ? 'up': 'down'}`} aria-hidden="true"></i>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
