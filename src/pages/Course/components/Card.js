import React, { useContext, useEffect, useState } from "react";
import "./Card.css";
import { CourseContext } from "../../../State/courseContext";

export default function Card() {
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

  const course = useContext(CourseContext);
  return (
    <div className="single-card-content">
      <div className={`single-card ${scroll ? "scrolled" : ""}`}>
        <div className="single-card-img">
          <img src={course.image} />
          <i className="fa fa-play-circle" aria-hidden="true"></i>
          <p>Preview this course</p>
        </div>
        <div className="single-card-body">
          <div className="single-card-price">
            <h1> E£ {course.price}</h1>
            <span className="ms-2 single-card-price--span"> E£679.99 </span>
            <span className="ms-4"> 71% off </span>
          </div>
          <div className="single-card-clock">
            <i className="fa fa-clock-o me-3" aria-hidden="true"></i>
            <span> 5 hours left at this price! </span>
          </div>
          <div className="single-card-button mb-4">
            <div className="single-card-button-group">
              <button className="single-card-button--cart btn btn-secondry ">
                Go To Cart
              </button>
              <button className="single-card-button--love btn btn-secondry ">
                <i className="fa fa-heart-o" aria-hidden="true"></i>
              </button>
            </div>
            <div>
              <button className="single-card-button--buy btn btn-secondry ">
                By now
              </button>
            </div>
          </div>
          <div className="single-card-note text-center mb-5">
            <span> 30-Day Money-Back Guarantee </span>
          </div>
          <div className="signle-card-include">
            <h4 className="mb-3">This course includes:</h4>
            <ul className="single-card-include-list">
              <li>
                <i className="fa fa-youtube-play me-3 mb-3" aria-hidden="true"></i>
                <span> {course.includes.total_time_estimate} </span>
              </li>
              <li>
                <i className="fa fa-file-o me-3 mb-3" aria-hidden="true"></i>{" "}
                <span> {course.includes.articles_num} </span>
              </li>
              <li>
                <i className="fa fa-download me-3 mb-3" aria-hidden="true"></i>{" "}
                <span> {course.includes.featues} </span>
              </li>
            </ul>
            <div className="single-card-links">
              <a >Share</a>
              <a >Gift this course</a>
              <a >Apply Coupon</a>
            </div>
            <hr className="my-5" />
            <div className="single-card-training">
              <h3> Training 5 or more people? </h3>
              <span>
                Get your team access to 17,000+ top Udemy courses anytime,
                anywhere.
              </span>
              <button className="single-card-button--business btn btn-secondry">
                Try Udemy Business
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
