import React, { useContext, useEffect, useState } from "react";
import { CourseContext } from "../../../State/courseContext";
import "./NavOverride.css";

export default function NavOverride() {
  const course = useContext(CourseContext);
  const [scroll, setScroll] = useState(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, [window.scrollY]);

  return (
    <div className={`navOverride ${scroll ? "scrolled" : ""}`}>
      <div className="navOverride-title">
        <h3> {course.title}  </h3>
        <span className="navOverride-rate">
          <span className="navOverride-rate-number">{course.starRate}</span>
          <span className="navOverride-rate-stars">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half-o" aria-hidden="true"></i>
          </span>
          <span className="navOverride-rate-total">
            {" "}
            <a href="#w">({course.rate_num} ratings)</a>{" "}
          </span>
          <span className="navOverride-rate-students">
            {course.students} students{" "}
          </span>
        </span>
      </div>
    </div>
  );
}
