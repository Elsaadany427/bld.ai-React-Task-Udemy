import React from "react";
import "./Breadcrumb.css";
export default function Breadcrumb() {
  return (
    <div className="row">
      <div className="col-md-12">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a >Home</a>
            </li>
            <li className="breadcrumb-item">
              <a >Library</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Data
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
