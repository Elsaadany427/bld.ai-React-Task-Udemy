import React from "react";
import "./Feedback.css";

export default function Feedback() {
  return (
    <div className="container component-margin feedback">
      <div className="row">
        <div className="col-md-7">
          <div className="row d-flex align-items-center">
            <div className="feedback-title">
              <h2>Student feedback</h2>
            </div>
            <div className="col-md-2">
              <div className="feedback-rate">
                <h1> 4.4 </h1>
                <span>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-half-o" aria-hidden="true"></i>
                </span>
                <div>
                  <span> Course Rating</span>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="feedback-progress">
                <div className="feedback-progress-bar">
                  <div className="row d-flex align-items-center" style={{width: "100%"}} >
                    <div className="col-md-6 col-lg-8 col-6">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-6">
                      <span>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="feedback-progress-bar">
                  <div className="row  d-flex align-items-center" style={{width: "100%"}} >
                    <div className="col-md-6 col-lg-8 col-6">
                      <div className="progress">
                        <div
                         className="progress-bar"
                         role="progressbar"
                         aria-label="Basic example"
                         style={{ width: "25%" }}
                         aria-valuenow="25"
                         aria-valuemin="0"
                         aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-6">
                      <span>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                </div>


                <div className="feedback-progress-bar">
                  <div className="row  d-flex align-items-center" style={{width: "100%"}} >
                    <div className="col-md-6 col-lg-8 col-6">
                      <div className="progress">
                        <div
                        className="progress-bar"
                        role="progressbar"
                        aria-label="Basic example"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-6">
                      <span>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                </div>


                <div className="feedback-progress-bar">
                  <div className="row  d-flex align-items-center" style={{width: "100%"}} >
                    <div className="col-md-6 col-lg-8 col-6">
                      <div className="progress">
                        <div
                        className="progress-bar"
                        role="progressbar"
                        aria-label="Basic example"
                        style={{ width: "100%" }}
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-6">
                      <span>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
