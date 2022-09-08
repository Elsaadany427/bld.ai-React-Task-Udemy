import React from "react";
import "./Requirements.css";

export default function Requirements() {
  return (
    <div className="container component-margin requirements">
      <div className="row">
        <div className="col-md-7">
            <h2 className="requirements-title"> Requirements </h2>
            <ul className="requirements-list">
                <li className="mb-3"> <i className="fa fa-circle me-4" aria-hidden="true"></i> Macintosh (OSX)/ Windows(Vista and higher) Machine </li>
                <li className="mb-3"> <i className="fa fa-circle me-4" aria-hidden="true"></i> Internet Connection </li>
            </ul>
        </div>
      </div>
    </div>
  );
}
