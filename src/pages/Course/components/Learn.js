import React from "react";
import "./Learn.css";

export default function Learn() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <div className="learn">
            <h2 className="learn-title mb-4">What you'll learn</h2>
            <ul className="learn-list">
              <li>
                <div className="learn-list-main-div">
                  <i className="fa fa-check me-4" aria-hidden="true"></i>
                  <div>
                    <span>You will master professional Python programming</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="learn-list-main-div">
                  <i className="fa fa-check me-4" aria-hidden="true"></i>
                  <div>
                    <span>You will master professional Python programming</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="learn-list-main-div">
                  <i className="fa fa-check me-4" aria-hidden="true"></i>
                  <div>
                    <span>You will master professional Python programming</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
