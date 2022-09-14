import React, { useContext } from "react";
import { CourseContext } from "../../../State/courseContext";

import "./Header.css";
import Breadcrumb from "./Breadcrumb";

export default function Header(props) {
  const { image } = props.course;
  const course = useContext(CourseContext);

  return (
    <div className="header">
      <div className="container">
        <Breadcrumb />
        <div className="row">
          <div className="d-block d-lg-none col-lg-12">
            <div className="header-img">
              <img src={image} />
              <i className="fa fa-play-circle" aria-hidden="true"></i>
              <p>Preview this course</p>
            </div>
          </div>
          <div className="col-lg-8 col-12">
            <h1 className="mt-3">
              TOTAL {course.title}: Become an Advanced {course.title} Developer
              in 16 days
            </h1>
            <p>
              One REAL {course.title} project per day. From ZERO to Facial
              Recognition. Machine Learning, Data Science, Django, IGU, Games+
            </p>
            <span className="header-rate">
              <span className="header-rate-number">{course.starRate}</span>
              <span className="header-rate-stars">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-half-o" aria-hidden="true"></i>
              </span>
              <span className="header-rate-total">
                {" "}
                <a href="#w">({course.rate_num} ratings)</a>{" "}
              </span>
              <span className="header-rate-students">
                {course.students} students{" "}
              </span>
            </span>
            <p className="header-authers">
              <span> Created by </span>
              <span className="header-authers-name">
                <a href="#2">hatem,</a>
                <a href="#2">hatem,</a>
                <a href="#2">hatem</a>
              </span>
            </p>
            <div className="header-update">
              <span className="me-4 d-block d-md-inline">
                <i
                  className="fa fa-exclamation-circle me-3"
                  aria-hidden="true"
                ></i>
                <span>Last updated {course.update_date.substring(0, 10)}</span>
              </span>
              <span className="me-4 d-block d-md-inline">
                <i className="fa fa-globe me-3"></i>
                <span>{course.content_lang}</span>
              </span>
              <span className="me-4 d-block d-md-inline">
                <i
                  className="fa fa-creative-commons me-3"
                  aria-hidden="true"
                ></i>
                <span>{course.caption_lang} [Auto]</span>
              </span>

              <div className="header-price  d-flex d-lg-none">
                <h1> E£ {course.price}</h1>
                <span className="ms-2 header-price--span"> E£679.99 </span>
                <span className="ms-4"> 71% off </span>
              </div>

              <div className="header-button-group d-flex d-lg-none">
                <button className="header-button--cart btn btn-secondry ">
                  Go To Cart
                </button>
                <button className="header-button--love btn btn-secondry ">
                  <i className="fa fa-heart-o" aria-hidden="true"></i>
                </button>
              </div>

              <div className="header-links d-flex d-lg-none">
                <a href="#w">Share</a>
                <a href="#w">Gift this course</a>
                <a href="#w">Apply Coupon</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
