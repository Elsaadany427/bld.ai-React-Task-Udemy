import React from "react";

export default function Card() {
  return (
      <div className="course-card">
        <div className="card-img">
          <img src={require("../../assets/courses/python.jpg")} alt="python course" />
        </div>
        <h3>
          <a href="#h">Learn Python: The Complete Python Programming Course</a>
        </h3>
        <div>
          <span> Avinash Jain, The Codex </span>
        </div>
        <div className="card-stars-container">
          <span>
            <span>4.4</span>
            <span className="card-stars">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </span>
            <span>(1.247)</span>
          </span>
        </div>
        <div className="card-price">
          <span> E£679.99 </span>
        </div>
      </div>
  );
}
