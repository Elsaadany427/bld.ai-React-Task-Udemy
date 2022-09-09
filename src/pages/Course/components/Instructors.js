import React, {useState, useContext} from "react";
import "./Instructors.css";
import { CourseContext } from "../../../State/courseContext";

export default function Instructors() {
  const course = useContext(CourseContext);
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="container component-margin instructors">
      <div className="row">
        {
          course.instructors.map((instructor) => (
        
        <div className="col-md-7 mt-4" key={instructor.id}>
          <h2 className="instructors-name"> {instructor.name} </h2>
          <p className="instructors-role">
            { instructor.job }
          </p>
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0 d-flex align-items-center">
              <div className="col-4">
               
                <img
                  src={`${instructor.image}`}
                  className="img-fluid"
                  alt="..."
                />
                
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <span className="ms-3">{instructor.rate} Rating</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fa fa-certificate" aria-hidden="true"></i>
                      <span className="ms-3 mt-1">{instructor.reviews_num} Reviews</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fa fa-users" aria-hidden="true"></i>
                      <span className="ms-3 mt-1">{instructor.students_num} Students</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fa fa-play-circle" aria-hidden="true"></i>
                      <span className="ms-3 mt-1">{instructor.courses_num} Courses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p className="instructors-desc">
            {showMore ? `${instructor.bio.join()}` : `${instructor.bio.join().substring(0, 250)}`}
            <button
              className="btn showMore ps-0 mt-2 d-block"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show less" : "Show more"}{" "}
              <i
                className={`fa fa-arrow-circle-${showMore ? "up" : "down"}`}
                aria-hidden="true"
              ></i>
            </button>
          </p>
        </div>
))}
      </div>
    </div>
  );
}
