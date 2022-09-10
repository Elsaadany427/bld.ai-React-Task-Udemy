import React, { useContext } from "react";
import "./Card.css";
import { CourseContext } from "../../../State/courseContext";

export default function Card() {
const course = useContext(CourseContext);
  return (
    <div className="single-card">
      <div className="single-card-img">
        <img src={course.image}/>
        <i className="fa fa-play-circle" aria-hidden="true"></i>
        <p>Preview this course</p>
      </div>
    </div>
  );
}
