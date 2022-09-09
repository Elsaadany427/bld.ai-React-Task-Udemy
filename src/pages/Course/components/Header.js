import React, { useContext } from "react";
import "./Header.css";
import Breadcrumb from "./Breadcrumb";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <Breadcrumb />
        <div className="row">
          <div className="col-md-8">
            <h1>
              TOTAL Python: Become an Advanced Python Developer in 16 days
            </h1>
            <p>
              One REAL Python project per day. From ZERO to Facial Recognition.
              Machine Learning, Data Science, Django, IGU, Games+
            </p>
            <span className="header-rate">
              <span className="header-rate-number">4.7</span>
              <span className="header-rate-stars">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-half-o" aria-hidden="true"></i>
              </span>
              <span className="header-rate-total">
                {" "}
                <a href="#w">(1,312 ratings)</a>{" "}
              </span>
              <span className="header-rate-students">17,385 students </span>
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
                <span>Last updated 9/2022</span>
              </span>
              <span className="me-4 d-block d-md-inline">
                <i className="fa fa-globe me-3"></i>
                <span>English</span>
              </span>
              <span className="me-4 d-block d-md-inline">
                <i
                  className="fa fa-creative-commons me-3"
                  aria-hidden="true"
                ></i>
                <span>English [Auto]</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
