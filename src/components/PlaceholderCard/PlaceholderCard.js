import React from "react";

export default function PlaceholderCard() {
  return (
    <div className="placeholder-card" aria-hidden="true">
      <img
        src="https://via.placeholder.com/240x135?text=Loading"
        className="placeholder--img-top"
        alt="..."
      />
      <div className="placeholder--body">
        <h5 className="placeholder--title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h5>
        <p className="placeholder--text placeholder-glow">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-4"></span>
        </p>
        <a  className="btn disabled placeholder col-6" aria-label="btn" > </a>
      </div>
    </div>
  );
}
